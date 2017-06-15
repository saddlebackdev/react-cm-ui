'use strict';

import React from 'react';

export default class SubNavigationItem extends React.Component {

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
