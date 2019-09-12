'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../utils/utils.js';

const PageContent = (props) => {
    const { as, children, className, isFiltersRailOpen, style } = props;
    const winWidth = window.innerWidth;
    const isMobile = winWidth <= 767;
    const containerClasses = ClassNames('ui', 'page--content', className, {
        'page--content-filters_rail_open': !isMobile && isFiltersRailOpen,
    });
    const ElementType = Utils.getElementType(as, props);

    return (
        <ElementType className={containerClasses} style={style}>
            {children}
        </ElementType>
    );
};

PageContent.defaultProps = {
    as: 'section',
    isFiltersRailOpen: false,
};

const asEnums = [ 'div', 'header', 'main', 'section' ];

PageContent.propTypes = {
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    isFiltersRailOpen: PropTypes.bool,
    style: PropTypes.object,
};

export default PageContent;
