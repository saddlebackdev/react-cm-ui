import { isFunction } from 'lodash';
import ClassNames from 'classnames';
import React from 'react';
import Utils from '../../utils/utils';
import {
    LIST_DEPRECATED_DEFAULT_PROPS,
    LIST_DEPRECATED_PROP_TYPES,
} from './constants';

const propTypes = {
    ...LIST_DEPRECATED_PROP_TYPES,
};

const defaultProps = {
    ...LIST_DEPRECATED_DEFAULT_PROPS,
};

class ListItemDeprecated extends React.Component {
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
            <ElementType
                className={containerClasses}
                onClick={this.onClick}
                style={style}
            >
                {children}
            </ElementType>
        );
    }
}

ListItemDeprecated.propTypes = propTypes;
ListItemDeprecated.defaultProps = defaultProps;

export default ListItemDeprecated;
