'use strict';

import 'Collections//Elements/Container.scss';

import ClassNames from 'classnames';
import React from 'react';

import ContainerActionBar from 'Collections//Elements/ContainerActionBar.react';
import ContainerContent from 'Collections//Elements/ContainerContent.react';

import UIUtils from 'utils/Utils.js';

export default class Container extends React.Component {

    render() {
        const { as, className, color, style } = this.props;
        const containerClasses = ClassNames('ui', 'container', className, {
            'container-color-inverse': color === 'inverse',
            'container-color-light': color === 'light',
            'container-color-nest': color === 'nest',
            'container-color-transparent': color === 'transparent',
        });
        const ElementType = UIUtils.getElementType(as || 'main', this.props);

        return (
            <ElementType className={containerClasses} style={style}>
                {this.props.children}
            </ElementType>
        );
    }

}

Container.ActionBar = ContainerActionBar;
Container.Content = ContainerContent;

const asEnums = [ 'div', 'header', 'main', 'section' ];

Container.propTypes = {
    as: React.PropTypes.oneOf(asEnums),
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(UIUtils.colorEnums()),
    style: React.PropTypes.object
};
