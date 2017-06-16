'use strict';

import 'Collections//Elements/List.scss';

import ClassNames from 'classnames';
import React from 'react';

import ListItem from 'Collections//Elements/ListItem.react';

import UIUtils from 'utils/Utils.js';

export default class List extends React.Component {

    render() {
        const { as, children, className, divide, fluid, horizontal, style } = this.props;
        const containerClasses = ClassNames('ui', 'list', className, {
            'list-divide': divide,
            'list-horizontal': horizontal,
            'list-fluid': fluid
        });
        const ElementType = UIUtils.getElementType(as || 'div', this.props);
        const convertChildren = _.isArray(children) ? children : [ children ];
        let items = _.map(convertChildren, (child, index) => {
            return (
                <div
                    className="list-item"
                    onClick={this._onItemClick.bind(this, index, child.props.onClick)}
                    key={'list-item' + index}
                >
                        {child.props.children}
                </div>
            );
        });

        return (
            <ElementType className={containerClasses} style={style}>
                {items}
            </ElementType>
        );
    }

    _onItemClick(index, onChildClick, event) {
        if (!_.isUndefined(onChildClick)) {
            onChildClick(index);
        }

        event.preventDefault();
    }
}

List.Item = ListItem;

const asEnums = [ 'div', 'ol', 'ul' ];

List.propTypes = {
    as: React.PropTypes.oneOf(asEnums),
    className: React.PropTypes.string,
    divide: React.PropTypes.bool,
    fluid: React.PropTypes.bool,
    horizontal: React.PropTypes.bool,
    style: React.PropTypes.object
};
