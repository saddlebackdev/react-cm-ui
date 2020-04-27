import ClassNames from 'classnames';
import moment from 'moment-timezone';
import onClickOutside from 'react-onclickoutside';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import ScrollBar from 'react-custom-scrollbars';
import DatePickerDropdownYearListItem from './datePickerDropdownYearListItem';

const propTypes = {
    maxDate: PropTypes.shape({}),
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
};

class DatePickerDropdownYear extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
        const { maxDate } = this.props;

        if (!maxDate) {
            const selectedElement = ReactDOM.findDOMNode(document.querySelector('.date-picker-year-option-is-selected'));
            const selectedPosistion = selectedElement.offsetTop - 11;

            this.scrollComponent.scrollTop(selectedPosistion);
        }
    }

    generateYears() {
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

    onClick(month) {
        const { onChange, onClose } = this.props;

        onChange(month);
        onClose();
    }

    render() {
        const { year } = this.props;
        const containerClasses = ClassNames('date-picker-dropdown-year');

        let options = _.map(this.generateYears(), (y) => {
            return (
                <DatePickerDropdownYearListItem
                    isSelected={year === y}
                    key={y}
                    onClick={this.onClick}
                    year={y}
                />
            );
        });

        return (
            <div className={containerClasses}>
                <ScrollBar
                    autoHide
                    className="date-picker-dropdown-year-scrollbar"
                    ref={(ref) => { this.scrollComponent = ref; }}
                >
                    <ul>
                        {options}
                    </ul>
                </ScrollBar>
            </div>
        );
    }
}

DatePickerDropdownYear.propTypes = propTypes;

export default onClickOutside(DatePickerDropdownYear);
