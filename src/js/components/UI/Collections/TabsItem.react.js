'use strict';

import React from 'react';

export default class TabsItem extends React.Component {

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
