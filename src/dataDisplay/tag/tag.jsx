import { isFunction } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../icon';
import Utils from '../../utils/utils';
import withStyles from '../../styles/withStyles';
import {
    UI_CLASS_NAME,
} from '../../global/constants';

const propTypes = {
    children: PropTypes.string,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    className: PropTypes.string,
    color: PropTypes.oneOf(Utils.colorEnums()),
    fluid: PropTypes.bool,
    inverse: PropTypes.bool,
    onClearClick: PropTypes.func,
    onClearKeyDown: PropTypes.func,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
};

const defaultProps = {
    children: null,
    classes: null,
    className: null,
    color: null,
    fluid: false,
    inverse: false,
    onClearClick: null,
    onClearKeyDown: null,
    onClick: null,
    onKeyDown: null,
    style: null,
    tabIndex: -1,
};

const styles = ({
    palette,
    shape,
    spacing,
    typography,
}) => ({
    root: {
        alignItems: 'center',
        backgroundColor: palette.background.light,
        boxShadow: `inset 0 0 0 1px ${palette.border.primary}`,
        borderRadius: shape.borderRadius.main,
        color: palette.text.primary,
        display: 'inline-flex',
        fontSize: typography.pxToRem(14),
        fontWeight: typography.fontWeightRegular,
        height: 30,
        justifyContent: 'flex-start',
        letterSpacing: 1,
        lineHeight: 1,
        marginRight: spacing(1),
        outline: 'none',
        overflow: 'hidden',
        padding: [[0, spacing(1)]],
        textAlign: 'left',
        textDecoration: 'none',
        textTransform: 'capitalize',
        transition: 'background-color 125ms linear, color 125ms linear, opacity 250ms ease-out',
        whiteSpace: 'normal',
        '&.label-color-': {
            '&alert, &highlight, &success, &warning': {
                boxShadow: 'none',
                color: palette.border.contrastPrimary,
                fontWeight: typography.fontWeightMedium,
            },
            '&alert': {
                backgroundColor: palette.error.main,
            },
            '&highlight': {
                backgroundColor: palette.active.main,
            },
            '&primary': {
                backgroundColor: palette.background.light,
                boxShadow: `inset 0 0 0 1px ${palette.border.primary}`,
            },
            '&success': {
                backgroundColor: palette.success.main,
            },
            '&transparent': {
                backgroundColor: 'transparent',
                boxShadow: 'none',
            },
            '&warning': {
                backgroundColor: palette.warning.main,
            },
        },
        '&.label-inverse.label-color-': {
            '&alert, &highlight, &success, &warning': {
                boxShadow: 'none',
                color: palette.border.contrastPrimary,
                fontWeight: typography.fontWeightMedium,
            },
            '&alert': {
                backgroundColor: palette.error.main,
            },
            '&highlight': {
                backgroundColor: palette.active.main,
            },
            '&primary': {
                backgroundColor: palette.background.light,
                boxShadow: `inset 0 0 0 1px ${palette.border.primary}`,
            },
            '&success': {
                backgroundColor: palette.success.main,
            },
            '&transparent': {
                backgroundColor: 'transparent',
                color: palette.border.contrastPrimary,
                fontWeight: typography.fontWeightMedium,
            },
            '&warning': {
                backgroundColor: palette.warning.main,
            },
        },
        '&.label-clearable': {
            paddingRight: 0,
            '& .label-clearable-button': {
                alignItems: 'center',
                backgroundColor: palette.grey[400],
                borderRadius: [[0, shape.borderRadius.main, shape.borderRadius.main, 0]],
                boxShadow: `inset 1px 0 0 ${palette.grey[400]}`,
                color: palette.border.contrastPrimary,
                cursor: 'pointer',
                display: 'inline-flex',
                height: 30,
                justifyContent: 'center',
                margin: [[0, 0, 0, spacing(1)]],
                transition: [[
                    'background-color 150ms linear',
                    'box-shadow 150ms linear',
                    'color 75ms linear',
                ]],
                width: 20,
                '& .ui.icon': {
                    color: 'inherit',
                },
                '&:hover': {
                    backgroundColor: 'transparent',
                    boxShadow: `inset 1px 0 0 ${palette.border.primary}`,
                    color: palette.text.secondary,
                },
            },
            '&.label-color-': {
                '&alert, &highlight, &success, &warning': {
                    '& .label-clearable-button': {
                        boxShadow: 'none',
                        '&:hover': {
                            backgroundColor: 'transparent',
                            color: palette.border.contrastPrimary,
                        },
                    },
                },
                '&alert .label-clearable-button': {
                    backgroundColor: palette.error.dark,
                    '&:hover': {
                        boxShadow: `inset 1px 0 0 ${palette.error.dark}`,
                    },
                },
                '&highlight .label-clearable-button': {
                    backgroundColor: palette.active.main,
                    boxShadow: `inset 1px 0 0 ${palette.primary.main}`,
                    '&:hover': {
                        backgroundColor: palette.primary.main,
                    },
                },
                '&primary .label-clearable-button': {
                    backgroundColor: palette.grey[400],
                    boxShadow: `inset 1px 0 0 ${palette.grey[400]}`,
                    '&:hover': {
                        backgroundColor: 'transparent',
                        boxShadow: `inset 1px 0 0 ${palette.border.primary}`,
                        color: palette.text.secondary,
                    },
                },
                '&success .label-clearable-button': {
                    backgroundColor: palette.success.main,
                    boxShadow: `inset 1px 0 0 ${palette.success.dark}`,
                    '&:hover': {
                        backgroundColor: palette.success.dark,
                    },
                },
                '&transparent .label-clearable-button': {
                    backgroundColor: 'transparent',
                    boxShadow: 'none',
                    color: palette.text.secondary,
                },
                '&warning .label-clearable-button': {
                    backgroundColor: palette.warning.dark,
                    '&:hover': {
                        boxShadow: `inset 1px 0 0 ${palette.warning.dark}`,
                    },
                },
            },
        },
        '&.label-clickable': {
            cursor: 'pointer',
        },
        '&.label-fluid': {
            width: '100%',
        },
        '& .label-inner-container': {
            width: '100%',
        },
    },
});

