import PropTypes from 'prop-types';
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
