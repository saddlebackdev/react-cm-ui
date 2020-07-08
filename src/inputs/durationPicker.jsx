import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import Input from './input';

const propTypes = {
    className: PropTypes.string,
    /**
     * A DurationPicker can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    id: PropTypes.string,
    nest: PropTypes.bool,
    onChange: PropTypes.func,
    showDays: PropTypes.bool,
    showHours: PropTypes.bool,
    showMinutes: PropTypes.bool,
    showMonths: PropTypes.bool,
    showSeconds: PropTypes.bool,
    showYears: PropTypes.bool,
    style: PropTypes.shape({}),
    value: MomentPropTypes.momentDurationObj,
};

const defaultProps = {
    className: null,
    disable: false,
    disabled: false,
    nest: null,
    showDays: true,
    showHours: true,
    showMinutes: false,
    showMonths: false,
    showSeconds: false,
    showYears: false,
    error: null,
    id: null,
    onChange: null,
    style: null,
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

const colonJsx = (
    <span className="colon">:</span>
);

class DurationPicker extends React.Component {
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
    }

    componentDidUpdate(prevProps, prevState) {
        const {
            disabled: prevDisabled,
            value: prevValue,
        } = prevState;
        const {
            disabled,
            value,
        } = this.props;

        if (prevDisabled !== disabled && disabled) {
            // eslint-disable-next-line no-console
            console.warn('DurationPicker (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }

        if (!DurationPicker.areMomentDurationsEqual(prevValue, value)) {
            if (moment.isDuration(value)) {
                this.setState(DurationPicker.getStateFromDurationValue(value));
            } else { // if value is nil or invalid, reset to default state
                this.setState(defaultState);
            }
        }
    }

    onDaysChange(value) {
        this.onStateChange({ days: value });
    }

    onHoursChange(value) {
        this.onStateChange({ hours: value });
    }

    onMinutesChange(value) {
        this.onStateChange({ minutes: value });
    }

    onMonthsChange(value) {
        this.onStateChange({ months: value });
    }

    onSecondsChange(value) {
        this.onStateChange({ seconds: value });
    }

    onYearsChange(value) {
        this.onStateChange({ years: value });
    }

    onStateChange(updatedState) {
        const updatedMomentDurationValue = DurationPicker.buildMomentDuration({
            ...this.state,
            ...updatedState,
        });
        const { onChange } = this.props;

        if (_.isFunction(onChange)) { // controlled component; we own the unit of time component states, but _not_ the complete value state
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

    render() {
        const {
            className,
            disable,
            disabled,
            error,
            id,
            nest,
            showDays,
            showHours,
            showMinutes,
            showMonths,
            showSeconds,
            showYears,
            style,
        } = this.props;
        const {
            days,
            hours,
            minutes,
            months,
            seconds,
            years,
        } = this.state;
        const isDisabled = disable || disabled;
        const containerClasses = ClassNames('ui', 'duration-picker', className, {
            'duration-picker-disable': isDisabled,
            'duration-picker-error': error,
            'duration-picker-nest': nest,
        });

        // TODO/FIXME: Is there a smarter way for this? :-)
        const needsHoursToMinutesSeparator = showHours && showMinutes;
        const needsMinutesToSecondsSeparator = showMinutes && showSeconds;
        const onlyOne =
            (showHours && !showMinutes && !showSeconds) ||
            (showMinutes && !showHours && !showSeconds) ||
            (showSeconds && !showHours && !showMinutes);

        const hhMmSsClasses = ClassNames('hh-mm-ss', {
            'only-one': onlyOne,
        });

        return (
            <div
                className={containerClasses}
                id={id}
                ref="durationPicker"
                style={style}
            >
                {showYears ? (
                    <Input
                        className="duration-picker-input"
                        disable={isDisabled}
                        id={`${id || 'duration-picker'}-years`}
                        label="Years"
                        max={99}
                        min={0}
                        ref="yearsPicker"
                        type="number"
                        value={years}
                        onChange={this.onYearsChange}
                    />
                ) : null}

                {showMonths ? (
                    <Input
                        className="duration-picker-input"
                        disable={isDisabled}
                        id={`${id || 'duration-picker'}-months`}
                        label="Months"
                        max={11}
                        min={0}
                        ref="monthsPicker"
                        type="number"
                        value={months}
                        onChange={this.onMonthsChange}
                    />
                ) : null}

                {showDays ? (
                    <Input
                        className="duration-picker-input"
                        disable={isDisabled}
                        id={`${id || 'duration-picker'}-days`}
                        label="Days"
                        max={29}
                        min={0}
                        ref="daysPicker"
                        type="number"
                        value={days}
                        onChange={this.onDaysChange}
                    />
                ) : null}

                <div className={hhMmSsClasses}>
                    {showHours && (
                        <Input
                            className="duration-picker-input"
                            disable={isDisabled}
                            id={`${id || 'duration-picker'}-hours`}
                            label="Hours"
                            max={23}
                            min={0}
                            ref="hoursPicker"
                            type="number"
                            value={hours}
                            onChange={this.onHoursChange}
                        />
                    )}

                    {needsHoursToMinutesSeparator ? colonJsx : null}

                    {showMinutes && (
                        <Input
                            className="duration-picker-input"
                            disable={isDisabled}
                            id={`${id || 'duration-picker'}-minutes`}
                            label="Minutes"
                            max={59}
                            min={0}
                            ref="minutesPicker"
                            type="number"
                            value={minutes}
                            onChange={this.onMinutesChange}
                        />
                    )}

                    {needsMinutesToSecondsSeparator && colonJsx}

                    {showSeconds && (
                        <Input
                            className="duration-picker-input"
                            disable={isDisabled}
                            id={`${id || 'duration-picker'}-seconds`}
                            label="Seconds"
                            max={59}
                            min={0}
                            ref="secondsPicker"
                            type="number"
                            value={seconds}
                            onChange={this.onSecondsChange}
                        />
                    )}
                </div>
            </div>
        );
    }
}

DurationPicker.propTypes = propTypes;
DurationPicker.defaultProps = defaultProps;

export default DurationPicker;
