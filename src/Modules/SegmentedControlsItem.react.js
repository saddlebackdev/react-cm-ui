'use strict';

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
    icon: React.PropTypes.string,
    label: React.PropTypes.string,
    onClick: React.PropTypes.func
};

export default SegmentedControlsItem;
