'use strict';

import PropTypes from 'prop-types';
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
    label: PropTypes.string,
    style: PropTypes.shape({})
};

export default TabsItem;
