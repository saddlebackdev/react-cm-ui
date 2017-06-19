'use strict';

import ClassNames from 'classnames';
import moment from 'moment-timezone';
import onClickOutside from 'react-onclickoutside';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';

import DOMUtils from '../utils/DOMUtils.js';

export class DatePickerDropdownYear extends Component {
    render() {
        const containerClasses = ClassNames('ui', 'date-picker-dropdown-year');

        let options = _.map(this._generateYears(), year => {
            const isSelectedClass = ClassNames('date-picker-year-option', {
                'date-picker-year-option-is-selected': this.props.year === year
            });

            return (
                <li id={this.props.year !== year ? null : 'date-picker-year-option-is-selected'} key={year}>
                    <a className={isSelectedClass} onClick={this._onClick.bind(this, year)}>{year}</a>
                </li>
            );
        });

        return (
            <div className={containerClasses}>
                <ScrollBar
                    autoHide={true}
                    className="date-picker-dropdown-year-scrollbar"
                >
                    <ul>
                        {options}
                    </ul>
                </ScrollBar>
            </div>
        );
    }

    componentDidMount() {
        if (!this.props.maxDate) {
            const datePickerWrapElement = ReactDOM.findDOMNode(document.querySelector('.date-picker-dropdown-year-scrollbar > div'));
            const selectedElement = ReactDOM.findDOMNode(document.getElementById('date-picker-year-option-is-selected'));
            const selectedPosistion = selectedElement.offsetTop - 11;

            DOMUtils.scrollTo(selectedPosistion, 0, datePickerWrapElement);
        }
    }

    _generateYears() {
        const maxDate = this.props.maxDate;
        const maxYear = maxDate ? moment(maxDate).year() : null;
        const currentYear = moment().year().valueOf();
        let futureYear = maxYear || currentYear + 100;
        let listMultiplyYear = maxDate ? 100 : 200;
        let list = [];

        for (let i = 0; i < listMultiplyYear; i++) {
            list.push(futureYear - i);
        }

        return list;
    }

    handleClickOutside() {
        this.props.onClose();
    }

    _onClick(year) {
        this.props.onChange(year);
        this.props.onClose();
    }
}

DatePickerDropdownYear.propTypes = {
    maxDate: React.PropTypes.object,
    onChange: React.PropTypes.func.isRequired,
    onClose: React.PropTypes.func.isRequired,
    year: React.PropTypes.number.isRequired
};

export default onClickOutside(DatePickerDropdownYear);
