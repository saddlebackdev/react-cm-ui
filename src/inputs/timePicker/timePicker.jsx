import {
    clone,
    find,
    isArray,
    isEmpty,
    isEqual,
    isFunction,
    isNil,
    isObject,
    map,
    partialRight,
    range as lodashRange,
    replace,
    sortBy,
    trim,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import CreatableOptionComponent from './timePickerCreatableOption';
import Icon from '../../dataDisplay/icon';
import Input from '../input';
import Select from '../select/select';

const propTypes = {
    /**
    * Assign additional class names to the TimePicker.
    */
    className: PropTypes.string,
    /**
    * A TimePicker can be disabled.
    */
    disable: PropTypes.bool,
    /**
    * A TimePicker can be in an error state for input validation purposes.
    */
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    /**
     * The `id` of the TimePicker.
     * Individual subcomponents that comprise the TimePicker will have various
     * strings appended to this to make up their full `id` prop values.
     */
    id: PropTypes.string,
    /**
     * The label for the TimePicker.
     */
    label: PropTypes.string,
    /**
     * The TimePicker can have "nested" styling applied to it.
     */
    nest: PropTypes.bool,
    /**
     * The `onChange` event handler.
     */
    onChange: PropTypes.func,
    /**
     * Boolean flag indicating whether the TimePicker will be used to select a
     * range of time (i.e. 'from' time and 'to' time) or just a single time.
     */
    range: PropTypes.bool,
    /**
     * A TimePicker can be required.
     */
    required: PropTypes.bool,
    /**
     * Boolean flag indicating whether or not the TimePicker should include a
     * Time Zone Select as well.  This prop is optional, and defaults to `true`
     * (meaning the Time Zone Select will be shown).
     */
    showTimezone: PropTypes.bool,
    /**
    * Assign additional inline styles to the TimePicker.
    */
    style: PropTypes.shape({}),
    /**
     * The value of the TimePicker.
     */
    value: PropTypes.shape({
        timeDisplay: PropTypes.string,
        timeFrom: PropTypes.string,
        timeTo: PropTypes.string,
        timeZone: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({}),
        ]),
    }),
    /**
     * This prop dictates how the TimePicker will handle searches on its
     * Time Zones select (i.e. which attribute will it use to find matches).
     */
    zoneMatchProp: PropTypes.oneOf(['any', 'label', 'value']),
    /**
     * An array of select options representing Time Zones passed to the
     * TimePicker.
     *
     * These should be standard `{ label: '...', value: '...' }` objects.
     *
     * The `value`s should be IANA/Olson/TZDB style time zone identifiers,
     * e.g. 'America/Los_Angeles' for the U.S. Pacific Time Zone.
     *
     * This prop should be used if a particular style of Time Zone options
     * (i.e. with a specific style for the `label`s) is desired (e.g. it is
     * supplied by the API and is the standard list for the application).
     *
     * This prop is optional; if it is elided and if `showTimezone` is `true`
     * (or elided) then Moment JS will be used to produce a default set of
     * time zone options to use.
     */
    zoneOptions: PropTypes.arrayOf(PropTypes.shape({})),
    /**
    * The placeholder text to be used in the Time Zones select in the
    * TimePicker.
    */
    zonePlaceholderText: PropTypes.string,
};

const defaultProps = {
    className: undefined,
    disable: false,
    error: undefined,
    id: undefined,
    label: undefined,
    nest: false,
    onChange: undefined,
    range: false,
    required: false,
    showTimezone: true,
    style: undefined,
    value: undefined,
    zoneMatchProp: 'label',
    zoneOptions: undefined,
    zonePlaceholderText: 'Select a Time Zone',
};

const creatableSelectPromptTextCreator = (label) => (label);

const createableValueComponent = ({
    children,
}) => (
    <div className="Select-value">
        <span
            className="Select-value-label"
        >
            <span>
                {children}
            </span>
        </span>
    </div>
);

/**
 * The TimePicker component represents a control that allows the user to
 * select a single time of day or a range (with Time From and Time To).
 * Usually it also includes a Time Zone selector as well, although this may be
 * suppressed if so desired for particular use cases where the Time Zone is not
 * needed.
 */
