'use strict';

import PropTypes from 'prop-types';
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
    as: PropTypes.oneOf(asEnums),
    label: PropTypes.string,
    style: PropTypes.string
};

export default ListItem;
