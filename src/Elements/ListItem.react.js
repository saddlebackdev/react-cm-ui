'use strict';

import React, { Component } from 'react';

import Utils from '../utils/Utils.js';

class ListItem extends Component {

    render() {
        const ElementType = Utils.getElementType(as || 'div', this.props);

        return (
            <div className="list-item" style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

};

const asEnums = [ 'div', 'li' ];

ListItem.propTypes = {
    as: React.PropTypes.oneOf(asEnums),
    label: React.PropTypes.string,
    style: React.PropTypes.string
};

export default ListItem;
