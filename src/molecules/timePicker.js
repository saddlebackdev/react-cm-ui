'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Dropdown from '../atoms/dropdown';
import Icon from '../dataDisplay/icon';
import Input from '../atoms/input';

class TimePicker extends Component {
    constructor(props) {
        super(props);

        const zoneOptions = this._renderZoneOptions();
        const guessedTimeZone = moment.tz.guess();

        this.state = {
            hourOptions: this._renderHourOptions(),
            isTimePopoverActive: false,
            minuteOptions: this._renderMinuteOptions(),
            periodOptions: this._renderPeriodOptions(),
            value:  _.clone(props.value) || {
                timeDisplay: null,
                timeFrom: null,
                timeTo: null,
                timeZone: _.find(zoneOptions, o => o.value === guessedTimeZone),
            },
            zoneOptions,
        };

        this._onClickOutsideRef = this._onClickOutside.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (!_.isEqual(this.props.value, prevProps.value)) {
            let isDirty = false;
            let newValue = _.clone(this.props.value);

            if (this.props.value) {
                if (!this.props.value.timeDisplay) {
                    newValue.timeDisplay = this.props.range ? `${newValue.timeFrom} - ${newValue.timeTo}` : newValue.timeFrom;
                    isDirty = true;
                }
            }

            this.setState({ value: newValue });

            if (isDirty && !_.isUndefined(this.props.onChange)) {
                this.props.onChange(newValue);
            }
        }
    }

    render() {
        const { className, disable, error, id, label, nest, range, required, style, zonePlaceholderText } = this.props;
        const { hourOptions, isTimePopoverActive, minuteOptions, periodOptions, value, zoneMatchProp, zoneOptions } = this.state;
        const containerClasses = ClassNames('ui', 'time-picker', className, {
            'time-picker-disable': disable,
            'time-picker-error': error,
            'time-picker-nest': nest,
            'time-picker-range': range,
        });
        const hourFromDropdownValue = value && value.timeFrom ? _.find(hourOptions, o => o.label === (value.timeFrom[0] + value.timeFrom[1]).toString()) : null;
        const minuteFromDropdownValue = value && value.timeFrom ? _.find(minuteOptions, o => o.label === (value.timeFrom[3] + value.timeFrom[4]).toString()) : null;
        const periodFromDropdownValue = value && value.timeFrom ? _.find(periodOptions, o => o.label === value.timeFrom[6] + value.timeFrom[7]) : null;
        let hourToDropdownValue, minuteToDropdownValue, periodToDropdownValue;

        if (range) {
            hourToDropdownValue = value && value.timeTo ? _.find(hourOptions, o => o.label === (value.timeTo[0] + value.timeTo[1]).toString()) : null;
            minuteToDropdownValue = value && value.timeTo ? _.find(minuteOptions, o => o.label === (value.timeTo[3] + value.timeTo[4]).toString()) : null;
            periodToDropdownValue = value && value.timeTo ? _.find(periodOptions, o => o.label === value.timeTo[6] + value.timeTo[7]) : null;
        }

        return (
            <div
                className={containerClasses}
                id={id}
                ref="timePicker"
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
                            type="time"
                            onClick={this._onTimePopoverToggle.bind(this)}
                        />
                    )}
                    id={id ? `${id}-input` : null}
                    keepCharPositions
                    label={label}
                    mask={this._onInputMask.bind(this)}
                    onChange={this._onChange.bind(this)}
                    onKeyDown={this._onInputKeyDown.bind(this)}
                    placeholder={range ? 'hh:mm AM - hh:mm PM' : 'hh:mm AM'}
                    required={required}
                    tabIndex={1}
                    value={value && value.timeDisplay ? value.timeDisplay : null}
                />

                <Dropdown
                    className="time-picker-zone-dropdown"
                    clearable={false}
                    disable={disable}
                    id={id ? `${id}-zone_dropdown` : null}
                    onChange={this._onZoneDropdownChange.bind(this)}
                    options={zoneOptions}
                    placeholder={zonePlaceholderText || 'Select a Time Zone'}
                    selection
                    selectionMatchProp={zoneMatchProp || 'label'}
                    menuMaxHeight={448}
                    tabIndex={isTimePopoverActive ? 5 : 2}
                    value={value.timeZone}
                />

