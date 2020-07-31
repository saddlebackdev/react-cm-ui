import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    /**
     * The content of the TableBody
     */
    children: PropTypes.node,
    /**
     * Assign additional class names to TableBody.
     */
    className: PropTypes.string,
    /**
     * The `id` of the TableBody.
     */
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: null,
    className: null,
    id: null,
    style: null,
};

const TableBody = React.forwardRef(
    // eslint-disable-next-line prefer-arrow-callback
    function TableBody(props, ref) {
        const {
            children,
            className,
            id,
            style,
        } = props;

        const containerClasses = ClassNames(
            'table-body',
            className,
        );

        return (
            <tbody
                className={containerClasses}
                id={id}
                ref={ref}
                style={style}
            >
                {children}
            </tbody>
        );
    },
);

TableBody.propTypes = propTypes;
TableBody.defaultProps = defaultProps;

export default TableBody;