class TimePicker extends React.Component {
    constructor(props) {
        super(props);

        const zoneOptions = this.renderZoneOptions();
        const guessedTimeZone = moment.tz.guess();

        this.state = {
            hourOptions: this.renderHourOptions(),
            isTimePopoverActive: false,
            minuteOptions: this.renderMinuteOptions(),
            periodOptions: this.renderPeriodOptions(),
            value: clone(props.value) || {
                timeDisplay: null,
                timeFrom: null,
                timeTo: null,
                timeZone: find(zoneOptions, (o) => o.value === guessedTimeZone),
            },
            zoneOptions,
        };

        this.onChange = this.onChange.bind(this);
        this.onClickOutsideRef = this.onClickOutside.bind(this);
        this.onInputKeyDown = this.onInputKeyDown.bind(this);
        this.onInputMask = this.onInputMask.bind(this);
        this.onTimeDropdownChange = this.onTimeDropdownChange.bind(this);
        this.onTimePopoverToggle = this.onTimePopoverToggle.bind(this);
        this.onZoneDropdownChange = this.onZoneDropdownChange.bind(this);

        this.onTimeHourDropdownChange = partialRight(this.onTimeDropdownChange.bind(null, 'hour'), true);
        this.onTimeHourToDropdownChange = partialRight(this.onTimeDropdownChange.bind(null, 'hourTo'), true);
        this.onTimeMinuteDropdownChange = partialRight(this.onTimeDropdownChange.bind(null, 'minute'), true);
        this.onTimeMinuteToDropdownChange = partialRight(this.onTimeDropdownChange.bind(null, 'minuteTo'), true);
        this.onTimePeriodDropdownChange = partialRight(this.onTimeDropdownChange.bind(null, 'period'), true);
        this.onTimePeriodToDropdownChange = partialRight(this.onTimeDropdownChange.bind(null, 'periodTo'), true);

        this.timePickerRef = null;
    }

    componentDidMount() {
        document.addEventListener('click', this.onClickOutsideRef);
    }

    componentDidUpdate(prevProps) {
        const {
            onChange,
            range,
            value: nextValue,
        } = this.props;

        const {
            value: prevValue,
        } = prevProps;

        if (!isEqual(nextValue, prevValue)) {
            let isDirty = false;
            const newValue = clone(nextValue);

            if (!isEmpty(nextValue)) {
                if (!isEmpty(nextValue.timeDisplay)) {
                    newValue.timeDisplay = range ? `${newValue.timeFrom} - ${newValue.timeTo}` : newValue.timeFrom;
                    isDirty = true;
                }
            }

            this.setState({ value: newValue });

            if (isDirty && isFunction(onChange)) {
                onChange(newValue);
            }
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.onClickOutsideRef);
    }

    onChange(value, field) {
        const {
            onChange,
            range,
        } = this.props;

        const { value: prevValueFromState } = this.state;

        const newValue = clone(prevValueFromState);

        if (isObject(value)) {
            const mask = '__:__ __';

            newValue.timeFrom = newValue.timeFrom || mask;

            if (field === 'hour') {
                newValue.timeFrom = replace(newValue.timeFrom, newValue.timeFrom[0] + newValue.timeFrom[1] + newValue.timeFrom[2], `${value.label}:`);
            } else if (field === 'minute') {
                newValue.timeFrom = replace(newValue.timeFrom, newValue.timeFrom[2] + newValue.timeFrom[3] + newValue.timeFrom[4], `:${value.label}`);
            } else if (field === 'period') {
                newValue.timeFrom = replace(newValue.timeFrom, newValue.timeFrom[5] + newValue.timeFrom[6] + newValue.timeFrom[7], ` ${value.label}`);
            } else if (field === 'zone') {
                newValue.timeZone = value;
            }

            if (range) {
                newValue.timeTo = newValue.timeTo || mask;

                if (field === 'hourTo') {
                    newValue.timeTo = replace(newValue.timeTo, newValue.timeTo[0] + newValue.timeTo[1] + newValue.timeTo[2], `${value.label}:`);
                } else if (field === 'minuteTo') {
                    newValue.timeTo = replace(newValue.timeTo, newValue.timeTo[2] + newValue.timeTo[3] + newValue.timeTo[4], `:${value.label}`);
                } else if (field === 'periodTo') {
                    newValue.timeTo = replace(newValue.timeTo, newValue.timeTo[5] + newValue.timeTo[6] + newValue.timeTo[7], ` ${value.label}`);
                }
            }

            newValue.timeDisplay = range ? `${newValue.timeFrom} - ${newValue.timeTo}` : newValue.timeFrom;
        } else {
            const valueUpperCased = value.toUpperCase();
            newValue.timeDisplay = valueUpperCased;
            newValue.timeFrom = range ? trim(valueUpperCased.split('-')[0]) : valueUpperCased;
            newValue.timeTo = range ? trim(valueUpperCased.split('-')[1]) : null;
        }

        if (isFunction(onChange)) {
            onChange(newValue);
        } else {
            this.setState({ value: newValue });
        }
    }

