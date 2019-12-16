import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    isFiltersRailOpen: PropTypes.bool,
    scrollable: PropTypes.bool,
    style: PropTypes.shape({}),
};
const defaultProps = {
    as: 'section',
    children: undefined,
    className: undefined,
    isFiltersRailOpen: false,
    scrollable: false,
    style: {},
};

function PageContent(props) {
    const { 
        as, 
        children, 
        className, 
        isFiltersRailOpen, 
        scrollable, 
        style,
    } = props;
    const winWidth = window.innerWidth;
    const isMobile = winWidth <= 767;
    const containerClasses = ClassNames('ui', 'page--content', className, {
        'page--content-filters_rail_open': !isMobile && isFiltersRailOpen,
        'page--content-scrollable': scrollable,
    });
    const ElementType = Utils.getElementType(as, props);

    return (
        <ElementType className={containerClasses} style={style}>
            {children}
        </ElementType>
    );
}

PageContent.propTypes = propTypes;
PageContent.defaultProps = defaultProps;

export default PageContent;
