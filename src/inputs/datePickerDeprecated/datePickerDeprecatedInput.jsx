import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import DatePickerUtils from '../../utils/datePickerUtils';
import DateUtils from '../../utils/dateUtils';
import Grid from '../../layout/grid';
import Icon from '../../dataDisplay/icon';
import Input from '../input';

const propTypes = {
    className: PropTypes.string,
    date: PropTypes.shape({}),
    dateEnd: PropTypes.shape({}),
    dateFormat: PropTypes.string,
    dateSecondaryEnd: PropTypes.shape({}),
    dateSecondaryStart: PropTypes.shape({}),
    dateStart: PropTypes.shape({}),
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    hasValue: PropTypes.func.isRequired,
    id: PropTypes.string,
    includeDates: PropTypes.array,
    locale: PropTypes.string,
    maxDate: PropTypes.shape({}),
    minDate: PropTypes.shape({}),
    mode: PropTypes.string,
    onBlur: PropTypes.func,
    onClick: PropTypes.func,
    onDone: PropTypes.func,
    onFocus: PropTypes.func,
    onSelect: PropTypes.func,
    open: PropTypes.bool,
    required: PropTypes.bool,
    tabIndex: PropTypes.number,
    type: PropTypes.string,
    uxMode: PropTypes.string,
};

class DatePickerInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hasAnError: false,
            listensForErrors: !_.isUndefined(props.required),
            maybeDate: this.safeDateFormat(props.date, props.locale),
            maybeDateRange: {
                dateEnd: this.safeDateFormat(props.dateEnd, props.locale),
                dateSecondaryEnd: this.safeDateFormat(props.dateSecondaryEnd, props.locale),
                dateSecondaryStart: this.safeDateFormat(props.dateSecondaryStart, props.locale),
                dateStart: this.safeDateFormat(props.dateStart, props.locale),
            },
        };

        this.onErrorRef = this.onError.bind(this);
        this._dateFormats = this.getAllowedDateFormats('MM/DD/YYYY');

        this.onBlur = this.onBlur.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    componentDidMount() {
        if (this.state.listensForErrors) {
            ParsleyFormStore.addChangeListener(this.onErrorRef);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const { date, dateStart, dateEnd, dateSecondaryStart, dateSecondaryEnd, locale } = this.props;

        if (!DatePickerUtils.isSameDay(date, prevProps.date) ||
            !DatePickerUtils.isSameDay(dateStart, prevProps.dateStart) ||
            !DatePickerUtils.isSameDay(dateEnd, prevProps.dateEnd) ||
            !DatePickerUtils.isSameDay(dateSecondaryStart, prevProps.dateSecondaryStart) ||
            !DatePickerUtils.isSameDay(dateSecondaryEnd, prevProps.dateSecondaryEnd) ||
            !_.isEqual(locale, prevProps.locale)
        ) {
            this.setState({
                maybeDate: this.safeDateFormat(date, locale),
                maybeDateRange: {
                    dateEnd: this.safeDateFormat(dateEnd, locale),
                    dateSecondaryEnd: this.safeDateFormat(dateSecondaryEnd, locale),
                    dateSecondaryStart: this.safeDateFormat(dateSecondaryStart, locale),
                    dateStart: this.safeDateFormat(dateStart, locale),
                },
            });
        }
    }

    componentWillUnmount() {
        if (this.state.listensForErrors) {
            ParsleyFormStore.removeChangeListener(this.onErrorRef);
        }
    }

    onBlur(value) {
        const { date, dateEnd, dateStart, locale, type } = this.props;
        const isSingleDateOrServicePeriod = type === 'singleDate' || type === 'servicePeriod';
        const isDateRange = type === 'dateRange';

        if (!_.isUndefined(this.props.onBlur)) {
            this.props.onBlur(event);
        }

        this.props.hasValue(value);

        this.setState({
            maybeDate: isSingleDateOrServicePeriod ? this.safeDateFormat(date, locale) : this.state.maybeDate,
            maybeDateRange: isDateRange ? {
                dateEnd: this.safeDateFormat(dateEnd, locale),
                dateStart: this.safeDateFormat(dateStart, locale),
            } : this.state.maybeDateRange,
        });
    }

    onChange(dateType, value) {
        const { type, locale, uxMode } = this.props;
        const newLocale = locale || moment.locale();

        if (uxMode === 'input' && type === 'dateRange') {
            const datesArray = value ? value.split('-') : '';

            if (value !== '' && value !== '__/__/____ - __/__/____') {
                _.map(datesArray, (date, index) => {
                    const newDate = moment(date.trim(), this._dateFormats, newLocale, true);
                    const dateType = index === 0 ? 'dateStart' : index === 1 ? 'dateEnd' : null;

                    if (newDate.isValid() &&
                        (!DatePickerUtils.isDayDisabled(newDate, this.props) &&
                        (index === 0 && !DatePickerUtils.isSameDay(this.props.dateStart, newDate)) ||
                        (index === 1 && !DatePickerUtils.isSameDay(this.props.dateEnd, newDate)))
                    ) {
                        this.props.onSelect(newDate, dateType);
                    }
                });
            } else {
                this.props.onSelect(null, null, true);
            }

            this.setState({
                maybeDateRange: {
                    dateEnd: value ? datesArray[1].trim() : '',
                    dateStart: value ? datesArray[0].trim() : '',
                },
            });
        } else if (uxMode === 'calendar' || uxMode === 'input' && type === 'singleDate') {
            const date = moment(value, this._dateFormats, newLocale, true);

            if (date.isValid() && !DatePickerUtils.isDayDisabled(date, this.props)) {
                this.props.onSelect(date);
            } else if (value === '' || value === '__/__/____') {
                this.props.onSelect(null, null, true);
            }

            if (uxMode === 'input') {
                this.setState({ maybeDate: value });
            }

            if (uxMode === 'calendar') {
                this.setState({
                    maybeDateRange: {
                        dateEnd: dateType === 'dateEnd' ? value : this.state.maybeDateRange.dateEnd,
                        dateStart: dateType === 'dateStart' ? value : this.state.maybeDateRange.dateStart,
                    },
                });
            }
        }

        this.props.hasValue(value);
    }

    onClick(dateField) {
        if (_.isFunction(this.props.onClick)) {
            this.props.onClick();
        }
    }

    onError() {
        this.setState({ 'hasAnError': ParsleyFormStore.inputHasError(this.props.id) });
    }

    onFocus() {
        if (_.isFunction(this.props.onFocus)) {
            this.props.onFocus();
        }
    }

    onKeyDown(event) {
        if (event.keyCode === 9 || event.keyCode === 13) {
            this.props.onDone();
        }
    }

    getAllowedDateFormats(specifiedFormat) {
        const formats = DateUtils.getAllowedDateFormats();

        if (_.indexOf(formats, specifiedFormat) < 0) {
            formats.unshift(specifiedFormat);
        }

        return formats;
    }

    safeDateFormat(date, locale) {
        if (date && date.isValid()) {
            return date.clone().locale(locale || moment.locale()).format('MM/DD/YYYY');
        }

        if (_.isNull(date)) {
            return null;
        }
    }

    render() {
        const { className, open, type, uxMode } = this.props;
        const disabled = this.props.disabled ||
            type === 'servicePeriod' ||
            type === 'servicePeriodRangeEnd' ||
            type === 'servicePeriodRangeStart';
        const containerClasses = ClassNames('date-picker-deprecated-input', {
            'date-picker-input-disabled': disabled,
            'date-picker-input-type-date-range': type === 'dateRange',
            'date-picker-input-type-service-period': type === 'servicePeriod',
            'date-picker-input-type-service-period-range': type === 'servicePeriodRange',
            'date-picker-input-type-single-date': type === 'singleDate',
            'ignore-react-onclickoutside': open,
        }, className);
        let mask, placeholder, value;

        if (uxMode === 'input' &&
            type === 'dateRange' ||
            type === 'servicePeriod' ||
            type === 'servicePeriodRangeEnd' ||
            type === 'servicePeriodRangeStart'
        ) {
            mask = [
                /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,
                ' ', '-', ' ',
                /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,
            ];
            placeholder = 'mm/dd/yyyy - mm/dd/yyyy';

            if (type === 'servicePeriodRangeEnd') {
                value = `${this.state.maybeDateRange.dateSecondaryStart} - ${this.state.maybeDateRange.dateSecondaryEnd}`;
            } else {
                value = `${this.state.maybeDateRange.dateStart} - ${this.state.maybeDateRange.dateEnd}`;
            }
        } else {
            mask = [
                /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/,
            ];
            placeholder = 'mm/dd/yyyy';
            value = this.state.maybeDate;
        }

        if (uxMode === 'input') {
            return (
                <Input
                    autoComplete="off"
                    className={containerClasses}
                    data-parsley-error-message={this.props.errorMessage}
                    disabled={disabled}
                    guide={true}
                    icon={(
                        <Icon
                            color={open ? 'highlight' : null}
                            compact={true}
                            onClick={this.onClick}
                            type="calendar"
                        />
                    )}
                    id={this.props.id}
                    keepCharPositions
                    mask={mask}
                    onBlur={this.onBlur}
                    onChange={this.onChange.bind(this, 'date')}
                    onClick={this.onClick}
                    onFocus={this.onFocus}
                    onKeyDown={this.onKeyDown}
                    placeholder={placeholder}
                    ref="input"
                    required={this.props.required}
                    tabIndex={this.props.tabIndex}
                    type="text"
                    value={value}
                />
            );
        } else if (uxMode === 'calendar') {
            return (
                <div
                    style={{
                        margin: '7px 0 5px',
                    }}
                >
                    <Grid
                        spacing={2}
                    >
                        <Grid.Column>
                            <Input
                                autoComplete="off"
                                className={containerClasses}
                                data-parsley-error-message={this.props.errorMessage}
                                disabled={disabled}
                                guide={true}
                                id={this.props.id}
                                keepCharPositions={true}
                                label="From"
                                mask={mask}
                                onBlur={this.onBlur}
                                onChange={this.onChange.bind(this, 'dateStart')}
                                onClick={this.onClick}
                                onFocus={this.onFocus}
                                placeholder={placeholder}
                                ref="inputStart"
                                required={this.props.required}
                                tabIndex={this.props.tabIndex}
                                type="text"
                                value={this.state.maybeDateRange.dateStart}
                            />
                        </Grid.Column>

                        <Grid.Column>
                            <Input
                                autoComplete="off"
                                className={containerClasses}
                                data-parsley-error-message={this.props.errorMessage}
                                disabled={disabled}
                                guide={true}
                                id={this.props.id}
                                keepCharPositions={true}
                                label="To"
                                mask={mask}
                                onBlur={this.onBlur}
                                onChange={this.onChange.bind(this, 'dateEnd')}
                                onClick={this.onClick}
                                onFocus={this.onFocus}
                                placeholder={placeholder}
                                ref="inputEnd"
                                required={this.props.required}
                                tabIndex={this.props.tabIndex}
                                type="text"
                                value={this.state.maybeDateRange.dateEnd}
                            />
                        </Grid.Column>
                    </Grid>
                </div>
            );
        }
    }
}

DatePickerInput.propTypes = propTypes;

export default DatePickerInput;
