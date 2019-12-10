import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../elements/icon.js';

const propTypes = {
    nestedTogglesData: PropTypes.shape({
        label: PropTypes.string,
    }).isRequired,
    onClick: PropTypes.func.isRequired,
};

class NestedTogglesLabel extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick() {
        const { nestedTogglesData, onClick } = this.props;

        onClick(nestedTogglesData);
    }

    onKeyDown(event) {
        const { nestedTogglesData, onClick } = this.props;

        if (event.keyCode === 13) {
            onClick(nestedTogglesData);
        }
    }

    render() {
        const {
            nestedTogglesData: { label },
        } = this.props;
        const containerClasses = ClassNames('page_filters_drawer--nested_toggles_label');

        return (
            <div
                className={containerClasses}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                role="button"
                tabIndex={0}
            >
                <span>{label}</span>

                <Icon compact type="chevron-right" />
            </div>
        );
    }
}

NestedTogglesLabel.propTypes = propTypes;

export default NestedTogglesLabel;
