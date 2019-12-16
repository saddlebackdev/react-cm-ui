import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    style: {},
};

function DrawerContent(props) {
    const { children, className, style } = props;
    const containerClasses = ClassNames('ui', 'drawer--content', className);

    return (
        <div
            className={containerClasses}
            style={style}
        >
            {children}
        </div>
    );
}

DrawerContent.propTypes = propTypes;
DrawerContent.defaultProps = defaultProps;

export default DrawerContent;
