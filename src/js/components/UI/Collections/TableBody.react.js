'use strict';

import 'components/UI/Collections/TableBody.scss';

import ClassNames from 'classnames';
import React from 'react';

export default class TableBody extends React.Component {

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
