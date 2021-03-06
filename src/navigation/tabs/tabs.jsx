import React from 'react';
import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import TabsItem from './tabsItem';

const propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    nest: PropTypes.bool,
    onClick: PropTypes.func,
    selected: PropTypes.number,
    style: PropTypes.shape({}),
};

class Tabs extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selected: props.selected || 0 };
    }

    componentDidUpdate(prevProps) {
        if (this.props.selected !== prevProps.selected) {
            this.setState({ selected: this.props.selected });
        }
    }

    _onTabClick(index, event) {
        if (!_.isUndefined(this.props.onClick)) {
            this.props.onClick(index);
        } else {
            this.setState({ selected: index });
        }

        event.preventDefault();
    }

    render() {
        const {
            children,
            id,
        } = this.props;
        const containerClasses = ClassNames('ui', 'tabs', this.props.className, {
            'tabs-nest': this.props.nest,
        });
        const convertChildren = _.isArray(children) ? children : [children];
        const buttons = _.map(convertChildren, (child, index) => {
            const isActive = ClassNames({ 'is-active': this.state.selected === index });
            const buttonID = id ?
                `${id}_${_.snakeCase(child.props.label)}` :
                `tabs_button--${_.snakeCase(child.props.label)}`;

            return (
                <button
                    className={isActive}
                    id={buttonID}
                    onClick={this._onTabClick.bind(this, index)}
                    key={`tabs-buttons-${index}`}
                >
                    <span className="tab-button-inner">
                        {child.props.label ? <span className="copy">{child.props.label}</span> : null}
                    </span>
                </button>
            );
        });

        return (
            <div
                className={containerClasses}
                id={id}
                style={this.props.style}
            >
                <div className="ui tabs-buttons">
                    {buttons}
                </div>

                {this.props.children[this.state.selected]}
            </div>
        );
    }
}

Tabs.Item = TabsItem;

Tabs.propTypes = propTypes;

export default Tabs;
