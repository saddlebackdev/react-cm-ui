import {
    differenceBy,
} from 'lodash';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import Tag from '../../dataDisplay/tag';

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

function FiltersDrawerMultiSelectTag(props) {
    const {
        color,
        label,
        onItemChange,
        selectedOption,
        value,
    } = props;

    const onClearClick = useCallback(() => {
        const filteredOptions = differenceBy(
            value,
            [selectedOption],
            'value',
        );

        onItemChange(filteredOptions);
    }, [
        onItemChange,
        selectedOption,
        value,
    ]);

    return (
        <Tag
            color={color || 'highlight'}
            onClearClick={onClearClick}
            style={{
                marginRight: '5px',
                marginTop: '11px',
            }}
        >
            {label}
        </Tag>
    );
}

FiltersDrawerMultiSelectTag.propTypes = propTypes;
FiltersDrawerMultiSelectTag.defaultProps = defaultProps;

export default FiltersDrawerMultiSelectTag;
