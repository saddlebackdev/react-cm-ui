import {
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/utils';
import withStyles from '../../styles/withStyles';

const propTypes = {
    as: PropTypes.oneOf(['a', 'button']),
    /**
     * Primary content.
     */
    children: PropTypes.node.isRequired,
    classes: PropTypes.shape({
        root: PropTypes.string,
        inverse: PropTypes.string,
        colorActive: PropTypes.string,
        colorAlert: PropTypes.string,
        colorAlternate: PropTypes.string,
        colorDisable: PropTypes.string,
        colorInverse: PropTypes.string,
        colorLight: PropTypes.string,
        colorOutline: PropTypes.string,
        colorPrimary: PropTypes.string,
        colorSecondary: PropTypes.string,
        colorSuccess: PropTypes.string,
        colorTransparent: PropTypes.string,
        colorWarning: PropTypes.string,
        compact: PropTypes.string,
        fluid: PropTypes.string,
        icon: PropTypes.string,
        fixedWidth: PropTypes.string,
        outlined: PropTypes.string,
        relax: PropTypes.string,
        innerContainer: PropTypes.string,
    }),
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * Color of the button.
     */
    color: PropTypes.oneOf(Utils.colorEnums()),
    /**
     * A button can reduce its padding.
     */
    compact: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disabled` instead.
     */
    disable: PropTypes.bool,
    /**
     * A button can be disabled.
     */
    disabled: PropTypes.bool,
    /**
     * The Button will be resized to its parent container's width.
     */
    fluid: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.bool,
    /**
     * Assign the button an id attribute value.
     */
    id: PropTypes.string,
    innerStyle: PropTypes.shape({}),
    /**
     * A button can be formatted to appear on dark backgrounds better.
     */
    inverse: PropTypes.bool,
    onClick: PropTypes.func,
    /**
     * A button can be outlined.
     */
    outlined: PropTypes.bool,
    /**
     * A button can relax its padding.
     */
    relax: PropTypes.bool,
    /**
     * A button can relax its padding.
     */
    style: PropTypes.shape({}),
    target: PropTypes.oneOf(['_blank']),
    title: PropTypes.string,
    /**
     * Set a fixed width.
     */
    width: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    as: 'button',
    className: undefined,
    classes: undefined,
    color: 'primary',
    compact: false,
    disable: false,
    disabled: false,
    fluid: false,
    href: undefined,
    icon: false,
    id: undefined,
    innerStyle: {},
    inverse: false,
    onClick: undefined,
    outlined: false,
    relax: false,
    style: {},
    target: undefined,
    title: undefined,
    width: undefined,
};

const styles = (theme) => {
    const {
        palette,
        shape,
        typography,
    } = theme;
    const buttonSize = 32;

    return {
        root: {
            border: 0,
            borderRadius: shape.borderRadius,
            color: palette.text.contrastText,
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: typography.fontSize,
            fontWeight: typography.fontWeightMedium,
            letterSpacing: '1px',
            lineHeight: 1,
            margin: '0 11px 0 0',
            minHeight: buttonSize,
            outline: 'none',
            overflow: 'hidden',
            padding: '0 22px 1px',
            textAlign: 'center',
            textDecoration: 'none',
            textTransform: 'capitalize',
            transition: 'background-color 125ms linear, color 125ms linear, opacity 250ms ease-out',
            verticalAlign: 'top',
            whiteSpace: 'normal',
            width: (props) => props.width || '',
            '&:focus': {
                boxShadow: `0 0 0 1px ${theme.palette.active.primary}`,
            },
            '&:last-child': {
                marginRight: 0,
            },
            '& .ui.icon:only-child': {
                margin: 0,
            },
            '&$icon': {
                height: buttonSize,
                padding: 0,
                width: buttonSize,
            },
            '&$inverse': {
                '&$colorOutline, &$colorTransparent': {
                    color: palette.text.contrastText,
                },
                '&$colorAlert': {
                    backgroundColor: palette.error.main,
                },
                '&$colorAlternate': {
                    backgroundColor: palette.grey[500],
                },
                '&$colorDisable': {
                    backgroundColor: palette.static.main,
                    cursor: 'default',
                },
                '&$colorLight': {
                    backgroundColor: palette.grey[100],
                    color: palette.text.primary,
                },
                '&$colorOutline': {
                    backgroundColor: 'rgba(255, 255, 255, .30)',
                    boxShadow: `inset 0 0 0 1px ${palette.background.secondary}`,
                    '& > .ui.icon .icon-use-path': {
                        fill: palette.text.primary,
                    },
                },
                '&$colorPrimary': {
                    backgroundColor: palette.cyan[600],
                },
                '&$colorSuccess': {
                    backgroundColor: palette.green[500],
                },
                '&$colorSecondary': {
                    backgroundColor: palette.blue[500],
                },
                '&$colorTransparent': {
                    backgroundColor: 'transparent',
                },
                '&$colorWarning': {
                    backgroundColor: palette.warning.main,
                },
            },
            '&$outlined': {
                backgroundColor: 'transparent',
                boxShadow: `inset 0 0 0 1px ${palette.grey[500]}`,
                color: palette.text.primary,
                '& .ui.icon .icon-use-path': {
                    fill: palette.text.primary,
                },
                '&$colorAlert': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 0 0 0 1px ${palette.error.main}`,
                    color: palette.error.main,
                    '& .ui.icon .icon-use-path': {
                        fill: palette.error.main,
                    },
                },
                '&$colorAlternate': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 0 0 0 1px ${palette.grey[500]}`,
                    color: palette.text.primary,
                    '& .ui.icon .icon-use-path': {
                        fill: palette.text.primary,
                    },
                },
                '&$colorDisable': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 0 0 0 1px ${palette.static.main}`,
                    color: palette.text.disable,
                    cursor: 'default',
                    '& .ui.icon .icon-use-path': {
                        fill: palette.text.disable,
                    },
                },
                '&$colorLight': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 0 0 0 1px ${palette.grey[100]}`,
                    color: palette.grey[100],
                    '& .ui.icon .icon-use-path': {
                        fill: palette.grey[100],
                    },
                },
                '&$colorOutline': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 0 0 0 1px ${palette.grey[500]}`,
                    color: palette.text.primary,
                    '& .ui.icon .icon-use-path': {
                        fill: palette.text.primary,
                    },
                },
                '&$colorPrimary': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 0 0 0 1px ${palette.cyan[600]}`,
                    color: palette.cyan[600],
                    '& .ui.icon .icon-use-path': {
                        fill: palette.cyan[600],
                    },
                },
                '&$colorSecondary': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 0 0 0 1px ${palette.blue[500]}`,
                    color: palette.blue[500],
                    '& .ui.icon .icon-use-path': {
                        fill: palette.blue[500],
                    },
                },
                '&$colorSuccess': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 0 0 0 1px ${palette.green[500]}`,
                    color: palette.success.main,
                    '& .ui.icon .icon-use-path': {
                        fill: palette.success.main,
                    },
                },
                '&$colorWarning': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 0 0 0 1px ${palette.warning.main}`,
                    color: palette.warning.main,
                    '& .ui.icon .icon-use-path': {
                        fill: palette.warning.main,
                    },
                },
            },
        },
        innerContainer: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            minHeight: buttonSize,
            '& .ui.icon': {
                outline: 'none',
                pointerEvents: 'none',
            },
            '& > .ui.icon .icon-use-path': {
                fill: palette.text.contrastText,
            },
            '& span + .ui.icon': {
                margin: '0 0 0 11px',
            },
            '&$icon': {
                alignItems: 'center',
                display: 'inline-flex',
                height: buttonSize,
                justifyContent: 'center',
                width: buttonSize,
                '& .ui.icon': {
                    float: 'none',
                    fontSize: 16,
                },
            },
        },
        inverse: {},
        colorActive: {
            backgroundColor: palette.active.primary,
        },
        colorAlert: {
            backgroundColor: palette.error.main,
        },
        colorAlternate: {
            backgroundColor: palette.grey[500],
        },
        colorDisable: {
            backgroundColor: palette.static.main,
            cursor: 'default',
        },
        colorInverse: {},
        colorLight: {
            backgroundColor: palette.grey[100],
            color: palette.text.primary,
            '& .ui.icon .icon-use-path': {
                fill: palette.text.primary,
            },
        },
        colorOutline: {
            backgroundColor: 'transparent',
            boxShadow: `inset 0 0 0 1px ${palette.grey[500]}`,
            color: palette.text.primary,
            '& .ui.icon .icon-use-path': {
                fill: palette.text.primary,
            },
        },
        colorPrimary: {
            backgroundColor: palette.cyan[600],
        },
        colorSecondary: {
            backgroundColor: palette.blue[500],
        },
        colorSuccess: {
            backgroundColor: palette.green[500],
        },
        colorTransparent: {
            backgroundColor: 'transparent',
            color: palette.text.primary,
            '& .ui.icon .icon-use-path': {
                fill: palette.text.primary,
            },
        },
        colorWarning: {
            backgroundColor: palette.warning.main,
        },
        compact: {
            paddingLeft: 11,
            paddingRight: 11,
        },
        fluid: {
            width: '100%',
        },
        icon: {},
        fixedWidth: {
            paddingLeft: 0,
            paddingRight: 0,
        },
        outlined: {},
        relax: {
            paddingLeft: 33,
            paddingRight: 33,
        },
    };
};

