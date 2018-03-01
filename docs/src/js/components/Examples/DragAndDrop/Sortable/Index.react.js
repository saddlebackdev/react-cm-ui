'use strict';

import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import update from 'immutability-helper';

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

export default LibDragDropContext(Container);
