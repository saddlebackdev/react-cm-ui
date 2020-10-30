import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Content from '../content';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: 'section',
    children: null,
    classes: null,
    className: null,
    id: null,
    style: null,
};

function PageContent(props) {
    const {
        as,
        children,
        classes,
        className,
        id,
        style,
    } = props;

    const bemName = 'page--content';

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
            moduleType="page"
            style={style}
        >
            {children}
        </Content>
    );
}

PageContent.propTypes = propTypes;
PageContent.defaultProps = defaultProps;

export default PageContent;
