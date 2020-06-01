import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    year: PropTypes.number.isRequired,
};

class ListItem extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onClick, year } = this.props;

        onClick(year);
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
                    onClick={this.onClick}
                >
                    {year}
                </a>
            </li>
        );
    }
}

ListItem.propTypes = propTypes;

export default ListItem;
