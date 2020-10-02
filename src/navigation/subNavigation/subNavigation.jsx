import {
    flatMap,
    isFunction,
    isArray,
    snakeCase,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import SubNavigationItem from './subNavigationItem';

const propTypes = {
    border: PropTypes.oneOf(['both', 'bottom', 'top']),
    children: PropTypes.node,
    className: PropTypes.string,
    drawer: PropTypes.bool,
    id: PropTypes.string,
    onClick: PropTypes.func,
    selected: PropTypes.number,
    style: PropTypes.shape({}),
};

const defaultProps = {
    border: null,
    children: null,
    className: null,
    drawer: false,
    id: null,
    onClick: null,
    selected: null,
    style: null,
};

class SubNavigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = { selected: props.selected || 0 };
    }

    componentDidUpdate(prevProps) {
        const {
            selected,
        } = this.props;

        if (prevProps.selected !== selected) {
            this.setState({ selected });
        }
    }

    onItemClick(index, label, onChildClick, event) {
        const {
            onClick,
        } = this.props;

        event.preventDefault();

        if (isFunction(onClick)) {
            onClick(index, label);
        } else {
            if (isFunction(onChildClick)) {
                onChildClick(index, label);
            }

            this.setState({ selected: index });
        }
    }

    render() {
        const {
            border,
            children,
            className,
            drawer,
            id,
            style,
        } = this.props;

        const {
            selected,
        } = this.state;

        const childrenArray = children && (isArray(children) ? children : [children]);

        const buttons = flatMap(childrenArray, (child, index) => {
            const {
                label,
                onClick,
                style: styleChildProp,
            } = child.props;

            const isActive = ClassNames({ 'is-active': selected === index });

            const buttonID = id ?
                `${id}_${snakeCase(child.props.label)}` :
                `sub_navigation_button--${snakeCase(child.props.label)}`;

            return (
                <button
                    className={isActive}
                    id={buttonID}
                    key={`sub-navigation-buttons-${index}`}
                    onClick={this.onItemClick.bind(this, index, label, onClick)}
                    style={styleChildProp}
                    type="button"
                >
                    <span className="sub-navigation-button-inner">
                        <span className="copy">{label}</span>
                        <span className="button-is-active-indicator" />
                    </span>
                </button>
            );
        });

        const containerClasses = ClassNames(
            'ui',
            'sub-navigation',
            className,
            {
                'sub-navigation-border-bottom': !border || border === 'bottom' || border === 'both',
                'sub-navigation-border-top': border === 'top' || border === 'both',
                'sub-navigation-drawer': drawer,
            },
        );

        return (
            <div
                className={containerClasses}
                id={id}
                style={style}
            >
                <div className="sub-navigation-scroll-indicator" />

                <div className="sub-navigation-scroll">
                    <div className="sub-navigation-item-container">
                        {buttons}
                    </div>
                </div>
            </div>
        );
    }
}

SubNavigation.Item = SubNavigationItem;

SubNavigation.propTypes = propTypes;
SubNavigation.defaultProps = defaultProps;

export default SubNavigation;
