'use strict';

import _ from 'lodash';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-cm-ui';
import { DragSource, DropTarget } from 'react-dnd';

import ItemTypes from 'components/Examples/DragAndDrop/Sortable/ItemTypes.js';

const itemSource = {
    beginDrag(props) {
        return {
            id: props.id,
            index: props.index,
        }
    }
}

const itemTarget = {
    hover(props, monitor, component) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        if (dragIndex === hoverIndex) {
            return false;
        }

        const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
        const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return false;
        }

        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return false;
        }

        props.moveItem(dragIndex, hoverIndex);

        monitor.getItem().index = hoverIndex;
    }
}

class Item extends React.Component {
    render() {
        const { connectDragSource, connectDropTarget, title } = this.props;

        return connectDragSource(
            connectDropTarget(
                <div style={{ margin: '11px 0', width: '100%' }}>
                    <Button fluid>{title}</Button>
                </div>
            )
        );
    }
}

Item.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    connectDropTarget: PropTypes.func.isRequired,
    id: PropTypes.any.isRequired,
    index: PropTypes.number.isRequired,
    isDragging: PropTypes.bool.isRequired,
    moveItem: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
};

Item = _.flow(
    DragSource(ItemTypes.ITEM, itemSource, (connect, monitor) => ({
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging(),
    })),
    DropTarget(ItemTypes.ITEM, itemTarget, connect => ({
        connectDropTarget: connect.dropTarget()
    }))
)(Item);

export default Item;
