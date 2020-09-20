import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Container from '../../layout/container';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    id: null,
};

function DrawerContainer(props) {
    const {
        children,
        classes,
        className,
        id,
    } = props;

    const rootClasses = ClassNames(
        'ui',
        'drawer--container',
        className,
    );

    return (
        <Container
            classes={classes}
            className={rootClasses}
            id={id}
            moduleType="drawer"
        >
            {children}
        </Container>
    );
}

DrawerContainer.propTypes = propTypes;
DrawerContainer.defaultProps = defaultProps;

export default DrawerContainer;
