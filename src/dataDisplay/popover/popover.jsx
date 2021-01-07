import { get } from 'lodash';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import MaterialPopover from '@material-ui/core/Popover';
import {
    UI_CLASS_NAME,
    BEM_POPOVER,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';
import Typography from "@material-ui/core/Typography";

const verticalConstants = ['top', 'center', 'bottom'];
const horizontalConstants = ['left', 'center', 'right'];

const propTypes = {
    /**
     * We can define the position of the anchor where the popover will show from
     */
    anchorHorizontal: PropTypes.oneOf([horizontalConstants]),
    anchorVertical: PropTypes.oneOf([verticalConstants]),
    /**
     * Override or extend the styles applied to Popover.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
        popper: PropTypes.string,
    }),
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * We can pass either a string or jsx elements
     */
    children: PropTypes.shape({}).isRequired,
    /**
     * We can pass the value of the elevation of the Card component
     */
    elevation: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]),
    /**
     * The `id` of the Popover.
     */
    id: PropTypes.string,
    /**
     * We can attach callback to different events on the popover
     */
    onClose: PropTypes.func,
    onEnter: PropTypes.func,
    onEntered: PropTypes.func,
    onEntering: PropTypes.func,
    onExit: PropTypes.func,
    onExited: PropTypes.func,
    onExiting: PropTypes.func,
    PaperProps: PropTypes.shape({}),
    /**
     * We can control the value of the popover
     */
    open: PropTypes.bool.isRequired,
    /**
     * We can define the position of the popover from origin
     */
    transformHorizontal: PropTypes.oneOf(horizontalConstants),
    transformVertical: PropTypes.oneOf(verticalConstants),
};

const defaultProps = {
    anchorHorizontal: 'center',
    anchorVertical: 'bottom',
    classes: undefined,
    className: undefined,
    elevation: 1,
    id: undefined,
    onClose: () => {},
    onEnter: () => {},
    onEntered: () => {},
    onEntering: () => {},
    onExit: () => {},
    onExited: () => {},
    onExiting: () => {},
    PaperProps: {},
    transformVertical: 'top',
    transformHorizontal: 'center',
    maxWidth: undefined,
    width: 250,
};

const useStyles = makeStyles((theme) => ({
    popper: {},
    root: {
        width: 'fit-content',
    },
    tooltip: {
        backgroundColor: get(theme, 'palette.background.primary'),
        borderRadius: get(theme, 'shape.borderRadius.secondary'),
        boxShadow: '0 7px 22px 0 rgba(0, 0, 0, 0.34)',
        color: 'black',
        fontFamily: get(theme, 'typography.fontFamily'),
        fontSize: get(theme, 'typography.fontSize'),
        fontWeight: get(theme, 'typography.fontWeightRegular'),
        maxWidth: ({ maxWidth }) => maxWidth || 'none',
        padding: 22,
        width: ({ width }) => width,
    },
    popover: {
        pointerEvents: 'none',
    },
    paper: {
        padding: theme.spacing(1),
    },
}));

/**
 * The Popover is similar to a tooltip; it is a pop-up box that appears when the user
 * hovers over an element
 */
// eslint-disable-next-line prefer-arrow-callback
const Popover = function Popover(props) {
    const {
        anchorHorizontal,
        anchorVertical,
        children,
        className,
        content,
        elevation,
        id,
        onClose,
        onOpen,
        transformHorizontal,
        transformVertical,
    } = props;

    const classes = useStyles(props);

    // todo : onClick handlers
    // todo: both in the component, or the implementation.
    //

    const rootClasses = Classnames(
        UI_CLASS_NAME,
        BEM_POPOVER,
        classes.root,
        className,
    );

    const anchorOrigin = {
        horizontal: anchorHorizontal,
        vertical: anchorVertical,
    };

    const transformOrigin = {
        horizontal: transformHorizontal,
        vertical: transformVertical,
    };

    const [childRef, setChildRef] = useState(null);
    // This variable controls the antive hover of this component
    const open = Boolean(childRef);

    const handlePopoverOpen = (event) => {
        setChildRef(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setChildRef(null);
    };

    const childrenWithProps = React.cloneElement(children, {
        'aria-owns': open ? 'mouse-over-popover' : undefined,
        'aria-haspopup': 'true',
        onMouseEnter: handlePopoverOpen,
        onMouseLeave: handlePopoverClose,
    });

    return (
        <div>
            {childrenWithProps}
            <MaterialPopover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                    paper: classes.paper,
                }}
                open={open}
                anchorEl={childRef}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                {content}
            </MaterialPopover>
        </div>
    );
};

Popover.defaultProps = defaultProps;
Popover.propTypes = propTypes;

export default Popover;