    onClickOutside(event) {
        const isOutside = !isNil(this.timePickerRef) && this.timePickerRef.contains(event.target);
        const { isTimePopoverActive } = this.state;

        if (isOutside ||
            !isTimePopoverActive ||
            (event.target.className?.includes('Select-option') ?? false)) {
            return;
        }

        this.onTimePopoverToggle();
    }

    onInputMask(value) {
        const { range } = this.props;

        // hh:dd am - hh:dd pm
        if (range) {
            return [
                /[0-1]/,
                value.toString()[0] * 1 === 1 ? /[0-2]/ : /[0-9]/,
                ':',
                /[0-5]/,
                /[0-9]/,
                ' ',
                /[A,P]/i,
                /[M]/i,
                ' ',
                '-',
                ' ',
                /[0-1]/,
                value.toString()[12] * 1 === 1 ? /[0-2]/ : /[0-9]/,
                ':',
                /[0-5]/,
                /[0-9]/,
                ' ',
                /[A,P]/i,
                /[M]/i,
            ];
        }

        return [
            /[0-1]/,
            value.toString()[0] * 1 === 1 ? /[0-2]/ : /[0-9]/,
            ':',
            /[0-5]/,
            /[0-9]/,
            ' ',
            /[A,P]/i,
            /[M]/i,
        ];
    }

    onInputKeyDown(event) {
        const { isTimePopoverActive } = this.state;

        if (!isTimePopoverActive && event.key === 'ArrowDown') {
            this.onTimePopoverToggle();
        }

        if (isTimePopoverActive && event.key === 'ArrowUp') {
            this.onTimePopoverToggle();
        }
    }

    onTimePopoverToggle() {
        const { disable } = this.props;

        if (!disable) {
            this.setState(
                ({ isTimePopoverActive }) => ({ isTimePopoverActive: !isTimePopoverActive }),
            );
        }
    }

    onTimeDropdownChange(field, selectedOption) {
        this.onChange(selectedOption, field);
    }

    onZoneDropdownChange(selectedOption) {
        this.onChange(selectedOption, 'zone');
    }

    renderHourOptions() {
        return map(lodashRange(1, 13), (v) => {
            const number = v.toString().length < 2 ? `0${v}` : v;
            return { label: number.toString(), value: number * 1 };
        });
    }

    renderMinuteOptions() {
        return map(lodashRange(0, 60, 5), (v) => {
            const number = v.toString().length < 2 ? `0${v}` : v;
            return { label: number.toString(), value: number * 1 };
        });
    }

    renderPeriodOptions() {
        return [
            {
                label: 'AM',
                value: 0,
            }, {
                label: 'PM',
                value: 1,
            },
        ];
    }

