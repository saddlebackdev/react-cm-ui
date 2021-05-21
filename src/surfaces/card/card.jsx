import {
    debounce,
    find,
    forEach,
    isArray,
    isFunction,
    map,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import CardHeader from './cardHeader';
import domUtils from '../../utils/domUtils';
import Icon from '../../dataDisplay/icon';
import withStyles from '../../styles/withStyles';

const propTypes = {
    active: PropTypes.bool,
    attached: PropTypes.bool,
    children: PropTypes.node,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    collapsable: PropTypes.bool,
    compact: PropTypes.bool,
    header: PropTypes.bool,
    id: PropTypes.string,
    nest: PropTypes.bool,
    onClick: PropTypes.func,
    style: PropTypes.shape({}),
    title: PropTypes.string,
};

const defaultProps = {
    active: false,
    attached: false,
    children: null,
    classes: null,
    className: null,
    collapsable: false,
    compact: false,
    header: false,
    id: null,
    nest: false,
    onClick: null,
    style: null,
    title: null,
};

const styles = (theme) => ({
    root: {
        backgroundColor: theme.palette.background.primary,
        borderRadius: theme.shape.borderRadius.main,
        boxShadow: `inset 0 0 0 1px ${theme.palette.border.secondary}`,
        margin: 'calc(2rem - .14285em) 0 1rem',
        padding: 22,
        position: 'relative',
        transition: 'background-color 150ms ease-out',
        '&.card-active': {
            backgroundColor: theme.palette.grey[800],
            color: theme.palette.text.contrastText,
            cursor: 'default',
        },
        '&.card-attached': {
            borderRadius: 0,
            '& .card-header-attached': {
                borderRadius: 0,
            },
        },
        '&.card-clickable': {
            cursor: 'pointer',
            '&:hover': {
                backgroundColor: theme.palette.background.secondary,
            },
            '&:active': {
                backgroundColor: theme.palette.background.primary,
            },
        },
        '& .card-header': {
            marginBottom: 16,
            '&.card-header-attached': {
                alignItems: 'center',
                borderRadius: '3px 3px 0 0',
                display: 'flex',
                height: 44,
                margin: '-22px -22px 16px',
                padding: '0 22px',
            },
            '&.card-header-color': {
                '&-blue, &-green, &-pink': {
                    color: theme.palette.text.contrastText,
                },
                '&-blue': {
                    background: 'linear-gradient(to left, #54cc86 -66%, #1c93c4 100%)',
                },
                '&-green': {
                    background: 'linear-gradient(to left, #8bbd72 -28%, #329594 94%)',
                },
                '&-pink': {
                    background: 'linear-gradient(to left, #f99e49 -11%, #c33580 62%)',
                },
            },
        },
        '&.card-attached .card-header-attached': {
            borderRadius: 0,
        },
        '&.card-compact .card-header-attached': {
            margin: '-11px -11px 16px',
            padding: '0 11px',
        },
        '& .card-collapse-button': {
            position: 'absolute',
            right: 22,
            top: 26,
            zIndex: 1,
        },
        '& .card-content': {
            transition: 'height 166ms linear, opacity 166ms linear',
            '& > div >': {
                '& *:first-child': {
                    marginTop: 0,
                },
                '& *:last-child': {
                    marginBottom: 0,
                },
            },
        },
        '&.card-collapsable.card-is-collapsing .card-content': {
            overflow: 'hidden',
        },
        '&.card-is-collapsed': {
            paddingBottom: 6,
            '& .card-content': {
                opacity: 0,
            },
        },
        '&.card-compact': {
            padding: 11,
            '&.card-is-collapsed': {
                paddingBottom: 0,
            },
            '& .card-collapse-button': {
                right: 11,
                top: 15,
            },
        },
        '&.card-nest': {
            border: 0,
            boxShadow: '-1px 1px 2px 0 rgba(0, 0, 0, .1), 1px 1px 2px 0 rgba(0, 0, 0, .1)',
        },
        '& .card-content >': {
            '& :first-child': {
                marginTop: 0,
            },
            '& :last-child': {
                marginBottom: 0,
            },
        },
        '&:first-child': {
            marginTop: 0,
        },
        '&:last-child': {
            marginBottom: 0,
        },
    },
});

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contentHeight: null,
            isCollapsed: false,
            isCollapsing: false,
        };

        this.getContentHeight = this.getContentHeight.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onCollapseClick = this.onCollapseClick.bind(this);
        this.renderCollapsableButton = this.renderCollapsableButton.bind(this);
        this.removeIsCollapsing = this.removeIsCollapsing.bind(this);
        this.setContentHeight = this.setContentHeight.bind(this);
        this.setContentHeightDebounce = debounce(() => this.setContentHeight(), 50);

        if (props.collapsable) {
            this.prevContentHeight = 0;

            this.observer = new MutationObserver((mutations) => {
                forEach(mutations, (m) => {
                    this.setContentHeight();
                });
            });
        }
    }

    componentDidMount() {
        const { collapsable } = this.props;

        if (collapsable) {
            const outerContent = ReactDOM.findDOMNode(this.outerContent);
            const innerContent = ReactDOM.findDOMNode(this.innerContent);

            window.addEventListener('resize', this.setContentHeightDebounce);
            outerContent.addEventListener(domUtils.cssTransitionType(outerContent), this.removeIsCollapsing);
            this.observer.observe(innerContent, {
                childList: true,
                characterData: true,
                subtree: true,
            });

            this.setContentHeight();
        }
    }

    componentWillUnmount() {
        const { collapsable } = this.props;

        if (collapsable) {
            const outerContent = ReactDOM.findDOMNode(this.outerContent);

            window.removeEventListener('resize', this.setContentHeightDebounce);
            outerContent.removeEventListener(domUtils.cssTransitionType(outerContent), this.removeIsCollapsing);
            this.observer.disconnect();
        }
    }

    onClick() {
        const { onClick } = this.props;
        const isTextHighlighted = window.getSelection().toString();

        if (!isTextHighlighted && isFunction(onClick)) {
            onClick();
        }
    }

    onCollapseClick() {
        const { isCollapsed } = this.state;

        this.setState({
            contentHeight: !isCollapsed ? 0 : this.getContentHeight(),
            isCollapsed: !isCollapsed,
            isCollapsing: true,
        });
    }

    getContentHeight() {
        const innerHeight = ReactDOM.findDOMNode(this.innerContent).offsetHeight;

        if (innerHeight <= 0) {
            return this.prevContentHeight;
        }
        this.prevContentHeight = innerHeight;

        return innerHeight;
    }

    setContentHeight() {
        const { isCollapsed } = this.state;

        if (!isCollapsed) {
            this.setState({ contentHeight: this.getContentHeight() });
        }
    }

    removeIsCollapsing() {
        this.setState({ isCollapsing: false });
    }

    renderCollapsableButton() {
        const { collapsable } = this.props;
        const { isCollapsed } = this.state;
        const rootClasses = ClassNames('card-collapse-button');

        if (!collapsable) {
            return null;
        }

        return (
            <div className={rootClasses}>
                <Icon
                    compact
                    onClick={this.onCollapseClick}
                    rotate={!isCollapsed ? 135 : 0}
                    type="plus"
                />
            </div>
        );
    }

    render() {
        const {
            active,
            attached,
            children,
            classes,
            className,
            collapsable,
            compact,
            header,
            id,
            onClick,
            nest,
            style,
            title,
        } = this.props;

        const { contentHeight, isCollapsed, isCollapsing } = this.state;

        const rootClasses = ClassNames(
            'ui',
            'card',
            classes.root,
            className,
            {
                'card-active': active,
                'card-attached': attached,
                'card-clickable': onClick,
                'card-collapsable': collapsable,
                'card-is-collapsed': isCollapsed,
                'card-is-collapsing': isCollapsing,
                'card-compact': compact,
                'card-nest': nest,
            },
        );

        const convertChildren = isArray(children) ? children : [children];
        const customHeaderObj = find(convertChildren, (child) => child && isFunction(child.type) && child.type.name === 'CardHeader');
        let renderHeader;

        if (header && customHeaderObj) {
            renderHeader = (
                <CardHeader
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...customHeaderObj.props}
                    title={title}
                />
            );
        }

        if (title && !header) {
            renderHeader = (
                <CardHeader title={title} />
            );
        }

        // eslint-disable-next-line consistent-return
        const renderContent = map(convertChildren, (child, index) => {
            const isCardHeader = child && isFunction(child.type) && child.type.name === 'CardHeader';

            if (!isCardHeader) {
                return (
                    <div key={index}>
                        {child}
                    </div>
                );
            }
        });

        return (
            // eslint-disable-next-line max-len
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
            <div
                className={rootClasses}
                id={id}
                onClick={this.onClick}
                style={style}
            >
                {this.renderCollapsableButton()}

                {renderHeader}

                <div
                    className="card-content"
                    ref={(outerContent) => {
                        this.outerContent = outerContent;
                    }}
                    style={{ height: contentHeight }}
                >
                    <div ref={(innerContent) => {
                        this.innerContent = innerContent;
                    }}
                    >
                        {renderContent}
                    </div>
                </div>
            </div>
        );
    }
}

Card.Header = CardHeader;

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default withStyles(styles)(Card);
