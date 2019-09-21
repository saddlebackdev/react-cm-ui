import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

class DragListener extends React.PureComponent {
    constructor() {
        super();
        this._onTouchEnd = this._onTouchEnd.bind(this);
        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchStart = this._onTouchStart.bind(this);
        this.currentDragPos = null;
        this.startDragPos = null;
    }

    render() {
        const { children, className, onClick, style } = this.props;
        return (
            <div
                className={className}
                onClick={onClick}
                onTouchEnd={this._onTouchEnd}
                onTouchMove={this._onTouchMove}
                onTouchStart={this._onTouchStart}
                style={style}
            >
                {children}
            </div>
        );
    }

    _onTouchEnd() {
        const { onDragEnd } = this.props;

        if (_.isFunction(onDragEnd)) {
            onDragEnd(this.currentDragPos);
        }

        this.currentDragPos = null;
        this.startDragPos = null;
    }

    _onTouchMove(e) {
        const { onDrag } = this.props;
        e.persist();
        const touch = e.touches[0];
        this.currentDragPos = {
            clientX: touch.clientX,
            clientY: touch.clientY,
            deltaX: touch.screenX - this.startDragPos.screenX,
            deltaY: touch.screenY - this.startDragPos.screenY,
            screenX: touch.screenX,
            screenY: touch.screenY,
        };
        onDrag(this.currentDragPos);
    }

    _onTouchStart(e) {
        const { onDragStart } = this.props;
        const touch = e.touches[0];
        this.currentDragPos = this.startDragPos = {
            clientX: touch.clientX,
            clientY: touch.clientY,
            deltaX: 0,
            deltaY: 0,
            screenX: touch.screenX,
            screenY: touch.screenY,
        };
        if (_.isFunction(onDragStart)) {
            onDragStart(this.startDragPos);
        }
    }
}

DragListener.propTypes = {
    className: PropTypes.string,
    onClick: PropTypes.func,
    onDrag: PropTypes.func.isRequired,
    onDragEnd: PropTypes.func,
    onDragStart: PropTypes.func,
    style: PropTypes.object,
};

export default DragListener;
