'use strict';

import ClassNames from 'classnames';
import React, { Component } from 'react';

import Icon from './Icon.react';
import HeaderSubheader from './HeaderSubheader.react';

import Utils from '../utils/Utils.js';

class Header extends Component {

    render() {
        const { anchor, as, children, className, color, icon, inverse, size, style, sub, title } = this.props;
        const ElementType = Utils.getElementType(as);
        const containerClasses = ClassNames('ui', 'header', className, {
            'header-anchor': anchor,
            'header-color-inverse': inverse,
            'header-color-static': color === 'static',
            'header-color-text': color === 'text',
            'header-icon': icon,
            'header-size-large': size === 'large',
            'header-size-medium': size === 'medium',
            'header-size-small': size === 'small',
            'header-size-xlarge': size === 'xlarge',
            'header-size-xsmall': size === 'xsmall',
            'header-size-xxsmall': size === 'xxsmall',
            'header-subheader': sub
        });
        const anchorJSX = () => {
            if (anchor) {
                return (
                    <Icon
                        className="header-anchor-icon"
                        color="static"
                        compact={true}
                        onClick={this._onAnchorClick.bind(this)}
                        size="small"
                        type="link"
                    />
                );
            }
        };

        if (icon && sub) {
            return (
                <ElementType className={containerClasses} id={anchor} style={style}>
                    {children[0]}

                    <div>
                        {children.splice(1,1)}

                        {anchorJSX()}

                        {children.splice(1,2)}
                    </div>
                </ElementType>
            );
        }

        return (
            <ElementType className={containerClasses} id={anchor} style={style} title={title}>
                {anchor ? (
                    <span>
                        {children[0]}

                        {anchorJSX()}

                        {children[1]}
                    </span>
                ) : children}
            </ElementType>
        );
    }

    _onAnchorClick() {
        window.location.hash = this.props.anchor;
    }

}

Header.Subheader = HeaderSubheader;

const asEnums = [ 'h1', 'h2', 'h3', 'h4', 'h5', 'h6' ];
const colorEnums = [ 'static', 'text' ];

Header.propTypes = {
    anchor: React.PropTypes.string,
    as: React.PropTypes.oneOf(asEnums),
    className: React.PropTypes.string,
    color: React.PropTypes.oneOf(colorEnums),
    icon: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    size: React.PropTypes.oneOf(Utils.sizeEnums()),
    style: React.PropTypes.object,
    sub: React.PropTypes.bool,
    title: React.PropTypes.string
};

export default Header;
