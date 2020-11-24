import {
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import React from 'react';
import { buttonPropTypes, buttonDefaultProps } from './buttonConstants';
import {
    UI_CLASS_NAME,
    BEM_BUTTON,
} from '../../global/constants';
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
    const buttonPillSize = 46;
    const outlineWidth = 'inset 0 0 0 1.5px';

    return {
        root: {
            backgroundColor: 'transparent',
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
                boxShadow: `0 0 0 1px ${theme.palette.active.main}`,
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
            '& .icon .icon-use-path': {
                fill: theme.palette.background.primary,
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
        colorActive: {
            '&:not($text)': {
                backgroundColor: theme.palette.active.main,
                '&$outline': {
                    boxShadow: `${outlineWidth} ${theme.palette.active.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.active.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.active.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.active.main,
                },
            },
        },
        colorDefault: {
            '&:not($text)': {
                backgroundColor: theme.palette.grey[600],
                '&$outline': {
                    boxShadow: `${outlineWidth} ${theme.palette.grey[600]}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.grey[600],
                    },
                    '&$inverse': {
                        boxShadow: `${outlineWidth} ${theme.palette.common.white}`,
                        '& .icon .icon-use-path': {
                            fill: theme.palette.common.white,
                        },
                    },
                },
            },
            '&$text': {
                color: theme.palette.text.primary,
                '& .icon .icon-use-path': {
                    fill: theme.palette.text.primary,
                },
            },
        },
        colorLink: {
            '&:not($text)': {
                backgroundColor: theme.palette.link.main,
                '&$outline': {
                    boxShadow: `${outlineWidth} ${theme.palette.link.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.link.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.link.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.link.main,
                },
            },
        },
        colorPrimary: {
            '&:not($text)': {
                backgroundColor: theme.palette.primary.main,
                '&$outline': {
                    boxShadow: `${outlineWidth} ${theme.palette.primary.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.primary.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.primary.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.primary.main,
                },
            },
        },
        colorError: {
            '&:not($text)': {
                backgroundColor: theme.palette.error.main,
                '&$outline': {
                    boxShadow: `${outlineWidth} ${theme.palette.error.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.error.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.error.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.error.main,
                },
            },
        },
        colorSecondary: {
            '&:not($text)': {
                backgroundColor: theme.palette.secondary.main,
                '&$outline': {
                    boxShadow: `${outlineWidth} ${theme.palette.secondary.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.secondary.main,
                    },
                    '&$inverse': {
                        boxShadow: `${outlineWidth} ${theme.palette.secondary.constrastMain}`,
                        '& .icon .icon-use-path': {
                            fill: theme.palette.secondary.constrastMain,
                        },
                    },
                },
            },
            '&$text': {
                color: theme.palette.secondary.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.secondary.main,
                },
            },
        },
        colorSuccess: {
            '&:not($text)': {
                backgroundColor: theme.palette.success.main,
                '&$outline': {
                    boxShadow: `${outlineWidth} ${theme.palette.success.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.success.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.success.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.success.main,
                },
            },
        },
        colorWarning: {
            '&:not($text)': {
                backgroundColor: theme.palette.warning.main,
                '&$outline': {
                    boxShadow: `${outlineWidth} ${theme.palette.warning.main}`,
                    '& .icon .icon-use-path': {
                        fill: theme.palette.warning.main,
                    },
                },
            },
            '&$text': {
                color: theme.palette.warning.main,
                '& .icon .icon-use-path': {
                    fill: theme.palette.warning.main,
                },
            },
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
        outline: {
            '&:not($text)': {
                backgroundColor: 'transparent',
                color: theme.palette.text.primary,
            },
        },
        inverse: {
            '&:not($text)': {
                color: theme.palette.text.contrastText,
            },
        },
        pill: {
            borderRadius: buttonPillSize / 2,
            fontWeight: theme.typography.fontWeightBold,
            minHeight: buttonPillSize,
        },
        relax: {
            paddingLeft: 33,
            paddingRight: 33,
        },
        text: {},
        transparent: {
            '&:not($text)': {
                backgroundColor: theme.palette.hexToRGBA(theme.palette.background.primary, 0.5),
                boxShadow: `inset 0 0 0 1px ${theme.palette.border.contrastPrimary}`,
            },
        },
        disable: {
            '&:not($text)': {
                backgroundColor: theme.palette.disable.main,
                color: theme.palette.text.constrastText,
            },
            '&$outline': {
                backgroundColor: 'transparent',
                boxShadow: `${outlineWidth} ${theme.palette.disable.main}`,
                '& .icon .icon-use-path': {
                    fill: theme.palette.disable.main,
                },
            },
            '&$text': {
                color: theme.palette.disable.main,
            },
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
            classes,
            className,
            color,
            compact,
            disable,
            fluid,
            href,
            icon,
            id,
            innerStyle,
            inverse,
            outline,
            pill,
            relax,
            style,
            text,
            target,
            title,
            transparent,
            width,
        } = this.props;

        const ElementType = Utils.getElementType(as, this.props);

        const rootClasses = ClassNames(
            UI_CLASS_NAME,
            BEM_BUTTON,
            classes.root,
            className,
            {
                [classes.colorActive]: !disable && color === 'active',
                [classes.colorDefault]: !disable && color === 'default',
                [classes.colorError]: !disable && color === 'error',
                [classes.colorLink]: !disable && color === 'link',
                [classes.colorPrimary]: !disable && color === 'primary',
                [classes.colorSecondary]: !disable && color === 'secondary',
                [classes.colorSuccess]: !disable && color === 'success',
                [classes.colorWarning]: !disable && color === 'warning',
                [classes.compact]: compact,
                [classes.disable]: disable,
                [classes.fixedWidth]: !!width,
                [classes.fluid]: fluid,
                [classes.icon]: icon,
                [classes.inverse]: inverse,
                [classes.outline]: outline,
                [classes.pill]: pill,
                [classes.relax]: relax,
                [classes.text]: text,
                [classes.transparent]: transparent,
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
