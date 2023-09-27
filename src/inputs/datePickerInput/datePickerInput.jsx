import {
    indexOf,
    isEmpty,
    isEqual,
    isFunction,
    isNil,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import TetherComponent from 'react-tether';
import DatePickerUtils from '../../utils/datePickerUtils';
import DateUtils from '../../utils/dateUtils';
import Icon from '../../dataDisplay/icon';
import Input from '../input';
import KeyCode from '../../global/keyCode';
import DatePickerCalendarOnClickOutside from '../datePickerCalendar/datePickerCalendarOnClickOutside';
import withStyles from '../../styles/withStyles';

const BEM_BLOCK_NAME = 'date_picker_input';

const propTypes = {
    /**
     * Forces the DatePickerInput component to always show the required indicator
     * next to the label. The default behavior (if this prop is omitted or false) is for
     * the required field indicator to disappear once a value has been entered.
     */
    alwaysShowRequiredIndicator: PropTypes.bool,

    /**
     * Override or extend the styles applied to DatePickerInput.
     */
    classes: PropTypes.shape({
        isFluid: PropTypes.string,
        root: PropTypes.string,
    }),

    /**
    * Assign additional class names to DatePickerInput.
    */
    className: PropTypes.string,

    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,

    /**
     * Single date value.  Moment object.
     */
    date: MomentPropTypes.momentObj,

    /**
     * 'From' ('Start') Date for a Date Range.  Moment object.
     */
    dateFrom: MomentPropTypes.momentObj,

    /**
     * 'To' ('End') Date for a Date Range.  Moment object.
     */
    dateTo: MomentPropTypes.momentObj,

    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disable: PropTypes.bool,

    /**
     * A DatePickerInput can be disabled.
     */
    disabled: PropTypes.bool,

    /**
     * String specifying the way the date value will be formatted.
     */
    displayFormat: PropTypes.string,

    /**
     * Indicate that there is a validation error for this DatePickerInput control.
     */
    errorMessage: PropTypes.string,

    /**
     * Indicates dates that should be highlighted on the DatePickerInput's calendar control.  Array of Moment objects.
     */
    events: PropTypes.arrayOf(MomentPropTypes.momentObj),

    /**
     * Specifies a range of dates that are not selectable.  Array of Moment objects.
     */
    excludeDates: PropTypes.arrayOf(MomentPropTypes.momentObj),

    /**
     * Function that is used to filter out dates that are to not be selectable.
     */
    filterDates: PropTypes.func,

    /**
     * The DatePickerInput will be resized to its parent container's width.
     */
    fluid: PropTypes.bool,

    /**
     * Forwarded Ref
     */
    forwardedRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }), // eslint-disable-line react/forbid-prop-types
    ]),

    /**
     * Hides the calendar picker when entering the date manually
     */
    hideCalendarPickerOnKeyDown: PropTypes.bool,

    /**
     * Specify an element ID this DatePickerInput control.
     */
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),

    /**
     * Specifies a range of dates that are selectable.  Array of Moment objects.
     */
    includeDates: PropTypes.arrayOf(MomentPropTypes.momentObj),

    /**
     * Specifies a label for the DatePickerInput control.
     */
    label: PropTypes.string,

    /**
     * Specifies which locale will be used when formatting date values.
     */
    locale: PropTypes.string,

    /**
     * Specifies maximum selectable date.  Moment object.
     */
    maxDate: MomentPropTypes.momentObj,

    /**
     * Specifies minimum selectable date.   Moment object.
     */
    minDate: MomentPropTypes.momentObj,

    /**
     * DatePickerInput can handle an onBlur event from parent.
     */
    onBlur: PropTypes.func,

    /**
     * Event handler for consumer to control state outside of the DatePickerInput.
     */
    onChange: PropTypes.func,

    /**
     * Event handler called when the month in the DatePickerInput's calendar control changes.
     */
    onMonthChange: PropTypes.func,

    /**
     * If true, specifies that the DatePickerInput represents the 'From' (or 'Start') date of a date range.
     */
    rangeFrom: PropTypes.bool,

    /**
     * If true, specifies that the DatePickerInput represents the 'To' (or 'End') date of a date range.
     */
    rangeTo: PropTypes.bool,

    /**
     * Indicates whether the DatePickerInput control represents a required field.
     */
    required: PropTypes.bool,

    /**
     * Supply any inline styles to the DatePickerInput's container. Mainly used for padding and margins.
     */
    style: PropTypes.shape({}),

    /**
     * Allows the DatePickerInput to be focused via the Tab key.
     */
    tabIndex: PropTypes.number,
};

