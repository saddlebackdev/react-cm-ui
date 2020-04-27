'use strict';

import React, { Component } from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';

class TableHeader extends Component {
    render() {
        const {
            className,
            desktop,
            desktopLarge,
            id,
            laptop,
            mobile,
            mobileLarge,
            mobileMedium,
            style,
            tablet,
            width,
        } = this.props;
        const cellPrefix = 'table-header';
        const containerClasses = ClassNames(
            'table-header',
            width === true ?
                `${cellPrefix}-show` :
                width === false ?
                    `${cellPrefix}-hide` :
                    null,
            mobile === true ?
                `${cellPrefix}-mobile-show` :
                mobile === false ?
                    `${cellPrefix}-mobile-hide` :
                    null,
            mobileMedium === true ?
                `${cellPrefix}-mobile-medium-show` :
                mobileMedium === false ?
                    `${cellPrefix}-mobile-medium-hide` :
                    null,
            mobileLarge === true ?
                `${cellPrefix}-mobile-large-show` :
                mobileLarge === false ?
                    `${cellPrefix}-mobile-large-hide` :
                    null,
            tablet === true ?
                `${cellPrefix}-tablet-show` :
                tablet === false ?
                    `${cellPrefix}-tablet-hide` :
                    null,
            laptop === true ?
                `${cellPrefix}-laptop-show` :
                laptop === false ?
                    `${cellPrefix}-laptop-hide` :
                    null,
            desktop === true ?
                `${cellPrefix}-desktop-show` :
                desktop === false ?
                    `${cellPrefix}-desktop-hide` :
                    null,
            desktopLarge === true ?
                `${cellPrefix}-desktop-show` :
                desktopLarge === false ?
                    `${cellPrefix}-desktop-hide` :
                    null,
            className
        );

        return (
            <thead
                className={containerClasses}
                id={id}
                style={style}
            >
                {this.props.children}
            </thead>
        );
    }
}

TableHeader.propTypes = {
    className: PropTypes.string,
    desktop: PropTypes.bool,
    desktopLarge: PropTypes.bool,
    id: PropTypes.string,
    laptop: PropTypes.bool,
    mobile: PropTypes.bool,
    mobileLarge: PropTypes.bool,
    mobileMedium: PropTypes.bool,
    style: PropTypes.shape({}),
    tablet: PropTypes.bool,
    width: PropTypes.bool,
};

export default TableHeader;
