'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Header, TitleBar, TimePicker } from 'react-cm-ui';

// Docs UI Components
import Block from '../global/block.js';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

const timePickerSample = `import React from 'react';

import { TimePicker } from 'react-cm-ui';

export default class TimePickerSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: null };
    }

    render() {
        return (
            <TimePicker
                onChange={this._onTimePickerChange.bind(this)}
                value={this.state.value}
            />
        );
    }

    _onTimePickerChange(value) {
        this.setState({ value: value });
    }

}`;

const disableSample = `import React from 'react';

import { TimePicker } from 'react-cm-ui';

export default class DisableSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { value: null };
    }

    render() {
        return (
            <TimePicker
                disable
                onChange={this._onTimePickerChange.bind(this)}
                value={this.state.value}
            />
        );
    }

    _onTimePickerChange(value) {
        this.setState({ value: value });
    }

}`;

const nestSample = `import React from 'react';

import { TimePicker } from 'react-cm-ui';

export default class NestSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { nestValue: null };
    }

    render() {
        return (
            <div className="some-class-that-has-nested-bkgd-color">
                <TimePicker
                    nest
                    onChange={this._onNestChange.bind(this)}
                    value={this.state.nestValue}
                />
            </div>
        );
    }

    _onNestChange(value) {
        this.setState({ nestValue: value });
    }

}`;

const rangeSample = `import React from 'react';
import { TimePicker } from 'react-cm-ui';

export default class RangeSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { rangeValue: null };
    }

    render() {
        return (
            <TimePicker
                onChange={this._onRangeChange.bind(this)}
                range
                value={this.state.rangeValue}
            />
        );
    }

    _onRangeChange(value) {
        this.setState({ rangeValue: value });
    }
}`;

