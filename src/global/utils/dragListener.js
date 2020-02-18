import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

class DragListener extends React.PureComponent {
    constructor() {
        super();

        this.onDrag = this.onDrag.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onDragStart = this.onDragStart.bind(this);
        this.onTouchEnd = this.onTouchEnd.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onTouchStart = this.onTouchStart.bind(this);
        this.currentDragPos = null;
        this.startDragPos = null;
    }

    onDrag(e) {
        const { onDrag } = this.props;

        if (!this.startDragPos) {
            return;
        }

        this.currentDragPos = {
            clientX: e.clientX,
            clientY: e.clientY,
            deltaX: e.screenX - this.currentDragPos.screenX,
            deltaY: e.screenY - this.currentDragPos.screenY,
            screenX: e.screenX,
            screenY: e.screenY,
        };
        if (this.currentDragPos.deltaX !== 0 && e.screenX !== 0 && e.screenY !== 0) {
            onDrag(this.currentDragPos);
        }
    }

    onDragEnd(e) {
        const { onDragEnd } = this.props;

        if (_.isFunction(onDragEnd)) {
            onDragEnd({
                clientX: e.clientX,
                clientY: e.clientY,
                deltaX: e.screenX - this.currentDragPos.screenX,
                deltaY: e.screenY - this.currentDragPos.screenY,
                screenX: e.screenX,
                screenY: e.screenY,
            });
        }

        this.startDragPos = null;
    }

    onDragStart(e) {
        const { onDragStart } = this.props;

        this.startDragPos = this.currentDragPos = {
            clientX: e.clientX,
            clientY: e.clientY,
            deltaX: 0,
            deltaY: 0,
            screenX: e.screenX,
            screenY: e.screenY,
        };

        if (_.isFunction(onDragStart)) {
            onDragStart(this.startDragPos);
        }
    }

    onTouchEnd() {
        const { onDragEnd } = this.props;

        if (_.isFunction(onDragEnd) && !_.isEqual(this.startDragPos, this.currentDragPos)) {
            onDragEnd(this.currentDragPos);
        }

        this.currentDragPos = null;
        this.startDragPos = null;
    }

    onTouchMove(e) {
        const { onDrag } = this.props;

        if (!this.startDragPos) {
            return;
        }

        e.persist();
        const touch = e.touches[0];
        this.currentDragPos = {
            clientX: touch.clientX,
            clientY: touch.clientY,
            deltaX: touch.screenX - this.currentDragPos.screenX,
            deltaY: touch.screenY - this.currentDragPos.screenY,
            screenX: touch.screenX,
            screenY: touch.screenY,
        };
        onDrag(this.currentDragPos);
    }

    onTouchStart(e) {
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

    render() {
        const {
            children,
            className,
            onClick,
            style,
        } = this.props;

        return (
            <div
                className={className}
                draggable
                onClick={onClick}
                onDrag={this.onDrag}
                onDragEnd={this.onDragEnd}
                onDragStart={this.onDragStart}
                onTouchEnd={this.onTouchEnd}
                onTouchMove={this.onTouchMove}
                onTouchStart={this.onTouchStart}
                style={style}
            >
                {children}
            </div>
        );
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
