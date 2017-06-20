'use strict';

import React, { Component } from 'react';

class HeaderSubheader extends Component {

    render() {
        return (
            <div className="ui subheader">
                {this.props.children}
            </div>
        );
    }

}

export default HeaderSubheader;