    renderZoneOptions() {
        const {
            showTimezone,
            zoneOptions,
        } = this.props;

        // If `showTimezone` is `false` or if `zoneOptions` appears to be set
        // with an array or time zone options then just return what we have; no
        // need to calculate our own set of time zone options.
        if (!showTimezone ||
            (isArray(zoneOptions) && !isEmpty(zoneOptions))) {
            return zoneOptions;
        }

        /* eslint-disable no-underscore-dangle */
        const zoneNames = Object.keys(moment.tz._zones)
            .map((tz) => {
                // At some point _zones turns into an array of objects instead of strings.
                if (typeof moment.tz._zones[tz] === 'string') {
                    return moment.tz._zones[tz].split('|')[0];
                }

                return moment.tz._zones[tz].name;
            })
            .filter((tz) => (tz.indexOf('/') >= 0));
        /* eslint-enable no-underscore-dangle */

        return sortBy(
            map(
                zoneNames,
                (tzName) => {
                    const zone = moment.tz(tzName);

                    return {
                        abbr: zone.zoneAbbr(),
                        label: `(${zone.format('Z z')}) ${tzName.split('/')[0].replace('_', ' ')} (${tzName.split('/').slice(-1)[0].replace('_', ' ')})`,
                        offset: zone.format('Z'),
                        value: tzName,
                    };
                },
            ),
            (tz) => (tz.offset),
        );
    }

