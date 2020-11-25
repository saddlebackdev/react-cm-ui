import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
// eslint-disable-next-line import/no-named-default
import { default as MUITooltip } from '@material-ui/core/Tooltip';
import {
    BEM_TOOLTIP,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * If `true`, adds an arrow to the tooltip.
     * @default false
     */
    arrow: PropTypes.bool,
    /**
     * Tooltip reference element.
     */
    children: PropTypes.node.isRequired,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.shape({
        tooltip: PropTypes.string,
    }),
    /**
     * @ignore
     */
    className: PropTypes.string,
    /**
     * Do not respond to focus events.
     */
    disableFocusListener: PropTypes.bool,
    /**
     * Do not respond to hover events.
     */
    disableHoverListener: PropTypes.bool,
    /**
     * Do not respond to long press touch events.
     */
    disableTouchListener: PropTypes.bool,
    /**
     * The number of milliseconds to wait before showing the tooltip.
     * This prop won't impact the enter touch delay (`enterTouchDelay`).
     */
    enterDelay: PropTypes.number,
    /**
     * The number of milliseconds to wait before showing the tooltip when one was
     * already recently opened.
     */
    enterNextDelay: PropTypes.number,
    /**
     * The number of milliseconds a user must touch the element before showing the tooltip.
     */
    enterTouchDelay: PropTypes.number,
    /**
     * This prop is used to help implement the accessibility logic.
     * If you don't provide this prop. It falls back to a randomly generated id.
     */
    id: PropTypes.string,
    /**
     * Makes a tooltip interactive, i.e. will not close when the user hovers over the
     * tooltip before the leaveDelay is expired.
     */
    interactive: PropTypes.bool,
    /**
     * The number of milliseconds to wait before hiding the tooltip.
     * This prop won't impact the leave touch delay (`leaveTouchDelay`).
     */
    leaveDelay: PropTypes.number,
    /**
     * The number of milliseconds after the user stops touching an element before hiding
     * the tooltip.
     */
    leaveTouchDelay: PropTypes.number,
    /**
     * Callback fired when the component requests to be closed.
     */
    onClose: PropTypes.func,
    /**
     * Callback fired when the component requests to be open.
     */
    onOpen: PropTypes.func,
    /**
     * If `true`, the tooltip is shown.
     */
    open: PropTypes.bool,
    /**
     * Tooltip placement.
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
     * The component used for the popper.
     */
    PopperComponent: PropTypes.elementType,
    /**
     * Props applied to the [`Popper`](/api/popper/) element.
     */
    PopperProps: PropTypes.shape({}),
    /**
     * Tooltip title. Zero-length titles string are never displayed.
     */
    title: PropTypes.node.isRequired,
    /**
     * The component used for the transition.
     * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more
     * about the requirements for this component.
     */
    TransitionComponent: PropTypes.elementType,
    /**
     * Props applied to the transition element.
     * By default, the element is based on this
     * [`Transition`](http://reactcommunity.org/react-transition-group/transition) component.
     */
    TransitionProps: PropTypes.shape({}),
};

const defaultProps = {
    arrow: false,
    classes: undefined,
    className: undefined,
    disableFocusListener: false,
    disableHoverListener: false,
    disableTouchListener: false,
    enterDelay: 100,
    enterNextDelay: 0,
    enterTouchDelay: 700,
    id: undefined,
    interactive: false,
    leaveDelay: 0,
    leaveTouchDelay: 1500,
    onClose: undefined,
    onOpen: undefined,
    open: undefined,
    placement: 'bottom',
    PopperComponent: 'Popper',
    PopperProps: {},
    TransitionComponent: 'Grow',
    TransitionProps: undefined,
};

const useStyles = makeStyles(({
    palette,
    shape,
    spacing,
    typography,
}) => ({
    tooltip: {
        backgroundColor: palette.grey[500],
        borderRadius: shape.borderRadius.main,
        boxShadow: '0 2px 4px 0 rgba(0, 0, 0, .2)',
        fontSize: typography.pxToRem(12),
        margin: spacing(1),
        padding: [[8, spacing(1)]],
    },
}));

// eslint-disable-next-line react/prefer-stateless-function
function Tooltip(props) {
    const {
        arrow,
        children,
        classes: classesProp,
        className,
        disableFocusListener,
        disableHoverListener,
        disableTouchListener,
        enterDelay,
        enterNextDelay,
        enterTouchDelay,
        id,
        interactive,
        leaveDelay,
        leaveTouchDelay,
        onClose,
        onOpen,
        open,
        placement,
        PopperComponent,
        title,
        TransitionComponent,
    } = props;

    const classes = useStyles(props);

    const rootClasses = ClassNames(
        BEM_TOOLTIP,
        className,
    );

    return (
        <MUITooltip
            arrow={arrow}
            classes={{
                tooltip: classes.tooltip,
                ...classesProp,
            }}
            className={rootClasses}
            disableFocusListener={disableFocusListener}
            disableHoverListener={disableHoverListener}
            disableTouchListener={disableTouchListener}
            enterDelay={enterDelay}
            enterNextDelay={enterNextDelay}
            enterTouchDelay={enterTouchDelay}
            id={id}
            interactive={interactive}
            leaveDelay={leaveDelay}
            leaveTouchDelay={leaveTouchDelay}
            onClose={onClose}
            onOpen={onOpen}
            open={open}
            placement={placement}
            PopperComponent={PopperComponent}
            title={title}
            TransitionComponent={TransitionComponent}
        >
            {children}
        </MUITooltip>
    );
}

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;

export default Tooltip;
