'use strict';

import PropTypes from 'prop-types';
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
    label: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.shape({})
};

export default SubNavigationItem;
