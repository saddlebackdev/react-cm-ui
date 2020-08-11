import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ListItem from './listItem';
import Utils from '../../utils/utils';

const propTypes = {
    as: PropTypes.oneOf(['div', 'ol', 'ul']),
    children: PropTypes.node,
    className: PropTypes.string,
    divide: PropTypes.bool,
    fluid: PropTypes.bool,
    horizontal: PropTypes.bool,
    inverse: PropTypes.bool,
    style: PropTypes.shape({}),
};

const defaultProps = {
    as: null,
    children: null,
    className: null,
    divide: null,
    fluid: null,
    horizontal: null,
    inverse: null,
    style: null,
};

class List extends React.Component {
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

        const items = React.Children.map(children, (child, index) => {
            if (!_.isNil(child)) {
                return (
                    <ListItem
                        as={as}
                        key={'list--item' + index}
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

List.Item = ListItem;

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
