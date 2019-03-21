'use strict';

import ClassNames from 'classnames';
import DatePickerCalendar from './DatePickerCalendar.react';
import DateUtils from '../utils/DateUtils.js';
import DatePickerUtils from '../utils/DatePickerUtils.js';
import Icon from '../Elements/Icon.react';
import Input from '../Elements/Input.react';
import moment from 'moment-timezone';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import TetherComponent from 'react-tether';

class Calendar extends React.PureComponent {
    render() {
        return (
            <DatePickerCalendar {...this.props} />
        )
    }

    handleClickOutside(event) {
        const { onClose } = this.props;

        onClose(event);
    }
}

const CalendarOnClickOutisde = onClickOutside(Calendar);

class DatePickerInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isCalendarOpen: false,
            inputValue: this._safeDateFormat(props.date, props.locale),
        };


        this._dateFormats = this._getAllowedDateFormats('MM/DD/YYYY');

        this._getDate = this._getDate.bind(this);
        this._getDateFrom = this._getDateFrom.bind(this);
        this._getDateTo = this._getDateTo.bind(this);
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

    render() {
        const {
            className,
            errorMessage,
            disabled,
            events,
            excludeDates,
            filterDate,
            includeDates,
            locale,
            required,
            tabIndex,
        } = this.props;
        const { isCalendarOpen, inputValue } = this.state;
        const containerClasses = ClassNames('ui', 'date-picker-input', className);

        return (
            <div className={containerClasses}>
                <TetherComponent
                    attachment={'top left'}
                    classPrefix="date-picker-tether"
                    constraints={[{
                        to: 'window',
                        attachment: 'together'
                    }]}
                    targetAttachment={'bottom left'}
                    targetOffset={'10px 0'}
                >
                    <Input
                        autoComplete="off"
                        className="ignore-react-onclickoutside"
                        data-parsley-error-message={errorMessage}
                        disabled={disabled}
                        guide
                        icon={(
                            <Icon
                                className="ignore-react-onclickoutside"
                                color={isCalendarOpen ? 'highlight' : null}
                                compact
                                onClick={this._onIconClick}
                                type="calendar"
                            />
                        )}
                        keepCharPositions
                        mask={[ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ]}
                        onBlur={this._onInputBlur}
                        onChange={this._onInputChange}
                        onFocus={this._onInputFocus}
                        onKeyDown={this._onInputKeyDown}
                        placeholder="mm/dd/yyyy"
                        ref={ref => this._datePickerInput = ref}
                        required={required}
                        tabIndex={tabIndex}
                        type="text"
                        value={inputValue}
                    />

                    {isCalendarOpen ? (
                        <CalendarOnClickOutisde
                            date={this._getDate()}
                            dateFrom={this._getDateFrom()}
                            dateTo={this._getDateTo()}
                            events={events}
                            excludeDates={excludeDates}
                            filterDate={filterDate}
                            includeDates={includeDates}
                            locale={locale}
                            maxDate={this._getMaxDate()}
                            minDate={this._getMinDate()}
                            mode="input"
                            onChange={this._onCalendarChange}
                            onClose={this._onCalendarClickOutside}
                            onMonthChange={this._onMonthChange}
                        />
                    ) : null}
                </TetherComponent>
            </div>
        );
    }

    _getAllowedDateFormats(specifiedFormat) {
        const formats = DateUtils.getAllowedDateFormats();

        if (_.indexOf(formats, specifiedFormat) < 0) {
            formats.unshift(specifiedFormat);
        }

        return formats;
    }

    _getDate() {
        const { date } = this.props;

        return this._getValueIfMoment(date, 'date');
    }

    _getDateFrom() {
        const { dateFrom } = this.props;

        return this._getValueIfMoment(dateFrom, 'dateFrom');
    }

    _getDateTo() {
        const { dateTo } = this.props;

        return this._getValueIfMoment(dateTo, 'dateTo');
    }

    _getMaxDate() {
        const { maxDate } = this.props;

        return this._getValueIfMoment(maxDate, 'maxDate');
    }

    _getMinDate() {
        const { minDate } = this.props;

        return this._getValueIfMoment(minDate, 'minDate');
    }

    _getValueIfMoment(value, type) {
        if (value && !moment.isMoment(value)) {
            console.warn(`${type || 'value'} is not a moment object`);

            return;
        }

        return value || {};
    }

    _onCalendarChange(date) {
        console.log('DatePickerInput _onCalendarChange');
        console.log(date);
    }

    _onCalendarClickOutside(event) {
        this._setOpen(false);
    }

    _onIconClick() {
        ReactDOM.findDOMNode(this._datePickerInput._input).focus();
    }

    _onInputBlur(event) {
        const { onBlur } = this.props;

        if (!_.isUndefined(onBlur)) {
            onBlur(event);
        }
    }

    _onInputChange(value) {
        const { locale } = this.props;
        const date = moment(value, this._dateFormats, locale || moment.locale(), true);

        if (date.isValid() && !DatePickerUtils.isDayDisabled(date, this.props)) {
            this._onCalendarChange(date);
        } else if (value === '' || value === '__/__/____') {
            this._onCalendarChange({});
        }

        this.setState({ inputValue: value });
    }

    _onInputFocus() {
        this._setOpen(true);
    }

    _onInputKeyDown() {

    }

    _onMonthChange() {

    }

    _safeDateFormat(date, locale) {
        if (date && date.isValid()) {
            return date.clone().locale(locale || moment.locale()).format('MM/DD/YYYY');
        }

        if (_.isNull(date)) {
            return null;
        }
    }

    _setOpen(open) {
        this.setState({ isCalendarOpen: open });
    }
}

DatePickerInput.defaultProps = {
    className: '',
    controls: 'dropdowns',
    date: moment(),
    dateFrom: undefined,
    dateTo: undefined,
    disabled: false,
    disabledDays: undefined,
    events: undefined,
    errorMessage: '',
    excludeDates: undefined,
    filterDates: undefined,
    id: undefined,
    includeDates: undefined,
    locale: '',
    maxDate: undefined,
    minDate: undefined,
    onBlur: undefined,
    onChange: undefined,
    onFocus: undefined,
    onMonthChange: undefined,
    required: false,
    tabIndex: undefined,
};

DatePickerInput.propTypes = {
    className: PropTypes.string,
    controls: PropTypes.oneOf([ 'dropdowns', 'arrows' ]),
    date: PropTypes.object,
    dateFrom: PropTypes.object,
    dateTo: PropTypes.object,
    disabled: PropTypes.bool,
    events: PropTypes.array,
    errorMessage: PropTypes.string,
    excludeDates: PropTypes.array,
    filterDates: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    includeDates: PropTypes.array,
    locale: PropTypes.string,
    maxDate: PropTypes.object,
    minDate: PropTypes.object,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onMonthChange: PropTypes.func,
    required: PropTypes.bool,
    tabIndex: PropTypes.number,
};

export default DatePickerInput;
