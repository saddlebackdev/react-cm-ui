
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import TetherComponent from 'react-tether';
import Icon from '../elements/icon';
import DateUtils from '../global/utils/dateUtils';
import DatePickerUtils from '../global/utils/datePickerUtils';
import Input from '../elements/input';
import DatePickerCalendar from './datePickerCalendar';

class Calendar extends React.PureComponent {
    render() {
        return <DatePickerCalendar {...this.props} />;
    }

    handleClickOutside(event) {
        const { onClose } = this.props;

        onClose(event);
    }
}

const CalendarOnClickOutside = onClickOutside(Calendar);

class DatePickerInput extends React.PureComponent {
    constructor(props) {
        super(props);

        const isDateRange = props.rangeFrom || props.rangeTo;
        const newDate = isDateRange ? undefined : props.date;
        const newDateFrom = !isDateRange ? undefined : props.dateFrom;
        const newDateTo = !isDateRange ? undefined : props.dateTo;

        let inputValue;

        if (props.rangeFrom) {
            inputValue = this._safeDateFormat(newDateFrom, props.locale);
        } else if (props.rangeTo) {
            inputValue = this._safeDateFormat(newDateTo, props.locale);
        } else {
            inputValue = this._safeDateFormat(newDate, props.locale);
        }

        this.state = {
            date: newDate,
            dateFrom: newDateFrom,
            dateTo: newDateTo,
            isCalendarOpen: false,
            inputValue,
        };

        this._dateFormats = this._getAllowedDateFormats('MM/DD/YYYY');

        this._getMaxDate = this._getMaxDate.bind(this);
        this._getMinDate = this._getMinDate.bind(this);
        this._onCalendarChange = this._onCalendarChange.bind(this);
        this._onCalendarClickOutside = this._onCalendarClickOutside.bind(this);
        this._onIconClick = this._onIconClick.bind(this);
        this._onInputBlur = this._onInputBlur.bind(this);
        this._onInputChange = this._onInputChange.bind(this);
        this._onInputFocus = this._onInputFocus.bind(this);
        this._onInputKeyDown = this._onInputKeyDown.bind(this);
        this._onMonthChange = this._onMonthChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            date, dateFrom, dateTo, locale, rangeFrom, rangeTo,
        } = this.props;

