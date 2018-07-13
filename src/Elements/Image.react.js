'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Icon from '../Elements/Icon.react';

import Utils from '../utils/Utils.js';

class Image extends Component {
    render() {
        const { as, avatar, className, size, src, style } = this.props;
        let newAs = as || 'img';
        let newStyle = style;

        if (avatar) {
            newAs = 'div';
        }

        const ElementType = Utils.getElementType(newAs, this.props);
        const containerClasses = ClassNames('ui', 'image', className, {
            'image-avatar': avatar
        });

        if (ElementType === 'img') {
            newStyle = Object.assign({}, style, {
                backgroundImage: src ? `url(${src})` : null,
                width: size
            });

            return (
                <ElementType
                    className={containerClasses}
                    src={!avatar ? src : null}
                    style={newStyle}
                />
            );
        }

        if (avatar) {
            newStyle = Object.assign({}, style, {
                boxShadow: src ? 'none' : null,
                backgroundImage: src ? `url(${src})` : null,
                height: size,
                width: size
            });
        }

        return (
            <ElementType
                className={containerClasses}
                src={!avatar ? src : null}
                style={newStyle}
            >
                {avatar && !src ? (
                    <Icon color="static" compact size="xsmall" type="user" />
                ) : null}
            </ElementType>
        );
    }
}

const asEnums = [ 'div', 'img' ];

Image.propTypes = {
    as: PropTypes.oneOf(asEnums),
    avatar: PropTypes.bool,
    className: PropTypes.string,
    size: PropTypes.number,
    src: PropTypes.string,
    style: PropTypes.object
};

export default Image;
