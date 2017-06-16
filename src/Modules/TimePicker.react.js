'use strict';

import 'Modules/TimePicker.scss';

import _ from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import React from 'react';

import Dropdown from 'Modules/Dropdown.react';
import Icon from 'Elements/Icon.react';
import Input from 'Elements/Input.react';

export default class TimePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hourOptions: this._renderHourOptions(),
            isTimePopoverActive: false,
            minuteOptions: this._renderMinuteOptions(),
            periodOptions: this._renderPeriodOptions(),
            value:  _.clone(props.value) || {
                timeDisplay: null,
                timeFrom: null,
                timeTo: null,
                timeZone: _.find(this._renderZoneOptions(), o => o.value === moment.tz.guess())
            },
            zoneOptions: this._renderZoneOptions()
        };

        this._onClickOutsideRef = this._onClickOutside.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!_.isEqual(this.props.value, nextProps.value)) {
            let isDirty = false;
            let newValue = _.clone(nextProps.value);

            if (nextProps.value) {
                if (!nextProps.value.timeDisplay) {
                    newValue.timeDisplay = nextProps.range ? `${newValue.timeFrom} - ${newValue.timeTo}` : newValue.timeFrom;
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
        const { className, disable, error, id, label, nest, range, required, style } = this.props;
        const { hourOptions, isTimePopoverActive, minuteOptions, periodOptions, value, zoneOptions } = this.state;
        const containerClasses = ClassNames('ui', 'time-picker', className, {
            'time-picker-disable': disable,
            'time-picker-error': error,
            'time-picker-nest': nest,
            'time-picker-range': range
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
            <div className={containerClasses} ref="timePicker" style={style}>
                <Input
                    className="time-picker-input"
                    disabled={disable}
                    error={error}
                    guide={true}
                    icon={(
                        <Icon
                            color={isTimePopoverActive ? 'highlight' : null}
                            compact={true}
                            type="clock"
                            onClick={this._onTimePopoverToggle.bind(this)}
                        />
                    )}
                    id={id}
                    keepCharPositions={true}
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
                    onChange={this._onZoneDropdownChange.bind(this)}
                    options={zoneOptions}
                    placeholder="(-07:00 PDT) America (Los Angeles)"
                    selection={true}
                    menuMaxHeight={448}
                    tabIndex={isTimePopoverActive ? 5 : 2}
                    value={value.timeZone}
                />

                {isTimePopoverActive ? (
                    <div className="time-picker-popover">
                        {this.props.range ? (
                            <label className="label">From</label>
                        ) : null}

                        <div>
                            <Dropdown
                                clearable={false}
                                onChange={this._onTimeDropdownChange.bind(this, 'hour')}
                                options={hourOptions}
                                placeholder="hh"
                                selection={true}
                                menuMaxHeight={448}
                                style={{
                                    minWidth: 72
                                }}
                                tabIndex={2}
                                value={hourFromDropdownValue}
                            />

                            <span className="colon">:</span>

                            <Dropdown
                                clearable={false}
                                onChange={this._onTimeDropdownChange.bind(this, 'minute')}
                                options={minuteOptions}
                                placeholder="mm"
                                selection={true}
                                menuMaxHeight={448}
                                selectionCreatable={true}
                                style={{
                                    minWidth: 72
                                }}
                                tabIndex={3}
                                value={minuteFromDropdownValue}
                            />

                            <Dropdown
                                clearable={false}
                                onChange={this._onTimeDropdownChange.bind(this, 'period')}
                                options={periodOptions}
                                placeholder="AM"
                                selection={true}
                                menuMaxHeight={448}
                                style={{
                                    minWidth: 72
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
                                    onChange={this._onTimeDropdownChange.bind(this, 'hourTo')}
                                    options={hourOptions}
                                    placeholder="hh"
                                    selection={true}
                                    menuMaxHeight={448}
                                    style={{
                                        minWidth: 72
                                    }}
                                    tabIndex={2}
                                    value={hourToDropdownValue}
                                />

                                <span className="colon">:</span>

                                <Dropdown
                                    clearable={false}
                                    onChange={this._onTimeDropdownChange.bind(this, 'minuteTo')}
                                    options={minuteOptions}
                                    placeholder="mm"
                                    selection={true}
                                    menuMaxHeight={448}
                                    selectionCreatable={true}
                                    style={{
                                        minWidth: 72
                                    }}
                                    tabIndex={3}
                                    value={minuteToDropdownValue}
                                />

                                <Dropdown
                                    clearable={false}
                                    onChange={this._onTimeDropdownChange.bind(this, 'periodTo')}
                                    options={periodOptions}
                                    placeholder="PM"
                                    selection={true}
                                    menuMaxHeight={448}
                                    style={{
                                        minWidth: 72
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
            let valueUpperCase = value.toUpperCase()
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
                /[M]/i
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
                value: 1
            }
        ];
    }

    _renderZoneOptions() {
        const { zoneOptions } = this.props;

        if (zoneOptions && _.isArray(zoneOptions)) {
            return zoneOptions;
        } else {
            const zoneNames = Object.keys(moment.tz._zones)
                .map(function(k) {
                    // At some point _zones turns into an array of objects instead of strings.
                    if (typeof moment.tz._zones[k] === 'string') {
                        return moment.tz._zones[k].split('|')[0];
                    } else {
                        return moment.tz._zones[k].name;
                    }
                })
                .filter(function(z) { return z.indexOf('/') >= 0; });
            return _.chain(zoneNames)
                .map(name => {
                    const zone = moment.tz(name);

                    return {
                        abbr: zone.zoneAbbr(),
                        label: `(${zone.format('Z z')}) ${name.split('/')[0].replace('_', ' ')} (${name.split('/').slice(-1)[0].replace('_', ' ')})`,
                        offset: zone.format('Z'),
                        value: name
                    };
                })
                .sortBy(o => { return o.offset; }).value();
        }
    }
}

TimePicker.propTypes = {
    className: React.PropTypes.string,
    disable: React.PropTypes.bool,
    error: React.PropTypes.oneOfType([
        React.PropTypes.bool,
        React.PropTypes.string
    ]),
    id: React.PropTypes.string,
    label: React.PropTypes.string,
    onChange: React.PropTypes.func,
    range: React.PropTypes.bool,
    required: React.PropTypes.bool,
    style: React.PropTypes.object,
    value: React.PropTypes.shape({
        timeDisplay: React.PropTypes.string,
        timeFrom: React.PropTypes.string,
        timeTo: React.PropTypes.string,
        timeZone: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.object
        ])
    }),
    zoneOptions: React.PropTypes.array
};
