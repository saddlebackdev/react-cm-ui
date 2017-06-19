'use strict';

import ClassNames from 'classnames';
import React, { Component } from 'react';

class TableBody extends Component {

    render() {
        const { className, style } = this.props;
        const containerClasses = ClassNames(
            'ui',
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
    className: React.PropTypes.string,
    style: React.PropTypes.object
};

export default TableBody;
