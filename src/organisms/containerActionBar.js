
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Utils from '../utils/utils.js';

class ContainerActionBar extends Component {
    render() {
        const {
            as, className, color, stretch, style,
        } = this.props;
        const containerClasses = ClassNames('container-action-bar', className, {
            'container-action-bar-color-inverse': color === 'inverse',
            'container-action-bar-color-light': color === 'light',
            'container-action-bar-color-nest': color === 'nest',
            'container-action-bar-color-transparent': color === 'transparent',
            'container-stretch': stretch,
        });
        const ElementType = Utils.getElementType(as || 'header', this.props);

        return (
            <ElementType className={containerClasses} style={style}>
                <div style={{ width: '100%' }}>
                    {this.props.children}
                </div>
            </ElementType>
        );
    }
}

const asEnums = ['div', 'header', 'section'];

ContainerActionBar.propTypes = {
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    stretch: PropTypes.bool,
    style: PropTypes.shape({}),
};

export default ContainerActionBar;
