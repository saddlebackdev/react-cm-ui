
import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

class TableBody extends Component {
    render() {
        const {
            className,
            id,
            style,
        } = this.props;
        const containerClasses = ClassNames(
            'table-body',
            className,
        );

        return (
            <tbody
                className={containerClasses}
                id={id}
                style={style}
            >
                {this.props.children}
            </tbody>
        );
    }
}

TableBody.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object,
};

export default TableBody;
