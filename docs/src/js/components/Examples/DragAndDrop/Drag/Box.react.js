'use strict';

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'react-cm-ui';
import { DragSource } from 'react-dnd';

import ItemTypes from 'components/Examples/DragAndDrop/Drag/ItemTypes.js';

const boxSource = {
    beginDrag(props) {
        const { id, left, top } = props
        return { id, left, top }
    }
}

class Box extends React.Component {
    render() {
        const { children, connectDragSource, hideSourceOnDrag, isDragging, left, top } = this.props;

        return connectDragSource(
            <div
                style={{
                    cursor: 'move',
                    left,
                    position: 'absolute',
                    top
                }}
            >
                <Button style={{ whiteSpace: 'nowrap' }}>{children}</Button>
            </div>
        );
    }
}

Box.propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired
};

export default DragSource(ItemTypes.BOX, boxSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
}))(Box);
