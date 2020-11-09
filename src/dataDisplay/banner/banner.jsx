import {
    isUndefined,
    isFunction,
    forEachRight,
} from 'lodash';
import { Portal } from 'react-portal';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import BannerItem from './bannerItem';
import Typography from '../typography';
import Icon from '../icon';
import domUtils from '../../utils/domUtils';
import withStyles from '../../styles/withStyles';

const propTypes = {
    children: PropTypes.node,
    classes: PropTypes.shape({
        heading: PropTypes.shape,
    }),
    className: PropTypes.string,
    id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
    isOpen: PropTypes.bool.isRequired,
    level: PropTypes.oneOf([
        'error',
        'purple',
        'secondary',
        'success',
        'teal',
        'warning',
    ]),
    levelIcon: PropTypes.string,
    message: PropTypes.string,
    onAfterClose: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    onOpen: PropTypes.func,
    style: PropTypes.shape({}),
    theme: PropTypes.shape({
        zIndex: PropTypes.shape({
            banner: PropTypes.number,
        }),
    }).isRequired,
    title: PropTypes.string,
    topPosition: PropTypes.number,
    type: PropTypes.oneOf([
        'alert',
        'notification',
    ]),
};

const defaultProps = {
    children: undefined,
    classes: null,
    className: undefined,
    level: undefined,
    levelIcon: undefined,
    message: undefined,
    onAfterClose: undefined,
    onOpen: undefined,
    style: undefined,
    title: undefined,
    topPosition: undefined,
    type: undefined,
};

const styles = () => ({
    heading: {
        marginBottom: '5px',
        paddingRight: ({ type }) => {
            if (type === 'notification') {
                return 16;
            }

            return null;
        },
    },
});

class Banner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: props.isOpen,
        };

        this.onAnimationComplete = this.onAnimationComplete.bind(this);
        this.onBeforeClose = this.onBeforeClose.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onOpen = this.onOpen.bind(this);
    }

    componentDidMount() {
        const {
            isOpen,
        } = this.state;

        if (isOpen) {
            this.onOpen();
        }
    }

    componentDidUpdate(prevProps) {
        const {
            isOpen: prevIsOpen,
        } = prevProps;
        const {
            isOpen,
        } = this.props;

        if (!prevIsOpen && isOpen) {
            this.setState({
                isOpen,
            }, () => {
                this.onOpen();
            });
        }

        if (prevIsOpen && !isOpen) {
            this.onBeforeClose();
        }
    }

    onAnimationComplete() {
        const { id, isOpen, onAfterClose } = this.props;
        // eslint-disable-next-line react/no-find-dom-node
        const nodePortal = ReactDOM.findDOMNode(this);
        const bannerContainer = nodePortal.querySelector('.banner-container');
        const animationEvent = domUtils.cssAnimationType(bannerContainer);
        bannerContainer.removeEventListener(animationEvent, this.onAnimationComplete);

        this.setState({
            isOpen: false,
        }, () => {
            this.bannerYPositions();

            if (!isUndefined(onAfterClose) && !isOpen) {
                onAfterClose(id);
            }
        });
    }

    onBeforeClose() {
        // eslint-disable-next-line react/no-find-dom-node
        const nodePortal = ReactDOM.findDOMNode(this);
        const bannerContainer = nodePortal.querySelector('.banner-container');
        const animationEvent = domUtils.cssAnimationType(bannerContainer);

        bannerContainer.className += ' animate-out';
        bannerContainer.addEventListener(animationEvent, this.onAnimationComplete);
    }

    onClose() {
        const {
            id,
            onClose,
        } = this.props;

        onClose(id);
    }

    onOpen() {
        const {
            onOpen,
            theme: {
                zIndex,
            },
        } = this.props;
        // eslint-disable-next-line react/no-find-dom-node
        const nodePortal = ReactDOM.findDOMNode(this);
        nodePortal.style.zIndex = zIndex.banner;

        this.bannerYPositions();

        if (isFunction(onOpen)) {
            onOpen();
        }
    }

    bannerYPositions() {
        const { topPosition } = this.props;
        let bannersYPosition = topPosition || 22;
        const containersArray = document.querySelectorAll('.ui.banner .banner-container');
        const containersLength = containersArray.length - 1;

        forEachRight(containersArray, (element, index) => {
            const el = element;

            if (index !== containersLength) {
                bannersYPosition += el.offsetHeight + 11;
            }

            el.style.top = `${bannersYPosition}px`;
        });
    }

    render() {
        const {
            children,
            classes,
            className,
            id,
            level,
            levelIcon,
            message,
            style,
            title,
            type,
        } = this.props;

        const { isOpen } = this.state;

        if (!isOpen) {
            return false;
        }

        const containerClasses = ClassNames('ui', 'banner', className, {
            'banner-level-error': level === 'error',
            'banner-level-purple': level === 'purple', // Rename when better defined.
            'banner-level-secondary': !level || level === 'secondary',
            'banner-level-success': level === 'success',
            'banner-level-teal': level === 'teal', // Rename when better defined.
            'banner-level-warning': level === 'warning',
            'banner-type-alert': type === 'alert',
            'banner-type-notification': type === 'notification',
        });
        const containerInnerClasses = ClassNames('banner-container', className);
        const hasCloseButton = type === 'notification';
        let levelBasedIcon;

        switch (level) {
            case 'error':
                levelBasedIcon = 'times';
                break;
            case 'success':
                levelBasedIcon = 'check';
                break;
            case 'warning':
                levelBasedIcon = 'exclamation';
                break;
            case 'info':
            default:
                levelBasedIcon = 'circle';
        }

        return (
            <Portal>
                <div className={containerClasses} id={id} style={style}>
                    <div className={containerInnerClasses}>
                        <div className="banner-level-type">
                            <Icon compact inverse type={levelIcon || levelBasedIcon} />
                        </div>

                        <div className="banner-message-container">
                            <Typography
                                classes={{
                                    root: classes.heading,
                                }}
                                variant="h4"
                            >
                                {title}
                            </Typography>

                            {message ? (
                                <span className="font-size-xxsmall">{message}</span>
                            ) : null}

                            {children}
                        </div>

                        {hasCloseButton ? (
                            <Icon
                                compact
                                id={`ui-button--close_banner_${id}`}
                                inverse
                                onClick={this.onClose}
                                type="times"
                                style={{
                                    position: 'absolute',
                                    right: '11px',
                                    top: '11px',
                                }}
                            />
                        ) : null}
                    </div>
                </div>
            </Portal>
        );
    }
}

Banner.Item = BannerItem;

Banner.propTypes = propTypes;
Banner.defaultProps = defaultProps;

export default withStyles(styles, { withTheme: true })(Banner);
