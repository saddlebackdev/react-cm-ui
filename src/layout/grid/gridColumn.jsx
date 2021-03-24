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
import utils from '../../utils/utils';

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
    desktop: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    desktopLarge: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
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
    laptop: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    mobile: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    mobileLarge: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    mobileMedium: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    style: PropTypes.shape({}),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
    tablet: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
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
    width: PropTypes.oneOf(['auto', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
    /**
     * Deprecated prop. Please use `classes` to override styles.
     */
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
    desktop: undefined,
    desktopLarge: undefined,
    fieldType: undefined,
    floated: undefined,
    laptop: undefined,
    mobile: undefined,
    mobileLarge: undefined,
    mobileMedium: undefined,
    style: null,
    tablet: undefined,
    textAlign: undefined,
    verticalAlign: undefined,
    width: undefined,
};

const generateGrid = (globalStyles, theme, breakpoint) => {
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
};

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0,
        /**
         * Deprecated classses
         */
        ...reduce([
            'mobile',
            'mobile-medium',
            'mobile-large',
            'tablet',
            'laptop',
            'desktop',
            'desktop-large',
        ], (accumulator, key) => {
            generateGrid(accumulator, theme, key);

            return accumulator;
        }, {}),
        // [`& .${BEM_GRID_COLUMN}`]: {
        //     width: (columns) => `${(1 / columns) * 100}%`,
        // },
        // @mixin deviceType($namespace: '') {
        //     $prefix: '.grid-col-' + $namespace;
        //     $columnsWidth: 1 / $columns * 100%;

        //     #{$prefix}auto { width: auto; }
        //     #{$prefix}one { width: 1 * $columnsWidth; }
        //     #{$prefix}two { width: 2 * $columnsWidth; }
        //     #{$prefix}three { width: 3 * $columnsWidth; }
        //     #{$prefix}four { width: 4 * $columnsWidth; }
        //     #{$prefix}five { width: 5 * $columnsWidth; }
        //     #{$prefix}six { width: 6 * $columnsWidth; }
        //     #{$prefix}seven { width: 7 * $columnsWidth; }
        //     #{$prefix}eight { width: 8 * $columnsWidth; }
        //     #{$prefix}nine { width: 9 * $columnsWidth; }
        //     #{$prefix}ten { width: 10 * $columnsWidth; }
        //     #{$prefix}eleven { width: 11 * $columnsWidth; }
        //     #{$prefix}twelve { width: 12 * $columnsWidth; }
        // }
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
    deprecatedDesktop: {},
    deprecatedLaptop: {},
    deprecatedMobile: {},
    deprecatedTablet: {},
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
    ...reduce(theme.breakpoints.keys, (accumulator, key) => {
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
                /**
                 * Deprecated classses
                 */
                [`${classes.deprecatedDesktop}${utils.numberToWord(otherProps.desktop)}`]:
                    isNumber(otherProps.desktop),
                [`${classes.deprecatedDesktop}${utils.numberToWord(otherProps.desktopLarge)}`]:
                    isNumber(otherProps.desktopLarge),
                [`${classes.deprecatedLaptop}${utils.numberToWord(otherProps.laptop)}`]:
                    isNumber(otherProps.laptop),
                [`${classes.deprecatedMobile}${utils.numberToWord(otherProps.mobile)}`]:
                    isNumber(otherProps.mobile),
                [`${classes.deprecatedMobileLarge}${utils.numberToWord(otherProps.mobileLarge)}`]:
                    isNumber(otherProps.mobileLarge),
                [`${classes.deprecatedMobileMedium}${utils.numberToWord(otherProps.mobileMedium)}`]:
                    isNumber(otherProps.mobileMedium),
                [`${classes.deprecatedTablet}${utils.numberToWord(otherProps.tablet)}`]:
                    isNumber(otherProps.tablet),
                [`${classes.deprecated}${utils.numberToWord(otherProps.width)}`]:
                    isNumber(otherProps.width),
                [classes.deprecatedDesktopAuto]: otherProps.desktop === 'auto',
                [classes.deprecatedDesktopLargeAuto]: otherProps.desktopLarge === 'auto',
                [classes.deprecatedLaptopAuto]: otherProps.laptop === 'auto',
                [classes.deprecatedMobileAuto]: otherProps.mobile === 'auto',
                [classes.deprecatedMobileLargeAuto]: otherProps.mobileLarge === 'auto',
                [classes.deprecatedMobileMediumAuto]: otherProps.mobileMedium === 'auto',
                [classes.deprecatedTabletAuto]: otherProps.tablet === 'auto',
                [classes.deprecatedAuto]: otherProps.width === 'auto',

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
                className={containerClasses}
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
