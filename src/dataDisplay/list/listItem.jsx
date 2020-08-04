import { isFunction } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/utils';

const propTypes = {
    as: PropTypes.string,
    className: PropTypes.string,
    divide: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: null,
    className: null,
    divide: null,
    onClick: null,
    style: null,
};

class ListItem extends React.Component {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const { onClick } = this.props;

        if (isFunction(onClick)) {
            onClick();
        }
    }

    render() {
        const {
            as,
            children,
            className,
            divide,
            style,
        } = this.props;

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

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default ListItem;
