import _ from 'lodash';
import ClassNames from 'classnames';
import React from 'react';
import { buttonPropTypes, buttonDefaultProps } from './buttonConstants';
import utils from '../utils/utils';
import withStyles from '../styles/withStyles';

const propTypes = {
    ...buttonPropTypes,
};
const defaultProps = {
    ...buttonDefaultProps,
};

const BUTTON_SIZE = '32px';

const styles = (theme) => {
    const {
        palette,
        typography,
    } = theme;

    return {
        root: {
            backgroundColor: palette.background.contrastPrimary,
            border: 0,
            borderRadius: '3px',
            color: palette.text.contrastPrimary,
            cursor: 'pointer',
            display: 'inline-block',
            fontSize: typography.fontSize,
            fontWeight: typography.fontWeightRegular,
            letterSpacing: '1px',
            lineHeight: '1',
            margin: '0 11px 0 0',
            minHeight: BUTTON_SIZE,
            outline: 'none',
            overflow: 'hidden',
            padding: '0 22px 1px',
            textAlign: 'center',
            textDecoration: 'none',
            textTransform: 'capitalize',
            transition: 'background-color 125ms linear, color 125ms linear, opacity 250ms ease-out',
            verticalAlign: 'top',
            whiteSpace: 'normal',
            '$&alert': {
                backgroundColor: color(backgroundColorButtonAlert),
            },
            '$&alternate': {
                backgroundColor: color(backgroundColorButtonAlternate),
            },
            '$&disable': {
                backgroundColor: color(backgroundColorButtonDisable),
                cursor: 'default',
            },
            '$&light': {
                backgroundColor: color(backgroundColorLight),
            },
            '$&outline': {
                backgroundColor: 'transparent',
                boxShadow: inset 0 0 0 1px color(borderColorQuaternary),
            },
            '$&primary': {
                backgroundColor: color(backgroundColorButton),
            },
            '$&secondary': {
                backgroundColor: color(backgroundColorButtonSecondary),
            },
            '$&success': {
                backgroundColor: color(backgroundColorButtonSuccess),
            },
            '$&transparent': {
                backgroundColor: 'transparent',
            },
            '$&warning': {
                backgroundColor: color(backgroundColorWarning),
            },
        },
        innerContainer: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            minHeight: BUTTON_SIZE,
            '& > .ui.icon .icon-use-path': {
                fill: palette.common.white,
            },
        },

        // &.button-color- {
            // &light, &outline, &transparent {
            //     color: color(color);
            //     .ui.icon {
            //         .icon-use-path { fill: color(color); }
            //     }
            // }
            // &alert { background-color: color(backgroundColorButtonAlert); }
            // &alternate { background-color: color(backgroundColorButtonAlternate); }
            // &disable {
            //     background-color: color(backgroundColorButtonDisable);
            //     cursor: default;
            // }
            // &light { background-color: color(backgroundColorLight); }
            // &outline {
            //     background-color: transparent;
            //     box-shadow: inset 0 0 0 1px color(borderColorQuaternary);
            // }
            // &primary { background-color: color(backgroundColorButton); }
            // &secondary { background-color: color(backgroundColorButtonSecondary); }
            // &success { background-color: color(backgroundColorButtonSuccess); }
            // &transparent {
            //     background-color: transparent;
            // }
            // &warning { background-color: color(backgroundColorWarning); }
        // }
        // &.button-outlined.button-color- {
        //     &alert {
        //         background-color: transparent;
        //         box-shadow: inset 0 0 0 1px color(backgroundColorButtonAlert);
        //         color: color(colorAlert);
        //         .ui.icon {
        //             .icon-use-path { fill: color(colorAlert); }
        //         }
        //     }
        //     &alternate {
        //         background-color: transparent;
        //         box-shadow: inset 0 0 0 1px color(backgroundColorButtonAlternate);
        //         color: color(color);
        //         .ui.icon {
        //             .icon-use-path { fill: color(color); }
        //         }
        //     }
        //     &disable {
        //         background-color: transparent;
        //         box-shadow: inset 0 0 0 1px color(backgroundColorButtonDisable);
        //         color: color(colorDisable);
        //         .ui.icon {
        //             .icon-use-path { fill: color(colorDisable); }
        //         }
        //         cursor: default;
        //     }
        //     &light {
        //         background-color: transparent;
        //         box-shadow: inset 0 0 0 1px color(backgroundColorLight);
        //         color: color(backgroundColorLight);
        //         .ui.icon {
        //             .icon-use-path { fill: color(backgroundColorLight); }
        //         }
        //     }
        //     &outline {
        //         background-color: transparent;
        //         box-shadow: inset 0 0 0 1px color(borderColorQuaternary);
        //         color: color(color);
        //         .ui.icon {
        //             .icon-use-path { fill: color(color); }
        //         }
        //     }
        //     &primary {
        //         background-color: transparent;
        //         box-shadow: inset 0 0 0 1px color(backgroundColorButton);
        //         color: color(backgroundColorButton);
        //         .ui.icon {
        //             .icon-use-path { fill: color(backgroundColorButton); }
        //         }
        //     }
        //     &secondary {
        //         background-color: transparent;
        //         box-shadow: inset 0 0 0 1px color(backgroundColorButtonSecondary);
        //         color: color(backgroundColorButtonSecondary);
        //         .ui.icon {
        //             .icon-use-path { fill: color(backgroundColorButtonSecondary); }
        //         }
        //     }
        //     &success {
        //         background-color: transparent;
        //         box-shadow: inset 0 0 0 1px color(backgroundColorButtonSuccess);
        //         color: color(colorSuccess);
        //         .ui.icon {
        //             .icon-use-path { fill: color(colorSuccess); }
        //         }
        //     }
        //     &warning {
        //         background-color: transparent;
        //         box-shadow: inset 0 0 0 1px color(backgroundColorWarning);
        //         color: color(colorWarning);
        //         .ui.icon {
        //             .icon-use-path { fill: color(colorWarning); }
        //         }
        //     }
        // }
        // &.button-inverse.button-color- {
        //     &outline, &transparent {
        //         color: color(colorInverse);
        //     }
        //     &alert { background-color: color(backgroundColorButtonAlert); }
        //     &alternate { background-color: color(backgroundColorButtonAlternate); }
        //     &disable { background-color: color(backgroundColorButtonDisable); cursor: default;  }
        //     &light { background-color: color(backgroundColorLight); color: color(color); }
        //     &outline {
        //         background-color: rgba(255, 255, 255, .30);
        //         box-shadow: inset 0 0 0 1px color(borderColorSecondary);
        //         > .ui.icon {
        //             .icon-use-path { fill: color(color); }
        //         }
        //     }
        //     &primary { background-color: color(backgroundColorButton); }
        //     &success { background-color: color(backgroundColorButtonSuccess); }
        //     &secondary { background-color: color(backgroundColorButtonSecondary); }
        //     &transparent {
        //         background-color: transparent;
        //     }
        //     &warning { background-color: color(backgroundColorWarning); }
        // }
        // &.button-icon {
        //     height: $buttonSize;
        //     padding: 0;
        //     width: $buttonSize;
        //     .button-inner-container {
        //         align-items: center;
        //         display: inline-flex;
        //         height: $buttonSize;
        //         justify-content: center;
        //         width: $buttonSize;
        //         .ui.icon { float: none; font-size: 16px; }
        //     }
        // }
        //     .button-inner-container span + .ui.icon { margin: 0 0 0 11px; }
        //     .ui.icon:only-child { margin: 0; }
        // &.button-fluid { width: 100%; }
        // &.button-compact { padding-left: rem(11px); padding-right: rem(11px); }
        // &.button-relax { padding-left: rem(33px); padding-right: rem(33px); }
        // &.button-fixed-width { padding-left: 0; padding-right: 0; }
        // &:last-child { margin-right: 0; }
    };
};

