import {
    get,
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import PropTypes from 'prop-types';
import MUIPopper from '@material-ui/core/Popper';
import React, {
    useCallback,
    useEffect,
    useState,
} from 'react';
import {
    UI_CLASS_NAME,
    BEM_POPOVER,
} from '../../global/constants';
import Grow from '../../utils/grow';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Override or extend the styles applied to Popover.
     */
    classes: PropTypes.shape({
        arrow: PropTypes.string,
        content: PropTypes.string,
        popoverRoot: PropTypes.string,
        popper: PropTypes.string,
    }),
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * The anchor element.
     */
    children: PropTypes.node.isRequired,
    /**
     * The content in the Popover.
     */
    content: PropTypes.node.isRequired,
    /**
     * If `true`, Popover will not be fired.
     */
    disable: PropTypes.bool,
    /**
     * The `id` of the Popover.
     */
    id: PropTypes.string,
    /**
     * The max-width of the Popover
     */
    maxWidth: PropTypes.number,
    /**
     * Popper.js is based on a "plugin-like" architecture;
     * most of its features are fully encapsulated "modifiers".
     *
     * A modifier is a function that is called each time Popper.js needs to
     * compute the position of the popper.
     * For this reason, modifiers should be very performant to avoid bottlenecks.
     * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v1/#modifiers).
     */
    modifiers: PropTypes.shape({}),
    /**
     * The mouse event to listen to.
     */
    mouseEvent: PropTypes.oneOf(['onClick', 'onMouseEnter']),
    /**
     * If `true`, the Popover is visible.
     */
    open: PropTypes.bool,
    /**
     * Popper placement.
     */
    placement: PropTypes.oneOf([
        'bottom-end',
        'bottom-start',
        'bottom',
        'left-end',
        'left-start',
        'left',
        'right-end',
        'right-start',
        'right',
        'top-end',
        'top-start',
        'top',
    ]),
    /**
     * The width of the Popover
     */
    width: PropTypes.number,
};

const defaultProps = {
    classes: undefined,
    className: undefined,
    id: undefined,
    disable: false,
    maxWidth: undefined,
    modifiers: undefined,
    mouseEvent: 'onClick',
    open: undefined,
    placement: 'bottom',
    width: 250,
};

const useStyles = makeStyles(({
    palette,
    shadows,
    shape,
    spacing,
    typography,
    zIndex,
}) => ({
    arrow: {
        boxSizing: 'border-box',
        color: get(palette, 'background.primary'),
        height: '0.71em',
        overflow: 'hidden',
        position: 'absolute',
        width: '1em',
        '&::before': {
            backgroundColor: 'currentColor',
            boxShadow: shadows[1],
            content: '""',
            display: 'block',
            height: '100%',
            margin: 'auto',
            transform: 'rotate(45deg)',
            width: '100%',
        },
    },
    popoverRoot: {
        backgroundColor: get(palette, 'background.primary'),
        borderRadius: get(shape, 'borderRadius.secondary'),
        boxShadow: '0 7px 22px 0 rgba(0, 0, 0, 0.34)',
        color: get(palette, 'text.primary'),
        fontFamily: get(typography, 'fontFamily'),
        fontSize: get(typography, 'fontSize'),
        fontWeight: get(typography, 'fontWeightRegular'),
        maxWidth: ({ maxWidth }) => maxWidth || 'none',
        overflow: 'visible',
        padding: spacing(2),
        position: 'relative',
        width: ({ width }) => width,
    },
    popper: {
        zIndex: zIndex.popover,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.71em',
            marginLeft: 4,
            marginRight: 4,
            '&::before': {
                transformOrigin: '0 100%',
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.71em',
            marginLeft: 4,
            marginRight: 4,
            '&::before': {
                transformOrigin: '100% 0',
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.71em',
            height: '1em',
            width: '0.71em',
            marginTop: 4,
            marginBottom: 4,
            '&::before': {
                transformOrigin: '100% 100%',
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.71em',
            height: '1em',
            width: '0.71em',
            marginTop: 4,
            marginBottom: 4,
            '&::before': {
                transformOrigin: '0 0',
            },
        },
    },
    content: {},
}));

/**
 * The Popover is used to display some content on top of another.
 */
function Popover(props) {
    const {
        children,
        className,
        content,
        disable,
        id,
        modifiers,
        mouseEvent,
        open: openProp,
        placement,
    } = props;

    const classes = useStyles(props);

    const [arrowRef, setArrowRef] = useState(null);
    const [childRef, setChildRef] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (openProp === true || openProp === false) {
            setIsOpen(!disable && openProp);
        } else {
            setIsOpen(!disable && Boolean(childRef));
        }
    }, [childRef, disable, openProp]);

    const onClick = useCallback((event, childProps) => {
        const {
            onClick: onClickChildProp,
        } = childProps;

        if (mouseEvent === 'onClick') {
            if (isFunction(onClickChildProp)) {
                onClickChildProp(event);
            }

            setChildRef(event.currentTarget);
        }
    }, [mouseEvent]);

    const onMouseEnter = useCallback((event, childProps) => {
        const {
            onMouseEnter: onMouseEnterChildProp,
        } = childProps;

        if (mouseEvent === 'onMouseEnter') {
            if (isFunction(onMouseEnterChildProp)) {
                onMouseEnterChildProp(event);
            }

            setChildRef(event.currentTarget);
        }
    }, [mouseEvent]);

    const onMouseLeave = useCallback((event, childProps) => {
        const {
            onMouseLeave: onMouseLeaveChildProp,
        } = childProps;

        if (mouseEvent === 'onMouseEnter') {
            if (isFunction(onMouseLeaveChildProp)) {
                onMouseLeaveChildProp(event);
            }

            setChildRef(null);
        }
    }, [mouseEvent]);

    const onClickAway = useCallback(() => {
        setChildRef(null);
    }, []);

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_POPOVER,
        className,
    );

    return (
        <div
            className={rootClasses}
            id={id}
        >
            {React.cloneElement(
                children, {
                    onClick: (event) => onClick(event, children.props),
                    onMouseEnter: (event) => onMouseEnter(event, children.props),
                    onMouseLeave: (event) => onMouseLeave(event, children.props),
                },
            )}

            <MUIPopper
                anchorEl={childRef}
                className={classes.popper}
                modifiers={{
                    arrow: {
                        enabled: true,
                        element: arrowRef,
                    },
                    offset: {
                        offset: '0, 11',
                    },
                    ...modifiers,
                }}
                open={isOpen}
                placement={placement}
                transition
            >
                {({ TransitionProps }) => (
                    <Grow
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        {...TransitionProps}
                    >
                        <div>
                            <ClickAwayListener
                                mouseEvent={mouseEvent === 'onMouseEnter' ? false : 'onClick'}
                                onClickAway={onClickAway}
                            >
                                <div
                                    className={classes.popoverRoot}
                                >
                                    <span className={classes.arrow} ref={setArrowRef} />

                                    <div
                                        className={classes.content}
                                    >
                                        {content}
                                    </div>
                                </div>
                            </ClickAwayListener>
                        </div>
                    </Grow>
                )}
            </MUIPopper>
        </div>
    );
}

Popover.defaultProps = defaultProps;
Popover.propTypes = propTypes;

export default Popover;
