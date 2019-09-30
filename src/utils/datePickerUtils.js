class DatePickerUtils {
    static isSameDay(moment1, moment2) {
        if (moment1 && moment2) {
            return moment1.isSame(moment2, 'day');
        }
        return !moment1 && !moment2;
    }

    static isDayDisabled(day, {
        minDate, maxDate, excludeDates, includeDates, filterDates,
    } = {}) {
        return (minDate && day.isBefore(minDate, 'day')) ||
        (maxDate && day.isAfter(maxDate, 'day')) ||
        (excludeDates &&
            excludeDates.some((excludeDate) => DatePickerUtils.isSameDay(day, excludeDate))) ||
        (includeDates &&
            !includeDates.some((includeDate) => DatePickerUtils.isSameDay(day, includeDate))) ||
        (filterDates && !filterDates(day.clone())) ||
        false;
    }
}

export default DatePickerUtils;