class Label extends React.Component {
    constructor() {
        super();

        this.onClearClick = this.onClearClick.bind(this);
        this.onClearKeyDown = this.onClearKeyDown.bind(this);
        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClearClick() {
        const {
            onClearClick,
        } = this.props;

        if (isFunction(onClearClick)) {
            onClearClick();
        }
    }

    onClearKeyDown() {
        const {
            onClearKeyDown,
        } = this.props;

        if (isFunction(onClearKeyDown)) {
            onClearKeyDown();
        }
    }

    onClick() {
        const {
            onClick,
        } = this.props;

        if (isFunction(onClick)) {
            onClick();
        }
    }

    onKeyDown() {
        const {
            onKeyDown,
        } = this.props;

        if (isFunction(onKeyDown)) {
            onKeyDown();
        }
    }

    render() {
        const {
            children,
            classes,
            className,
            color,
            fluid,
            inverse,
            onClick,
            onClearClick,
            style,
            tabIndex,
        } = this.props;

        const rootClasses = ClassNames(
            UI_CLASS_NAME,
            'label',
            classes.root,
            className,
            {
                'label-clickable': onClick,
                'label-color-alert': color === 'alert',
                'label-color-highlight': color === 'highlight',
                'label-color-primary': color === 'primary',
                'label-color-success': color === 'success',
                'label-color-transparent': color === 'transparent',
                'label-color-warning': color === 'warning',
                'label-fluid': fluid,
                'label-inverse': inverse,
                'label-clearable': onClearClick,
            },
        );

        return (
            <div
                className={rootClasses}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                role="button"
                style={style}
                tabIndex={tabIndex}
            >
                <span className="label-inner-container">
                    {children}

                    {onClearClick && (
                        <span
                            className="label-clearable-button"
                            onClick={this.onClearClick}
                            onKeyDown={this.onClearKeyDown}
                            role="button"
                            tabIndex={-1}
                        >
                            <Icon
                                compact
                                inverse
                                size="xxsmall"
                                type="times"
                            />
                        </span>
                    )}
                </span>
            </div>
        );
    }
}

Label.propTypes = propTypes;
Label.defaultProps = defaultProps;

export default withStyles(styles)(Label);
