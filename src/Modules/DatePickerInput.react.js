'use strict';

import ClassNames from 'classnames';
import DatePickerCalendar from './DatePickerCalendar.react';
import Icon from '../Elements/Icon.react';
import Input from '../Elements/Input.react';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import TetherComponent from 'react-tether';

class DatePickerInput extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isCalendarOpen: false,
            maybeDate: this._safeDateFormat(props.date, props.locale),
        };

        this._getDate = this._getDate.bind(this);
        this._getDateFrom = this._getDateFrom.bind(this);
        this._getDateTo = this._getDateTo.bind(this);
        this._getMaxDate = this._getMaxDate.bind(this);
        this._getMinDate = this._getMinDate.bind(this);
        this._onCalendarChange = this._onCalendarChange.bind(this);
        this._onCalendarClickOutside = this._onCalendarClickOutside.bind(this);
        this._onInputClick = this._onInputClick.bind(this);
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
            disabledDays,
            enabledDays,
            locale,
            required,
            tabIndex,
        } = this.props;
        const { isCalendarOpen, maybeDate } = this.state;
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
                        data-parsley-error-message={errorMessage}
                        disabled={disabled}
                        guide
                        icon={(
                            <Icon
                                color={isCalendarOpen ? 'highlight' : null}
                                compact
                                onClick={this._onInputClick}
                                type="calendar"
                            />
                        )}
                        keepCharPositions
                        mask={[ /\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/ ]}
                        onBlur={this._onInputBlur}
                        onChange={this._onInputChange}
                        onClick={this._onInputClick}
                        onFocus={this._onInputFocus}
                        onKeyDown={this._onInputKeyDown}
                        placeholder="mm/dd/yyyy"
                        required={required}
                        tabIndex={tabIndex}
                        type="text"
                        value={maybeDate}
                    />
                </TetherComponent>

                <DatePickerCalendar
                    date={this._getDate()}
                    dateFrom={this._getDateFrom()}
                    dateTo={this._getDateTo()}
                    disabledDays={disabledDays}
                    enabledDays={enabledDays}
                    locale={locale}
                    maxDate={this._getMaxDate()}
                    minDate={this._getMinDate()}
                    mode="input"
                    onChange={this._onCalendarChange}
                    onMonthChange={this._onMonthChange}
                />
            </div>
        );
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

    _onCalendarChange() {

    }

    _onCalendarClickOutside(event) {

    }

    _onInputBlur() {

    }

    _onInputChange() {

    }

    _onInputClick() {

    }

    _onInputFocus() {

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
}

DatePickerInput.defaultProps = {
    className: '',
    date: moment(),
    dateFrom: undefined,
    dateTo: undefined,
    disabled: false,
    disabledDays: undefined,
    errorMessage: '',
    enabledDays: undefined,
    id: undefined,
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
    date: PropTypes.object,
    dateFrom: PropTypes.object,
    dateTo: PropTypes.object,
    disabled: PropTypes.bool,
    disabledDays: PropTypes.array,
    errorMessage: PropTypes.string,
    enabledDays: PropTypes.array,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
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