const defaultProps = {
    alwaysShowRequiredIndicator: false,
    classes: null,
    className: null,
    dataTestId: undefined,
    date: null,
    dateFrom: null,
    dateTo: null,
    disable: false,
    disabled: false,
    displayFormat: 'MM/DD/YYYY',
    errorMessage: null,
    events: null,
    excludeDates: null,
    filterDates: null,
    fluid: false,
    forwardedRef: undefined,
    hideCalendarPickerOnKeyDown: false,
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

const styles = (theme) => ({
    root: {
        display: 'inline-block',
        '&$isFluid': {
            width: '100%',
        },
    },
    isFluid: {},
    '@global': {
        '.date-picker-tether-element': {
            zIndex: theme.zIndex.datePickerInputCalendar,
        },
    },
});

/**
 * The DatePickerInput represents an input for storing a date value.
 *
 * When clicked, it can display an interactive calendar control for selecting
 * the date.
 *
 * A date value can also be typed into the input manually.
 */
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
            isFocused: false,
        };

        this.dateFormats = this.getAllowedDateFormats('MM/DD/YYYY');

        this.getMaxDate = this.getMaxDate.bind(this);
        this.getMinDate = this.getMinDate.bind(this);
        this.onCalendarChange = this.onCalendarChange.bind(this);
        this.onCalendarClickOutside = this.onCalendarClickOutside.bind(this);
        this.onIconClick = this.onIconClick.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.onInputFocus = this.onInputFocus.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onMonthChange = this.onMonthChange.bind(this);

        this.datePickerInput = props.forwardedRef ?? React.createRef();
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
            date,
            dateFrom,
            dateTo,
            locale,
            rangeFrom,
            rangeTo,
        } = this.props;

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
            this.setOpen(true);
            this.datePickerInput.current.inputElement.focus();
        }
    }

    onInputBlur(event) {
        const { onBlur } = this.props;

        if (isFunction(onBlur)) {
            onBlur(event);
        }

        this.setState({ isFocused: false });
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

    onInputClick() {
        this.setState({ isFocused: true });
    }

    onInputFocus() {
        this.setOpen(true);
        this.setState({ isFocused: true });
    }

    onInputKeyDown(event) {
        const {
            hideCalendarPickerOnKeyDown,
        } = this.props;

        const shouldHideCalendarPicker = hideCalendarPickerOnKeyDown ||
            (event.keyCode === KeyCode.Tab || event.keyCode === KeyCode.Enter);

        if (shouldHideCalendarPicker) {
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

    safeDateFormat(date, locale, format = 'MM/DD/YYYY') {
        if (date && date.isValid()) {
            return date.clone().locale(locale || moment.locale()).format(format);
        }

        if (isNil(date)) {
            return '';
        }

        return null;
    }

    render() {
        const {
            alwaysShowRequiredIndicator,
            classes,
            className,
            errorMessage,
            dataTestId,
            disable,
            disabled,
            displayFormat,
            events,
            excludeDates,
            filterDates,
            fluid,
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
            isFocused,
        } = this.state;

        const rootClasses = ClassNames(
            'ui',
            'date-picker-input',
            classes.root,
            className,
            {
                [classes.isFluid]: fluid,
            },
        );

        let iconColor;

        if (isCalendarOpen) {
            iconColor = 'highlight';
        }

        const isDisabled = disable || disabled;

        if (isDisabled) {
            iconColor = 'primary';
        }

        let inputString = inputValue;
        if (!isFocused) {
            const dateFormat = this.safeDateFormat(date, locale, displayFormat);
            if (!isEmpty(dateFormat)) {
                inputString = dateFormat;
            }
        }

        return (
            <div
                className={rootClasses}
                id={id}
                style={style}
            >
                <TetherComponent
                    attachment="top left"
                    classPrefix="date-picker-tether"
                    constraints={[{
                        to: 'window',
                        attachment: 'together',
                    }]}
                    renderElement={(ref) => isCalendarOpen && (
                        <div
                            ref={ref}
                            data-testid={`${BEM_BLOCK_NAME}--calendar_picker`}
                        >
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
                                alwaysShowRequiredIndicator={alwaysShowRequiredIndicator}
                                data-parsley-error-message={errorMessage}
                                dataTestId={dataTestId}
                                disable={isDisabled}
                                fluid={fluid}
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
                                onClick={this.onInputClick}
                                onFocus={this.onInputFocus}
                                onKeyDown={this.onInputKeyDown}
                                placeholder="mm/dd/yyyy"
                                required={required}
                                ref={this.datePickerInput}
                                tabIndex={tabIndex}
                                type="text"
                                value={inputString}
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

const DatePickerInputWrapper = React.forwardRef((props, ref) => ((
    // eslint-disable-next-line react/jsx-props-no-spreading
    <DatePickerInput {...props} forwardedRef={ref} />
)));

const wrapperPropTypes = { ...propTypes };
delete wrapperPropTypes.forwardedRef;

const wrapperDefaultProps = { ...defaultProps };
delete wrapperDefaultProps.forwardedRef;

DatePickerInputWrapper.propTypes = wrapperPropTypes;
DatePickerInputWrapper.defaultProps = wrapperDefaultProps;
DatePickerInputWrapper.displayName = 'DatePickerInput';

export default withStyles(styles)(DatePickerInputWrapper);
