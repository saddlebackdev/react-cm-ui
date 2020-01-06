import PropTypes from 'prop-types';
import React from 'react';
import Container from './container';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: undefined,
    className: undefined,
    id: undefined,
    style: {},
};

function DrawerContainer(props) {
    const {
        children,
        className,
        id,
        style,
    } = props;

    return (
        <Container
            className={className}
            id={id}
            moduleType="drawer"
            style={style}
        >
            {children}
        </Container>
    );
}

DrawerContainer.propTypes = propTypes;
DrawerContainer.defaultProps = defaultProps;

export default DrawerContainer;
