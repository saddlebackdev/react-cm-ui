import { get } from 'lodash';
import Classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import {
    UI_CLASS_NAME,
    BEM_POPOVER,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * The arrow can be enabled/disabled
     */
    arrow: PropTypes.bool,
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
     * Content
     */
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
    /**
     * We can pass either a string or jsx elements
     */
    children: PropTypes.shape({}).isRequired,
    /**
     * The `id` of the Popover.
     */
    id: PropTypes.string,
    /**
     * We can define the max width for the Popover
     */
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    /**
     * We can define the width for the Popover
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
    width: 250,
};

const useStyles = makeStyles((theme) => ({
    arrow: {
        color: get(theme, 'palette.common.white'),
    },
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
}));

/**
 * The Popover is similar to a tooltip; it is a pop-up box that appears when the user
 * hovers over an element
 */
function Popover(props) {
    const {
        children,
        content,
        className,
        id,
    } = props;

    const classes = useStyles(props);

    const rootClasses = Classnames(
        UI_CLASS_NAME,
        BEM_POPOVER,
        classes.root,
        className,
    );

    return (
        <div
            className={rootClasses}
            id={id}
        >
            <Tooltip
                arrow
                className={`${BEM_POPOVER}--popper`}
                classes={{
                    arrow: classes.arrow,
                    popper: classes.popper,
                    tooltip: classes.tooltip,
                }}
                title={content}
            >
                <div
                    className={`${BEM_POPOVER}--children_container`}
                >
                    {children}
                </div>
            </Tooltip>
        </div>
    );
}

Popover.defaultProps = defaultProps;
Popover.propTypes = propTypes;

export default Popover;
