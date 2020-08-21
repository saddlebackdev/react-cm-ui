import { isFunction } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';
import Utils from '../../utils/utils';

const propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    fluid: PropTypes.bool,
    inverse: PropTypes.bool,
    onClearClick: PropTypes.func,
    onClearKeyDown: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
};

const defaultProps = {
    children: null,
    className: null,
    color: null,
    fluid: null,
    inverse: false,
    onClearClick: null,
    onClearKeyDown: null,
    onClick: null,
    onKeyDown: null,
    style: null,
    tabIndex: -1,
};

class Label extends React.Component {
    constructor() {
        super();

        this.onClearClick = this.onClearClick.bind(this);
        this.onClearKeyDown = this.onClearKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClearClick() {
        const {
            onClearClick,
        } = this.props;

        if (isFunction(onClearClick)) {
            onClearClick();
        }
    }

    onClearKeyDown() {
        const {
            onClearKeyDown,
        } = this.props;

        if (isFunction(onClearKeyDown)) {
            onClearKeyDown();
        }
    }

    onClick() {
        const {
            onClick,
        } = this.props;

        if (isFunction(onClick)) {
            onClick();
        }
    }

    onKeyDown() {
        const {
            onKeyDown,
        } = this.props;

        if (isFunction(onKeyDown)) {
            onKeyDown();
        }
    }

    render() {
        const {
            children,
            className,
            color,
            fluid,
            inverse,
            onClick,
            onClearClick,
            style,
            tabIndex,
        } = this.props;
        const containerClasses = ClassNames('ui', 'label', className, {
            'label-clickable': onClick,
            'label-color-alert': color === 'alert',
            'label-color-highlight': color === 'highlight',
            'label-color-primary': color === 'primary',
            'label-color-success': color === 'success',
            'label-color-transparent': color === 'transparent',
            'label-color-warning': color === 'warning',
            'label-fluid': fluid,
            'label-inverse': inverse,
            'label-clearable': onClearClick,
        });

        return (
            <div
                className={containerClasses}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                role="button"
                style={style}
                tabIndex={tabIndex}
            >
                <span className="label-inner-container">
                    {children}

                    {onClearClick && (
                        <span
                            className="label-clearable-button"
                            onClick={this.onClearClick}
                            onKeyDown={this.onClearKeyDown}
                            role="button"
                            tabIndex={-1}
                        >
                            <Icon
                                compact
                                inverse
                                size="xxsmall"
                                type="times"
                            />
                        </span>
                    )}
                </span>
            </div>
        );
    }
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default Label;
