import {
    isFunction,
} from 'lodash';
import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import {
    BEM_CHECKBOX,
    ENTER_KEY_CODE,
    UI_CLASS_NAME,
} from '../../global/constants';
import Icon from '../../dataDisplay/icon';
import withStyles from '../../styles/withStyles';

const propTypes = {
    align: PropTypes.oneOf(['right']),
    checked: PropTypes.bool,
    classes: PropTypes.shape({
        root: PropTypes.string,
    }).isRequired,
    className: PropTypes.string,
    /**
     * A Checkbox can be disabled.
     */
    disable: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    inverse: PropTypes.bool,
    label: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    labelClassName: PropTypes.string,
    labelClick: PropTypes.bool,
    labelStyle: PropTypes.shape({}),
    labelWeight: PropTypes.oneOf(['bold', 'normal', 'semibold']),
    name: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.oneOf(['small', 'large']),
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
    toggle: PropTypes.bool,
    total: PropTypes.number,
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    align: null,
    checked: false,
    className: null,
    disable: false,
    fluid: false,
    id: null,
    inverse: null,
    label: null,
    labelClassName: null,
    labelClick: null,
    labelStyle: null,
    labelWeight: null,
    name: null,
    onChange: null,
    size: null,
    style: null,
    tabIndex: -1,
    toggle: null,
    total: -1,
    value: null,
};

