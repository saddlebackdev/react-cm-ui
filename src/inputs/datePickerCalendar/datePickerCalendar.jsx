import {
    cloneDeep,
    isEmpty,
    isUndefined,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import DatePickerDropdownMonth from './datePickerDropdownMonth';
import DatePickerDropdownYear from './datePickerDropdownYear';
import DatePickerMonth from './datePickerMonth';
import DatePickerUtils from '../../utils/datePickerUtils';
import Icon from '../../dataDisplay/icon';
import KeyCode from '../../global/keyCode';

/**
 * Date values should be Moment objects (current) or YYYY-MM-DD strings (desired future state).
 */
const DateValuePropType = PropTypes.oneOfType([MomentPropTypes.moment, PropTypes.string]);

const propTypes = {
    className: PropTypes.string,
    controls: PropTypes.oneOf(['dropdowns', 'arrows']),
    date: DateValuePropType,
    dateFrom: DateValuePropType,
    dateTo: DateValuePropType,
    events: PropTypes.arrayOf(DateValuePropType),
    excludeDates: PropTypes.arrayOf(DateValuePropType),
    filterDates: PropTypes.func,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    includeDates: PropTypes.arrayOf(DateValuePropType),
    locale: PropTypes.string,
    maxDate: DateValuePropType,
    minDate: DateValuePropType,
    mode: PropTypes.oneOf(['calendar', 'input']),
    onChange: PropTypes.func,
    onMonthChange: PropTypes.func,
    range: PropTypes.bool,
    rangeFrom: PropTypes.bool,
    rangeTo: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    className: '',
    controls: 'arrows',
    date: undefined,
    dateFrom: undefined,
    dateTo: undefined,
    events: undefined,
    excludeDates: undefined,
    filterDates: undefined,
    id: undefined,
    includeDates: undefined,
    locale: 'en-US',
    maxDate: undefined,
    minDate: undefined,
    mode: 'calendar',
    onChange: undefined,
    onMonthChange: undefined,
    range: false,
    rangeFrom: false,
    rangeTo: false,
    style: undefined,
};

class DatePickerCalendar extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            date: cloneDeep(props.date),
            dateFrom: cloneDeep(props.dateFrom),
            dateTo: cloneDeep(props.dateTo),
            dateInView: this.localizeMoment(
                this.getDateInView(
                    props.date,
                    props.dateFrom,
                    props.maxDate,
                    props.minDate,
                ),
            ),
            showDropdownMonth: false,
            showDropdownYear: false,
        };

        this.onMonthChange = this.onMonthChange.bind(this);
        this.onYearChange = this.onYearChange.bind(this);
        this.onDayClick = this.onDayClick.bind(this);
        this.onDropdownMonthClick = this.onDropdownMonthClick.bind(this);
        this.onDropdownMonthKeyDown = this.onDropdownMonthKeyDown.bind(this);
        this.onDropdownYearClick = this.onDropdownYearClick.bind(this);
        this.onDropdownYearKeyDown = this.onDropdownYearKeyDown.bind(this);
        this.onPreviousMonthChange = this.onPreviousMonthChange.bind(this);
        this.onNextMonthChange = this.onNextMonthChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            date,
            dateFrom,
            dateTo,
            maxDate,
            minDate,
        } = this.props;

        if (!DatePickerUtils.isSameDay(prevProps.date, date) ||
            !DatePickerUtils.isSameDay(prevProps.dateFrom, dateFrom) ||
            !DatePickerUtils.isSameDay(prevProps.dateTo, dateTo)
        ) {
            this.setState({
                date,
                dateFrom,
                dateTo,
                dateInView: this.localizeMoment(
                    this.getDateInView(
                        date,
                        dateFrom,
                        maxDate,
                        minDate,
                    ),
                ),
            });
        }
    }

    onDayClick(date) {
        const {
            onChange,
            range,
            rangeFrom,
            rangeTo,
        } = this.props;

        const {
            date: dateFromState,
            dateFrom,
            dateTo,
        } = this.state;

        const isDateSame = DatePickerUtils.isSameDay(dateFromState, date);
        const isDateBeforeFrom = !isUndefined(dateFrom) && date.isBefore(dateFrom);
        const isDateBetweenToAndFrom = date.isAfter(dateFrom) && date.isBefore(dateTo);
        const isDateAfterTo = !isUndefined(dateTo) && date.isAfter(dateTo);
        const isDateSameAsFrom = DatePickerUtils.isSameDay(date, dateFrom);
        const isDateSameAsTo = DatePickerUtils.isSameDay(date, dateTo);
        const isDateSameAsFromAndTo = isDateSameAsFrom && isDateSameAsTo;

        if (range) {
            if (isDateBeforeFrom) {
                if (!isUndefined(onChange)) {
                    onChange({ date: undefined, dateFrom: date, dateTo });
                } else {
                    this.setState({ dateFrom: date });
                }
            }

            if (isDateSameAsTo ||
                isDateSameAsFrom ||
                (isUndefined(dateFrom) && isUndefined(dateTo))) {
                if (!isUndefined(onChange)) {
                    onChange({ date: undefined, dateFrom: date, dateTo: date });
                } else {
                    this.setState({
                        dateFrom: date,
                        dateTo: date,
                    });
                }
            }

            if (isDateAfterTo || isDateBetweenToAndFrom) {
                if (!isUndefined(onChange)) {
                    onChange({ date: undefined, dateFrom, dateTo: date });
                } else {
                    this.setState({ dateTo: date });
                }
            }

            if (isDateSameAsFromAndTo) {
                if (!isUndefined(onChange)) {
                    onChange({ date: undefined, dateFrom: null, dateTo: null });
                } else {
                    this.setState({
                        dateFrom: null,
                        dateTo: null,
                    });
                }
            }
        } else if (rangeFrom || rangeTo) {
            let newDateFrom;
            let newDateTo;

            if ((rangeFrom && isDateSameAsTo) || isDateAfterTo) {
                newDateFrom = !isDateSameAsFromAndTo ? date : null;
                newDateTo = !isDateSameAsFromAndTo ? date : null;
            } else if (rangeFrom && !isDateSameAsTo && !isDateAfterTo) {
                newDateFrom = date;
                newDateTo = dateTo;
            }

            if ((rangeTo && isDateSameAsFrom) || isDateBeforeFrom) {
                newDateFrom = !isDateSameAsFromAndTo ? date : null;
                newDateTo = !isDateSameAsFromAndTo ? date : null;
            } else if (rangeTo && !isDateSameAsFrom && !isDateBeforeFrom) {
                newDateFrom = dateFrom;
                newDateTo = date;
            }

            onChange({ date: undefined, dateFrom: newDateFrom, dateTo: newDateTo });
        } else if (!isUndefined(onChange)) {
            onChange({
                date: !isDateSame ? date : null,
                dateFrom: undefined,
                dateTo: undefined,
            });
        } else {
            this.setState({ date: !isDateSame ? date : null });
        }
    }

    onDropdownMonthClick() {
        this.setState((prev) => ({ showDropdownMonth: !prev.showDropdownMonth }));
    }

    onDropdownMonthKeyDown(e) {
        if (e.keyCode === KeyCode.Enter) {
            this.onDropdownMonthClick();
        }
    }

    onDropdownYearClick() {
        this.setState((prev) => ({ showDropdownYear: !prev.showDropdownYear }));
    }

    onDropdownYearKeyDown(e) {
        if (e.keyCode === KeyCode.Enter) {
            this.onDropdownYearClick();
        }
    }

    onMonthChange(month) {
        const { onMonthChange } = this.props;
        const { dateInView } = this.state;

        if (!isUndefined(onMonthChange)) {
            onMonthChange(month, dateInView.year());
        }

        this.setState({
            dateInView: dateInView.clone().set('month', month),
            showDropdownMonth: false,
        });
    }

    onNextMonthChange() {
        this.setState((prev) => {
            const { onMonthChange } = this.props;
            const dateInView = prev.dateInView.clone().add(1, 'months');

            if (!isUndefined(onMonthChange)) {
                onMonthChange(dateInView.month(), dateInView.year());
            }

            return {
                dateInView,
                showDropdownMonth: false,
            };
        });
    }

    onPreviousMonthChange() {
        this.setState((prev) => {
            const { onMonthChange } = this.props;
            const dateInView = prev.dateInView.clone().subtract(1, 'months');

            if (!isUndefined(onMonthChange)) {
                onMonthChange(dateInView.month(), dateInView.year());
            }

            return {
                dateInView,
                showDropdownMonth: false,
            };
        });
    }

    onYearChange(year) {
        const { dateInView } = this.state;

        this.setState({
            dateInView: dateInView.clone().set('year', year),
            showDropdownYear: false,
        });
    }

    getDateInView(date, dateFrom, maxDate, minDate) {
        const today = moment();

        if (moment.isMoment(date)) {
            return date;
        }

        if (moment.isMoment(dateFrom)) {
            return dateFrom;
        }

        if (moment.isMoment(minDate) && minDate.isAfter(today)) {
            return minDate;
        }

        if (moment.isMoment(maxDate) && maxDate.isBefore(today)) {
            return maxDate;
        }

        return today;
    }

    localizeMoment(value) {
        const { locale } = this.props;

        return moment.isMoment(value) && value.clone().locale(locale || moment.locale());
    }

    renderControls() {
        const { controls } = this.props;
        const {
            dateInView,
            showDropdownMonth,
            showDropdownYear,
        } = this.state;

        if (controls === 'arrows') {
            return (
                <div className="date-picker-selected-month-year-arrows">
                    <Icon
                        align="left"
                        onClick={this.onPreviousMonthChange}
                        size="medium"
                        type="chevron-left"
                    />

                    <div className="title">
                        {dateInView.format('MMMM YYYY')}
                    </div>

                    <Icon
                        align="right"
                        onClick={this.onNextMonthChange}
                        size="medium"
                        type="chevron-right"
                    />
                </div>
            );
        }

        return (
            <div className="date-picker-selected-month-year-dropdowns">
                <div
                    className="date-picker-selected-month"
                    onClick={this.onDropdownMonthClick}
                    onKeyDown={this.onDropdownMonthKeyDown}
                    role="button"
                    tabIndex={0}
                >
                    <span>
                        {dateInView.format('MMMM')}

                        <Icon align="right" size="xxsmall" type="caret-down" />
                    </span>

                    {showDropdownMonth ? (
                        <DatePickerDropdownMonth
                            month={dateInView.month()}
                            onChange={this.onMonthChange}
                            onClose={this.onDropdownMonthClick}
                        />
                    ) : null}
                </div>

                <div
                    className="date-picker-selected-year"
                    onClick={this.onDropdownYearClick}
                    onKeyDown={this.onDropdownYearKeyDown}
                    role="button"
                    tabIndex={0}
                >
                    <span>
                        {dateInView.format('YYYY')}

                        <Icon align="right" size="xxsmall" type="caret-down" />
                    </span>

                    {showDropdownYear ? (
                        <DatePickerDropdownYear
                            onChange={this.onYearChange}
                            onClose={this.onDropdownYearClick}
                            year={dateInView.year()}
                        />
                    ) : null}
                </div>
            </div>
        );
    }

    renderHeaderDays() {
        const { dateInView } = this.state;
        const startOfWeek = dateInView.clone().startOf('week');

        const days = [0, 1, 2, 3, 4, 5, 6].map((offset) => {
            const day = startOfWeek.clone().add(offset, 'days');

            return (
                <div className="ui date-picker-day" key={offset}>
                    {day.localeData().weekdaysMin(day)}
                </div>
            );
        });

        return (
            <div className="ui date-picker-header-days">
                {days}
            </div>
        );
    }

    render() {
        const {
            className,
            events,
            excludeDates,
            filterDates,
            id,
            includeDates,
            maxDate,
            minDate,
            mode,
            range,
            rangeFrom,
            rangeTo,
            style,
        } = this.props;

        const {
            date,
            dateFrom,
            dateTo,
            dateInView,
        } = this.state;

        const containerClasses = ClassNames('ui', 'date-picker-calendar', className, {
            'date-picker-calendar-mode-input': mode === 'input',
            'date-picker-calendar-mode-calendar': mode === 'calendar',
            'date-picker-calendar-date-range': !isEmpty(dateFrom) || !isEmpty(dateTo),
            'date-picker-calendar-single-date': isEmpty(dateFrom) && isEmpty(dateTo),
        });

        return (
            <div className={containerClasses} id={id} style={style}>
                {mode === 'input' ? (
                    <div className="date-picker-pointer" />
                ) : null}

                {this.renderControls()}

                <div className="date-picker-month-container">
                    {this.renderHeaderDays()}

                    <DatePickerMonth
                        date={date}
                        dateFrom={dateFrom}
                        dateInView={dateInView}
                        dateTo={dateTo}
                        events={events}
                        excludeDates={excludeDates}
                        filterDates={filterDates}
                        includeDates={includeDates}
                        maxDate={maxDate}
                        minDate={minDate}
                        onDayClick={this.onDayClick}
                        mode={mode}
                        range={range}
                        rangeFrom={rangeFrom}
                        rangeTo={rangeTo}
                    />
                </div>
            </div>
        );
    }
}

DatePickerCalendar.propTypes = propTypes;
DatePickerCalendar.defaultProps = defaultProps;

export default DatePickerCalendar;