        if (!DatePickerUtils.isSameDay(date, prevProps.date) ||
            !DatePickerUtils.isSameDay(dateFrom, prevProps.dateFrom) ||
            !DatePickerUtils.isSameDay(dateTo, prevProps.dateTo) ||
            !_.isEqual(locale, prevProps.locale)
        ) {
            const isDateRange = rangeFrom || rangeTo;
            const newDate = isDateRange ? undefined : date;
            const newDateFrom = !isDateRange ? undefined : dateFrom;
            const newDateTo = !isDateRange ? undefined : dateTo;
            let newInputValue;

            if (rangeFrom) {
                newInputValue = this._safeDateFormat(newDateFrom, locale);
            } else if (rangeTo) {
                newInputValue = this._safeDateFormat(newDateTo, locale);
            } else {
                newInputValue = this._safeDateFormat(newDate, locale);
            }

            this.setState({
                date: newDate,
                dateFrom: newDateFrom,
                dateTo: newDateTo,
                inputValue: newInputValue,
            });
        }
    }

    render() {
        const {
            className,
            errorMessage,
            disabled,
            events,
            excludeDates,
            filterDates,
            id,
            includeDates,
            label,
            locale,
            rangeFrom,
            rangeTo,
            required,
            style,
            tabIndex,
        } = this.props;
        const {
            date, dateFrom, dateTo, isCalendarOpen, inputValue,
        } = this.state;
        const containerClasses = ClassNames('ui', 'date-picker-input', className);

        return (
            <div className={containerClasses} id={id} style={style}>
                <TetherComponent
                    attachment="top left"
                    classPrefix="date-picker-tether"
                    constraints={[{
                        to: 'window',
                        attachment: 'together',
                    }]}
                    renderElement={(ref) => isCalendarOpen && (
                        <div ref={ref}>
                            <CalendarOnClickOutside
                                controls="dropdowns"
                                date={date}
                                dateFrom={dateFrom}
                                dateTo={dateTo}
                                events={events}
                                excludeDates={excludeDates}
                                filterDates={filterDates}
                                includeDates={includeDates}
                                locale={locale}
                                maxDate={this._getMaxDate()}
                                minDate={this._getMinDate()}
                                mode="input"
                                onChange={this._onCalendarChange}
                                onClose={this._onCalendarClickOutside}
                                onMonthChange={this._onMonthChange}
                                rangeFrom={rangeFrom}
                                rangeTo={rangeTo}
                            />
                        </div>
                    )}
                    renderTarget={(ref) => (
                        <div ref={ref}>
                            <Input
                                autoComplete="off"
                                data-parsley-error-message={errorMessage}
                                disabled={disabled}
                                guide
                                icon={(
                                    <Icon
                                        color={isCalendarOpen ? 'highlight' : disabled ? 'primary' : null}
                                        compact
                                        disable={disabled}
                                        onClick={this._onIconClick}
                                        type="calendar"
                                    />
                                )}
                                keepCharPositions
                                label={label}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                onBlur={this._onInputBlur}
                                onChange={this._onInputChange}
                                onFocus={this._onInputFocus}
                                onKeyDown={this._onInputKeyDown}
                                placeholder="mm/dd/yyyy"
                                required={required}
                                ref={(ref) => this._datePickerInput = ref}
                                tabIndex={tabIndex}
                                type="text"
                                value={inputValue}
                            />
                        </div>
                    )}
                    targetAttachment="bottom left"
                    targetOffset="11px 0"
                />
            </div>
        );
    }

    componentDidMount() {
        const { onChange, rangeFrom, rangeTo } = this.props;

        if ((rangeFrom || rangeTo) && _.isUndefined(onChange)) {
            console.error('The onChange prop is required when using the rangeFrom or rangeTo props');
        }
    }

    _getAllowedDateFormats(specifiedFormat) {
        let formats = DateUtils.getAllowedDateFormats();

        if (_.indexOf(formats, specifiedFormat) < 0) {
            formats = [specifiedFormat, ...formats];
        }

        return formats;
    }

    _getMaxDate() {
        const { maxDate } = this.props;

        return maxDate;
    }

    _getMinDate() {
        const { minDate } = this.props;

        return minDate;
    }

    _onCalendarChange({ date, dateFrom, dateTo }) {
        const { disabled, onChange } = this.props;

        if (!disabled && !_.isUndefined(onChange)) {
            onChange({ date, dateFrom, dateTo });
        } else if (!disabled) {
            const { locale } = this.props;

            this.setState({
                date,
                inputValue: this._safeDateFormat(date, locale),
            });
        }

        this._setOpen(false);
    }

    _onCalendarClickOutside(event) {
        this._setOpen(false);
    }

    _onIconClick() {
        const { disabled } = this.props;

        if (!disabled) {
            ReactDOM.findDOMNode(this._datePickerInput._input).focus();
        }
    }

    _onInputBlur(event) {
        const { onBlur } = this.props;

        if (!_.isUndefined(onBlur)) {
            onBlur(event);
        }
    }

    _onInputChange(value) {
        const {
            disabled, locale, rangeFrom, rangeTo,
        } = this.props;
        const { dateFrom, dateTo } = this.state;
        const date = moment(value, this._dateFormats, locale || moment.locale(), true);

        const isValidValueChange = !disabled &&
            date.isValid() &&
            !DatePickerUtils.isDayDisabled(date, this.props);

        const isValidUpdateToNull = !isValidValueChange &&
            !disabled &&
            value === '' || value === '__/__/____';

        const onChangeParam = {};
        const updatedDateValue = isValidValueChange ? date : null;

        if (rangeFrom) {
            onChangeParam.dateFrom = updatedDateValue;
            onChangeParam.dateTo = dateTo;
        } else if (rangeTo) {
            onChangeParam.dateFrom = dateFrom;
            onChangeParam.dateTo = updatedDateValue;
        } else {
            onChangeParam.date = updatedDateValue;
        }

        if (isValidValueChange || isValidUpdateToNull) {
            this._onCalendarChange(onChangeParam);
        }
    }

    _onInputFocus() {
        this._setOpen(true);
    }

    _onInputKeyDown(event) {
        if (event.keyCode === 9 || event.keyCode === 13) {
            this._setOpen(false);
        }
    }

    _onMonthChange(month, year) {
        const { onMonthChange } = this.props;

        if (!_.isUndefined(onMonthChange)) {
            onMonthChange(month, year);
        }
    }

    _safeDateFormat(date, locale) {
        if (date && date.isValid()) {
            return date.clone().locale(locale || moment.locale()).format('MM/DD/YYYY');
        }

        if (_.isNil(date)) {
            return '';
        }
    }

    _setOpen(open) {
        this.setState({ isCalendarOpen: open });
    }
}

DatePickerInput.defaultProps = {
    controls: 'dropdowns',
    disabled: false,
    locale: 'en-US',
    rangeFrom: false,
    rangeTo: false,
    required: false,
};

DatePickerInput.propTypes = {
    className: PropTypes.string,
    controls: PropTypes.oneOf(['dropdowns', 'arrows']),
    date: PropTypes.shape({}),
    dateFrom: PropTypes.shape({}),
    dateTo: PropTypes.shape({}),
    disabled: PropTypes.bool,
    errorMessage: PropTypes.string,
    events: PropTypes.arrayOf(PropTypes.shape({})),
    excludeDates: PropTypes.arrayOf(PropTypes.shape({})),
    filterDates: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    includeDates: PropTypes.arrayOf(PropTypes.shape({})),
    label: PropTypes.string,
    locale: PropTypes.string,
    maxDate: PropTypes.shape({}),
    minDate: PropTypes.shape({}),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onMonthChange: PropTypes.func,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
    required: PropTypes.bool,
    style: PropTypes.shape({}),
};

export default DatePickerInput;
