'use strict';

import React, { Component } from 'react';

class TabsItem extends Component {

    render() {
        return (
            <div className="ui tabs-content" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

};

TabsItem.propTypes = {
    label: React.PropTypes.string,
    style: React.PropTypes.object
};

export default TabsItem;
