'use strict';

import 'Collections//Modules/SegmentedControls.scss';

import _ from 'lodash';
import ClassNames from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import Icon from 'Collections//Elements/Icon.react';
import SegmentedControlsItem from 'Collections//Modules/SegmentedControlsItem.react';

export default class SegmentedControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonWidth: null,
            selected: props.selected || 0
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selected !== nextProps.selected) {
            this.setState({ selected: nextProps.selected });
        }
    }

    render() {
        const { children, className, fluid, style } = this.props;
        const containerClasses = ClassNames('ui', 'segmented-controls', className, {
            'segmented-controls-fluid': fluid
        });
        const convertChildren = _.isArray(children) ? children : [ children ];
        let buttons = _.map(convertChildren, (child, index) => {
            const { icon, label, onClick } = child.props;
            const isActiveClass = ClassNames('segmented-controls-button', {
                'segmented-controls-button-icon': icon,
                'segmented-controls-button-is-active': this.state.selected === index
            });

            return (
                <button
                    className={isActiveClass}
                    key={'segmented-controls-buttons-' + index}
                    onClick={this._onButtonClick.bind(this, index, label, onClick)}
                >
                    <span
                        className="inner-container"
                        style={{
                            alignItems: 'center',
                            display: 'inline-flex',
                            justifyContent: 'center',
                            width: this.state.buttonWidth
                        }}
                    >
                        {!_.isUndefined(label) ? (
                            <span className="copy">
                                {label}
                            </span>
                        ) : null}

                        {!_.isUndefined(icon) ? (
                            <Icon align="right" compact={_.isUndefined(label)} inverse={true} type={icon} />
                        ) : null}
                    </span>
                </button>
            );
        });

        return (
            <div className={containerClasses} style={style}>
                <div className="segmented-controls-buttons" ref="buttonsContainer">
                    {buttons}
                </div>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this._findWidestButton();
        }, 150);
    }

    _findWidestButton() {
        const buttons = ReactDOM.findDOMNode(this.refs.buttonsContainer).querySelectorAll('button .inner-container');
        let newButtonWidth = 0;

        _.forEach(buttons, button => {
            if (button.offsetWidth > newButtonWidth) {
                newButtonWidth = button.offsetWidth;
            }
        });

        if (newButtonWidth > 0) {
            this.setState({ buttonWidth: newButtonWidth });
        }
    }

    _onButtonClick(index, label, onChildClick, event) {
        if (!_.isUndefined(this.props.onClick)) {
            this.props.onClick(index, label);
        } else {
            if (!_.isUndefined(onChildClick)) {
                onChildClick(index, label);
            }

            this.setState({ selected: index });
        }

        event.preventDefault();
    }

};

SegmentedControls.Item = SegmentedControlsItem;

SegmentedControls.propTypes = {
    className: React.PropTypes.string,
    fluid: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    selected: React.PropTypes.number,
    style: React.PropTypes.object
};
