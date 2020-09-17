import {
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import React from 'react';
import { buttonPropTypes, buttonDefaultProps } from './buttonConstants';
import Utils from '../../utils/utils';
import withStyles from '../../styles/withStyles';

const propTypes = {
    ...buttonPropTypes,
};
const defaultProps = {
    ...buttonDefaultProps,
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
            borderRadius: shape.borderRadius.main,
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
        pill: {
            borderRadius: '16px',
        },
    };
};

class Button extends React.PureComponent {
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
            fluid,
            href,
            icon,
            id,
            innerStyle,
            inverse,
            outline,
            relax,
            style,
            target,
            title,
            width,
            pill,
            transparent
        } = this.props;
        const disable = disableProp;
        const ElementType = Utils.getElementType(as, this.props);
        const rootClasses = ClassNames(
            'ui',
            'button',
            classes.root,
            className,
            {
                [classes.inverse]: inverse,
                [classes.colorAlert]: !disable && color === 'alert',
                [classes.colorSecondary]: !disable && color === 'alternate',
                [classes.colorDisable]: disable || color === 'disable',
                [classes.colorInverse]: !disable && color === 'inverse',
                [classes.colorPrimary]: !disable && (!color || color === 'primary'),
                [classes.colorSuccess]: !disable && color === 'success',
                [classes.colorWarning]: !disable && color === 'warning',
                [classes.colorTransparent]: transparent,
                [classes.compact]: compact,
                [classes.fluid]: fluid,
                [classes.icon]: icon,
                [classes.fixedWidth]: !!width,
                [classes.outlined]: outline,
                [classes.relax]: relax,
                [classes.pill]: pill,
            },
        );
        const innerContainerClasses = ClassNames(
            'button-inner-container',
            classes.innerContainer,
        );

        return (
            <ElementType
                className={rootClasses}
                disabled={disable}
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

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withStyles(styles)(Button);
