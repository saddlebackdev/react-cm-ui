import Classnames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
    BEM_POPOVER,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';
import ToolTip from '../tooltip';

const propTypes = {
    /**
     * The arrow can be enabled/disabled
     */
    arrow: PropTypes.bool,
    /**
     * Override or extend the styles applied to PersonPanel.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * Content
     */
    content: PropTypes.string,
    /**
     * We can pass either a string or jsx elements
     */
    children: PropTypes.shape({}).isRequired,
    /**
     * The `id` of the Popover.
     */
    id: PropTypes.string,
    /**
     * Popper container styles
     */
    popperStyles: PropTypes.shape({}),
    /**
     * We can define the max width for the popover
     */
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /**
     * We can define the width for the popover
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    arrow: true,
    content: undefined,
    classes: undefined,
    className: undefined,
    id: undefined,
    maxWidth: undefined,
    popperStyles: {},
    width: 250,
};

const useStyles = makeStyles((theme) => ({
    arrow: {
        color: get(theme, 'palette.common.white'),
    },
    popper: ({ popperStyles }) => (popperStyles || {}),
    root: {
        width: 'fit-content',
    },
    tooltip: {
        backgroundColor: get(theme, 'palette.background.primary'),
        color: 'black',
        padding: 22,
        borderRadius: get(theme, 'shape.borderRadius.secondary'),
        maxWidth: ({ maxWidth }) => maxWidth || 'none',
        fontFamily: get(theme, 'typography.fontFamily'),
        fontSize: get(theme, 'typography.fontSize'),
        fontWeight: get(theme, 'typography.fontWeightRegular'),
        width: ({ width }) => width,
    },
}));

/**
 * The Popover is similar to a tooltip; it is a pop-up box that appears when the user
 * hovers over an element
 */
function Popover(props) {
    const {
        children,
        content,
        classes: propClasses,
        className,
        id,
        ...restProps
    } = props;

    const classes = useStyles(props);
    const popoverClassnames = Classnames(
        BEM_POPOVER,
        classes.root,
        className,
        propClasses,
        UI_CLASS_NAME,
    );

    return (
        <div
            className={popoverClassnames}
            id={id}
        >
            <ToolTip
                arrow
                className={`${BEM_POPOVER}--popper`}
                classes={classes}
                title={content}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...restProps}
            >
                <div
                    className={`${BEM_POPOVER}--children_container`}
                >
                    {children}
                </div>
            </ToolTip>
        </div>
    );
}

Popover.defaultProps = defaultProps;
Popover.propTypes = propTypes;

export default Popover;
