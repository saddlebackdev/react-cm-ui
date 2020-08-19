import {
    reduce,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    BEM_GRID_COLUMN,
    UI_CLASS_NAME,
} from '../../global/constants';
import {
    GRID_SIZES,
} from './gridConstants';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * The content of the GridColumn
     */
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
     * Assign additional class names to GridColumn.
     */
    className: PropTypes.string,
    /**
     * The `id` of the GridColumn.
     */
    id: PropTypes.string,
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `lg` breakpoint and wider screens if not overridden.
     */
    lg: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        PropTypes.bool,
    ]),
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `md` breakpoint and wider screens if not overridden.
     */
    md: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        PropTypes.bool,
    ]),
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `sm` breakpoint and wider screens if not overridden.
     */
    sm: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        PropTypes.bool,
    ]),
    /**
     * Defines the number of grids the component is going to use.
     * It's applied for the `xl` breakpoint and wider screens if not overridden.
     */
    xl: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        PropTypes.bool,
    ]),
};

const defaultProps = {
    classes: null,
    children: null,
    className: null,
    id: null,
    lg: false,
    md: false,
    sm: false,
    xl: false,
};

function generateGrid(globalStyles, theme, breakpoint) {
    const styles = {};

    GRID_SIZES.forEach((size) => {
        const key = `${BEM_GRID_COLUMN}-${breakpoint}-${size}`;

        if (size === true) {
            // For the auto layouting
            styles[key] = {
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: '100%',
            };

            return null;
        }

        if (size === 'auto') {
            styles[key] = {
                flexBasis: 'auto',
                flexGrow: 0,
                maxWidth: 'none',
            };

            return null;
        }

        const width = `${Math.round((size / 12) * 10e7) / 10e5}%`;

        styles[key] = {
            flexBasis: width,
            flexGrow: 0,
            maxWidth: width,
        };
    });

    if (breakpoint === 'sm') {
        Object.assign(globalStyles, styles);
    } else {
        // eslint-disable-next-line no-param-reassign
        globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
    },
    ...reduce(theme.breakpoints.keys, (accumulator, key) => {
        generateGrid(accumulator, theme, key);

        return accumulator;
    }, {}),
}));

const GridColumn = React.forwardRef((props, ref) => {
    const {
        children,
        className,
        id,
        sm,
        md,
        lg,
        xl,
    } = props;

    const classes = useStyles(props);

    const containerClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_GRID_COLUMN,
        classes.root,
        className,
        {
            [classes[`${BEM_GRID_COLUMN}-sm-${String(sm)}`]]: sm !== false,
            [classes[`${BEM_GRID_COLUMN}-md-${String(md)}`]]: md !== false,
            [classes[`${BEM_GRID_COLUMN}-lg-${String(lg)}`]]: lg !== false,
            [classes[`${BEM_GRID_COLUMN}-xl-${String(xl)}`]]: xl !== false,
        },
    );

    return (
        <div
            className={containerClasses}
            id={id}
            ref={ref}
        >
            {children}
        </div>
    );
});

GridColumn.propTypes = propTypes;
GridColumn.defaultProps = defaultProps;

export default GridColumn;
