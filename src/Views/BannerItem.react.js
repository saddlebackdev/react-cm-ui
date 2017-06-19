'use strict';

import React, { Component } from 'react';

class BannerItem extends Component {

    render() {
        return (
            <div className="accordion-item">
                {this.props.children}
            </div>
        );
    }
}

const levelEnums = [ 'error', 'secondary', 'success', 'warning' ];

BannerItem.propTypes = {
    className: React.PropTypes.string,
    level: React.PropTypes.oneOf(levelEnums),
    levelIcon: React.PropTypes.string,
    message: React.PropTypes.string,
    style: React.PropTypes.object,
    title: React.PropTypes.string
};

export default BannerItem;
