import {
    get,
    noop,
    size,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../../dataDisplay/icon';

const propTypes = {
    nestedTogglesData: PropTypes.shape({
        value: PropTypes.arrayOf(PropTypes.any),
    }).isRequired,
    onClick: PropTypes.func.isRequired,
    option: PropTypes.shape({
        label: PropTypes.string,
    }).isRequired,
};

class FiltersDrawerNestedTogglesValueLabel extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { nestedTogglesData, onClick, option } = this.props;

        onClick(nestedTogglesData, option);
    }

    render() {
        const { nestedTogglesData, option: { label } } = this.props;
        const containerClasses = ClassNames('page_filters_drawer--nested_toggles_value_label');
        const clearable = get(nestedTogglesData, 'clearable', true);
        const canClear = clearable || size(nestedTogglesData.value) > 1;

        return (
            <div
                className={containerClasses}
            >
                <span>{label}</span>

                <Icon
                    color={canClear ? 'primary' : 'static'}
                    onClick={canClear ? this.onClick : noop}
                    size="xsmall"
                    type="times"
                />
            </div>
        );
    }
}

FiltersDrawerNestedTogglesValueLabel.propTypes = propTypes;

export default FiltersDrawerNestedTogglesValueLabel;
