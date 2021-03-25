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
     * Defines the number of columns the component is going to use.
     * It's applied for the `lg` breakpoint and wider screens if not overridden.
     */
    lg: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        PropTypes.bool,
    ]),
    /**
     * Defines the number of columns the component is going to use.
     * It's applied for the `md` breakpoint and wider screens if not overridden.
     */
    md: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        PropTypes.bool,
    ]),
    /**
     * Defines the number of columns the component is going to use.
     * It's applied for the `sm` breakpoint and wider screens if not overridden.
     */
    sm: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        PropTypes.bool,
    ]),
    /**
     * Defines the number of columns the component is going to use.
     * It's applied for the `xl` breakpoint and wider screens if not overridden.
     */
    xl: PropTypes.oneOfType([
        PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
        PropTypes.bool,
    ]),
    // ****
    // NOTE: All props below are deprecated and should not be used.
    // ****
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    align: PropTypes.oneOf(['stretch']),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    desktop: PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    desktopLarge: PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    fieldType: PropTypes.oneOf(['checkbox', 'legend', 'radio']),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    floated: PropTypes.oneOf(['left', 'right']),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    laptop: PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    mobile: PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    mobileLarge: PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    mobileMedium: PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    style: PropTypes.shape({}),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    tablet: PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    textAlign: PropTypes.oneOf(['center', 'left', 'right']),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    width: PropTypes.oneOf(['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
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
    // ****
    // NOTE: All props below are deprecated and should not be used.
    // ****
    align: undefined,
    desktop: false,
    desktopLarge: false,
    fieldType: undefined,
    floated: undefined,
    laptop: false,
    mobile: false,
    mobileLarge: false,
    mobileMedium: false,
    style: null,
    tablet: false,
    textAlign: undefined,
    verticalAlign: undefined,
    width: false,
};

const generateGrid = (globalStyles, theme, breakpoint) => {
    const styles = {};

    GRID_SIZES.forEach((size) => {
        const key = `${BEM_GRID_COLUMN}-${breakpoint}-${size}`;
        const width = `${Math.round((size / 12) * 10e7) / 10e5}%`;

        if (
            breakpoint === 'mobile' ||
            breakpoint === 'mobile-medium' ||
            breakpoint === 'mobile-large' ||
            breakpoint === 'tablet' ||
            breakpoint === 'laptop' ||
            breakpoint === 'desktop' ||
            breakpoint === 'desktop-large'
        ) {
            styles[key] = {
                width,
            };

            return;
        }

        if (size === true) {
            // For the auto layouting
            styles[key] = {
                flexBasis: 0,
                flexGrow: 1,
                maxWidth: '100%',
            };

            return;
        }

        if (size === 'auto') {
            styles[key] = {
                flexBasis: 'auto',
                flexGrow: 0,
                maxWidth: 'none',
            };

            return;
        }

        styles[key] = {
            flexBasis: width,
            flexGrow: 0,
            maxWidth: width,
        };
    });

    switch (breakpoint) {
        /* eslint-disable no-param-reassign */
        case 'mobile':
            globalStyles[theme.breakpoints.down(374)] = styles;

            break;
        case 'mobile-medium':
            globalStyles[theme.breakpoints.up(375)] = styles;

            break;
        case 'mobile-large':
            globalStyles[theme.breakpoints.up(425)] = styles;

            break;
        case 'laptop':
            globalStyles[theme.breakpoints.up(1024)] = styles;

            break;
        case 'desktop':
            globalStyles[theme.breakpoints.up(1440)] = styles;

            break;
        case 'desktop-large':
            globalStyles[theme.breakpoints.up(1720)] = styles;

            break;
        case 'sm':
            Object.assign(globalStyles, styles);

            break;
        default:
            globalStyles[theme.breakpoints.up(breakpoint)] = styles;
        /* eslint-enable no-param-reassign */
    }
};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        /**
         * Deprecated classses
         */
        '&$deprecatedAlignStretch': {
            alignSelf: 'stretch',
        },
        '&deprecatedFloatedLeft': {
            marginRight: 'auto',
        },
        '&$deprecatedFloatedRight': {
            marginLeft: 'auto',
        },
        '&$deprecatedFormFieldCheckbox, &$deprecatedFormFieldRadio': {
            paddingBottom: 5.5,
            paddingTop: 5.5,
            '&:last-child': {
                paddingBottom: 16.5,
            },
        },
        '&$deprecatedFormFieldLegend': {
            paddingBottom: 0,
        },
        '&$deprecatedTextAlignCenter': {
            textAlign: 'center',
        },
        '&$deprecatedTextAlignLeft': {
            textAlign: 'left',
        },
        '&$deprecatedTextAlignRight': {
            textAlign: 'right',
        },
        '&$deprecatedVerticalAlignBottom': {
            alignItems: 'bottom',
            display: 'flex',
        },
        '&$deprecatedVerticalAlignCenter': {
            alignItems: 'center',
            display: 'flex',
        },
        '&$deprecatedVerticalAlignTop': {
            alignItems: 'top',
            display: 'flex',
        },
        /**
         * End of deprecated classes
         */
    },
    /**
     * Deprecated classses
     */
    deprecatedAlignStretch: {},
    deprecatedFloatedLeft: {},
    deprecatedFloatedRight: {},
    deprecatedFormFieldCheckbox: {},
    deprecatedFormFieldLegend: {},
    deprecatedFormFieldRadio: {},
    deprecatedTextAlignCenter: {},
    deprecatedTextAlignLeft: {},
    deprecatedTextAlignRight: {},
    deprecatedVerticalAlignBottom: {},
    deprecatedVerticalAlignCenter: {},
    deprecatedVerticalAlignTop: {},
    /**
     * End of deprecated classes
     */
    ...reduce([
        ...theme.breakpoints.keys,
        'mobile',
        'mobile-medium',
        'mobile-large',
        'laptop',
        'desktop',
        'desktop-large',
    ], (accumulator, key) => {
        generateGrid(accumulator, theme, key);

        return accumulator;
    }, {}),
}));