class ButtonDeprecated extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    onClick(event) {
        const { onClick } = this.props;

        if (isFunction(onClick)) {
            onClick(event);
        }
    }

    onMouseDown(event) {
        event.preventDefault();
    }

    render() {
        const {
            as,
            children,
            className,
            classes,
            color,
            compact,
            disable: disableProp,
            disabled: disabledProp,
            fluid,
            href,
            icon,
            id,
            innerStyle,
            inverse,
            outlined,
            relax,
            style,
            target,
            title,
            width,
            ...otherProps
        } = this.props;

        const disabled = disabledProp || disableProp;
        const ElementType = Utils.getElementType(as, this.props);

        const rootClasses = ClassNames(
            'ui',
            'button',
            classes.root,
            className,
            {
                [classes.inverse]: inverse,
                [classes.colorActive]: !disabled && color === 'active',
                [classes.colorAlert]: !disabled && color === 'alert',
                [classes.colorAlternate]: !disabled && color === 'alternate',
                [classes.colorDisable]: disabled || color === 'disable',
                [classes.colorInverse]: !disabled && color === 'inverse',
                [classes.colorLight]: !disabled && color === 'light',
                [classes.colorOutline]: !disabled && color === 'outline',
                [classes.colorPrimary]: !disabled && (!color || color === 'primary'),
                [classes.colorSecondary]: !disabled && color === 'secondary',
                [classes.colorSuccess]: !disabled && color === 'success',
                [classes.colorTransparent]: !disabled && color === 'transparent',
                [classes.colorWarning]: !disabled && color === 'warning',
                [classes.compact]: compact,
                [classes.fluid]: fluid,
                [classes.icon]: icon,
                [classes.fixedWidth]: !!width,
                [classes.outlined]: outlined,
                [classes.relax]: relax,
            },
        );

        const innerContainerClasses = ClassNames(
            'button-inner-container',
            classes.innerContainer,
        );

        return (
            <ElementType
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...otherProps}
                className={rootClasses}
                disabled={disabled}
                id={id}
                href={href}
                onClick={this.onClick}
                onMouseDown={this.onMouseDown}
                style={style}
                target={target}
                title={title}
            >
                <span
                    className={innerContainerClasses}
                    style={innerStyle}
                >
                    {children}
                </span>
            </ElementType>
        );
    }
}

ButtonDeprecated.propTypes = propTypes;
ButtonDeprecated.defaultProps = defaultProps;

export default withStyles(styles)(ButtonDeprecated);
