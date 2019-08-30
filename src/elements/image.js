'use strict';

import { border as borderColor, bkgd as borderColorInverse } from '../shared/styles/colors.scss';

import React, { Component } from 'react';
import ClassNames from 'classnames';
import Icon from '../elements/icon.js';
import PropTypes from 'prop-types';
import Utils from '../utils/utils.js';

class Image extends Component {
    render() {
        const { as, border, borderInverse, className, name, size, src, style, type } = this.props;
        let newStyle = style;
        const ElementType = Utils.getElementType(!type ? as : 'div', this.props);
        const containerClasses = ClassNames('ui', 'image', className, {
            'image-avatar': type === 'person' || type === 'user',
            'image-avatar-person': type === 'person',
            'image-avatar-user': type === 'user',
        });

        if (ElementType === 'img') {
            newStyle = Object.assign({}, style, {
                backgroundImage: src ? `url(${src})` : null,
                width: size,
            });

            return (
                <ElementType
                    className={containerClasses}
                    src={src}
                    style={newStyle}
                />
            );
        }

        let newInitials, avatarSize = 'xsmall';

        if (type) {
            const boxShadowStyle = src ? 'none' : (!border ? `inset 0 0 0 1px ${borderColor}` : null);
            const borderColorStyle = borderInverse ? borderColorInverse : borderColor;
            const borderWidth = border === true ? '1' : border; 

            newStyle = Object.assign({}, {
                backgroundImage: src ? `url(${src})` : null,
                border: border ? `${borderWidth}px solid ${borderColorStyle}` : null,
                boxShadow: boxShadowStyle,
                fontSize: !size || size < 44 ? '.75rem' : '1.125rem',
                height: size,
                width: size,
            }, style );

            if (name) {
                newInitials = name.match(/\b\w/g) || [];
                newInitials = ((newInitials.shift() || '') + (newInitials.pop() || '')).toUpperCase();
            }

            if (size >= 88) {
                avatarSize = 'xxlarge';
            } else if (size >= 66) {
                avatarSize = 'large';
            } else if (size >= 44) {
                avatarSize = 'small';
            }
        }

        return (
            <ElementType
                className={containerClasses}
                src={!type ? src : null}
                style={newStyle}
            >
                {type && !src ?
                    name ?
                        newInitials :
                        ( <Icon color="static" compact size={avatarSize} title="This person has no image" type="user" /> ) :
                    null}
            </ElementType>
        );
    }
}

const asEnums = [ 'div', 'img' ];
const typeEnums = [ 'person', 'user' ];

Image.defaultProps = {
    as: 'img',
};

Image.propTypes = {
    as: PropTypes.oneOf(asEnums),
    border: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    borderInverse: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(typeEnums),
};

export default Image;
