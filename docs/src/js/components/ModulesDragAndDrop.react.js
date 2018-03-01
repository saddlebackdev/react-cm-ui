'use strict';

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { Header, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';

// Example Components
import ExampleDNDDrag from 'components/Examples/DragAndDrop/Drag/Index.react';
import ExampleDNDSortable from 'components/Examples/DragAndDrop/Sortable/Index.react';

const libDragDropContextSample = `import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export default DragDropContext(HTML5Backend);`;

const dragIndexSample = `'use strict';

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { DropTarget } from 'react-dnd';

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

export default LibDragDropContext(Container);`;

const dragBoxSample = `'use strict';

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
}))(Box);`;

const dragItemTypesSample = `export default {
    BOX: 'box'
}`;

const sortableIndexSample = `'use strict';

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import update from 'immutability-helper';

// Docs UI Components
import Main from 'components/UI/Main.react';

// Example Components
import Item from 'components/Examples/DragAndDrop/Sortable/Item.react.js';
import LibDragDropContext from 'components/Examples/DragAndDrop/LibDragDropContext.react.js';

class Container extends React.Component {
    constructor() {
        super();

        this.state = {
            items: [
                { id: 1, title: 'Option Number One' },
                { id: 2, title: 'Option Number Two' },
                { id: 3, title: 'Option Number Three' },
                { id: 4, title: 'Option Number Four' },
                { id: 5, title: 'Option Number Five' },
                { id: 6, title: 'Option Number Six' }
            ]
        };

        this._onMoveItem = this._onMoveItem.bind(this);
    }

    render() {
        const { items } = this.state;

        return (
            <div style={{
                border: '1px solid black',
                position: 'relative',
                height: 277,
                maxWidth: 300,
                padding: '0 11px',
                width: '100%'
            }}>
                {_.map(items, (item, i) => {
                    return (
                        <Item
                            key={item.id}
                            id={item.id}
                            index={i}
                            moveItem={this._onMoveItem}
                            title={item.title}
                        />
                    );
                })}
            </div>
        );
    }

    _onMoveItem(dragIndex, hoverIndex) {
        const { items } = this.state;
        const dragItem = items[dragIndex];

        this.setState(update(this.state, {
            items: {
                $splice: [[dragIndex, 1], [hoverIndex, 0, dragItem]],
            }
        }));
    }
}

export default LibDragDropContext(Container);`;

const sortableItemSample = `'use strict';

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

export default Item;`;

const sortableItemTypesSample = `export default {
    ITEM: 'item'
}`;

class ModulesDragAndDrop extends React.Component {
    render() {
        const { connectDragSource, connectDropTarget } = this.props;

        return (
            <Main page="headers">
                <TitleBar title="Drag & Drop" />

                {/* React-DnD */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    React-DnD
                    <Header.Subheader>
                        React-CM-UI uses react-dnd for dragging and dropping UI elements.
                    </Header.Subheader>
                </Header>

                <p>"React DnD is a set of React higher-order components to help you build complex drag and drop
                    interfaces while keeping your components decoupled. It is a perfect fit for apps like Trello and
                    Storify, where dragging transfers data between different parts of the application, and the
                    components change their appearance and the application state in response to the drag and drop
                    events."</p>

                <p>For comprehensive instructions on how to use react-dnd, please visit <a href="http://react-dnd.github.io/react-dnd/" target="_blank">http://react-dnd.github.io/react-dnd/</a></p>


                {/* Drag */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Drag
                    <Header.Subheader>
                        blah.
                    </Header.Subheader>
                </Header>

                <ExampleDNDDrag />

                <p style={{ marginTop: '44px' }}><code>../LibDragDropContext.react.js</code></p>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '22px' }}>
                    {libDragDropContextSample}
                </Highlighter>

                <p style={{ marginTop: '33px' }}><code>./Index.react.js</code></p>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '22px' }}>
                    {dragIndexSample}
                </Highlighter>

                <p style={{ marginTop: '33px' }}><code>./Box.react.js</code></p>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '22px' }}>
                    {dragBoxSample}
                </Highlighter>

                <p style={{ marginTop: '33px' }}><code>./ItemTypes.js</code></p>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '22px' }}>
                    {dragItemTypesSample}
                </Highlighter>

                {/* Sortable */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Sortable
                    <Header.Subheader>
                        blah.
                    </Header.Subheader>
                </Header>

                <ExampleDNDSortable />

                <p style={{ marginTop: '44px' }}><code>../LibDragDropContext.react.js</code></p>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '22px' }}>
                    {libDragDropContextSample}
                </Highlighter>

                <p style={{ marginTop: '33px' }}><code>./Index.react.js</code></p>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '22px' }}>
                    {sortableIndexSample}
                </Highlighter>

                <p style={{ marginTop: '33px' }}><code>./Item.react.js</code></p>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '22px' }}>
                    {sortableItemSample}
                </Highlighter>

                <p style={{ marginTop: '33px' }}><code>./ItemTypes.js</code></p>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '22px' }}>
                    {sortableItemTypesSample}
                </Highlighter>
            </Main>
        );
    }
}

export default ModulesDragAndDrop;
