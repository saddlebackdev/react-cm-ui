'use strict';

import ClassNames from 'classnames';
import DOMUtils from '../utils/domUtils.js';
import moment from 'moment-timezone';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';

class ListItem extends React.PureComponent {
    constructor() {
        super();

        this._onClick = this._onClick.bind(this);
    }

    render() {
        const { isSelected, year } = this.props;
        const isSelectedClass = ClassNames('date-picker-year-option', {
            'date-picker-year-option-is-selected': isSelected,
        });

        return (
            <li className={isSelected ? 'date-picker-year-option-is-selected' : null}>
                <a
                    className={isSelectedClass}
                    onClick={this._onClick}
                >
                    {year}
                </a>
            </li>
        );
    }

    _onClick() {
        const { onClick, year } = this.props;

        onClick(year);
    }
}

ListItem.propTypes = {
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
};

class DatePickerDropdownYear extends React.PureComponent {
    constructor() {
        super();

        this._onClick = this._onClick.bind(this);
    }

    render() {
        const { year } = this.props;
        const containerClasses = ClassNames('date-picker-dropdown-year');

        let options = _.map(this._generateYears(), y => {
            return (
                <ListItem
                    isSelected={year === y}
                    key={y}
                    onClick={this._onClick}
                    year={y}
                />
            );
        });

        return (
            <div className={containerClasses}>
                <ScrollBar
                    autoHide
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
        const { maxDate } = this.props;

        if (!maxDate) {
            const datePickerWrapElement = ReactDOM.findDOMNode(document.querySelector('.date-picker-dropdown-year-scrollbar > div'));
            const selectedElement = ReactDOM.findDOMNode(document.querySelector('.date-picker-year-option-is-selected'));
            const selectedPosistion = selectedElement.offsetTop - 11;

            DOMUtils.scrollTo(selectedPosistion, 0, datePickerWrapElement);
        }
    }

    _generateYears() {
        const { maxDate } = this.props;
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
        const { onClose } = this.props;

        onClose();
    }

    _onClick(month) {
        const { onChange, onClose } = this.props;

        onChange(month);
        onClose();
    }
}

DatePickerDropdownYear.propTypes = {
    maxDate: PropTypes.object,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired
};

export default onClickOutside(DatePickerDropdownYear);
