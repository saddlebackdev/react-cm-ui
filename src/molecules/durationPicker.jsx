
import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Input from '../elements/input';
import Header from '../elements/header';

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

class DurationPicker extends Component {
    constructor(props) {
        super(props);

        const state = this._getStateFromDurationValue(props.value);
        this.state = { ...state || defaultState };

        this._areMomentDurationsEqual = this._areMomentDurationsEqual.bind(this);
        this._buildMomentDuration = this._buildMomentDuration.bind(this);
        this._handleStateChange = this._handleStateChange.bind(this);
        this._onDaysChange = this._onDaysChange.bind(this);
        this._onHoursChange = this._onHoursChange.bind(this);
        this._onMinutesChange = this._onMinutesChange.bind(this);
        this._onMonthsChange = this._onMonthsChange.bind(this);
        this._onSecondsChange = this._onSecondsChange.bind(this);
        this._onYearsChange = this._onYearsChange.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        const { value: nextValue } = this.props;
        const { value: prevValue } = prevState;

        if (!this._areMomentDurationsEqual(prevValue, nextValue)) {
            if (moment.isDuration(nextValue)) {
                this.setState(this._getStateFromDurationValue(nextValue));
            } else { // if value is nil or invalid, reset to default state
                this.setState(defaultState);
            }
        }
    }

    render() {
        const {
            className, disabled, error, id, nest, required,
            showDays, showHours, showMinutes, showMonths, showSeconds, showYears,
            style,
        } = this.props;

        const {
            days, hours, minutes, months, seconds, value, years,
        } = this.state;

        const containerClasses = ClassNames('ui', 'duration-picker', className, {
            'duration-picker-disable': disabled,
            'duration-picker-error': error,
            'duration-picker-nest': nest,
        });

        // TODO/FIXME: Is there a smarter way for this? :-)
        const needsHoursToMinutesSeparator = showHours && showMinutes;
        const needsMinutesToSecondsSeparator = showMinutes && showSeconds;
        const onlyOne =
            showHours && !showMinutes && !showSeconds ||
            showMinutes && !showHours && !showSeconds ||
            showSeconds && !showHours && !showMinutes;

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
                        disabled={disabled}
                        id={`${id || 'duration-picker'}-years`}
                        label="Years"
                        max={99}
                        min={0}
                        ref="yearsPicker"
                        type="number"
                        value={years}
                        onChange={this._onYearsChange}
                    />
                ) : null}

                {showMonths ? (
                    <Input
                        className="duration-picker-input"
                        disabled={disabled}
                        id={`${id || 'duration-picker'}-months`}
                        label="Months"
                        max={11}
                        min={0}
                        ref="monthsPicker"
                        type="number"
                        value={months}
                        onChange={this._onMonthsChange}
                    />
                ) : null}

                {showDays ? (
                    <Input
                        className="duration-picker-input"
                        disabled={disabled}
                        id={`${id || 'duration-picker'}-days`}
                        label="Days"
                        max={29}
                        min={0}
                        ref="daysPicker"
                        type="number"
                        value={days}
                        onChange={this._onDaysChange}
                    />
                ) : null}

                <div className={hhMmSsClasses}>
                    {showHours ? (
                        <Input
                            className="duration-picker-input"
                            disabled={disabled}
                            id={`${id || 'duration-picker'}-hours`}
                            label="Hours"
                            max={23}
                            min={0}
                            ref="hoursPicker"
                            type="number"
                            value={hours}
                            onChange={this._onHoursChange}
                        />
                    ) : null}

                    {needsHoursToMinutesSeparator ? colonJsx : null}

                    {showMinutes ? (
                        <Input
                            className="duration-picker-input"
                            disabled={disabled}
                            id={`${id || 'duration-picker'}-minutes`}
                            label="Minutes"
                            max={59}
                            min={0}
                            ref="minutesPicker"
                            type="number"
                            value={minutes}
                            onChange={this._onMinutesChange}
                        />
                    ) : null}

                    {needsMinutesToSecondsSeparator ? colonJsx : null}

                    {showSeconds ? (
                        <Input
                            className="duration-picker-input"
                            disabled={disabled}
                            id={`${id || 'duration-picker'}-seconds`}
                            label="Seconds"
                            max={59}
                            min={0}
                            ref="secondsPicker"
                            type="number"
                            value={seconds}
                            onChange={this._onSecondsChange}
                        />
                    ) : null}
                </div>
            </div>
        );
    }

    _areMomentDurationsEqual(durationA, durationB) {
        const durationAHasValue = moment.isDuration(durationA);
        const durationBHasValue = moment.isDuration(durationB);

        if (!durationAHasValue && !durationBHasValue) {
            return true;
        } if (!durationAHasValue) {
            return false;
        } if (!durationBHasValue) {
            return false;
        } // both are valid moment duration objects
        return durationA.valueOf() === durationB.valueOf();
    }

    _buildMomentDuration(updatedState) {
        const {
            days, hours, minutes, months, seconds, years,
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

    _getStateFromDurationValue(duration) {
        if (moment.isDuration(duration)) {
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
        return null;
    }

    _handleStateChange(updatedState) {
        const updatedMomentDurationValue = this._buildMomentDuration(
            { ...this.state, ...updatedState },
        );

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

    _onDaysChange(value) {
        this._handleStateChange({ days: value });
    }

    _onHoursChange(value) {
        this._handleStateChange({ hours: value });
    }

    _onMinutesChange(value) {
        this._handleStateChange({ minutes: value });
    }

    _onMonthsChange(value) {
        this._handleStateChange({ months: value });
    }

    _onSecondsChange(value) {
        this._handleStateChange({ seconds: value });
    }

    _onYearsChange(value) {
        this._handleStateChange({ years: value });
    }
}

DurationPicker.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    id: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    showDays: PropTypes.bool,
    showHours: PropTypes.bool,
    showMinutes: PropTypes.bool,
    showMonths: PropTypes.bool,
    showSeconds: PropTypes.bool,
    showYears: PropTypes.bool,
    value: (props, propName, componentName) => {
        const theProp = props[propName];
        if (!_.isNil(theProp) && !moment.isDuration(theProp)) {
            return new Error(
                `Invalid prop \`${propName}\` supplied to` +
                ` \`${componentName}\`. Validation failed.`,
            );
        }
    }, // TODO: There is a `react-moment-proptypes` package we can consider [ https://www.npmjs.com/package/react-moment-proptypes ]
};

DurationPicker.defaultProps = {
    showDays: true,
    showHours: true,
    showMinutes: false,
    showMonths: false,
    showSeconds: false,
    showYears: false,
};

export default DurationPicker;
