import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../elements/icon';

const propTypes = {
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    option: PropTypes.shape({
        label: PropTypes.string,
    }).isRequired,
};

const defaultProps = {
    isSelected: undefined,
};

class FiltersDrawerNestedTogglesWingOptionLabel extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick() {
        const { onClick, option } = this.props;

        onClick(option);
    }

    onKeyDown(event) {
        const { onClick, option } = this.props;

        if (event.keyCode === 13) {
            onClick(option);
        }
    }

    render() {
        const { isSelected, option: { label } } = this.props;
        const containerClasses = ClassNames('page_filters_drawer_wing--option', {
            'page_filters_drawer_wing--option-selected': isSelected,
        });

        return (
            <div
                className={containerClasses}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                role="button"
                tabIndex={0}
            >
                <span>{label}</span>

                {isSelected && <Icon compact inverse type="check" />}
            </div>
        );
    }
}

FiltersDrawerNestedTogglesWingOptionLabel.propTypes = propTypes;
FiltersDrawerNestedTogglesWingOptionLabel.defaultProps = defaultProps;

export default FiltersDrawerNestedTogglesWingOptionLabel;