const styles = (theme) => {
    const size = 22;
    const sizeSmall = 18;
    const sizeToggle = 52;
    const paddingLabelToggle = 63;

    return {
        alignRight: {},
        innerContainer: {
            color: theme.palette.text.primary,
            cursor: 'pointer',
            display: 'block',
            position: 'relative',
            '& > .checkbox-label-text': {
                display: 'inline-block',
                fontSize: theme.typography.fontSize,
                paddingLeft: 33,
                paddingTop: 2,
                '&-weight-bold': {
                    fontWeight: theme.typography.fontWeightBold,
                },
                '&-weight-normal': {
                    fontWeight: theme.typography.fontWeightRegular,
                },
                '&-weight-semibold': {
                    fontWeight: theme.typography.fontWeightMedium,
                },
            },
            '&::before, & .ui.icon-check': {
                position: 'absolute',
                transition: [
                    ['background', '150ms', 'ease'],
                    ['border', '150ms', 'ease'],
                    ['opacity', '150ms', 'ease'],
                ],
            },
            '&::before': { // faux input
                background: theme.palette.background.main,
                border: `1px solid ${theme.palette.border.primary}`,
                borderRadius: 3,
                content: '""',
                height: size,
                left: 0,
                top: 0,
                width: size,
            },
            '& .ui.icon-check': {
                left: 6,
                opacity: 0,
                top: 6,
            },
            '&.label-not-clickable': {
                cursor: 'auto',
                '&::before, &.ui.icon-check': {
                    cursor: 'pointer',
                },
            },
        },
        isDisabled: {},
        isFluid: {},
        isInversed: {},
        isSmall: {},
        isToggle: {},
        root: {
            display: 'inline-block',
            marginRight: 22,
            minHeight: size,
            outline: 'none',
            position: 'relative',
            textAlign: 'left',
            '&:focus $innerContainer::before': {
                boxShadow: `0 0 0 1px ${theme.palette.active.main}`,
            },
            '& .input': {
                display: 'none',
            },
            '&$isSmall': {
                minHeight: sizeSmall,
                '& label': {
                    fontSize: '12px',
                    '& > .checkbox-label-text': {
                        fontSize: '12px',
                        paddingTop: 1,
                    },
                    '&::before': {
                        height: sizeSmall,
                        width: sizeSmall,
                    },
                    '& .ui.icon-check': { // check
                        left: 5,
                        top: 5,
                    },
                },
            },
            '& .input:checked + label': {
                '&::before': {
                    backgroundColor: theme.palette.active.main,
                    border: `1px solid ${theme.palette.active.main}`,
                },
                '& .ui.icon-check': {
                    opacity: 1,
                },
            },
            '&$alignRight': {
                textAlign: 'right',
                '& label': {
                    '& > span': {
                        paddingLeft: 0,
                        paddingRight: 33,
                    },
                    '&::before': {
                        left: 'auto',
                        right: 0,
                    },
                    '& .ui.icon-check': {
                        left: 'auto',
                        right: 6,
                    },
                },
            },
            '&$isDisabled .input': {
                '& + label, &:checked + label': {
                    cursor: 'auto',
                    '&::before': {
                        backgroundColor: theme.palette.background.secondary,
                        border: `1px solid ${theme.palette.border.primary}`,
                    },
                },
                '&:checked + label .ui.icon-check': {
                    opacity: 1,
                },
            },
            '&$isFluid': {
                display: 'block',
                marginRight: 0,
            },
            '&isInversed label': {
                color: theme.palette.text.contrastText,
            },
            '&$isToggle': {
                '& label': {
                    '& > span': {
                        paddingLeft: paddingLabelToggle,
                    },
                    '&::before': {
                        borderRadius: 11,
                        display: 'block',
                        height: size,
                        width: sizeToggle,
                        zIndex: 1,
                    },
                    '&::after': {
                        backgroundColor: theme.palette.secondary.main,
                        border: 0,
                        borderRadius: 12.5,
                        boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.30)',
                        content: '""',
                        height: 25,
                        left: 0,
                        opacity: 1,
                        position: 'absolute',
                        top: -1.5,
                        transition: [
                            ['background-color', '300ms', 'ease'],
                            ['left', '300ms', 'ease'],
                            ['right', '300ms', 'ease'],
                        ],
                        width: 25,
                        zIndex: 3,
                    },
                    '& .checkbox-toggle-text': {
                        alignItems: 'center',
                        display: 'inline-flex',
                        fontSize: '12px',
                        fontWeight: theme.typography.fontWeightMedium,
                        height: size,
                        justifyContent: 'center',
                        left: 0,
                        letterSpacing: '.4px',
                        padding: '0 7px 0 8px',
                        position: 'absolute',
                        textAlign: 'left',
                        top: 0,
                        width: sizeToggle,
                        zIndex: 2,
                    },
                    '& .checkbox-toggle-text-on, & .checkbox-toggle-text-off': {
                        flex: '1 0 auto',
                    },
                    '& .checkbox-toggle-text-on': {
                        color: theme.palette.text.contrastText,
                    },
                    '& .checkbox-toggle-text-off': {
                        textAlign: 'right',
                    },
                },
                '& .input:checked +': {
                    '& label::after': {
                        left: 27,
                    },
                },
                '&$alignRight': {
                    '& label': {
                        '& > span': {
                            paddingLeft: 0,
                            paddingRight: paddingLabelToggle,
                        },
                        '& .checkbox-toggle-text': {
                            left: 'auto',
                            right: 0,
                            textAlign: 'left',
                        },
                        '&::after': {
                            left: 'auto',
                            right: 27,
                        },
                    },
                    '& .input:checked + label::after': {
                        left: 'auto',
                        right: 0,
                    },
                },
            },
        },
    };
};

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked || false };

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onLabelClick = this.onLabelClick.bind(this);
        this.onLabelKeyDown = this.onLabelKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        const { checked } = this.props;

        if (checked && this.inputRef.current) {
            // isChecked is already set by the props.checked in the constructor.
            // eslint-disable-next-line no-underscore-dangle
            this.inputRef.current.checked = checked;
        }
    }

    componentDidUpdate(prevProps) {
        const {
            checked,
            onChange,
        } = this.props;

        if (isFunction(onChange) && prevProps.checked !== checked) {
            this.setState({
                isChecked: checked,
            }, () => {
                // eslint-disable-next-line no-underscore-dangle
                this.inputRef.current.checked = checked;
            });
        }
    }

    onClick(event) {
        this.setChecked(event);
    }

    onKeyDown(event) {
        if (event.keyCode === ENTER_KEY_CODE) {
            this.setChecked(event);
        }
    }

    onLabelClick(event) {
        const { labelClick } = this.props;

        if (isFunction(labelClick) && labelClick === false) {
            event.stopPropagation();
        }
    }

    onLabelKeyDown() {
        /**
         * NOTE: Need to use a prop function here someday
         */
    }

    onMouseDown(event) {
        event.preventDefault();
    }

    setChecked(event) {
        const {
            disable,
            id,
            onChange,
        } = this.props;

        const {
            isChecked,
        } = this.state;

        if (!disable) {
            if (isFunction(onChange)) {
                onChange(id, !isChecked, event);
            } else {
                this.setState({
                    isChecked: !isChecked,
                }, () => {
                    // eslint-disable-next-line no-underscore-dangle
                    this.inputRef.current.checked = !isChecked;
                });
            }
        } else {
            event.stopPropagation();
        }
    }

    render() {
        const {
            align,
            classes,
            className,
            disable: isDisabled,
            fluid: isFluid,
            id,
            inverse: isInverse,
            label,
            labelClassName,
            labelClick,
            labelStyle,
            labelWeight,
            name,
            size,
            style,
            tabIndex,
            toggle: isToggle,
            total,
            value,
        } = this.props;

        const { isChecked } = this.state;
        const newValue = value || '';
        const isSmall = size === 'small';

        const rootClasses = ClassNames(
            UI_CLASS_NAME,
            BEM_CHECKBOX,
            classes.root,
            className,
            {
                [classes.alignRight]: align === 'right',
                [classes.isDisabled]: isDisabled,
                [classes.isFluid]: isFluid,
                [classes.isInverse]: isInverse,
                [classes.isSmall]: isSmall,
                [classes.isToggle]: isToggle,
            },
        );

        const labelClasses = ClassNames(
            classes.innerContainer,
            {
                [classes.labelNotClickable]: isFunction(labelClick) && labelClick === false,
            },
        );

        const labelTextClasses = ClassNames('checkbox-label-text', labelClassName, {
            'checkbox-label-text-weight-bold': labelWeight === 'bold',
            'checkbox-label-text-weight-normal': !labelWeight || labelWeight === 'normal',
            'checkbox-label-text-weight-semibold': labelWeight === 'semibold',
        });

        const iconCheckSize = isSmall ? 8 : 10;
        const inputId = id ? `${id}_hidden_input` : null;

        return (
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <div
                className={rootClasses}
                id={id}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                onMouseDown={this.onMouseDown}
                style={style}
                tabIndex={tabIndex}
            >
                <input
                    checked={isChecked}
                    className="input"
                    disabled={isDisabled}
                    id={inputId}
                    name={name}
                    readOnly
                    // eslint-disable-next-line no-underscore-dangle
                    ref={this.inputRef}
                    type="checkbox"
                    value={newValue}
                />

                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <div
                    className={labelClasses}
                >
                    {label && (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <div
                            className={labelTextClasses}
                            onClick={this.onLabelClick}
                            onKeyDown={this.onLabelKeyDown}
                            style={labelStyle}
                        >
                            {label}

                            {total >= 0 && Number(total).toLocaleString()}
                        </div>
                    )}

                    {isToggle ? (
                        <div className="checkbox-toggle-text">
                            <span className="checkbox-toggle-text-on">On</span>
                            <span className="checkbox-toggle-text-off">Off</span>
                        </div>
                    ) : null}

                    <Icon
                        color={isDisabled ? 'static' : 'primary'}
                        compact
                        inverse
                        size={iconCheckSize}
                        type="check"
                    />
                </div>
            </div>
        );
    }
}

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default withStyles(styles)(Checkbox);
