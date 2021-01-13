import PropTypes from 'prop-types';
import React from 'react';

SegmentedControlsItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
};

function SegmentedControlsItem(props) {
    const {
        children,
    } = props;

    return (
        <div>
            {children}
        </div>
    );
}

export default SegmentedControlsItem;
