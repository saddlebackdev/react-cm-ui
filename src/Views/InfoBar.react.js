'use strict';

import { Icon } from 'react-cm-ui';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Utils from '../utils/Utils.js';

class InfoBar extends Component {
    render() {
        const { as, children, className, color, style } = this.props;
        const containerClasses = ClassNames('ui', 'info-bar', className, {
            'info-bar-color-one': color === 1,
            'info-bar-color-two': color === 2,
            'info-bar-color-three': color === 3,
            'info-bar-color-four': color === 4,
            'info-bar-color-five': color === 5,
            'info-bar-color-six': color === 6,
            'info-bar-color-seven': color === 7,
            'info-bar-color-eight': color === 8,
            'info-bar-color-nine': color === 9,
            'info-bar-color-ten': color === 10
        });
        const ElementType = Utils.getElementType(as || 'div', this.props);
        const convertChildren = _.isArray(children) ? children : [ children ];

        let renderChildren = _.map(convertChildren, (child, index) => {
            return (
                <div key={index}>
                    {child}
                </div>
            );
        });

        return (
            <ElementType
                className={containerClasses}
                style={style}
            >
                {renderChildren}
            </ElementType>
        );
    }
};

const asEnums = [ 'div', 'section' ];
const colorEnums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

InfoBar.propTypes = {
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    color: PropTypes.oneOf(colorEnums),
    style: PropTypes.object
};

export default InfoBar;
