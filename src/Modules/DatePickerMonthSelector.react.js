'use strict';

import ClassNames from 'classnames';
import React, { Component } from 'react';

class DatePickerMonthDropdown extends Component {
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

export default DatePickerMonthDropdown;
