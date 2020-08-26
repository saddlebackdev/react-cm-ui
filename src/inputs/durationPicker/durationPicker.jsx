import {
    find,
    get,
    isEmpty,
    isFunction,
    isString,
    map,
    range,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_BLOCK_NAME,
    DAY_SINGULAR,
    DAYS_MAX,
    DAYS_PLURAL,
    HOUR_SINGULAR,
    HOURS_MAX,
    HOURS_PLURAL,
    MINUTE_SINGULAR,
    MINUTES_MAX,
    MINUTES_PLURAL,
    MONTH_SINGULAR,
    MONTHS_MAX,
    MONTHS_PLURAL,
    SECOND_SINGULAR,
    SECONDS_MAX,
    SECONDS_PLURAL,
    YEAR_SINGULAR,
    YEARS_PLURAL,
} from './constants';
import { UI_CLASS_NAME } from '../../global/constants';
import Dropdown from '../dropdown';
import Grid from '../../layout/grid';
import Typography from '../../dataDisplay/typography';

const propTypes = {
    /**
     * Override or extend the styles applied to the DurationPicker.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
        dropdown: PropTypes.string,
        dropdownColumn: PropTypes.string,
        error: PropTypes.string,
        errorColumn: PropTypes.string,
        grid: PropTypes.string,
        label: PropTypes.string,
        labelColumn: PropTypes.string,
        required: PropTypes.string,
    }),
    /**
     * Assign additional class names to the DurationPicker.
     */
    className: PropTypes.string,
    /**
     * A DurationPicker can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Indicate that there is a validation error for this DurationPicker input control.
     */
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    /**
     * Specify an element ID this DurationPicker input control.
     */
    id: PropTypes.string,
    /**
     * Specify a label for the DurationPicker input control.
     */
    label: PropTypes.string,
    /**
     * If there is a years component, specify the maximum value to which it can be set.
     */
    maxYears: PropTypes.number,
    /**
     * Event handler for consumer to control state outside of the DurationPicker.
     */
    onChange: PropTypes.func,
    /**
     * Indicate whether the DurationPicker input control represents a required field.
     */
    required: PropTypes.bool,
    /**
     * Indicate whether the DurationPicker includes a Days component.
     */
    showDays: PropTypes.bool,
    /**
     * Indicate whether the DurationPicker includes an Hours component.
     */
    showHours: PropTypes.bool,
    /**
     * Indicate whether the DurationPicker includes a Minutes component.
     */
    showMinutes: PropTypes.bool,
    /**
     * Indicate whether the DurationPicker includes a Months component.
     */
    showMonths: PropTypes.bool,
    /**
     * Indicate whether the DurationPicker includes a Seconds component.
     */
    showSeconds: PropTypes.bool,
    /**
     * Indicate whether the DurationPicker includes a Years component.
     */
    showYears: PropTypes.bool,
    /**
     * The value of the DurationPicker.  Should be a `Duration` object from the Moment JS library.
     */
    value: MomentPropTypes.momentDurationObj,
};

const defaultProps = {
    classes: null,
    className: null,
    disable: false,
    error: null,
    id: null,
    label: null,
    maxYears: 99,
    onChange: null,
    required: false,
    showDays: true,
    showHours: true,
    showMinutes: false,
    showMonths: false,
    showSeconds: false,
    showYears: false,
    value: null,
};

const defaultState = {
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    value: null,
};

/**
 * The DurationPicker uses a series of Drodown select menus for different units
 * of time (seconds, minutes, hours, days, months and years) to allow the user
 * to configure and input a single duration or timespan value (stored as a
 * Duration object from the MomentJS library).
 */
class DurationPicker extends React.PureComponent {
    static areMomentDurationsEqual(durationA, durationB) {
        const durationAHasValue = moment.isDuration(durationA);
        const durationBHasValue = moment.isDuration(durationB);

        if (!durationAHasValue && !durationBHasValue) {
            return true;
        }

        if (!durationAHasValue || !durationBHasValue) {
            return false;
        }

        // both are valid moment duration objects
        return durationA.valueOf() === durationB.valueOf();
    }

    static buildMomentDuration(updatedState) {
        const {
            days,
            hours,
            minutes,
            months,
            seconds,
            years,
        } = updatedState;

        return moment.duration({
            seconds,
            minutes,
            hours,
            days,
            months,
            years,
        });
    }

    static getStateFromDurationValue(duration) {
        if (!moment.isDuration(duration)) {
            return null;
        }

        return {
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            months: duration.months(),
            seconds: duration.seconds(),
            years: duration.years(),
            value: duration,
        };
    }

    static haveUnitOfTimeOptionsChanged(props, prevProps) {
        return props.showDays !== prevProps.showDays ||
            props.showHours !== prevProps.showHours ||
            props.showMinutes !== prevProps.showMinutes ||
            props.showMonths !== prevProps.showMonths ||
            props.showSeconds !== prevProps.showSeconds ||
            props.showYears !== prevProps.showYears;
    }

