import {
    isNumber,
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

const deprecatedTextAlignEnums = ['center', 'left', 'right'];

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
     * Override styles applied to the component.
     */
    style: PropTypes.shape({}),
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
     * Deprecated prop. Please use `lg`.
     */
    desktop: PropTypes.oneOf(GRID_SIZES),
    /**
     * Deprecated prop. Please use `xl`.
     */
    desktopLarge: PropTypes.oneOf(GRID_SIZES),
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
    laptop: PropTypes.oneOf(GRID_SIZES),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    mobile: PropTypes.oneOf(GRID_SIZES),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    mobileLarge: PropTypes.oneOf(GRID_SIZES),
    /**
     * Deprecated prop. Please use `sm`.
     */
    mobileMedium: PropTypes.oneOf(GRID_SIZES),
    /**
     * Deprecated prop. Please use `md`.
     */
    tablet: PropTypes.oneOf(GRID_SIZES),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    textAlign: PropTypes.oneOf(deprecatedTextAlignEnums),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    verticalAlign: PropTypes.oneOf(['bottom', 'middle', 'top']),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    width: PropTypes.oneOf(GRID_SIZES),
};

const defaultProps = {
    classes: null,
    children: null,
    className: null,
    id: null,
    lg: false,
    md: false,
    sm: false,
    style: null,
    xl: false,
    // ****
    // NOTE: All props below are deprecated and should not be used.
    // ****
    align: undefined,
    desktop: undefined,
    desktopLarge: undefined,
    fieldType: undefined,
    floated: undefined,
    laptop: undefined,
    mobile: undefined,
    mobileLarge: undefined,
    mobileMedium: undefined,
    tablet: undefined,
    textAlign: undefined,
    verticalAlign: undefined,
    width: undefined,
};

function generateGrid(globalStyles, theme, breakpoint) {
    const styles = {};

    GRID_SIZES.forEach((size) => {
        const key = `${BEM_GRID_COLUMN}-${breakpoint}_${size}`;

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

        const width = `${Math.round((size / 12) * 10e7) / 10e5}%`;

        styles[key] = {
            flexBasis: width,
            flexGrow: 0,
            maxWidth: width,
        };
    });

    /* eslint-disable no-param-reassign */
    switch (breakpoint) {
        case 'sm':
        case 'deprecated_width': // Deprecated breakpoint name.
            Object.assign(globalStyles, styles);

            break;
        /**
         * Deprecated styles
         */
        case 'deprecated_mobile':
            globalStyles[theme.breakpoints.down(374)] = styles;

            break;
        case 'deprecated_mobile_medium':
            globalStyles[theme.breakpoints.up(375)] = styles;

            break;
        case 'deprecated_mobile_large':
            globalStyles[theme.breakpoints.up(425)] = styles;

            break;
        case 'deprecated_tablet':
            globalStyles[theme.breakpoints.up(768)] = styles;

            break;
        case 'deprecated_laptop':
            globalStyles[theme.breakpoints.up(1200)] = styles;

            break;
        case 'deprecated_desktop':
            globalStyles[theme.breakpoints.up(1440)] = styles;

            break;
        case 'deprecated_desktop_large':
            globalStyles[theme.breakpoints.up(1720)] = styles;

            break;
        /**
         * End of deprecated styles
         */
        default:
            globalStyles[theme.breakpoints.up(breakpoint)] = styles;
    }
    /* eslint-enable no-param-reassign */
}

