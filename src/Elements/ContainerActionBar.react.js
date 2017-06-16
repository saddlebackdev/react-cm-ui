'use strict';

import ClassNames from 'classnames';
import React from 'react';

import UIUtils from 'utils/Utils.js';

export default class ContainerActionBar extends React.Component {

    render() {
        const { as, className, color, stretch, style } = this.props;
        const containerClasses = ClassNames('container-action-bar', className, {
            'container-action-bar-color-inverse': color === 'inverse',
            'container-action-bar-color-light': color === 'light',
            'container-action-bar-color-nest': color === 'nest',
            'container-action-bar-color-transparent': color === 'transparent',
            'container-stretch': stretch
        });
        const ElementType = UIUtils.getElementType(as || 'header', this.props);

        return (
            <ElementType className={containerClasses} style={style}>
                {this.props.children}
            </ElementType>
        );
    }

}

const asEnums = [ 'div', 'header' ,'section' ];

ContainerActionBar.propTypes = {
    as: React.PropTypes.oneOf(asEnums),
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(UIUtils.colorEnums()),
    stretch: React.PropTypes.bool,
    style: React.PropTypes.object
};