const zoneOptionsSample = `import React from 'react';
import { TimePicker } from 'react-cm-ui';

export default class ZoneOptionsSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: null };
    }

    render() {
        const customZoneOptions = [{"value":"Etc/GMT+12","label":"(UTC-12:00) International Date Line West"},{"value":"Etc/GMT+11","label":"(UTC-11:00) Coordinated Universal Time-11"},{"value":"Pacific/Honolulu","label":"(UTC-10:00) Hawaii"},{"value":"America/Anchorage","label":"(UTC-09:00) Alaska"},{"value":"America/Tijuana","label":"(UTC-08:00) Baja California"},{"value":"America/Los_Angeles","label":"(UTC-08:00) Pacific Time (US & Canada)"},{"value":"America/Phoenix","label":"(UTC-07:00) Arizona"},{"value":"America/Chihuahua","label":"(UTC-07:00) Chihuahua, La Paz, Mazatlan"},{"value":"America/Denver","label":"(UTC-07:00) Mountain Time (US & Canada)"},{"value":"America/Guatemala","label":"(UTC-06:00) Central America"},{"value":"America/Chicago","label":"(UTC-06:00) Central Time (US & Canada)"},{"value":"America/Mexico_City","label":"(UTC-06:00) Guadalajara, Mexico City, Monterrey"},{"value":"America/Regina","label":"(UTC-06:00) Saskatchewan"},{"value":"America/Bogota","label":"(UTC-05:00) Bogota, Lima, Quito, Rio Branco"},{"value":"America/Cancun","label":"(UTC-05:00) Chetumal"},{"value":"America/New_York","label":"(UTC-05:00) Eastern Time (US & Canada)"},{"value":"America/Indianapolis","label":"(UTC-05:00) Indiana (East)"},{"value":"America/Caracas","label":"(UTC-04:30) Caracas"},{"value":"America/Asuncion","label":"(UTC-04:00) Asuncion"},{"value":"America/Halifax","label":"(UTC-04:00) Atlantic Time (Canada)"},{"value":"America/Cuiaba","label":"(UTC-04:00) Cuiaba"},{"value":"America/La_Paz","label":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan"},{"value":"America/St_Johns","label":"(UTC-03:30) Newfoundland"},{"value":"America/Sao_Paulo","label":"(UTC-03:00) Brasilia"},{"value":"America/Argentina/Buenos_Aires","label":"(UTC-03:00) Buenos Aires"},{"value":"America/Cayenne","label":"(UTC-03:00) Cayenne, Fortaleza"},{"value":"America/Godthab","label":"(UTC-03:00) Greenland"},{"value":"America/Montevideo","label":"(UTC-03:00) Montevideo"},{"value":"America/Bahia","label":"(UTC-03:00) Salvador"},{"value":"America/Santiago","label":"(UTC-03:00) Santiago"},{"value":"Etc/GMT+2","label":"(UTC-02:00) Coordinated Universal Time-02"},{"value":"Atlantic/Azores","label":"(UTC-01:00) Azores"},{"value":"Atlantic/Cape_Verde","label":"(UTC-01:00) Cabo Verde Is."},{"value":"Europe/London","label":"(UTC) Dublin, Edinburgh, Lisbon, London"},{"value":"Atlantic/Reykjavik","label":"(UTC) Monrovia, Reykjavik"},{"value":"Etc/GMT","label":"UTC"},{"value":"Africa/Casablanca","label":"(UTC) Casablanca"},{"value":"Europe/Berlin","label":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"Europe/Budapest","label":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"Europe/Paris","label":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris"},{"value":"Europe/Warsaw","label":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"Africa/Lagos","label":"(UTC+01:00) West Central Africa"},{"value":"Africa/Windhoek","label":"(UTC+01:00) Windhoek"},{"value":"Asia/Amman","label":"(UTC+02:00) Amman"},{"value":"Europe/Bucharest","label":"(UTC+02:00) Athens, Bucharest"},{"value":"Asia/Beirut","label":"(UTC+02:00) Beirut"},{"value":"Africa/Cairo","label":"(UTC+02:00) Cairo"},{"value":"Asia/Damascus","label":"(UTC+02:00) Damascus"},{"value":"Europe/Chisinau","label":"(UTC+02:00) E. Europe"},{"value":"Africa/Johannesburg","label":"(UTC+02:00) Harare, Pretoria"},{"value":"Europe/Kiev","label":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"Europe/Istanbul","label":"(UTC+02:00) Istanbul"},{"value":"Asia/Jerusalem","label":"(UTC+02:00) Jerusalem"},{"value":"Europe/Kaliningrad","label":"(UTC+02:00) Kaliningrad (RTZ 1)"},{"value":"Africa/Tripoli","label":"(UTC+02:00) Tripoli"},{"value":"Asia/Baghdad","label":"(UTC+03:00) Baghdad"},{"value":"Asia/Riyadh","label":"(UTC+03:00) Kuwait, Riyadh"},{"value":"Europe/Minsk","label":"(UTC+03:00) Minsk"},{"value":"Europe/Moscow","label":"(UTC+03:00) Moscow, St. Petersburg, Volgograd (RTZ 2)"},{"value":"Africa/Nairobi","label":"(UTC+03:00) Nairobi"},{"value":"Asia/Tehran","label":"(UTC+03:30) Tehran"},{"value":"Asia/Dubai","label":"(UTC+04:00) Abu Dhabi, Muscat"},{"value":"Asia/Baku","label":"(UTC+04:00) Baku"},{"value":"Europe/Samara","label":"(UTC+04:00) Izhevsk, Samara (RTZ 3)"},{"value":"Indian/Mauritius","label":"(UTC+04:00) Port Louis"},{"value":"Asia/Tbilisi","label":"(UTC+04:00) Tbilisi"},{"value":"Asia/Yerevan","label":"(UTC+04:00) Yerevan"},{"value":"Asia/Kabul","label":"(UTC+04:30) Kabul"},{"value":"Asia/Tashkent","label":"(UTC+05:00) Ashgabat, Tashkent"},{"value":"Asia/Yekaterinburg","label":"(UTC+05:00) Ekaterinburg (RTZ 4)"},{"value":"Asia/Karachi","label":"(UTC+05:00) Islamabad, Karachi"},{"value":"Asia/Kolkata","label":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"},{"value":"Asia/Colombo","label":"(UTC+05:30) Sri Jayawardenepura"},{"value":"Asia/Katmandu","label":"(UTC+05:45) Kathmandu"},{"value":"Asia/Almaty","label":"(UTC+06:00) Astana"},{"value":"Asia/Dhaka","label":"(UTC+06:00) Dhaka"},{"value":"Asia/Novosibirsk","label":"(UTC+06:00) Novosibirsk (RTZ 5)"},{"value":"Asia/Rangoon","label":"(UTC+06:30) Yangon (Rangoon)"},{"value":"Asia/Bangkok","label":"(UTC+07:00) Bangkok, Hanoi, Jakarta"},{"value":"Asia/Krasnoyarsk","label":"(UTC+07:00) Krasnoyarsk (RTZ 6)"},{"value":"Asia/Shanghai","label":"(UTC+08:00) Beijing, Chongqing, Urumqi"},{"value":"Asia/Hong_Kong","label":"(UTC+08:00) Hong Kong"},{"value":"Asia/Irkutsk","label":"(UTC+08:00) Irkutsk (RTZ 7)"},{"value":"Asia/Singapore","label":"(UTC+08:00) Kuala Lumpur, Singapore"},{"value":"Asia/Manila","label":"(UTC+08:00) Manila (Philippines)"},{"value":"Australia/Perth","label":"(UTC+08:00) Perth"},{"value":"Asia/Taipei","label":"(UTC+08:00) Taipei"},{"value":"Asia/Ulaanbaatar","label":"(UTC+08:00) Ulaanbaatar"},{"value":"Asia/Tokyo","label":"(UTC+09:00) Osaka, Sapporo, Tokyo"},{"value":"Asia/Seoul","label":"(UTC+09:00) Seoul"},{"value":"Asia/Yakutsk","label":"(UTC+09:00) Yakutsk (RTZ 8)"},{"value":"Australia/Adelaide","label":"(UTC+09:30) Adelaide"},{"value":"Australia/Darwin","label":"(UTC+09:30) Darwin"},{"value":"Australia/Brisbane","label":"(UTC+10:00) Brisbane"},{"value":"Australia/Sydney","label":"(UTC+10:00) Canberra, Melbourne, Sydney"},{"value":"Pacific/Port_Moresby","label":"(UTC+10:00) Guam, Port Moresby"},{"value":"Australia/Hobart","label":"(UTC+10:00) Hobart"},{"value":"Asia/Magadan","label":"(UTC+10:00) Magadan"},{"value":"Asia/Vladivostok","label":"(UTC+10:00) Vladivostok, Magadan (RTZ 9)"},{"value":"Asia/Srednekolymsk","label":"(UTC+11:00) Chokurdakh (RTZ 10)"},{"value":"Pacific/Guadalcanal","label":"(UTC+11:00) Solomon Is., New Caledonia"},{"value":"Asia/Kamchatka","label":"(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky (RTZ 11)"},{"value":"Pacific/Auckland","label":"(UTC+12:00) Auckland, Wellington"},{"value":"Etc/GMT-12","label":"(UTC+12:00) Coordinated Universal Time+12"},{"value":"Pacific/Fiji","label":"(UTC+12:00) Fiji"},{"value":"Pacific/Tongatapu","label":"(UTC+13:00) Nuku'alofa"},{"value":"Pacific/Apia","label":"(UTC+13:00) Samoa"},{"value":"Pacific/Kiritimati","label":"(UTC+14:00) Kiritimati Island"}];

        return (
            <TimePicker
                onChange={this._onTimePickerChange.bind(this)}
                value={this.state.value}
                zoneOptions={customZoneOptions}
                zoneMatchProp="label"
            />
        );
    }

    _onTimePickerChange(value) {
        this.setState({ value: value });
    }
}`;

