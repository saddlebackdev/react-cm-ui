'use strict';

import React, { Component } from 'react';
import ClassNames from 'classnames';
import Icon from '../elements/icon.js';
import PropTypes from 'prop-types';
import Utils from '../utils/utils.js';

class Image extends Component {
    render() {
        const { as, className, name, size, src, style, type, border, borderInverse } = this.props;
        let newAs = as || 'img';
        let newStyle = style;

        if (type) {
            newAs = 'div';
        }

        const ElementType = Utils.getElementType(newAs, this.props);
        const containerClasses = ClassNames('ui', 'image', className, {
            'image-avatar': type==='person' || type==='user',
            'image-avatar-person': type==='person',
            'image-avatar-user': type==='user',
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
            newStyle = Object.assign({}, {
                boxShadow: src ? 'none' : (!border? 'inset 0 0 0 1px #dbe0e3' : null),
                backgroundImage: src ? `url(${src})` : null,
                fontSize: !size || size < 44 ? '.75rem' : '1.125rem',
                height: size,
                width: size,
                border: border ? (borderInverse ? `${border}px solid #fff` : `${border}px solid #dbe0e3`) : 'none',
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

Image.propTypes = {
    as: PropTypes.oneOf(asEnums),
    border: PropTypes.number,
    borderInverse: PropTypes.bool,
    className: PropTypes.string,
    name: PropTypes.string,
    size: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.object,
    type: PropTypes.oneOf(typeEnums),
};

export default Image;