    render() {
        const {
            className,
            disable,
            error,
            id,
            label,
            nest,
            range,
            required,
            showTimezone,
            style,
            zoneMatchProp,
            zonePlaceholderText,
        } = this.props;

        const {
            hourOptions,
            isTimePopoverActive,
            minuteOptions,
            periodOptions,
            value,
            zoneOptions,
        } = this.state;

        const containerClasses = ClassNames('ui', 'time-picker', className, {
            'time-picker-disable': disable,
            'time-picker-error': error,
            'time-picker-nest': nest,
            'time-picker-range': range,
        });

        const hasTimeFrom = !isNil(value?.timeFrom);

        const hourFromDropdownValue = hasTimeFrom ?
            find(
                hourOptions,
                (o) => o.label === (value.timeFrom[0] + value.timeFrom[1]).toString(),
            ) : null;

        let timeFromMinutes = value?.timeFrom?.substring(3, 5) ?? '';
        timeFromMinutes = timeFromMinutes === '__' ? '' : timeFromMinutes;

        const minuteFromDropdownValue = hasTimeFrom ?
            find(
                minuteOptions,
                (o) => o.label === timeFromMinutes,
            ) ?? {
                label: timeFromMinutes,
                value: timeFromMinutes,
            } : null;

        const periodFromDropdownValue = hasTimeFrom ?
            find(
                periodOptions,
                (o) => o.label === value.timeFrom[6] + value.timeFrom[7],
            ) : null;

        let hourToDropdownValue;
        let minuteToDropdownValue;
        let periodToDropdownValue;

        if (range) {
            const hasTimeTo = !isNil(value?.timeTo);

            hourToDropdownValue = hasTimeTo ?
                find(
                    hourOptions,
                    (o) => o.label === (value.timeTo[0] + value.timeTo[1]).toString(),
                ) : null;

            let timeToMinutes = value?.timeTo?.substring(3, 5) ?? '';
            timeToMinutes = timeToMinutes === '__' ? '' : timeToMinutes;

            minuteToDropdownValue = hasTimeTo ?
                find(
                    minuteOptions,
                    (o) => o.label === timeToMinutes,
                ) ?? {
                    label: timeToMinutes,
                    value: timeToMinutes,
                } : null;

            periodToDropdownValue = hasTimeTo ?
                find(
                    periodOptions,
                    (o) => o.label === value.timeTo[6] + value.timeTo[7],
                ) : null;
        }

        return (
            <div
                className={containerClasses}
                id={id}
                ref={(ref) => { this.timePickerRef = ref; }}
                style={style}
            >
                <Input
                    className="time-picker-input"
                    disabled={disable}
                    error={error}
                    guide
                    icon={(
                        <Icon
                            color={isTimePopoverActive ? 'highlight' : null}
                            compact
                            title="Show Time Picker"
                            type="time"
                            onClick={this.onTimePopoverToggle}
                        />
                    )}
                    id={id ? `${id}-input` : null}
                    keepCharPositions
                    label={label}
                    mask={this.onInputMask}
                    onChange={this.onChange}
                    onKeyDown={this.onInputKeyDown}
                    placeholder={range ? 'hh:mm AM - hh:mm PM' : 'hh:mm AM'}
                    required={required}
                    tabIndex={0}
                    value={value && value.timeDisplay ? value.timeDisplay : null}
                />

                {showTimezone && (
                    <Select
                        className="time-picker-zone-dropdown"
                        clearable={false}
                        disable={disable}
                        id={id ? `${id}-zone_dropdown` : null}
                        matchProp={zoneMatchProp || 'label'}
                        menuMaxHeight={448}
                        onChange={this.onZoneDropdownChange}
                        options={zoneOptions}
                        placeholder={zonePlaceholderText || 'Select a Time Zone'}
                        searchable
                        tabIndex={0}
                        value={value.timeZone}
                    />
                )}

                {isTimePopoverActive ? (
                    <div
                        className="time-picker-popover"
                        id={id ? `${id}-popover` : null}
                    >
                        {/* eslint-disable jsx-a11y/label-has-associated-control */}
                        {range && <label className="label">From</label>}
                        {/* eslint-enable jsx-a11y/label-has-associated-control */}

                        <div>
                            <Select
                                clearable={false}
                                id={id ? `${id}-hour_dropdown` : null}
                                menuMaxHeight={448}
                                onChange={this.onTimeHourDropdownChange}
                                options={hourOptions}
                                placeholder="hh"
                                searchable
                                style={{
                                    minWidth: 72,
                                }}
                                tabIndex={0}
                                value={hourFromDropdownValue}
                            />

                            <span className="colon">:</span>

                            <Select
                                clearable={false}
                                creatable
                                id={id ? `${id}-minute_dropdown` : null}
                                menuMaxHeight={448}
                                onChange={this.onTimeMinuteDropdownChange}
                                optionComponent={CreatableOptionComponent}
                                options={minuteOptions}
                                placeholder="mm"
                                promptTextCreator={creatableSelectPromptTextCreator}
                                searchable
                                style={{
                                    minWidth: 72,
                                }}
                                tabIndex={0}
                                value={minuteFromDropdownValue}
                                valueComponent={createableValueComponent}
                            />

                            <Select
                                clearable={false}
                                id={id ? `${id}-period_dropdown` : null}
                                menuMaxHeight={448}
                                onChange={this.onTimePeriodDropdownChange}
                                options={periodOptions}
                                placeholder="AM"
                                searchable
                                style={{
                                    minWidth: 72,
                                }}
                                tabIndex={0}
                                value={periodFromDropdownValue}
                            />
                        </div>

                        {/* eslint-disable jsx-a11y/label-has-associated-control */}
                        {range && <label className="label">To</label>}
                        {/* eslint-enable jsx-a11y/label-has-associated-control */}

                        {range && (
                            <div>
                                <Select
                                    clearable={false}
                                    id={id ? `${id}-hour_to_dropdown` : null}
                                    menuMaxHeight={448}
                                    onChange={this.onTimeHourToDropdownChange}
                                    options={hourOptions}
                                    placeholder="hh"
                                    searchable
                                    style={{
                                        minWidth: 72,
                                    }}
                                    tabIndex={0}
                                    value={hourToDropdownValue}
                                />

                                <span className="colon">:</span>

                                <Select
                                    clearable={false}
                                    creatable
                                    id={id ? `${id}-minute_to_dropdown` : null}
                                    menuMaxHeight={448}
                                    onChange={this.onTimeMinuteToDropdownChange}
                                    optionComponent={CreatableOptionComponent}
                                    options={minuteOptions}
                                    placeholder="mm"
                                    promptTextCreator={creatableSelectPromptTextCreator}
                                    searchable
                                    style={{
                                        minWidth: 72,
                                    }}
                                    tabIndex={0}
                                    value={minuteToDropdownValue}
                                    valueComponent={createableValueComponent}
                                />

                                <Select
                                    clearable={false}
                                    id={id ? `${id}-period_to_dropdown` : null}
                                    menuMaxHeight={448}
                                    onChange={this.onTimePeriodToDropdownChange}
                                    options={periodOptions}
                                    placeholder="PM"
                                    searchable
                                    style={{
                                        minWidth: 72,
                                    }}
                                    tabIndex={0}
                                    value={periodToDropdownValue}
                                />
                            </div>
                        )}
                    </div>
                ) : null}
            </div>
        );
    }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
