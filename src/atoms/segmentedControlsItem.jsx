import PropTypes from 'prop-types';
import React from 'react';

function SegmentedControlsItem(props) {
    const { children } = props;

    return (
        <div>
            {children}
        </div>
    );
}

SegmentedControlsItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
};

export default SegmentedControlsItem;
