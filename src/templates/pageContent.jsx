import PropTypes from 'prop-types';
import React from 'react';
import Content from './content';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isFiltersRailOpen: PropTypes.bool,
    scrollable: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: 'section',
    children: undefined,
    className: undefined,
    id: undefined,
    isFiltersRailOpen: false,
    scrollable: false,
    style: {},
};

function PageContent(props) {
    const {
        as,
        children,
        className,
        id,
        isFiltersRailOpen,
        scrollable,
        style,
    } = props;

    return (
        <Content
            as={as}
            className={className}
            id={id}
            isFiltersRailOpen={isFiltersRailOpen}
            moduleType="page"
            scrollable={scrollable}
            style={style}
        >
            {children}
        </Content>
    );
}

PageContent.propTypes = propTypes;
PageContent.defaultProps = defaultProps;

export default PageContent;
