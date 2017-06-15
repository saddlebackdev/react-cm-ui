'use strict';

import _ from 'lodash';
import jstz from 'jstimezonedetect';
import moment from 'moment-timezone';

export default class DateUtils {

    static getDetectedTimeZone() {
        let tz = jstz.determine().name();
        return tz;
    }

    static formatWithTz(data, userTimeZoneId) {
        let timeZoneId = userTimeZoneId || DateUtils.getDetectedTimeZone();

        return DateUtils.formatWithSpecifiedTz(data, timeZoneId);
    }

    static formatWithSpecifiedTz(data, timeZoneId) {
        if (data === null || typeof data === 'undefined') {
            return null;
        }

        if (_.isNumber(data)) {
            if (data === 0) { return null; }

            return moment.unix(data).utc().tz(timeZoneId).format('L LT z');
        } else {
            return moment.utc(data, 'YYYY-MM-DDTHH:mm:ss').tz(timeZoneId).format('L LT z');
        }
    }

    static formatForCommentsWithTz(data, userTimeZoneId) {
        let timeZoneId = userTimeZoneId || DateUtils.getDetectedTimeZone();

        if (data === null || typeof data === 'undefined') {
            return null;
        }

        let dataMoment = null;

        if (_.isNumber(data)) {
            if (data === 0) { return null; }

            dataMoment = moment.unix(data).utc().tz(timeZoneId);
        } else {
            dataMoment = moment.utc(data, 'YYYY-MM-DDTHH:mm:ss').tz(timeZoneId);
        }

        let today = moment().startOf('day');
        let dataDate = moment(dataMoment).startOf('day');
        let dateString = null;

        switch (today.diff(dataDate, 'day')) {
            case 0:
                dateString = 'Today';
                break;
            case 1:
                dateString = 'Yesterday';
                break;
            default:
                dateString = dataMoment.format('L');
                break;
        }

        return `${dateString} - ${dataMoment.format('LT')}`;
    }

    static formatDaysFromToday(data) {
        if (data === null || typeof data === 'undefined') {
            return null;
        }

        if (_.isNumber(data)) {
            if (data === 0) { return null; }

            let momentObj = DateUtils.unixToTz(data);
            let returnText = momentObj.fromNow().toLowerCase();

            switch(returnText) {
                case 'in a day':
                    returnText = 'Tomorrow';
                    break;
                case 'a day ago':
                    returnText = 'Yesterday';
                    break;
            }

            return returnText;
        }
    }

    static format(data) {
        if (data === null || typeof data === 'undefined') {
            return null;
        }

        if (_.isNumber(data)) {
            if (data === 0) { return null; }

            return moment.unix(data).utc().format('L');
        } else {
            return moment.utc(data, 'YYYY-MM-DDTHH:mm:ss').format('L');
        }
    }

    static formatShort(data) {
        if (data === null || typeof data === 'undefined') {
            return null;
        }

        if (_.isNumber(data)) {
            if (data === 0) { return null; }
            return moment.unix(data).utc().format('MM/DD/YY')
        }
    }

    static toUnixTimestamp(data) {
        return moment.utc(data, 'MM/DD/YYYY').unix();
    }

    static getAllowedDateFormats() {
        let formats = [
            moment.ISO_8601,
            'MM/DD/YYYY',
            'MM-DD-YYYY',
            'MM.DD.YYYY',
            'MM/DD/YY',
            'MM-DD-YY',
            'MM.DD.YY',
            'M/D/YYYY',
            'M-D-YYYY',
            'M.D.YYYY',
            'M/D/YY',
            'M-D-YY',
            'M.D.YY',
            'MMM D YYYY',
            'MMM DD YYYY',
            'MMM D YY',
            'MMM DD YY',
            'D-MMM-YYYY',
            'D MMM YYYY',
            'D-MMM-YY',
            'D MMM YY',
            'D-M-YYYY',
            'D/M/YYYY',
            'D.M.YYYY',
            'D-M-YY',
            'D/M/YY',
            'D.M.YY',
            'DD/MM/YYYY',
            'DD-MM-YYYY',
            'DD.MM.YYYY',
            'DD/MM/YY',
            'DD-MM-YY',
            'DD.MM.YY'
        ];

        let localeData = moment.localeData();
        let longDateFormat1 = localeData.longDateFormat('L');

        if (_.indexOf(formats, longDateFormat1) < 0)
            formats.unshift(longDateFormat1);

        let longDateFormat2 = localeData.longDateFormat('LL');

        if (_.indexOf(formats, longDateFormat2) < 0)
            formats.unshift(longDateFormat2);

        return formats;
    }

    /**
     * Display a day relative to a given param.
     *
     * @returns {String} Returns the formatted string.
     */
    static fromNow(date) {
        return DateUtils.unixToTz(date).calendar(null, {
            sameDay: '[Today] - MM/DD/YY',
            nextDay: '[Tomorrow] - MM/DD/YY',
            lastDay: '[Yesterday] - MM/DD/YY',
            lastWeek : 'MM/DD/YY',
            nextWeek : 'MM/DD/YY',
            sameElse: 'MM/DD/YY'
        });
    }

    static unixToTz(date, userTimeZoneId) {
        const timeZoneId = userTimeZoneId || DateUtils.getDetectedTimeZone();
        return moment.unix(date).utc().tz(timeZoneId);
    }
}
