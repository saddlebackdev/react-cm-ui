'use strict';

import React from 'react';

export default class HeaderSubheader extends React.Component {

    render() {
        return (
            <div className="ui subheader">
                {this.props.children}
            </div>
        );
    }

}
