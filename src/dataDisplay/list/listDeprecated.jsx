import _ from 'lodash';
import ClassNames from 'classnames';
import React from 'react';
import ListItemDeprecated from './listItemDeprecated';
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

class ListDeprecated extends React.Component {
    onItemClick(index, onChildClick, event) {
        if (!_.isUndefined(onChildClick)) {
            onChildClick(index);
        }

        event.preventDefault();
    }

    render() {
        const {
            as,
            children,
            className,
            divide,
            fluid,
            horizontal,
            inverse,
            style,
        } = this.props;

        const containerClasses = ClassNames('ui', 'list', className, {
            'list-divide': divide,
            'list-horizontal': horizontal,
            'list-fluid': fluid,
            'list-inverse': inverse,
        });

        const ElementType = Utils.getElementType(as || 'div', this.props);

        // eslint-disable-next-line consistent-return
        const items = React.Children.map(children, (child, index) => {
            if (!_.isNil(child)) {
                return (
                    <ListItemDeprecated
                        as={as}
                        // eslint-disable-next-line react/no-array-index-key
                        key={`list--item${index}`}
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...child.props}
                    />
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

ListDeprecated.Item = ListItemDeprecated;

ListDeprecated.propTypes = propTypes;
ListDeprecated.defaultProps = defaultProps;

export default ListDeprecated;
