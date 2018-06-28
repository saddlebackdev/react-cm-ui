'use strict';

import { Icon } from 'react-cm-ui';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Utils from '../utils/Utils.js';

class Drawer extends Component {
    constructor() {
        super();

        this.state = { isActive: false };

        this._onToggleClick = this._onToggleClick.bind(this);
    }
    render() {
        const { children, className, style } = this.props;
        const { isActive } = this.state;
        const containerClasses = ClassNames('info-bar-drawer', {
            'info-bar-drawer-is-active': isActive
        });
        const innerContainerClasses = ClassNames('inner-container', className);

        return (
            <div className={containerClasses}>
                <div className={innerContainerClasses} style={style}>
                    <Icon
                        className="info-bar-drawer-toggle"
                        compact
                        inverse={!isActive}
                        onClick={this._onToggleClick}
                        rotate={isActive ? 180 : null}
                        type="chevron-up"
                    />

                    <div>{children}</div>
                </div>
            </div>
        );
    }

    _onToggleClick() {
        const { isActive } = this.state;

        this.setState({ isActive: !isActive });
    }
}

Drawer.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object
};

class InfoBar extends Component {
    render() {
        const { as, children, className, color, drawer, style } = this.props;
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
        const customDrawerObj = _.find(convertChildren, child => {
            return child && _.isFunction(child.type) && child.type.name === 'Drawer';
        });
        let renderDrawer;

        if (drawer && customDrawerObj) {
            renderDrawer = (
                <Drawer {...customDrawerObj.props} />
            );
        }

        let renderChildren = _.map(convertChildren, (child, index) => {
            const isDrawer = child && _.isFunction(child.type) && child.type.name === 'Drawer';

            if (!isDrawer) {
                return (
                    <div key={index}>
                        {child}
                    </div>
                );
            }
        });

        return (
            <ElementType
                className={containerClasses}
                style={style}
            >
                {renderChildren}
                {renderDrawer}
            </ElementType>
        );
    }
};

InfoBar.Drawer = Drawer;

const asEnums = [ 'div', 'section' ];
const colorEnums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

InfoBar.propTypes = {
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    color: PropTypes.oneOf(colorEnums),
    drawer: PropTypes.bool,
    style: PropTypes.object
};

export default InfoBar;
