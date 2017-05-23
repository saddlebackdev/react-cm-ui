'use strict';

import React from 'react';

export default class SegmentedControlsItem extends React.Component {

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