const zoneMatchPropSample = `import React from 'react';
import { TimePicker } from 'react-cm-ui';

export default class ZoneMatchPropSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = { value: null };
    }

    render() {
        const customZoneOptions = [{"value":"Etc/GMT+12","label":"(UTC-12:00) International Date Line West"},{"value":"Etc/GMT+11","label":"(UTC-11:00) Coordinated Universal Time-11"},{"value":"Pacific/Honolulu","label":"(UTC-10:00) Hawaii"},{"value":"America/Anchorage","label":"(UTC-09:00) Alaska"},{"value":"America/Tijuana","label":"(UTC-08:00) Baja California"},{"value":"America/Los_Angeles","label":"(UTC-08:00) Pacific Time (US & Canada)"},{"value":"America/Phoenix","label":"(UTC-07:00) Arizona"},{"value":"America/Chihuahua","label":"(UTC-07:00) Chihuahua, La Paz, Mazatlan"},{"value":"America/Denver","label":"(UTC-07:00) Mountain Time (US & Canada)"},{"value":"America/Guatemala","label":"(UTC-06:00) Central America"},{"value":"America/Chicago","label":"(UTC-06:00) Central Time (US & Canada)"},{"value":"America/Mexico_City","label":"(UTC-06:00) Guadalajara, Mexico City, Monterrey"},{"value":"America/Regina","label":"(UTC-06:00) Saskatchewan"},{"value":"America/Bogota","label":"(UTC-05:00) Bogota, Lima, Quito, Rio Branco"},{"value":"America/Cancun","label":"(UTC-05:00) Chetumal"},{"value":"America/New_York","label":"(UTC-05:00) Eastern Time (US & Canada)"},{"value":"America/Indianapolis","label":"(UTC-05:00) Indiana (East)"},{"value":"America/Caracas","label":"(UTC-04:30) Caracas"},{"value":"America/Asuncion","label":"(UTC-04:00) Asuncion"},{"value":"America/Halifax","label":"(UTC-04:00) Atlantic Time (Canada)"},{"value":"America/Cuiaba","label":"(UTC-04:00) Cuiaba"},{"value":"America/La_Paz","label":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan"},{"value":"America/St_Johns","label":"(UTC-03:30) Newfoundland"},{"value":"America/Sao_Paulo","label":"(UTC-03:00) Brasilia"},{"value":"America/Argentina/Buenos_Aires","label":"(UTC-03:00) Buenos Aires"},{"value":"America/Cayenne","label":"(UTC-03:00) Cayenne, Fortaleza"},{"value":"America/Godthab","label":"(UTC-03:00) Greenland"},{"value":"America/Montevideo","label":"(UTC-03:00) Montevideo"},{"value":"America/Bahia","label":"(UTC-03:00) Salvador"},{"value":"America/Santiago","label":"(UTC-03:00) Santiago"},{"value":"Etc/GMT+2","label":"(UTC-02:00) Coordinated Universal Time-02"},{"value":"Atlantic/Azores","label":"(UTC-01:00) Azores"},{"value":"Atlantic/Cape_Verde","label":"(UTC-01:00) Cabo Verde Is."},{"value":"Europe/London","label":"(UTC) Dublin, Edinburgh, Lisbon, London"},{"value":"Atlantic/Reykjavik","label":"(UTC) Monrovia, Reykjavik"},{"value":"Etc/GMT","label":"UTC"},{"value":"Africa/Casablanca","label":"(UTC) Casablanca"},{"value":"Europe/Berlin","label":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"Europe/Budapest","label":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"Europe/Paris","label":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris"},{"value":"Europe/Warsaw","label":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"Africa/Lagos","label":"(UTC+01:00) West Central Africa"},{"value":"Africa/Windhoek","label":"(UTC+01:00) Windhoek"},{"value":"Asia/Amman","label":"(UTC+02:00) Amman"},{"value":"Europe/Bucharest","label":"(UTC+02:00) Athens, Bucharest"},{"value":"Asia/Beirut","label":"(UTC+02:00) Beirut"},{"value":"Africa/Cairo","label":"(UTC+02:00) Cairo"},{"value":"Asia/Damascus","label":"(UTC+02:00) Damascus"},{"value":"Europe/Chisinau","label":"(UTC+02:00) E. Europe"},{"value":"Africa/Johannesburg","label":"(UTC+02:00) Harare, Pretoria"},{"value":"Europe/Kiev","label":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"Europe/Istanbul","label":"(UTC+02:00) Istanbul"},{"value":"Asia/Jerusalem","label":"(UTC+02:00) Jerusalem"},{"value":"Europe/Kaliningrad","label":"(UTC+02:00) Kaliningrad (RTZ 1)"},{"value":"Africa/Tripoli","label":"(UTC+02:00) Tripoli"},{"value":"Asia/Baghdad","label":"(UTC+03:00) Baghdad"},{"value":"Asia/Riyadh","label":"(UTC+03:00) Kuwait, Riyadh"},{"value":"Europe/Minsk","label":"(UTC+03:00) Minsk"},{"value":"Europe/Moscow","label":"(UTC+03:00) Moscow, St. Petersburg, Volgograd (RTZ 2)"},{"value":"Africa/Nairobi","label":"(UTC+03:00) Nairobi"},{"value":"Asia/Tehran","label":"(UTC+03:30) Tehran"},{"value":"Asia/Dubai","label":"(UTC+04:00) Abu Dhabi, Muscat"},{"value":"Asia/Baku","label":"(UTC+04:00) Baku"},{"value":"Europe/Samara","label":"(UTC+04:00) Izhevsk, Samara (RTZ 3)"},{"value":"Indian/Mauritius","label":"(UTC+04:00) Port Louis"},{"value":"Asia/Tbilisi","label":"(UTC+04:00) Tbilisi"},{"value":"Asia/Yerevan","label":"(UTC+04:00) Yerevan"},{"value":"Asia/Kabul","label":"(UTC+04:30) Kabul"},{"value":"Asia/Tashkent","label":"(UTC+05:00) Ashgabat, Tashkent"},{"value":"Asia/Yekaterinburg","label":"(UTC+05:00) Ekaterinburg (RTZ 4)"},{"value":"Asia/Karachi","label":"(UTC+05:00) Islamabad, Karachi"},{"value":"Asia/Kolkata","label":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"},{"value":"Asia/Colombo","label":"(UTC+05:30) Sri Jayawardenepura"},{"value":"Asia/Katmandu","label":"(UTC+05:45) Kathmandu"},{"value":"Asia/Almaty","label":"(UTC+06:00) Astana"},{"value":"Asia/Dhaka","label":"(UTC+06:00) Dhaka"},{"value":"Asia/Novosibirsk","label":"(UTC+06:00) Novosibirsk (RTZ 5)"},{"value":"Asia/Rangoon","label":"(UTC+06:30) Yangon (Rangoon)"},{"value":"Asia/Bangkok","label":"(UTC+07:00) Bangkok, Hanoi, Jakarta"},{"value":"Asia/Krasnoyarsk","label":"(UTC+07:00) Krasnoyarsk (RTZ 6)"},{"value":"Asia/Shanghai","label":"(UTC+08:00) Beijing, Chongqing, Urumqi"},{"value":"Asia/Hong_Kong","label":"(UTC+08:00) Hong Kong"},{"value":"Asia/Irkutsk","label":"(UTC+08:00) Irkutsk (RTZ 7)"},{"value":"Asia/Singapore","label":"(UTC+08:00) Kuala Lumpur, Singapore"},{"value":"Asia/Manila","label":"(UTC+08:00) Manila (Philippines)"},{"value":"Australia/Perth","label":"(UTC+08:00) Perth"},{"value":"Asia/Taipei","label":"(UTC+08:00) Taipei"},{"value":"Asia/Ulaanbaatar","label":"(UTC+08:00) Ulaanbaatar"},{"value":"Asia/Tokyo","label":"(UTC+09:00) Osaka, Sapporo, Tokyo"},{"value":"Asia/Seoul","label":"(UTC+09:00) Seoul"},{"value":"Asia/Yakutsk","label":"(UTC+09:00) Yakutsk (RTZ 8)"},{"value":"Australia/Adelaide","label":"(UTC+09:30) Adelaide"},{"value":"Australia/Darwin","label":"(UTC+09:30) Darwin"},{"value":"Australia/Brisbane","label":"(UTC+10:00) Brisbane"},{"value":"Australia/Sydney","label":"(UTC+10:00) Canberra, Melbourne, Sydney"},{"value":"Pacific/Port_Moresby","label":"(UTC+10:00) Guam, Port Moresby"},{"value":"Australia/Hobart","label":"(UTC+10:00) Hobart"},{"value":"Asia/Magadan","label":"(UTC+10:00) Magadan"},{"value":"Asia/Vladivostok","label":"(UTC+10:00) Vladivostok, Magadan (RTZ 9)"},{"value":"Asia/Srednekolymsk","label":"(UTC+11:00) Chokurdakh (RTZ 10)"},{"value":"Pacific/Guadalcanal","label":"(UTC+11:00) Solomon Is., New Caledonia"},{"value":"Asia/Kamchatka","label":"(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky (RTZ 11)"},{"value":"Pacific/Auckland","label":"(UTC+12:00) Auckland, Wellington"},{"value":"Etc/GMT-12","label":"(UTC+12:00) Coordinated Universal Time+12"},{"value":"Pacific/Fiji","label":"(UTC+12:00) Fiji"},{"value":"Pacific/Tongatapu","label":"(UTC+13:00) Nuku'alofa"},{"value":"Pacific/Apia","label":"(UTC+13:00) Samoa"},{"value":"Pacific/Kiritimati","label":"(UTC+14:00) Kiritimati Island"}];

        return (
            <TimePicker
                onChange={this._onTimePickerChange.bind(this)}
                value={this.state.value}
                zoneOptions={customZoneOptions}
                zoneMatchProp="label"
            />
        );
    }

    _onTimePickerChange(value) {
        this.setState({ value: value });
    }
}`;

