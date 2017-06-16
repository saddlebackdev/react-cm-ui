'use strict';

import React from 'react';

import UIUtils from 'utils/Utils.js';

export default class ListItem extends React.Component {

    render() {
        const ElementType = UIUtils.getElementType(as || 'div', this.props);

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
