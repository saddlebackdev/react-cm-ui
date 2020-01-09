import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../global/utils';

class Item extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onClick } = this.props;

        if (!_.isUndefined(onClick)) {
            onClick();
        }
    }

    render() {
        const { as, children, className, divide, style } = this.props;
        const containerClasses = ClassNames('list--item', className, {
            'list--item-divide': divide,
        });
        let ElementType;

        switch (as) {
            case 'ol':
            case 'ul':
                ElementType = Utils.getElementType('li', this.props);

                break;
            default:
                ElementType = Utils.getElementType('div', this.props);

                break;
        }

        return (
            <ElementType className={containerClasses} onClick={this.onClick} style={style}>
                {children}
            </ElementType>
        );
    }
}

Item.propTypes = {
    as: PropTypes.string,
    className: PropTypes.string,
    divide: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.object,
};

class List extends React.PureComponent {
    onItemClick(index, onChildClick, event) {
        if (!_.isUndefined(onChildClick)) {
            onChildClick(index);
        }

        event.preventDefault();
    }

    render() {
        const { as, children, className, divide, fluid, horizontal, inverse, style } = this.props;
        const containerClasses = ClassNames('ui', 'list', className, {
            'list-divide': divide,
            'list-horizontal': horizontal,
            'list-fluid': fluid,
            'list-inverse': inverse,
        });
        const ElementType = Utils.getElementType(as || 'div', this.props);
        const items = React.Children.map(children, (child, index) => {
            if (!_.isNil(child)) {
                return (
                    <Item as={as} key={'list--item' + index} {...child.props} />
                );
            }
        });

        return (
            <ElementType className={containerClasses} style={style}>
                {items}
            </ElementType>
        );
    }
}

List.Item = Item;

const asEnums = [ 'div', 'ol', 'ul' ];

List.propTypes = {
    as: PropTypes.oneOf(asEnums),
    className: PropTypes.string,
    divide: PropTypes.bool,
    fluid: PropTypes.bool,
    horizontal: PropTypes.bool,
    inverse: PropTypes.bool,
    style: PropTypes.object,
};

export default List;
