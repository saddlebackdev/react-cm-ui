'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ContainerActionBar from './ContainerActionBar.react';
import ContainerContent from './ContainerContent.react';

import Utils from '../utils/Utils.js';

class Container extends Component {

    render() {
        const { as, className, color, style } = this.props;
        const containerClasses = ClassNames('ui', 'container', className, {
            'container-color-inverse': color === 'inverse',
            'container-color-light': color === 'light',
            'container-color-nest': color === 'nest',
            'container-color-transparent': color === 'transparent',
        });
        const ElementType = Utils.getElementType(as || 'main', this.props);

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
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    style: PropTypes.object
};

export default Container;
