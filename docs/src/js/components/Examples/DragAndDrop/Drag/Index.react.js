'use strict';

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { DropTarget } from 'react-dnd';

// Docs UI Components
import Main from 'components/UI/Main.react';

// Example Components
import Box from 'components/Examples/DragAndDrop/Drag/Box.react.js';
import ItemTypes from 'components/Examples/DragAndDrop/Drag/ItemTypes.js';
import LibDragDropContext from 'components/Examples/DragAndDrop/LibDragDropContext.react.js';

const boxTarget = {
    drop(props, monitor, component) {
        const item = monitor.getItem()
        const delta = monitor.getDifferenceFromInitialOffset()
        const left = Math.round(item.left + delta.x)
        const top = Math.round(item.top + delta.y)

        component.onMoveBox(item.id, left, top)
    }
}

class Container extends React.Component {
    constructor() {
        super();

        this.state = {
            boxes: [
                { left: 11, title: 'Drag me!', top: 11 },
                { left: 11, title: 'No, drag me around!', top: 55 }
            ]
        };
    }

    render() {
        const { connectDropTarget } = this.props;
        const { boxes } = this.state;

        return connectDropTarget(
            <div style={{
                border: '1px solid black',
                position: 'relative',
                height: 300,
                maxWidth: 458,
                width: '100%'
            }}>
                {_.map(boxes, (b, i) => {
                    return (
                        <Box
                            key={i}
                            id={i}
                            left={b.left}
                            top={b.top}
                        >
                            {b.title}
                        </Box>
                    );
                })}
            </div>
        );
    }

    onMoveBox(id, left, top) {
        const { boxes } = this.state;
        let newBoxes = boxes;
        newBoxes[id] = {
            left,
            title: boxes[id].title,
            top
        };

        this.setState({ boxes: newBoxes });
    }
}

Container.propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
};

Container = DropTarget(ItemTypes.BOX, boxTarget, connect => ({
    connectDropTarget: connect.dropTarget()
}))(Container);

export default LibDragDropContext(Container);