    static isValidValue(value) {
        return moment.isDuration(value) &&
            value.valueOf() !== moment.duration().valueOf();
    }

    constructor(props) {
        super(props);

        const state = DurationPicker.getStateFromDurationValue(props.value) || defaultState;
        this.state = {
            ...state,
        };

        this.onStateChange = this.onStateChange.bind(this);
        this.onDaysChange = this.onDaysChange.bind(this);
        this.onHoursChange = this.onHoursChange.bind(this);
        this.onMinutesChange = this.onMinutesChange.bind(this);
        this.onMonthsChange = this.onMonthsChange.bind(this);
        this.onSecondsChange = this.onSecondsChange.bind(this);
        this.onYearsChange = this.onYearsChange.bind(this);

        this.setupDropdownOptions();
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            value: prevValue,
        } = prevState;

        const {
            value,
        } = this.props;

        // Handle external value change ... sync up internal state
        if (!DurationPicker.areMomentDurationsEqual(prevValue, value)) {
            if (moment.isDuration(value)) {
                this.setState(DurationPicker.getStateFromDurationValue(value));
            } else { // if value is nil or invalid, reset to default state
                this.setState(defaultState);
            }
        }

        // If any `showXXX` props have changed, ensure the dropdown options are populated
        if (DurationPicker.haveUnitOfTimeOptionsChanged(this.props, prevProps)) {
            this.setupDropdownOptions();
        }
    }

    onDaysChange(selectedOption) {
        const value = get(selectedOption, 'value', 0);
        this.onStateChange({ days: value });
    }

    onHoursChange(selectedOption) {
        const value = get(selectedOption, 'value', 0);
        this.onStateChange({ hours: value });
    }

    onMinutesChange(selectedOption) {
        const value = get(selectedOption, 'value', 0);
        this.onStateChange({ minutes: value });
    }

    onMonthsChange(selectedOption) {
        const value = get(selectedOption, 'value', 0);
        this.onStateChange({ months: value });
    }

    onSecondsChange(selectedOption) {
        const value = get(selectedOption, 'value', 0);
        this.onStateChange({ seconds: value });
    }

    onYearsChange(selectedOption) {
        const value = get(selectedOption, 'value', 0);
        this.onStateChange({ years: value });
    }

    onStateChange(updatedState) {
        const updatedMomentDurationValue = DurationPicker.buildMomentDuration({
            ...this.state,
            ...updatedState,
        });
        const { onChange } = this.props;

        if (isFunction(onChange)) { // controlled component; we own the unit of time component states, but _not_ the complete value state
            this.setState(updatedState); // update the local state that we do own
            onChange(updatedMomentDurationValue); // call `onChange()` with the updated value
        } else { // uncontrolled component ... we own the complete value state
            const finalUpdatedState = {
                ...updatedState,
                value: updatedMomentDurationValue,
            };

            this.setState(finalUpdatedState);
        }
    }

    setupDropdownOptions() {
        const {
            maxYears,
            showDays,
            showHours,
            showMinutes,
            showMonths,
            showSeconds,
            showYears,
        } = this.props;

        this.secondsOptions = (showSeconds &&
            isEmpty(this.secondsOptions) &&
            map(
                range(SECONDS_MAX + 1),
                (seconds) => ({
                    label: `${seconds} ${seconds === 1 ? SECOND_SINGULAR : SECONDS_PLURAL}`,
                    value: seconds,
                }),
            )) || this.secondsOptions || [];

        this.minutesOptions = (showMinutes &&
            isEmpty(this.minutesOptions) &&
            map(
                range(MINUTES_MAX + 1),
                (minutes) => ({
                    label: `${minutes} ${minutes === 1 ? MINUTE_SINGULAR : MINUTES_PLURAL}`,
                    value: minutes,
                }),
            )) || this.minutesOptions || [];

        this.hoursOptions = (showHours &&
            isEmpty(this.hoursOptions) &&
            map(
                range(HOURS_MAX + 1),
                (hours) => ({
                    label: `${hours} ${hours === 1 ? HOUR_SINGULAR : HOURS_PLURAL}`,
                    value: hours,
                }),
            )) || this.hoursOptions || [];

        this.daysOptions = (showDays &&
            isEmpty(this.daysOptions) &&
            map(
                range(DAYS_MAX + 1),
                (days) => ({
                    label: `${days} ${days === 1 ? DAY_SINGULAR : DAYS_PLURAL}`,
                    value: days,
                }),
            )) || this.daysOptions || [];

        this.monthsOptions = (showMonths &&
            isEmpty(this.monthsOptions) &&
            map(
                range(MONTHS_MAX + 1),
                (months) => ({
                    label: `${months} ${months === 1 ? MONTH_SINGULAR : MONTHS_PLURAL}`,
                    value: months,
                }),
            )) || this.monthsOptions || [];

        this.yearsOptions = (showYears &&
            isEmpty(this.yearsOptions) &&
            map(
                range(maxYears + 1),
                (years) => ({
                    label: `${years} ${years === 1 ? YEAR_SINGULAR : YEARS_PLURAL}`,
                    value: years,
                }),
            )) || this.yearsOptions || [];
    }

    render() {
        const {
            classes,
            className,
            disable,
            error,
            id,
            label,
            required,
            showDays,
            showHours,
            showMinutes,
            showMonths,
            showSeconds,
            showYears,
        } = this.props;

        const {
            days,
            hours,
            minutes,
            months,
            seconds,
            years,
            value,
        } = this.state;

        const rootClasses = ClassNames(
            classes.root,
            UI_CLASS_NAME,
            BEM_BLOCK_NAME,
            className,
            {
                [classes.error]: !!error,
            },
        );

        const realId = id || BEM_BLOCK_NAME;

        return (
            <div
                className={rootClasses}
                id={realId}
            >
                <Grid className={classes.grid}>
                    {label && (
                        <Grid.Column
                            className={classes.labelColumn}
                            width={12}
                        >
                            <Typography
                                classes={{
                                    body2: classes.label,
                                }}
                                component="label"
                                variant="body2"
                            >
                                {label}

                                {required && !DurationPicker.isValidValue(value) ? (
                                    <span className={classes.required}>&nbsp;*</span>
                                ) : null}
                            </Typography>
                        </Grid.Column>
                    )}

                    {showYears && (
                        <Grid.Column
                            className={classes.dropdownColumn}
                        >
                            <Dropdown
                                className={classes.dropdown}
                                clearable={false}
                                disable={disable}
                                fluid
                                id={`${id || BEM_BLOCK_NAME}--years_dropdown`}
                                onChange={this.onYearsChange}
                                options={this.yearsOptions}
                                selection
                                value={find(this.yearsOptions, (opt) => opt.value === years)}
                            />
                        </Grid.Column>
                    )}

                    {showMonths && (
                        <Grid.Column
                            className={classes.dropdownColumn}
                        >
                            <Dropdown
                                className={classes.dropdown}
                                clearable={false}
                                disable={disable}
                                fluid
                                id={`${id || BEM_BLOCK_NAME}--months_dropdown`}
                                onChange={this.onMonthsChange}
                                options={this.monthsOptions}
                                selection
                                value={find(this.monthsOptions, (opt) => opt.value === months)}
                            />
                        </Grid.Column>
                    )}

                    {showDays && (
                        <Grid.Column
                            className={classes.dropdownColumn}
                        >
                            <Dropdown
                                className={classes.dropdown}
                                clearable={false}
                                disable={disable}
                                fluid
                                id={`${id || BEM_BLOCK_NAME}--days_dropdown`}
                                onChange={this.onDaysChange}
                                options={this.daysOptions}
                                selection
                                value={find(this.daysOptions, (opt) => opt.value === days)}
                            />
                        </Grid.Column>
                    )}

                    {showHours && (
                        <Grid.Column
                            className={classes.dropdownColumn}
                        >
                            <Dropdown
                                className={classes.dropdown}
                                clearable={false}
                                disable={disable}
                                fluid
                                id={`${id || BEM_BLOCK_NAME}--hours_dropdown`}
                                onChange={this.onHoursChange}
                                options={this.hoursOptions}
                                selection
                                value={find(this.hoursOptions, (opt) => opt.value === hours)}
                            />
                        </Grid.Column>
                    )}

                    {showMinutes && (
                        <Grid.Column
                            className={classes.dropdownColumn}
                        >
                            <Dropdown
                                className={classes.dropdown}
                                clearable={false}
                                disable={disable}
                                fluid
                                id={`${id || BEM_BLOCK_NAME}--minutes_dropdown`}
                                onChange={this.onMinutesChange}
                                options={this.minutesOptions}
                                selection
                                value={find(this.minutesOptions, (opt) => opt.value === minutes)}
                            />
                        </Grid.Column>
                    )}

                    {showSeconds && (
                        <Grid.Column
                            className={classes.dropdownColumn}
                        >
                            <Dropdown
                                className={classes.dropdown}
                                clearable={false}
                                disable={disable}
                                fluid
                                id={`${id || BEM_BLOCK_NAME}--seconds_dropdown`}
                                onChange={this.onSecondsChange}
                                options={this.secondsOptions}
                                selection
                                value={find(this.secondsOptions, (opt) => opt.value === seconds)}
                            />
                        </Grid.Column>
                    )}

                    {isString(error) && (
                        <Grid.Column className={classes.errorColumn} width={12}>
                            <Typography
                                classes={{
                                    body2: classes.error,
                                }}
                                variant="body2"
                            >
                                {error}
                            </Typography>
                        </Grid.Column>
                    )}
                </Grid>
            </div>
        );
    }
}

DurationPicker.propTypes = propTypes;
DurationPicker.defaultProps = defaultProps;

export default DurationPicker;
