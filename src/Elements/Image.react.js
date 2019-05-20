'use strict';

import React, { Component } from 'react';
import ClassNames from 'classnames';
import Icon from '../Elements/Icon.react.js';
import PropTypes from 'prop-types';
import Utils from '../utils/Utils.js';

class Image extends Component {
    render() {
        const { as, avatar, className, name, size, src, style } = this.props;
        let newAs = as || 'img';
        let newStyle = style;

        if (avatar) {
            newAs = 'div';
        }

        const ElementType = Utils.getElementType(newAs, this.props);
        const containerClasses = ClassNames('ui', 'image', className, {
            'image-avatar': avatar,
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

        if (avatar) {
            newStyle = Object.assign({}, style, {
                boxShadow: src ? 'none' : null,
                backgroundImage: src ? `url(${src})` : null,
                fontSize: !size || size < 44 ? '.75rem' : '1.125rem',
                height: size,
                width: size,
            });

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
                src={!avatar ? src : null}
                style={newStyle}
            >
                {avatar && !src ?
                    name ?
                        newInitials :
                        ( <Icon color="static" compact size={avatarSize} title="This person has no image" type="user" /> ) :
                    null}
            </ElementType>
        );
    }
}

const asEnums = [ 'div', 'img' ];

Image.propTypes = {
    as: PropTypes.oneOf(asEnums),
    avatar: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.object,
};

export default Image;