const useStyles = makeStyles((theme) => {
    const tempBreakpointKeys = [
        ...theme.breakpoints.keys,
        /**
         * Deprecated breakpoint keys.
         */
        'deprecated_mobile',
        'deprecated_mobile_medium',
        'deprecated_mobile_large',
        'deprecated_tablet',
        'deprecated_laptop',
        'deprecated_desktop',
        'deprecated_desktop_large',
        'deprecated_width',
    ];

    const foo = {
        root: {
            margin: 0,
            '&$deprecatedAlignStretch': {
                alignSelf: 'stretch',
            },
            '&$deprecatedFieldTypeCheckbox, &$deprecatedFieldTypeRadio': {
                paddingBottom: 5.5,
                paddingTop: 5.5,
                '&:last-child': {
                    paddingBottom: 16.5,
                },
            },
            '&$deprecatedFieldTypeLegend': {
                paddingBottom: 0,
            },
            '&$deprecatedFloatedLeft': {
                marginRight: 'auto',
            },
            '&$deprecatedFloatedRight': {
                marginLeft: 'auto',
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
        },
        deprecatedAlignStretch: {},
        deprecatedFieldTypeCheckbox: {},
        deprecatedFieldTypeLegend: {},
        deprecatedFieldTypeRadio: {},
        deprecatedFloatedLeft: {},
        deprecatedFloatedRight: {},
        deprecatedTextAlignCenter: {},
        deprecatedTextAlignLeft: {},
        deprecatedTextAlignRight: {},
        deprecatedVerticalAlignBottom: {},
        deprecatedVerticalAlignCenter: {},
        deprecatedVerticalAlignTop: {},
        ...reduce(
            tempBreakpointKeys,
            (accumulator, key) => {
                generateGrid(accumulator, theme, key);

                return accumulator;
            },
            {},
        ),
    };

    return foo;
});

const GridColumn = React.forwardRef(
    // eslint-disable-next-line prefer-arrow-callback
    function GridColumn(props, ref) {
        const {
            children,
            className,
            id,
            sm,
            md,
            lg,
            style,
            xl,
            ...otherProps
        } = props;

        const classes = useStyles(props);

        const containerClasses = ClassNames(
            UI_CLASS_NAME,
            BEM_GRID_COLUMN,
            classes.root,
            className,
            {
                [classes[`${BEM_GRID_COLUMN}-sm_${String(sm)}`]]: sm !== false,
                [classes[`${BEM_GRID_COLUMN}-md_${String(md)}`]]: md !== false,
                [classes[`${BEM_GRID_COLUMN}-lg_${String(lg)}`]]: lg !== false,
                [classes[`${BEM_GRID_COLUMN}-xl_${String(xl)}`]]: xl !== false,
                /**
                 * Deprecated classses
                 */
                [classes[`${BEM_GRID_COLUMN}-deprecated_mobile_${String(otherProps.mobile)}`]]: isNumber(otherProps.mobile),
                [classes[`${BEM_GRID_COLUMN}-deprecated_mobile_small_${String(otherProps.mobileSmall)}`]]: isNumber(otherProps.mobileSmall),
                [classes[`${BEM_GRID_COLUMN}-deprecated_mobile_large_${String(otherProps.mobileLarge)}`]]: isNumber(otherProps.mobileLarge),
                [classes[`${BEM_GRID_COLUMN}-deprecated_tablet_${String(otherProps.tablet)}`]]: isNumber(otherProps.tablet),
                [classes[`${BEM_GRID_COLUMN}-deprecated_laptop_${String(otherProps.laptop)}`]]: isNumber(otherProps.laptop),
                [classes[`${BEM_GRID_COLUMN}-deprecated_desktop_${String(otherProps.desktop)}`]]: isNumber(otherProps.desktop),
                [classes[`${BEM_GRID_COLUMN}-deprecated_desktop_large_${String(otherProps.desktopLarge)}`]]: isNumber(otherProps.desktopLarge),
                [classes[`${BEM_GRID_COLUMN}-deprecated_width_${String(otherProps.width)}`]]: isNumber(otherProps.width),
                [classes.deprecatedAlignStretch]: otherProps.align === 'stretch',
                [classes.deprecatedFieldTypeCheckbox]: otherProps.fieldType === 'checkbox',
                [classes.deprecatedFieldTypeLegend]: otherProps.fieldType === 'legend',
                [classes.deprecatedFieldTypeRadio]: otherProps.fieldType === 'radio',
                [classes.deprecatedFloatedLeft]: otherProps.floated === 'left',
                [classes.deprecatedFloatedRight]: otherProps.floated === 'right',
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
                className={containerClasses}
                id={id}
                ref={ref}
                style={style}
            >
                {children}
            </div>
        );
    },
);

GridColumn.propTypes = propTypes;
GridColumn.defaultProps = defaultProps;

export default GridColumn;