export default class ModulesTimePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nestValue: null,
            rangeValue: null,
            value: null
        };
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'disabled',
                type: 'bool',
                default: '',
                description: 'Indicates that the Time Picker is not available for interaction.',
                allowedTypes: ''
            }, {
                name: 'error',
                type: 'bool || string',
                default: '',
                description: 'Indicates that the Time Picker has an error.',
                allowedTypes: ''
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Give the Time Picker input an id.',
                allowedTypes: ''
            }, {
                name: 'label',
                type: 'string',
                default: '',
                description: 'Optional Label to display on top of the Time Picker.',
                allowedTypes: ''
            }, {
                name: 'nest',
                type: 'bool',
                default: '',
                description: 'Time Picker may be placed in a nested background color.',
                allowedTypes: ''
            }, {
                name: 'onChange',
                type: 'func',
                default: '',
                description: 'Can handle an onChange event from parent.',
                allowedTypes: ''
            }, {
                name: 'value',
                type: 'object',
                default: '',
                description: 'The initial value of the control.',
                allowedTypes: ''
            }, {
                name: 'required',
                type: 'bool',
                default: '',
                description: 'Specifies that the user must fill in a value before submitting a form.',
                allowedTypes: ''
            }, {
                name: 'zoneOptions',
                type: 'array',
                default: '',
                description: 'Provide a custom list of timezones to the Time Picker.',
                allowedTypes: ''
            }, {
                name: 'zoneMatchProp',
                type: 'enum',
                default: 'any',
                description: 'Whether to match the value, label or both values of each selection option when filtering.',
                allowedTypes: 'any, label, value'
            }, {
                name: 'zonePlaceholderText',
                type: 'string',
                default: '',
                description: 'Set the placeholder text in the Time Zone Select component.',
                allowedTypes: ''
            }
        ];

        const customZoneOptions = [{"value":"Etc/GMT+12","label":"(UTC-12:00) International Date Line West"},{"value":"Etc/GMT+11","label":"(UTC-11:00) Coordinated Universal Time-11"},{"value":"Pacific/Honolulu","label":"(UTC-10:00) Hawaii"},{"value":"America/Anchorage","label":"(UTC-09:00) Alaska"},{"value":"America/Tijuana","label":"(UTC-08:00) Baja California"},{"value":"America/Los_Angeles","label":"(UTC-08:00) Pacific Time (US & Canada)"},{"value":"America/Phoenix","label":"(UTC-07:00) Arizona"},{"value":"America/Chihuahua","label":"(UTC-07:00) Chihuahua, La Paz, Mazatlan"},{"value":"America/Denver","label":"(UTC-07:00) Mountain Time (US & Canada)"},{"value":"America/Guatemala","label":"(UTC-06:00) Central America"},{"value":"America/Chicago","label":"(UTC-06:00) Central Time (US & Canada)"},{"value":"America/Mexico_City","label":"(UTC-06:00) Guadalajara, Mexico City, Monterrey"},{"value":"America/Regina","label":"(UTC-06:00) Saskatchewan"},{"value":"America/Bogota","label":"(UTC-05:00) Bogota, Lima, Quito, Rio Branco"},{"value":"America/Cancun","label":"(UTC-05:00) Chetumal"},{"value":"America/New_York","label":"(UTC-05:00) Eastern Time (US & Canada)"},{"value":"America/Indianapolis","label":"(UTC-05:00) Indiana (East)"},{"value":"America/Caracas","label":"(UTC-04:30) Caracas"},{"value":"America/Asuncion","label":"(UTC-04:00) Asuncion"},{"value":"America/Halifax","label":"(UTC-04:00) Atlantic Time (Canada)"},{"value":"America/Cuiaba","label":"(UTC-04:00) Cuiaba"},{"value":"America/La_Paz","label":"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan"},{"value":"America/St_Johns","label":"(UTC-03:30) Newfoundland"},{"value":"America/Sao_Paulo","label":"(UTC-03:00) Brasilia"},{"value":"America/Argentina/Buenos_Aires","label":"(UTC-03:00) Buenos Aires"},{"value":"America/Cayenne","label":"(UTC-03:00) Cayenne, Fortaleza"},{"value":"America/Godthab","label":"(UTC-03:00) Greenland"},{"value":"America/Montevideo","label":"(UTC-03:00) Montevideo"},{"value":"America/Bahia","label":"(UTC-03:00) Salvador"},{"value":"America/Santiago","label":"(UTC-03:00) Santiago"},{"value":"Etc/GMT+2","label":"(UTC-02:00) Coordinated Universal Time-02"},{"value":"Atlantic/Azores","label":"(UTC-01:00) Azores"},{"value":"Atlantic/Cape_Verde","label":"(UTC-01:00) Cabo Verde Is."},{"value":"Europe/London","label":"(UTC) Dublin, Edinburgh, Lisbon, London"},{"value":"Atlantic/Reykjavik","label":"(UTC) Monrovia, Reykjavik"},{"value":"Etc/GMT","label":"UTC"},{"value":"Africa/Casablanca","label":"(UTC) Casablanca"},{"value":"Europe/Berlin","label":"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna"},{"value":"Europe/Budapest","label":"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague"},{"value":"Europe/Paris","label":"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris"},{"value":"Europe/Warsaw","label":"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb"},{"value":"Africa/Lagos","label":"(UTC+01:00) West Central Africa"},{"value":"Africa/Windhoek","label":"(UTC+01:00) Windhoek"},{"value":"Asia/Amman","label":"(UTC+02:00) Amman"},{"value":"Europe/Bucharest","label":"(UTC+02:00) Athens, Bucharest"},{"value":"Asia/Beirut","label":"(UTC+02:00) Beirut"},{"value":"Africa/Cairo","label":"(UTC+02:00) Cairo"},{"value":"Asia/Damascus","label":"(UTC+02:00) Damascus"},{"value":"Europe/Chisinau","label":"(UTC+02:00) E. Europe"},{"value":"Africa/Johannesburg","label":"(UTC+02:00) Harare, Pretoria"},{"value":"Europe/Kiev","label":"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius"},{"value":"Europe/Istanbul","label":"(UTC+02:00) Istanbul"},{"value":"Asia/Jerusalem","label":"(UTC+02:00) Jerusalem"},{"value":"Europe/Kaliningrad","label":"(UTC+02:00) Kaliningrad (RTZ 1)"},{"value":"Africa/Tripoli","label":"(UTC+02:00) Tripoli"},{"value":"Asia/Baghdad","label":"(UTC+03:00) Baghdad"},{"value":"Asia/Riyadh","label":"(UTC+03:00) Kuwait, Riyadh"},{"value":"Europe/Minsk","label":"(UTC+03:00) Minsk"},{"value":"Europe/Moscow","label":"(UTC+03:00) Moscow, St. Petersburg, Volgograd (RTZ 2)"},{"value":"Africa/Nairobi","label":"(UTC+03:00) Nairobi"},{"value":"Asia/Tehran","label":"(UTC+03:30) Tehran"},{"value":"Asia/Dubai","label":"(UTC+04:00) Abu Dhabi, Muscat"},{"value":"Asia/Baku","label":"(UTC+04:00) Baku"},{"value":"Europe/Samara","label":"(UTC+04:00) Izhevsk, Samara (RTZ 3)"},{"value":"Indian/Mauritius","label":"(UTC+04:00) Port Louis"},{"value":"Asia/Tbilisi","label":"(UTC+04:00) Tbilisi"},{"value":"Asia/Yerevan","label":"(UTC+04:00) Yerevan"},{"value":"Asia/Kabul","label":"(UTC+04:30) Kabul"},{"value":"Asia/Tashkent","label":"(UTC+05:00) Ashgabat, Tashkent"},{"value":"Asia/Yekaterinburg","label":"(UTC+05:00) Ekaterinburg (RTZ 4)"},{"value":"Asia/Karachi","label":"(UTC+05:00) Islamabad, Karachi"},{"value":"Asia/Kolkata","label":"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi"},{"value":"Asia/Colombo","label":"(UTC+05:30) Sri Jayawardenepura"},{"value":"Asia/Katmandu","label":"(UTC+05:45) Kathmandu"},{"value":"Asia/Almaty","label":"(UTC+06:00) Astana"},{"value":"Asia/Dhaka","label":"(UTC+06:00) Dhaka"},{"value":"Asia/Novosibirsk","label":"(UTC+06:00) Novosibirsk (RTZ 5)"},{"value":"Asia/Rangoon","label":"(UTC+06:30) Yangon (Rangoon)"},{"value":"Asia/Bangkok","label":"(UTC+07:00) Bangkok, Hanoi, Jakarta"},{"value":"Asia/Krasnoyarsk","label":"(UTC+07:00) Krasnoyarsk (RTZ 6)"},{"value":"Asia/Shanghai","label":"(UTC+08:00) Beijing, Chongqing, Urumqi"},{"value":"Asia/Hong_Kong","label":"(UTC+08:00) Hong Kong"},{"value":"Asia/Irkutsk","label":"(UTC+08:00) Irkutsk (RTZ 7)"},{"value":"Asia/Singapore","label":"(UTC+08:00) Kuala Lumpur, Singapore"},{"value":"Asia/Manila","label":"(UTC+08:00) Manila (Philippines)"},{"value":"Australia/Perth","label":"(UTC+08:00) Perth"},{"value":"Asia/Taipei","label":"(UTC+08:00) Taipei"},{"value":"Asia/Ulaanbaatar","label":"(UTC+08:00) Ulaanbaatar"},{"value":"Asia/Tokyo","label":"(UTC+09:00) Osaka, Sapporo, Tokyo"},{"value":"Asia/Seoul","label":"(UTC+09:00) Seoul"},{"value":"Asia/Yakutsk","label":"(UTC+09:00) Yakutsk (RTZ 8)"},{"value":"Australia/Adelaide","label":"(UTC+09:30) Adelaide"},{"value":"Australia/Darwin","label":"(UTC+09:30) Darwin"},{"value":"Australia/Brisbane","label":"(UTC+10:00) Brisbane"},{"value":"Australia/Sydney","label":"(UTC+10:00) Canberra, Melbourne, Sydney"},{"value":"Pacific/Port_Moresby","label":"(UTC+10:00) Guam, Port Moresby"},{"value":"Australia/Hobart","label":"(UTC+10:00) Hobart"},{"value":"Asia/Magadan","label":"(UTC+10:00) Magadan"},{"value":"Asia/Vladivostok","label":"(UTC+10:00) Vladivostok, Magadan (RTZ 9)"},{"value":"Asia/Srednekolymsk","label":"(UTC+11:00) Chokurdakh (RTZ 10)"},{"value":"Pacific/Guadalcanal","label":"(UTC+11:00) Solomon Is., New Caledonia"},{"value":"Asia/Kamchatka","label":"(UTC+12:00) Anadyr, Petropavlovsk-Kamchatsky (RTZ 11)"},{"value":"Pacific/Auckland","label":"(UTC+12:00) Auckland, Wellington"},{"value":"Etc/GMT-12","label":"(UTC+12:00) Coordinated Universal Time+12"},{"value":"Pacific/Fiji","label":"(UTC+12:00) Fiji"},{"value":"Pacific/Tongatapu","label":"(UTC+13:00) Nuku'alofa"},{"value":"Pacific/Apia","label":"(UTC+13:00) Samoa"},{"value":"Pacific/Kiritimati","label":"(UTC+14:00) Kiritimati Island"}];

        return (
            <Main page="headers">
                <TitleBar title="Time Picker" />

                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Time Picker */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Time Picker
                        <Header.Subheader>
                            A basic Time Picker.
                        </Header.Subheader>
                    </Header>

                    <TimePicker
                        id="foo_time_picker"
                        onChange={this._onTimePickerChange.bind(this)}
                        value={this.state.value}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {timePickerSample}
                    </Highlighter>

                    {/* Disable */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Disable
                        <Header.Subheader>
                            Indicates that the Time Picker is not available for interaction.
                        </Header.Subheader>
                    </Header>

                    <TimePicker
                        disable
                        onChange={this._onTimePickerChange.bind(this)}
                        value={this.state.value}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {disableSample}
                    </Highlighter>

                    {/* Nest */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Nest
                        <Header.Subheader>
                            A Time Picker can give the appearance of being nested. The parent's background color needs to be set to <code>color(backgroundColorNest)</code>.
                        </Header.Subheader>
                    </Header>

                    <Block
                        nest
                        style={{ height: '175px', padding: '22px' }}
                    >
                        <TimePicker
                            nest
                            onChange={this._onNestChange.bind(this)}
                            value={this.state.nestValue}
                        />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {nestSample}
                    </Highlighter>

                    {/* Range */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Range
                        <Header.Subheader>
                            A Time Picker can be used in range mode, specifing a start time and an end time for the range.
                        </Header.Subheader>
                    </Header>

                    <Block
                        nest
                        style={{ height: '175px', padding: '22px' }}
                    >
                        <TimePicker
                            onChange={this._onRangeChange.bind(this)}
                            range
                            value={this.state.rangeValue}
                        />
                    </Block>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {rangeSample}
                    </Highlighter>

                    {/* Zone Options */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Zone Options
                        <Header.Subheader>
                            Provide a custom list of timezones to the Time Picker.
                        </Header.Subheader>
                    </Header>

                    <TimePicker
                        onChange={this._onTimePickerChange.bind(this)}
                        value={this.state.value}
                        zoneOptions={customZoneOptions}
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {zoneOptionsSample}
                    </Highlighter>

                    {/* Zone Match Props */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Zone Match Props
                        <Header.Subheader>
                            Whether to match the value, label or both values of each selection option when filtering.
                        </Header.Subheader>
                    </Header>

                    <TimePicker
                        onChange={this._onTimePickerChange.bind(this)}
                        value={this.state.value}
                        zoneOptions={customZoneOptions}
                        zoneMatchProp="label"
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {zoneMatchPropSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }

    _onTimePickerChange(value) {
        this.setState({ value: value });
    }

    _onNestChange(value) {
        this.setState({ nestValue: value });
    }

    _onRangeChange(value) {
        this.setState({ rangeValue: value });
    }

}
