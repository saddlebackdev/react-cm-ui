'use strict';

import ClassNames from 'classnames';
import React from 'react';

export default class DatePickerMonthDropdown extends React.Component {
    render() {
        const containerClasses = ClassNames('ui', 'date-picker-month-dropdown');

        return (
            <div className={containerClasses}>
                month
            </div>
        );
    }
}

DatePickerMonthDropdown.propTypes = {
    maxDate: React.PropTypes.object,
    month: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired
};
