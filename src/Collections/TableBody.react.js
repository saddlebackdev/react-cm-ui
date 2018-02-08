'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TableBody extends Component {

    render() {
        const { className, style } = this.props;
        const containerClasses = ClassNames(
            'table-body',
            className
        );

        return (
            <tbody className={containerClasses} style={style}>
                {this.props.children}
            </tbody>
        );
    }

}

TableBody.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

export default TableBody;