class Button extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            disabled: prevDisabled,
        } = prevProps;
        const {
            disabled: nextDisabled,
        } = this.props;

        if (prevDisabled !== nextDisabled && nextDisabled) {
            // eslint-disable-next-line no-console
            console.warn('Button (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }
    }

    onClick(event) {
        const { onClick } = this.props;

        if (_.isFunction(onClick)) {
            onClick(event);
        }
    }

    render() {
        const {
            as,
            children,
            classes,
            className,
            color,
            compact,
            disable: disableProp,
            disabled,
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
        } = this.props;
        const disable = disableProp || disabled;
        const ElementType = utils.getElementType(as, this.props);
        const containerClasses = ClassNames('ui', 'button', className, {
            'button-inverse': inverse,
            'button-color-alert': !disable && color === 'alert',
            'button-color-alternate': !disable && color === 'alternate',
            'button-color-disable': disable || color === 'disable',
            'button-color-inverse': !disable && color === 'inverse',
            'button-color-light': !disable && color === 'light',
            'button-color-outline': !disable && color === 'outline',
            'button-color-primary': !disable && (!color || color === 'primary'),
            'button-color-secondary': !disable && color === 'secondary',
            'button-color-success': !disable && color === 'success',
            'button-color-transparent': !disable && color === 'transparent',
            'button-color-warning': !disable && color === 'warning',
            'button-compact': compact,
            'button-fluid': fluid,
            'button-icon': icon,
            'button-fixed-width': width,
            'button-outlined': outlined,
            'button-relax': relax,
        });

        return (
            <ElementType
                className={containerClasses}
                disabled={disable}
                id={id}
                href={href}
                onClick={this.onClick}
                style={{
                    width: _.isNumber(width) ? `${width}px` : width,
                    ...style,
                }}
                target={target}
                title={title}
            >
                <span
                    className="button-inner-container"
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
