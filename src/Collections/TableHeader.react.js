'use strict';

import 'Collections/TableHeader.scss';

import ClassNames from 'classnames';
import React from 'react';

export default class TableHeader extends React.Component {

    render() {
        const { className, desktop, desktopLarge,
            laptop, mobile, mobileLarge,
            mobileMedium, style, tablet,
            width } = this.props;
        const cellPrefix = 'table-header';
        const containerClasses = ClassNames(
            'ui',
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
            <thead className={containerClasses} style={style}>
                {this.props.children}
            </thead>
        );
    }

}

TableHeader.propTypes = {
    className: React.PropTypes.string,
    desktop: React.PropTypes.bool,
    desktopLarge: React.PropTypes.bool,
    laptop: React.PropTypes.bool,
    mobile: React.PropTypes.bool,
    mobileLarge: React.PropTypes.bool,
    mobileMedium: React.PropTypes.bool,
    style: React.PropTypes.object,
    tablet: React.PropTypes.bool,
    width: React.PropTypes.bool
};
