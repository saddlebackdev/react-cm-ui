import Classnames from 'classnames';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import { BEM_POPOVER } from '../../global/constants';
import makeStyles from '../../styles/makeStyles';
import ToolTip from '../tooltip';

const propTypes = {
    /**
     * The arrow can be enabled/disabled
     */
    arrow: PropTypes.bool,
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
     * Popper container styles
     */
    popperStyles: PropTypes.shape({}),
    /**
     * Style applied to the root container
     */
    style: PropTypes.shape({}),
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
    className: undefined,
    maxWidth: undefined,
    style: undefined,
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
 * The Popover is similar to tooltips, it is a pop-up box that appears when the user
 * hovers on an element
 */
function Popover(props) {
    const {
        children,
        content,
        className,
        style,
        ...restProps
    } = props;

    const classes = useStyles(props);
    const popoverClassnames = Classnames(
        'container',
        className,
        classes.root,
        `${BEM_POPOVER}--container`,
    );
    return (
        <div
            className={popoverClassnames}
            style={style}
        >
            <ToolTip
                arrow
                classes={{
                    tooltip: classes.tooltip,
                    arrow: classes.arrow,
                    popper: classes.popper,
                }}
                className={`${BEM_POPOVER}--popper`}
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