const GridColumn = React.forwardRef(
    /* eslint-disable react-hooks/rules-of-hooks */
    // eslint-disable-next-line prefer-arrow-callback
    function gridColumn(props, ref) {
        const {
            children,
            className,
            id,
            lg,
            md,
            sm,
            style,
            xl,
            ...otherProps
        } = props;

        const classes = useStyles(props);

        const rootClasses = ClassNames(
            UI_CLASS_NAME,
            BEM_GRID_COLUMN,
            classes.root,
            className,
            {
                [classes[`${BEM_GRID_COLUMN}-sm-${String(sm || otherProps.width)}`]]:
                    sm !== false || otherProps.width !== false,
                /**
                 * `otherProps.tablet` is a deprecated prop. It is using the same breakpoint (768)
                 * as `md`, so we're combining in order to have less JSS.
                 */
                [classes[`${BEM_GRID_COLUMN}-md-${String(md || otherProps.tablet)}`]]:
                    md !== false || otherProps.tablet !== false,
                [classes[`${BEM_GRID_COLUMN}-lg-${String(lg)}`]]: lg !== false,
                [classes[`${BEM_GRID_COLUMN}-xl-${String(xl)}`]]: xl !== false,
                /**
                 * Deprecated classes below
                 */
                [classes[`${BEM_GRID_COLUMN}-mobile-${String(otherProps.mobile)}`]]:
                    otherProps.mobile !== false,
                [classes[`${BEM_GRID_COLUMN}-mobile-medium-${String(otherProps.mobileMedium)}`]]:
                    otherProps.mobileMedium !== false,
                [classes[`${BEM_GRID_COLUMN}-mobile-large-${String(otherProps.mobileLarge)}`]]:
                    otherProps.mobileLarge !== false,
                [classes[`${BEM_GRID_COLUMN}-laptop-${String(otherProps.laptop)}`]]:
                    otherProps.laptop !== false,
                [classes[`${BEM_GRID_COLUMN}-desktop-${String(otherProps.desktop)}`]]:
                    otherProps.desktop !== false,
                [classes[`${BEM_GRID_COLUMN}-desktop-large-${String(otherProps.desktopLarge)}`]]:
                    otherProps.desktopLarge !== false,
                [classes.deprecatedAlignStretch]: otherProps.align === 'stretch',
                [classes.deprecatedFloatedLeft]: otherProps.floated === 'left',
                [classes.deprecatedFloatedRight]: otherProps.floated === 'right',
                [classes.deprecatedFormFieldCheckbox]: otherProps.fieldType === 'checkbox',
                [classes.deprecatedFormFieldLegend]: otherProps.fieldType === 'legend',
                [classes.deprecatedFormFieldRadio]: otherProps.fieldType === 'radio',
                [classes.deprecatedTextAlignCenter]: otherProps.textAlign === 'center',
                [classes.deprecatedTextAlignLeft]: otherProps.textAlign === 'left',
                [classes.deprecatedTextAlignRight]: otherProps.textAlign === 'right',
                [classes.deprecatedVerticalAlignBottom]: otherProps.verticalAlign === 'bottom',
                [classes.deprecatedVerticalAlignCenter]: otherProps.verticalAlign === 'center',
                [classes.deprecatedVerticalAlignTop]: otherProps.verticalAlign === 'top',
            },
        );

        return (
            <div
                className={rootClasses}
                id={id}
                ref={ref}
                style={style}
            >
                {children}
            </div>
        );
    },
    /* eslint-enable react-hooks/rules-of-hooks */
);

GridColumn.propTypes = propTypes;
GridColumn.defaultProps = defaultProps;

export default GridColumn;
