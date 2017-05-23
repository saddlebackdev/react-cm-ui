'use strict';

import 'components/UI/Elements/Label.scss';

import _ from 'lodash';
import ClassNames from 'classnames';
import React from 'react';

import Icon from 'components/UI/Elements/Icon.react';

import UIUtils from 'utils/UI/Utils.js';

export default class Label extends React.Component {

    render() {
        const { className, clearable, color, disabled, fluid, icon, selected, square, style, text } = this.props;
        const containerClasses = ClassNames('ui', 'label', className, {
            'label-color-alert': color === 'alert',
            'label-color-disable': disabled || color === 'disable',
            'label-color-primary': color === 'primary',
            'label-color-alternate': color === 'alternate',
            'label-color-success': color === 'success',
            'label-color-warning': color === 'bright',
            'label-fluid': fluid,
            'label-icon': icon,
            'label-square': square,
            'label-clearable': clearable,
            'label-selected': selected
        });

        return (
            <div
                className={containerClasses}
                onClick={this._onClick.bind(this)}
                disabled={disabled}
                style={style}
            >
                <span className="label-inner-container text-semibold">{text}</span>

                {selected ?
                    <Icon
                        compact={true}
                        inverse={true}
                        type="check"
                    />
                : null}

                {clearable ?
                    <Icon
                        compact={true}
                        onClick={this._onClearClick.bind(this)}
                        inverse={true}
                        type="times"
                    />
                : null}
            </div>
        );
    }

    _onClearClick() {
        if (_.isFunction(this.props.onClearClick)) {
            this.props.onClearClick();
        }
    }

    _onClick() {
        if (_.isFunction(this.props.onClick)) {
            this.props.onClick();
        }
    }

}

Label.propTypes = {
    className: React.PropTypes.string,
    clearable: React.PropTypes.bool,
    color: React.PropTypes.oneOf(UIUtils.colorEnums()),
    disabled: React.PropTypes.bool,
    fluid: React.PropTypes.bool,
    icon: React.PropTypes.bool,
    onClearClick: React.PropTypes.func,
    onClick: React.PropTypes.func,
    selected: React.PropTypes.bool,
    style: React.PropTypes.object,
    text: React.PropTypes.string
}
