'use strict';

import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import ListItem from './ListItem.react';

import Utils from '../utils/Utils.js';

class List extends Component {

    render() {
        const { as, children, className, divide, fluid, horizontal, style } = this.props;
        const containerClasses = ClassNames('ui', 'list', className, {
            'list-divide': divide,
            'list-horizontal': horizontal,
            'list-fluid': fluid
        });
        const ElementType = Utils.getElementType(as || 'div', this.props);
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
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    divide: PropTypes.bool,
    fluid: PropTypes.bool,
    horizontal: PropTypes.bool,
    style: PropTypes.object
};

export default List;
