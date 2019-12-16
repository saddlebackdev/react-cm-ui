import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'header', 'main', 'section']),
    children: PropTypes.node,
    className: PropTypes.string,
    id: PropTypes.string,
    isFiltersRailOpen: PropTypes.bool,
    moduleType: PropTypes.oneOf(['drawer', 'page']).isRequired,
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
        moduleType,
        scrollable,
        style,
    } = props;
    const winWidth = window.innerWidth;
    const isMobile = winWidth <= 767;
    const bemName = `${moduleType}--content`;
    const containerClasses = ClassNames('ui', bemName, className, {
        [`${bemName}-filters_rail_open`]: !isMobile && isFiltersRailOpen,
        [`${bemName}-scrollable`]: scrollable,
    });
    const ElementType = Utils.getElementType(as, props);

    return (
        <ElementType className={containerClasses} id={id} style={style}>
            {children}
        </ElementType>
    );
}

PageContent.propTypes = propTypes;
PageContent.defaultProps = defaultProps;

export default PageContent;
