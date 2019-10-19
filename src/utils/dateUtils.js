import _ from 'lodash';
import moment from 'moment-timezone';

const DateUtils = {
    formatWithTz(data, userTimeZoneId) {
        const timeZoneId = userTimeZoneId || DateUtils.getDetectedTimeZone();

        return DateUtils.formatWithSpecifiedTz(data, timeZoneId);
    },

    timeFromNow(
        date,
        future = 'in %s',
        past = '%s ago',
        s = 'a few seconds',
        ss = '%d seconds',
        m = 'a minute',
        mm = '%d minutes',
        h = 'an hour',
        hh = '%d hours',
        d = 'a day',
        dd = '%d days',
        M = 'a month',
        MM = '%d months',
        y = 'a year',
        yy = '%d years',
    ) {
        // Customizing moment's relativeTime
        moment.updateLocale('en', {
            relativeTime: {
                future,
                past,
                s,
                ss,
                m,
                mm,
                h,
                hh,
                d,
                dd,
                M,
                MM,
                y,
                yy,
            },
        });

        return moment(date).fromNow(true);
    },

    formatWithSpecifiedTz(data, timeZoneId) {
        if (_.isNil(data)) {
            return null;
        }

        if (_.isNumber(data)) {
            return moment.unix(data).utc().tz(timeZoneId).format('L LT z');
        }

        return moment.utc(data, 'YYYY-MM-DDTHH:mm:ss').tz(timeZoneId).format('L LT z');
    },

    formatForCommentsWithTz(data, userTimeZoneId) {
        const timeZoneId = userTimeZoneId || DateUtils.getDetectedTimeZone();

        if (data === null || typeof data === 'undefined') {
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
            const momentObj = DateUtils.unixToTz(data);
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

    format(data) {
        if (_.isNil(data)) {
            return null;
        }

        if (_.isNumber(data)) {
            return moment.unix(data).utc().format('L');
        }

        return moment.utc(data, 'YYYY-MM-DDTHH:mm:ss').format('L');
    },

    formatTimeOnly(data) {
        if (_.isNil(data)) {
            return null;
        }

        if (_.isNumber(data)) {
            return moment.unix(data).utc().format('L LT z');
        }

        return moment(data, 'HH:mm').format('hh:mm a');
    },

    formatShort(data) {
        if (data === null || typeof data === 'undefined') {
            return null;
        }

        if (_.isNumber(data)) {
            return moment.unix(data).utc().format('MM/DD/YY');
        }

        return moment(data).format('MM/DD/YY');
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
        return DateUtils.unixToTz(date).calendar(null, {
            sameDay: '[Today] - MM/DD/YY',
            nextDay: '[Tomorrow] - MM/DD/YY',
            lastDay: '[Yesterday] - MM/DD/YY',
            lastWeek: 'MM/DD/YY',
            nextWeek: 'MM/DD/YY',
            sameElse: 'MM/DD/YY',
        });
    },

    unixToTz(date, userTimeZoneId) {
        const timeZoneId = userTimeZoneId || DateUtils.getDetectedTimeZone();

        return moment.unix(date).utc().tz(timeZoneId);
    },
};

export default DateUtils;
