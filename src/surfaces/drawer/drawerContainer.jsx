import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: null,
    className: null,
    id: null,
    style: null,
};

function DrawerContainer(props) {
    const {
        children,
        className,
        id,
        style,
    } = props;

    const rootClasses = ClassNames('ui', 'drawer--container', className);

    return (
        <div
            className={rootClasses}
            id={id}
            style={style}
        >
            {children}
        </div>
    );
}

DrawerContainer.propTypes = propTypes;
DrawerContainer.defaultProps = defaultProps;

export default DrawerContainer;
