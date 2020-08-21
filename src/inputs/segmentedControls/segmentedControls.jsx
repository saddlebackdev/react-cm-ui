import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import Icon from '../../dataDisplay/icon';
import SegmentedControlsItem from './segmentedControlsItem';

const propTypes = {
    className: PropTypes.string,
    fluid: PropTypes.bool,
    onClick: PropTypes.func,
    selected: PropTypes.number,
    style: PropTypes.shape({}),
};

class SegmentedControls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            buttonWidth: null,
            selected: props.selected || 0
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.findWidestButton();
        }, 150);
    }

    componentDidUpdate(prevProps) {
        if (this.props.selected !== prevProps.selected) {
            this.setState({ selected: this.props.selected });
        }
    }

    onButtonClick(index, label, onChildClick, event) {
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

    findWidestButton() {
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
                    onClick={this.onButtonClick.bind(this, index, label, onClick)}
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
};

SegmentedControls.Item = SegmentedControlsItem;

SegmentedControls.propTypes = propTypes;

export default SegmentedControls;