                {isTimePopoverActive ? (
                    <div
                        className="time-picker-popover"
                        id={id ? `${id}-popover` : null}
                    >
                        {this.props.range ? (
                            <label className="label">From</label>
                        ) : null}

                        <div>
                            <Dropdown
                                clearable={false}
                                id={id ? `${id}-hour_dropdown` : null}
                                onChange={this._onTimeDropdownChange.bind(this, 'hour')}
                                options={hourOptions}
                                placeholder="hh"
                                selection
                                menuMaxHeight={448}
                                style={{
                                    minWidth: 72,
                                }}
                                tabIndex={2}
                                value={hourFromDropdownValue}
                            />

                            <span className="colon">:</span>

                            <Dropdown
                                clearable={false}
                                id={id ? `${id}-minute_dropdown` : null}
                                onChange={this._onTimeDropdownChange.bind(this, 'minute')}
                                options={minuteOptions}
                                placeholder="mm"
                                selection
                                menuMaxHeight={448}
                                selectionCreatable
                                style={{
                                    minWidth: 72,
                                }}
                                tabIndex={3}
                                value={minuteFromDropdownValue}
                            />

                            <Dropdown
                                clearable={false}
                                id={id ? `${id}-period_dropdown` : null}
                                onChange={this._onTimeDropdownChange.bind(this, 'period')}
                                options={periodOptions}
                                placeholder="AM"
                                selection
                                menuMaxHeight={448}
                                style={{
                                    minWidth: 72,
                                }}
                                tabIndex={4}
                                value={periodFromDropdownValue}
                            />
                        </div>

                        {this.props.range ? <label className="label">To</label> : null}

                        {this.props.range ? (
                            <div>
                                <Dropdown
                                    clearable={false}
                                    id={id ? `${id}-hour_to_dropdown` : null}
                                    onChange={this._onTimeDropdownChange.bind(this, 'hourTo')}
                                    options={hourOptions}
                                    placeholder="hh"
                                    selection
                                    menuMaxHeight={448}
                                    style={{
                                        minWidth: 72,
                                    }}
                                    tabIndex={2}
                                    value={hourToDropdownValue}
                                />

                                <span className="colon">:</span>

                                <Dropdown
                                    clearable={false}
                                    id={id ? `${id}-minute_to_dropdown` : null}
                                    onChange={this._onTimeDropdownChange.bind(this, 'minuteTo')}
                                    options={minuteOptions}
                                    placeholder="mm"
                                    selection
                                    menuMaxHeight={448}
                                    selectionCreatable
                                    style={{
                                        minWidth: 72,
                                    }}
                                    tabIndex={3}
                                    value={minuteToDropdownValue}
                                />

                                <Dropdown
                                    clearable={false}
                                    id={id ? `${id}-period_to_dropdown` : null}
                                    onChange={this._onTimeDropdownChange.bind(this, 'periodTo')}
                                    options={periodOptions}
                                    placeholder="PM"
                                    selection
                                    menuMaxHeight={448}
                                    style={{
                                        minWidth: 72,
                                    }}
                                    tabIndex={4}
                                    value={periodToDropdownValue}
                                />
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
        );
    }

    componentDidMount() {
        document.addEventListener('click', this._onClickOutsideRef);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this._onClickOutsideRef);
    }

    _onClickOutside(event) {
        const isOutside = this.refs.timePicker.contains(event.target);

        if (isOutside || !isOutside && !this.state.isTimePopoverActive || event.target.className === 'Select-option') {
            return;
        }

        this._onTimePopoverToggle();
    }

    _onTimeDropdownChange(field, selectedOption) {
        this._onChange(selectedOption, field);
    }

    _onChange(value, field) {
        const { range } = this.props;
        let newValue = this.state.value;

        if (_.isObject(value)) {
            const mask = '__:__ __';

            newValue.timeFrom = newValue.timeFrom || mask;

            if (field === 'hour') {
                newValue.timeFrom = _.replace(newValue.timeFrom, newValue.timeFrom[0] + newValue.timeFrom[1] + newValue.timeFrom[2], value.label + ':');
            } else if (field === 'minute') {
                newValue.timeFrom = _.replace(newValue.timeFrom, newValue.timeFrom[2] + newValue.timeFrom[3] + newValue.timeFrom[4], ':' + value.label);
            } else if (field === 'period') {
                newValue.timeFrom = _.replace(newValue.timeFrom, newValue.timeFrom[5] + newValue.timeFrom[6] + newValue.timeFrom[7], ' ' + value.label);
            } else if (field === 'zone') {
                newValue.timeZone = value;
            }

            if (range) {
                newValue.timeTo = newValue.timeTo || mask;

                if (field === 'hourTo') {
                    newValue.timeTo = _.replace(newValue.timeTo, newValue.timeTo[0] + newValue.timeTo[1] + newValue.timeTo[2], value.label + ':');
                } else if (field === 'minuteTo') {
                    newValue.timeTo = _.replace(newValue.timeTo, newValue.timeTo[2] + newValue.timeTo[3] + newValue.timeTo[4], ':' + value.label);
                } else if (field === 'periodTo') {
                    newValue.timeTo = _.replace(newValue.timeTo, newValue.timeTo[5] + newValue.timeTo[6] + newValue.timeTo[7], ' ' + value.label);
                }
            }

            newValue.timeDisplay = range ? `${newValue.timeFrom} - ${newValue.timeTo}` : newValue.timeFrom;
        } else {
            let valueUpperCase = value.toUpperCase();
            newValue.timeDisplay = valueUpperCase;
            newValue.timeFrom = range ? _.trim(valueUpperCase.split('-')[0]) : valueUpperCase;
            newValue.timeTo = range ? _.trim(valueUpperCase.split('-')[1]) : null;
        }

        if (!_.isUndefined(this.props.onChange)) {
            this.props.onChange(newValue);
        } else {
            this.setState({ value: newValue });
        }
    }

    _onInputMask(value) {
        // hh:dd am - hh:dd pm
        if (this.props.range) {
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
        } else {
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
    }

    _onInputKeyDown(event) {
        const { isTimePopoverActive } = this.state;

        if (!isTimePopoverActive && event.key === 'ArrowDown') {
            this._onTimePopoverToggle();
        }

        if (isTimePopoverActive && event.key === 'ArrowUp') {
            this._onTimePopoverToggle();
        }
    }

    _onTimePopoverToggle() {
        if (!this.props.disable) {
            this.setState({ isTimePopoverActive: !this.state.isTimePopoverActive });
        }
    }

    _onZoneDropdownChange(selectedOption) {
        this._onChange(selectedOption, 'zone');
    }

    _renderHourOptions() {
        return _.map(_.range(1, 13), v => {
            const number = v.toString().length < 2 ? '0' + v : v;
            return { label: number.toString(), value: number * 1 };
        });
    }

    _renderMinuteOptions() {
        return _.map(_.range(0, 60, 5), v => {
            const number = v.toString().length < 2 ? '0' + v : v;
            return { label: number.toString(), value: number * 1 };
        });
    }

    _renderPeriodOptions() {
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

    _renderZoneOptions() {
        const { zoneOptions } = this.props;

        if (zoneOptions && _.isArray(zoneOptions)) {
            return zoneOptions;
        } else {
            const zoneNames = Object.keys(moment.tz._zones)
                .map(function (k) {
                    // At some point _zones turns into an array of objects instead of strings.
                    if (typeof moment.tz._zones[k] === 'string') {
                        return moment.tz._zones[k].split('|')[0];
                    } else {
                        return moment.tz._zones[k].name;
                    }
                })
                .filter(function (z) {
                    return z.indexOf('/') >= 0;
                });
            return _.chain(zoneNames)
                .map(name => {
                    const zone = moment.tz(name);

                    return {
                        abbr: zone.zoneAbbr(),
                        label: `(${zone.format('Z z')}) ${name.split('/')[0].replace('_', ' ')} (${name.split('/').slice(-1)[0].replace('_', ' ')})`,
                        offset: zone.format('Z'),
                        value: name,
                    };
                })
                .sortBy(o => {
                    return o.offset;
                }).value();
        }
    }
}

TimePicker.propTypes = {
    className: PropTypes.string,
    disable: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.string,
    ]),
    id: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    range: PropTypes.bool,
    required: PropTypes.bool,
    style: PropTypes.object,
    value: PropTypes.shape({
        timeDisplay: PropTypes.string,
        timeFrom: PropTypes.string,
        timeTo: PropTypes.string,
        timeZone: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object,
        ]),
    }),
    zoneMatchProp: PropTypes.oneOf([ 'any', 'label', 'value' ]),
    zoneOptions: PropTypes.array,
    zonePlaceholderText: PropTypes.string,
};

export default TimePicker;
