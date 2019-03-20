'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
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
    maxDate: PropTypes.object,
    month: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
};

export default DatePickerMonthDropdown;
