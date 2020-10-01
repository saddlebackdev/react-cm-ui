/* eslint-disable linebreak-style */
import React, {
    useState,
    useEffect,
    useRef,
} from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Classnames from 'classnames';
import Typography from '../../dataDisplay/typography';
import ToolTip from '../../dataDisplay/tooltip';
import makeStyles from '../../styles/makeStyles';
// import { BEM_NAVIGATION_BREADCRUMBS } from '../../global/constants';


const propTypes = {
    /**
     * arrow
     */
    arrow: PropTypes.bool,
    /**
     * Content
     */
    content: PropTypes.string,
    /**
     * Instance of react-router core,
     * breadcrumbs will be generated automatically using the routes object structure,
     * location and push function.
     */
    children: PropTypes.shape({}), // TODO:: mark it as required
    /**
     * Placement
     */
    placement: PropTypes.string,
    /**
     * maxWidth
     */
    maxWidth: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    arrow: true,
    children: 'children',
    maxWidth: 300,
    placement: 'bottom',
    content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse sapiente, repellat aliquid atque dignissimos libero amet delectus ut optio obcaecati quam minima quidem sint ratione, in illum architecto ea quod?',
};

const useStyles = makeStyles((theme) => {
    console.log('theme', theme);
    const borderRadiusMain = get(theme, 'shape.borderRadius.main');
    // const colorGrey500 = get(theme, 'palette.grey[500]');
    // const colorHighlight = get(theme, 'palette.cyan[500]');
    // const fontWeightBold = get(theme, 'typography.fontWeightBold');
    // const fontWeightMedium = get(theme, 'typography.fontWeightMedium');
    // const textColorPrimary = get(theme, 'palette.text.primary');
    // const textColorSecondary = get(theme, 'palette.text.secondary');
    // const transitionDurationShortest = get(theme, 'transitions.duration.shortest');

    return {
        root: {
            color: 'red',
            width: 'fit-content',
        },
        tooltip: {
            backgroundColor: theme.palette.common.white,
            color: 'black',
            // boxShadow: theme.shadows[1],
            // fontSize: 11,
            padding: 10,
            border: '1px solid gray',
            borderRadius: get(theme, 'shape.borderRadius.secondary'),
            maxWidth: ({ maxWidth }) => maxWidth || 'none',
            // maxWidth: 'none',
            fontFamily: get(theme, 'typography.fontFamily'),
            fontSize: get(theme, 'typography.fontSize'),
            fontWeight: get(theme, 'typography.fontWeightRegular'),
        },
        arrow: {
            color: 'cyan',
        },
    };
});

/**
 */
function Popover(props) {
    const {
        children,
        content,
        className,
        style,
        placement,
        // ...restProps
    } = props;

    const classes = useStyles(props);
    const popoverClassnames = Classnames(
        'container',
        className,
        classes.root,
    );
    return (
        <div className={popoverClassnames}>
            <ToolTip
                arrow
                classes={{
                    tooltip: classes.tooltip,
                    arrow: classes.arrow,
                }}
                style={style}
                title={content}
                // open={open}
                placement={placement}


                onOpen={() => {
                    console.log('onOpen');
                }}

                onClose={() => {
                    console.log('onClose');
                }}
            >
                <div
                    className="children-container"
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


// 'bottom-end'
// | 'bottom-start'
// | 'bottom'
// | 'left-end'
// | 'left-start'
// | 'left'
// | 'right-end'
// | 'right-start'
// | 'right'
// | 'top-end'
// | 'top-start'
// | 'top