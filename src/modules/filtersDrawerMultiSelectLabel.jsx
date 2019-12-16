import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import Label from '../elements/label';

const propTypes = {
    color: PropTypes.string,
    label: PropTypes.string.isRequired,
    onItemChange: PropTypes.func.isRequired,
    selectedOption: PropTypes.shape({}).isRequired,
    value: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

const defaultProps = {
    color: undefined,
};

class FiltersDrawerMultiSelectLabel extends React.PureComponent {
    constructor() {
        super();

        this.onClearClick = this.onClearClick.bind(this);
    }

    onClearClick() {
        const { onItemChange, selectedOption, value } = this.props;
        const filteredOptions = _.differenceBy(value, [selectedOption], 'value');

        onItemChange(filteredOptions);
    }

    render() {
        const { color, label } = this.props;

        return (
            <Label
                color={color || 'highlight'}
                onClearClick={this.onClearClick}
                style={{
                    marginRight: '5px',
                    marginTop: '11px',
                }}
            >
                {label}
            </Label>
        );
    }
}

FiltersDrawerMultiSelectLabel.propTypes = propTypes;
FiltersDrawerMultiSelectLabel.defaultProps = defaultProps;

export default FiltersDrawerMultiSelectLabel;
