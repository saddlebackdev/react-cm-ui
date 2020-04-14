import _ from 'lodash';
import moment from 'moment-timezone';

const dateUtils = {
    formatForCommentsWithTz(data, userTimeZoneId) {
        const timeZoneId = userTimeZoneId || dateUtils.getDetectedTimeZone();

        if (_.isNil(data)) {
            return null;
        }

        let dataMoment = null;

        if (_.isNumber(data)) {
            if (data === 0) {
                return null;
            }

            dataMoment = moment.unix(data).utc().tz(timeZoneId);
        } else {
            dataMoment = moment.utc(data, 'YYYY-MM-DDTHH:mm:ss').tz(timeZoneId);
        }

        const today = moment().startOf('day');
        const dataDate = moment(dataMoment).startOf('day');
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
    },

    formatDaysFromToday(data) {
        if (_.isNumber(data)) {
            const momentObj = dateUtils.unixToTz(data);
            let returnText = momentObj.fromNow().toLowerCase();

            switch (returnText) {
                case 'in a day':
                    returnText = 'Tomorrow';

                    break;
                case 'a day ago':
                    returnText = 'Yesterday';

                    break;
                default:
                    break;
            }

            return returnText;
        }

        return null;
    },

    formatDate(data) {
        if (_.isNil(data)) {
            return null;
        }

        if (_.isNumber(data)) {
            return moment.unix(data).utc().format('L');
        }

        return moment.utc(data, 'YYYY-MM-DDTHH:mm:ss').format('L');
    },

    formatDateWithSpecifiedTz(data, timeZoneId) {
        if (_.isNil(data)) {
            return null;
        }

        if (_.isNumber(data)) {
            return moment.unix(data).utc().tz(timeZoneId).format('MM/DD/YY'); // TODO/FIXME: Consider using L (although that has a 4 digit year, i.e. YYYY)
        }

        return moment(data).tz(timeZoneId).format('MM/DD/YY'); // TODO/FIXME: Consider using L (although that has a 4 digit year, i.e. YYYY)
    },

    formatDateAndTime(data) {
        if (_.isNil(data)) {
            return null;
        }

        if (_.isNumber(data)) {
            return moment.unix(data).utc().format('L LT');
        }

        return moment.utc(data, 'YYYY-MM-DDTHH:mm:ss').format('L LT');
    },

    formatDateAndTimeWithSpecifiedTz(data, timeZoneId) {
        if (_.isNil(data)) {
            return null;
        }

        if (_.isNumber(data)) {
            return moment.unix(data).utc().tz(timeZoneId).format('L LT z');
        }

        return moment.utc(data, 'YYYY-MM-DDTHH:mm:ss').tz(timeZoneId).format('L LT z');
    },

    formatDateAndTimeWithTz(data, userTimeZoneId) {
        const timeZoneId = userTimeZoneId || dateUtils.getDetectedTimeZone();

        return dateUtils.formatDateAndTimeWithSpecifiedTz(data, timeZoneId);
    },

    formatTime(data) {
        if (_.isNil(data)) {
            return null;
        }

        if (_.isNumber(data)) {
            return moment.unix(data).utc().format('LT');
        }

        return moment(data, 'HH:mm').format('LT');
    },

    formatDayOfWeek(data) {
        if (_.isNumber(data)) {
            return moment.unix(data).utc().format('dddd');
        }

        return null;
    },

    toUnixTimestamp(data) {
        if (_.isNil(data)) {
            return null;
        }

        return moment.utc(data, 'MM/DD/YYYY').unix();
    },

    getDetectedTimeZone() {
        return moment.tz.guess();
    },

    getAllowedDateFormats() {
        const formats = [
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
            'DD.MM.YY',
        ];

        const localeData = moment.localeData();
        const longDateFormat1 = localeData.longDateFormat('L');

        if (_.indexOf(formats, longDateFormat1) < 0) {
            formats.unshift(longDateFormat1);
        }

        const longDateFormat2 = localeData.longDateFormat('LL');

        if (_.indexOf(formats, longDateFormat2) < 0) {
            formats.unshift(longDateFormat2);
        }

        return formats;
    },

    getLocalDateTime(date) {
        return moment.utc(date).local().format('MM/DD/YYYY h:mm a');
    },

    getWeekNum(date) {
        const fullDate = moment.unix(date).utc();
        const currentDate = fullDate.clone();
        let weeksToStart = 0;

        while (currentDate.month() === fullDate.month()) {
            currentDate.subtract(1, 'week');
            weeksToStart += 1;
        }

        return weeksToStart;
    },

    /**
     * Display a day relative to a given param.
     * @returns {String} Returns the formatted string.
     */
    fromNow(date) {
        return dateUtils.unixToTz(date).calendar(null, {
            sameDay: '[Today] - MM/DD/YY',
            nextDay: '[Tomorrow] - MM/DD/YY',
            lastDay: '[Yesterday] - MM/DD/YY',
            lastWeek: 'MM/DD/YY',
            nextWeek: 'MM/DD/YY',
            sameElse: 'MM/DD/YY',
        });
    },

    unixToTz(date, userTimeZoneId) {
        const timeZoneId = userTimeZoneId || dateUtils.getDetectedTimeZone();

        return moment.unix(date).utc().tz(timeZoneId);
    },
};

export default dateUtils;
