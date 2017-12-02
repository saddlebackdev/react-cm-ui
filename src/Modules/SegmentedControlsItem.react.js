'use strict';

import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SegmentedControlsItem extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

};

SegmentedControlsItem.propTypes = {
    icon: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func
};

export default SegmentedControlsItem;
