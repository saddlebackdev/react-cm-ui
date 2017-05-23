'use strict';

import 'components/UI/Modules/DatePickerDropdownMonth.scss';

import ClassNames from 'classnames';
import onClickOutside from 'react-onclickoutside';
import React from 'react';

export class DatePickerDropdownMonth extends React.Component {
    render() {
        const { month } = this.props;
        const containerClasses = ClassNames('ui', 'date-picker-dropdown-month');
        const selectedClass = 'date-picker-month-option-is-selected';

        return (
            <div className={containerClasses}>
                <ul>
                    <li className={month === 0 ? selectedClass : null}><a onClick={this._onClick.bind(this, 0)}>January</a></li>
                    <li className={month === 1 ? selectedClass : null}><a onClick={this._onClick.bind(this, 1)}>February</a></li>
                    <li className={month === 2 ? selectedClass : null}><a onClick={this._onClick.bind(this, 2)}>March</a></li>
                    <li className={month === 3 ? selectedClass : null}><a onClick={this._onClick.bind(this, 3)}>April</a></li>
                    <li className={month === 4 ? selectedClass : null}><a onClick={this._onClick.bind(this, 4)}>May</a></li>
                    <li className={month === 5 ? selectedClass : null}><a onClick={this._onClick.bind(this, 5)}>June</a></li>
                </ul>

                <ul>
                    <li className={month === 6 ? selectedClass : null}><a onClick={this._onClick.bind(this, 6)}>July</a></li>
                    <li className={month === 7 ? selectedClass : null}><a onClick={this._onClick.bind(this, 7)}>August</a></li>
                    <li className={month === 8 ? selectedClass : null}><a onClick={this._onClick.bind(this, 8)}>September</a></li>
                    <li className={month === 9 ? selectedClass : null}><a onClick={this._onClick.bind(this, 9)}>October</a></li>
                    <li className={month === 10 ? selectedClass : null}><a onClick={this._onClick.bind(this, 10)}>November</a></li>
                    <li className={month === 11 ? selectedClass : null}><a onClick={this._onClick.bind(this, 11)}>Decemeber</a></li>
                </ul>
            </div>
        );
    }

    handleClickOutside() {
        this.props.onClose();
    }

    _onClick(month) {
        this.props.onChange(month);
        this.props.onClose();
    }
}

export default onClickOutside(DatePickerDropdownMonth);

DatePickerDropdownMonth.propTypes = {
    maxDate: React.PropTypes.object,
    month: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func.isRequired
};
