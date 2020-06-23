import {
    indexOf,
    isEqual,
    isFunction,
    isNil,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import TetherComponent from 'react-tether';
import DatePickerUtils from '../utils/datePickerUtils';
import DateUtils from '../utils/dateUtils';
import Icon from '../dataDisplay/icon';
import Input from './input';
import DatePickerCalendarOnClickOutside from './datePickerCalendarOnClickOutside';

const propTypes = {
    className: PropTypes.string,
    date: PropTypes.shape({}),
    dateFrom: PropTypes.shape({}),
    dateTo: PropTypes.shape({}),
    /**
     * A DatePickerInput can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
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
    onMonthChange: PropTypes.func,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
    required: PropTypes.bool,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
};

const defaultProps = {
    className: null,
    date: null,
    dateFrom: null,
    dateTo: null,
    disable: false,
    disabled: false,
    errorMessage: null,
    events: null,
    excludeDates: null,
    filterDates: null,
    id: null,
    includeDates: null,
    label: null,
    locale: 'en-US',
    maxDate: null,
    minDate: null,
    onBlur: null,
    onChange: null,
    onMonthChange: null,
    rangeFrom: false,
    rangeTo: false,
    required: false,
    style: null,
    tabIndex: -1,
};

class DatePickerInput extends React.PureComponent {
    constructor(props) {
        super(props);

        const isDateRange = props.rangeFrom || props.rangeTo;
        const newDate = isDateRange ? undefined : props.date;
        const newDateFrom = !isDateRange ? undefined : props.dateFrom;
        const newDateTo = !isDateRange ? undefined : props.dateTo;

        let inputValue;

        if (props.rangeFrom) {
            inputValue = this.safeDateFormat(newDateFrom, props.locale);
        } else if (props.rangeTo) {
            inputValue = this.safeDateFormat(newDateTo, props.locale);
        } else {
            inputValue = this.safeDateFormat(newDate, props.locale);
        }

        this.state = {
            date: newDate,
            dateFrom: newDateFrom,
            dateTo: newDateTo,
            isCalendarOpen: false,
            inputValue,
        };

        this.dateFormats = this.getAllowedDateFormats('MM/DD/YYYY');

        this.getMaxDate = this.getMaxDate.bind(this);
        this.getMinDate = this.getMinDate.bind(this);
        this.onCalendarChange = this.onCalendarChange.bind(this);
        this.onCalendarClickOutside = this.onCalendarClickOutside.bind(this);
        this.onIconClick = this.onIconClick.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);
    }

    componentDidMount() {
        const { onChange, rangeFrom, rangeTo } = this.props;

        if ((rangeFrom || rangeTo) && !isFunction(onChange)) {
            // eslint-disable-next-line no-console
            console.error('The onChange prop is required when using the rangeFrom or rangeTo props');
        }
    }

    componentDidUpdate(prevProps) {
        const {
            disabled: prevDisabled,
        } = prevProps;
        const {
            date,
            dateFrom,
            dateTo,
            disabled,
            locale,
            rangeFrom,
            rangeTo,
        } = this.props;

        if (prevDisabled !== disabled && disabled) {
            // eslint-disable-next-line no-console
            console.warn('DatePickerInput (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }

        if (!DatePickerUtils.isSameDay(date, prevProps.date) ||
            !DatePickerUtils.isSameDay(dateFrom, prevProps.dateFrom) ||
            !DatePickerUtils.isSameDay(dateTo, prevProps.dateTo) ||
            !isEqual(locale, prevProps.locale)
        ) {
            const isDateRange = rangeFrom || rangeTo;
            const newDate = isDateRange ? undefined : date;
            const newDateFrom = !isDateRange ? undefined : dateFrom;
            const newDateTo = !isDateRange ? undefined : dateTo;
            let newInputValue;

            if (rangeFrom) {
                newInputValue = this.safeDateFormat(newDateFrom, locale);
            } else if (rangeTo) {
                newInputValue = this.safeDateFormat(newDateTo, locale);
            } else {
                newInputValue = this.safeDateFormat(newDate, locale);
            }

            this.setState({
                date: newDate,
                dateFrom: newDateFrom,
                dateTo: newDateTo,
                inputValue: newInputValue,
            });
        }
    }

    onCalendarChange({ date, dateFrom, dateTo }) {
        const {
            disable,
            disabled,
            onChange,
        } = this.props;
        const isNotDisabled = !disable && !disabled;
        const isOnChangeFunc = isFunction(onChange);

        if (isNotDisabled && isOnChangeFunc) {
            onChange({ date, dateFrom, dateTo });
        }

        if (isNotDisabled && !isOnChangeFunc) {
            const { locale } = this.props;

            this.setState({
                date,
                inputValue: this.safeDateFormat(date, locale),
            });
        }

        this.setOpen(false);
    }

    onCalendarClickOutside() {
        this.setOpen(false);
    }

    onIconClick() {
        const {
            disable,
            disabled,
        } = this.props;
        const isNotDisabled = !disable && !disabled;

        if (isNotDisabled) {
            // eslint-disable-next-line no-underscore-dangle, react/no-find-dom-node
            ReactDOM.findDOMNode(this._datePickerInput._input).focus();
        }
    }

    onInputBlur(event) {
        const { onBlur } = this.props;

        if (isFunction(onBlur)) {
            onBlur(event);
        }
    }

    onInputChange(value) {
        const {
            disable,
            disabled,
            locale,
            rangeFrom,
            rangeTo,
        } = this.props;
        const { dateFrom, dateTo } = this.state;
        const date = moment(value, this.dateFormats, locale || moment.locale(), true);
        const isNotDisabled = !disable && !disabled;

        const isValidValueChange = isNotDisabled &&
            date.isValid() &&
            !DatePickerUtils.isDayDisabled(date, this.props);

        const isValidUpdateToNull = !isValidValueChange &&
            isNotDisabled &&
            (value === '' || value === '__/__/____');

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
            this.onCalendarChange(onChangeParam);
        }
    }

    onInputFocus() {
        this.setOpen(true);
    }

    onInputKeyDown(event) {
        if (event.keyCode === 9 || event.keyCode === 13) {
            this.setOpen(false);
        }
    }

    onMonthChange(month, year) {
        const { onMonthChange } = this.props;

        if (isFunction(onMonthChange)) {
            onMonthChange(month, year);
        }
    }

    getAllowedDateFormats(specifiedFormat) {
        let formats = DateUtils.getAllowedDateFormats();

        if (indexOf(formats, specifiedFormat) < 0) {
            formats = [specifiedFormat, ...formats];
        }

        return formats;
    }

    getMaxDate() {
        const { maxDate } = this.props;

        return maxDate;
    }

    getMinDate() {
        const { minDate } = this.props;

        return minDate;
    }

    setOpen(open) {
        this.setState({ isCalendarOpen: open });
    }

    safeDateFormat(date, locale) {
        if (date && date.isValid()) {
            return date.clone().locale(locale || moment.locale()).format('MM/DD/YYYY');
        }

        if (isNil(date)) {
            return '';
        }

        return null;
    }

    render() {
        const {
            className,
            errorMessage,
            disable,
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
            date,
            dateFrom,
            dateTo,
            isCalendarOpen,
            inputValue,
        } = this.state;

        const rootClasses = ClassNames('ui', 'date-picker-input', className);

        let iconColor;

        if (isCalendarOpen) {
            iconColor = 'highlight';
        }

        const isDisabled = disable || disabled;

        if (isDisabled) {
            iconColor = 'primary';
        }

        return (
            <div className={rootClasses} id={id} style={style}>
                <TetherComponent
                    attachment="top left"
                    classPrefix="date-picker-tether"
                    constraints={[{
                        to: 'window',
                        attachment: 'together',
                    }]}
                    renderElement={(ref) => isCalendarOpen && (
                        <div ref={ref}>
                            <DatePickerCalendarOnClickOutside
                                controls="dropdowns"
                                date={date}
                                dateFrom={dateFrom}
                                dateTo={dateTo}
                                events={events}
                                excludeDates={excludeDates}
                                filterDates={filterDates}
                                includeDates={includeDates}
                                locale={locale}
                                maxDate={this.getMaxDate()}
                                minDate={this.getMinDate()}
                                mode="input"
                                onChange={this.onCalendarChange}
                                onClose={this.onCalendarClickOutside}
                                onMonthChange={this.onMonthChange}
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
                                disable={isDisabled}
                                guide
                                icon={(
                                    <Icon
                                        color={iconColor}
                                        compact
                                        disable={isDisabled}
                                        onClick={this.onIconClick}
                                        type="calendar"
                                    />
                                )}
                                keepCharPositions
                                label={label}
                                mask={[/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]}
                                onBlur={this.onInputBlur}
                                onChange={this.onInputChange}
                                onFocus={this.onInputFocus}
                                onKeyDown={this.onInputKeyDown}
                                placeholder="mm/dd/yyyy"
                                required={required}
                                // eslint-disable-next-line no-underscore-dangle
                                ref={(inputRef) => { this._datePickerInput = inputRef; }}
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
}

DatePickerInput.propTypes = propTypes;
DatePickerInput.defaultProps = defaultProps;

export default DatePickerInput;
