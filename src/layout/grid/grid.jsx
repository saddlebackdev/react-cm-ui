import {
    camelCase,
    forEach,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_GRID,
    UI_CLASS_NAME,
    BEM_GRID_COLUMN,
} from '../../global/constants';
import {
    GRID_SIZES,
    SPACINGS,
} from './gridConstants';
import GridColumn from './gridColumn';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Defines the `align-content` style property.
     * It's applied for all screen sizes.
     */
    alignContent: PropTypes.oneOf([
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
        'stretch',
    ]),
    /**
     * Defines the `align-items` style property.
     * It's applied for all screen sizes.
     */
    alignItems: PropTypes.oneOf([
        'baseline',
        'center',
        'flex-end',
        'flex-start',
        'stretch',
    ]),
    /**
     * The content of the Grid
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css) below for more details.
     */
    classes: PropTypes.shape({}),
    /**
     * Assign additional class names to Grid.
     */
    className: PropTypes.string,
    /**
     * Defines the `flex-direction` style property.
     * It is applied for all screen sizes.
     */
    direction: PropTypes.oneOf([
        'column-reverse',
        'column',
        'row-reverse',
        'row',
    ]),
    /**
     * The `id` of the Grid.
     */
    id: PropTypes.string,
    /**
     * Defines the `justify-content` style property.
     * It is applied for all screen sizes.
     */
    justifyContent: PropTypes.oneOf([
        'center',
        'flex-end',
        'flex-start',
        'space-around',
        'space-between',
        'space-evenly',
    ]),
    /**
     * Defines the space between the type `item` component.
     * It can only be used on a type `container` component.
     */
    spacing: PropTypes.oneOf(SPACINGS),
    /**
     * Defines the `flex-wrap` style property.
     * It's applied for all screen sizes.
     */
    wrap: PropTypes.oneOf([
        'nowrap',
        'wrap-reverse',
        'wrap',
    ]),
};

const defaultProps = {
    alignContent: 'stretch',
    alignItems: 'stretch',
    children: null,
    classes: null,
    className: null,
    direction: 'row',
    id: null,
    justifyContent: 'flex-start',
    spacing: 0,
    wrap: 'wrap',
};

const useStyles = makeStyles((theme) => {
    function getOffset(val, div = 1) {
        const parse = parseFloat(val);

        return `${parse / div}${String(val).replace(String(parse), '') || 'px'}`;
    }

    const gutters = {};

    // eslint-disable-next-line consistent-return
    forEach(SPACINGS, (spacing) => {
        const themeSpacing = theme.spacing(spacing);

        if (themeSpacing === 0) {
            return null;
        }

        gutters[`spacing-${spacing}`] = {
            margin: `-${getOffset(themeSpacing, 2)}`,
            width: `calc(100% + ${getOffset(themeSpacing)})`,
            '& > .grid--column': {
                padding: getOffset(themeSpacing, 2),
            },
        };
    });

    return {
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '100%',
        },
        'alignContent-center': {
            alignContent: 'center',
        },
        'alignContent-flexStart': {
            alignContent: 'flex-start',
        },
        'alignContent-flexEnd': {
            alignContent: 'flex-end',
        },
        'alignContent-spaceBetween': {
            alignContent: 'space-between',
        },
        'alignContent-spaceAround': {
            alignContent: 'space-around',
        },
        'alignItems-center': {
            alignItems: 'center',
        },
        'alignItems-flexStart': {
            alignItems: 'flex-start',
        },
        'alignItems-flexEnd': {
            alignItems: 'flex-end',
        },
        'alignItems-baseline': {
            alignItems: 'baseline',
        },
        'direction-column': {
            flexDirection: 'column',
        },
        'direction-columnReverse': {
            flexDirection: 'column-reverse',
        },
        'direction-rowReverse': {
            flexDirection: 'row-reverse',
        },
        'justifyContent-center': {
            justifyContent: 'center',
        },
        'justifyContent-flexEnd': {
            justifyContent: 'flex-end',
        },
        'justifyContent-spaceBetween': {
            justifyContent: 'space-between',
        },
        'justifyContent-spaceAround': {
            justifyContent: 'space-around',
        },
        'justifyContent-spaceEvenly': {
            justifyContent: 'space-evenly',
        },
        'wrap-nowrap': {
            flexWrap: 'nowrap',
        },
        'wrap-wrapReverse': {
            flexWrap: 'wrap-reverse',
        },
        ...gutters,
    };
});

const Grid = React.forwardRef((props, ref) => {
    const {
        alignContent,
        alignItems,
        children,
        className,
        id,
        direction,
        justifyContent,
        spacing,
        wrap,
    } = props;

    const classes = useStyles(props);

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_GRID,
        classes.root,
        className,
        {
            [classes[`alignContent-${camelCase(alignContent)}`]]: alignContent !== 'stretch',
            [classes[`alignItems-${camelCase(alignItems)}`]]: alignItems !== 'stretch',
            [classes[`direction-${camelCase(direction)}`]]: direction !== 'row',
            [classes[`justifyContent-${camelCase(justifyContent)}`]]: justifyContent !== 'flex-start',
            [classes[`spacing-${String(spacing)}`]]: spacing !== 0,
            [classes[`wrap-${camelCase(wrap)}`]]: wrap !== 'wrap',
        },
    );

    return (
        <div
            className={rootClasses}
            id={id}
            ref={ref}
        >
            {children}
        </div>
    );
});

Grid.Column = GridColumn;

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
