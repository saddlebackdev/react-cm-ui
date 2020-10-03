import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Content from '../../layout/content';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
};

const defaultProps = {
    as: 'section',
    children: null,
    classes: null,
    className: null,
    id: null,
};

function DrawerContent(props) {
    const {
        as,
        children,
        classes,
        className,
        id,
    } = props;

    const bemName = 'drawer--content';

    const rootClasses = ClassNames(
        'ui',
        bemName,
        className,
    );

    return (
        <Content
            as={as}
            classes={classes}
            className={rootClasses}
            id={id}
            moduleType="drawer"
        >
            {children}
        </Content>
    );
}

DrawerContent.propTypes = propTypes;
DrawerContent.defaultProps = defaultProps;

export default DrawerContent;
