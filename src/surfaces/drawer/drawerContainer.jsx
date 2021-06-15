import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';

const propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Used for DOM testing. https://testing-library.com/docs/queries/bytestid/
     */
    dataTestId: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    children: null,
    className: null,
    dataTestId: `${UI_CLASS_NAME}-drawer_container`,
    id: null,
    style: null,
};

function DrawerContainer(props) {
    const {
        children,
        className,
        dataTestId,
        id,
        style,
    } = props;

    const rootClasses = ClassNames('ui', 'drawer--container', className);

    return (
        <div
            className={rootClasses}
            data-testid={dataTestId}
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
