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
    children: PropTypes.node,
    /**
     * Override or extend the styles applied to the component.
     * See [CSS API](#css) below for more details.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    id: PropTypes.string,
    lg: PropTypes.oneOfType([
        PropTypes.oneOf(GRID_SIZES),
        PropTypes.bool,
    ]),
    md: PropTypes.oneOfType([
        PropTypes.oneOf(GRID_SIZES),
        PropTypes.bool,
    ]),
    sm: PropTypes.oneOfType([
        PropTypes.oneOf(GRID_SIZES),
        PropTypes.bool,
    ]),
    xl: PropTypes.oneOfType([
        PropTypes.oneOf(GRID_SIZES),
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
