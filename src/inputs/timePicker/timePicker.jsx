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
import Dropdown from '../dropdown/dropdown';
import Icon from '../../dataDisplay/icon';
import Input from '../input';

const propTypes = {
    className: PropTypes.string,
    disable: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    id: PropTypes.string,
    label: PropTypes.string,
    nest: PropTypes.bool,
    onChange: PropTypes.func,
    range: PropTypes.bool,
    required: PropTypes.bool,
    showTimezone: PropTypes.bool,
    style: PropTypes.shape({}),
    value: PropTypes.shape({
        timeDisplay: PropTypes.string,
        timeFrom: PropTypes.string,
        timeTo: PropTypes.string,
        timeZone: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.shape({}),
        ]),
    }),
    zoneMatchProp: PropTypes.oneOf(['any', 'label', 'value']),
    zoneOptions: PropTypes.arrayOf(PropTypes.shape({})),
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

        this.onTimeHourDropdownChange = partialRight(this.onTimeDropdownChange, 'hour');
        this.onTimeHourToDropdownChange = partialRight(this.onTimeDropdownChange, 'hourTo');
        this.onTimeMinuteDropdownChange = partialRight(this.onTimeDropdownChange, 'minute');
        this.onTimeMinuteToDropdownChange = partialRight(this.onTimeDropdownChange, 'minuteTo');
        this.onTimePeriodDropdownChange = partialRight(this.onTimeDropdownChange, 'period');
        this.onTimePeriodToDropdownChange = partialRight(this.onTimeDropdownChange, 'periodTo');

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

            if (nextValue) {
                if (!nextValue.timeDisplay) {
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

    onClickOutside(event) {
        const isOutside = !isNil(this.timePickerRef) && this.timePickerRef.contains(event.target);
        const { isTimePopoverActive } = this.state;

        if (isOutside ||
            !isTimePopoverActive ||
            event.target.className === 'Select-option') {
            return;
        }

        this.onTimePopoverToggle();
    }

    onTimeDropdownChange(field, selectedOption) {
        this.onChange(selectedOption, field);
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

            // TODO: Convert to `switch` ...?
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

                // TODO: Convert to `switch` ...?
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
        const { zoneOptions } = this.props;

        if (isArray(zoneOptions) && !isEmpty(zoneOptions)) {
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

        const minuteFromDropdownValue = hasTimeFrom ?
            find(
                minuteOptions,
                (o) => o.label === (value.timeFrom[3] + value.timeFrom[4]).toString(),
            ) : null;

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

            minuteToDropdownValue = hasTimeTo ?
                find(
                    minuteOptions,
                    (o) => o.label === (value.timeTo[3] + value.timeTo[4]).toString(),
                ) : null;

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
                    <Dropdown
                        className="time-picker-zone-dropdown"
                        clearable={false}
                        disable={disable}
                        id={id ? `${id}-zone_dropdown` : null}
                        onChange={this.onZoneDropdownChange}
                        options={zoneOptions}
                        placeholder={zonePlaceholderText || 'Select a Time Zone'}
                        selection
                        selectionMatchProp={zoneMatchProp || 'label'}
                        menuMaxHeight={448}
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
                            <Dropdown
                                clearable={false}
                                id={id ? `${id}-hour_dropdown` : null}
                                onChange={this.onTimeHourDropdownChange}
                                options={hourOptions}
                                placeholder="hh"
                                selection
                                menuMaxHeight={448}
                                style={{
                                    minWidth: 72,
                                }}
                                tabIndex={0}
                                value={hourFromDropdownValue}
                            />

                            <span className="colon">:</span>

                            <Dropdown
                                clearable={false}
                                id={id ? `${id}-minute_dropdown` : null}
                                onChange={this.onTimeMinuteDropdownChange}
                                options={minuteOptions}
                                placeholder="mm"
                                selection
                                menuMaxHeight={448}
                                selectionCreatable
                                style={{
                                    minWidth: 72,
                                }}
                                tabIndex={0}
                                value={minuteFromDropdownValue}
                            />

                            <Dropdown
                                clearable={false}
                                id={id ? `${id}-period_dropdown` : null}
                                onChange={this.onTimePeriodDropdownChange}
                                options={periodOptions}
                                placeholder="AM"
                                selection
                                menuMaxHeight={448}
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
                                <Dropdown
                                    clearable={false}
                                    id={id ? `${id}-hour_to_dropdown` : null}
                                    onChange={this.onTimeHourToDropdownChange}
                                    options={hourOptions}
                                    placeholder="hh"
                                    selection
                                    menuMaxHeight={448}
                                    style={{
                                        minWidth: 72,
                                    }}
                                    tabIndex={0}
                                    value={hourToDropdownValue}
                                />

                                <span className="colon">:</span>

                                <Dropdown
                                    clearable={false}
                                    id={id ? `${id}-minute_to_dropdown` : null}
                                    onChange={this.onTimeMinuteToDropdownChange}
                                    options={minuteOptions}
                                    placeholder="mm"
                                    selection
                                    menuMaxHeight={448}
                                    selectionCreatable
                                    style={{
                                        minWidth: 72,
                                    }}
                                    tabIndex={0}
                                    value={minuteToDropdownValue}
                                />

                                <Dropdown
                                    clearable={false}
                                    id={id ? `${id}-period_to_dropdown` : null}
                                    onChange={this.onTimePeriodToDropdownChange}
                                    options={periodOptions}
                                    placeholder="PM"
                                    selection
                                    menuMaxHeight={448}
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
