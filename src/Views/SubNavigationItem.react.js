'use strict';

import React, { Component } from 'react';

class SubNavigationItem extends Component {

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }

}

SubNavigationItem.propTypes = {
    label: React.PropTypes.string,
    onClick: React.PropTypes.func,
    style: React.PropTypes.object
};

export default SubNavigationItem;
