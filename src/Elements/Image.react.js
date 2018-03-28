'use strict';

import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Icon from '../Elements/Icon.react';

import Utils from '../utils/Utils.js';

class Image extends Component {
    render() {
        const { as, avatar, className, src, style } = this.props;
        let newAs = as || 'img';
        let newStyle = style;

        if (avatar) {
            newAs = 'div';
            newStyle = _.assign(style, {
                boxShadow: src ? 'none' : null,
                backgroundImage: src ? `url(${src})` : null
            });
        }

        const ElementType = Utils.getElementType(newAs, this.props);
        const containerClasses = ClassNames('ui', 'image', className, {
            'image-avatar': avatar
        });

        if (ElementType === 'img') {
            return (
                <ElementType
                    className={containerClasses}
                    src={!avatar ? src : null}
                    style={newStyle}
                />
            );
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
    size: PropTypes.oneOf(Utils.sizeEnums()),
    src: PropTypes.string,
    style: PropTypes.object
};

export default Image;
