import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import Container from '../../layout/container';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    id: PropTypes.string,
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    dataTestId: `${UI_CLASS_NAME}-drawer_container`,
    id: null,
};

function DrawerContainer(props) {
    const {
        children,
        classes,
        className,
        dataTestId,
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
            data-testid={dataTestId}
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
