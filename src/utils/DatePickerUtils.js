'use strict';

import moment from 'moment-timezone';

class DatePickerUtils {
    static isSameDay(moment1, moment2) {
        if (moment1 && moment2) {
            return moment1.isSame(moment2, 'day');
        } else {
            return !moment1 && !moment2;
        }
    }

    static isDayDisabled(day, { minDate, maxDate, excludeDates, includeDates, filterDates } = {}) {
        return (minDate && day.isBefore(minDate, 'day')) ||
        (maxDate && day.isAfter(maxDate, 'day')) ||
        (excludeDates && excludeDates.some(excludeDate => isSameDay(day, excludeDate))) ||
        (includeDates && !includeDates.some(includeDate => isSameDay(day, includeDate))) ||
        (filterDates && !filterDates(day.clone())) ||
        false;
    }

    static getMoment(date, isDateRange) {
        return {
            date: isDateRange ? undefined : date || moment(),
            dateFrom: !isDateRange ? undefined : date || moment(),
            dateTo: !isDateRange ? undefined : date || moment(),
        };
    }
}

export default DatePickerUtils;
