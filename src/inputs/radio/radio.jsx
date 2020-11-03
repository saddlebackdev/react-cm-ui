/* eslint-disable linebreak-style */
import {
    clone,
    includes,
    isArray,
    isEqual,
    isFunction,
    remove,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    ENTER_KEY_CODE,
    BEM_RADIO,
} from '../../global/constants';
import RadioItem from './radioItem';
import withStyles from '../../styles/withStyles';

const propTypes = {
    /**
     * Aligns the label\'s definition to the left or right.
     */
    align: PropTypes.oneOf(['left', 'right']),
    /**
     * Indicates whether a radio input is checked or not.
     */
    checked: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    /**
     * children
     */
    children: PropTypes.node,
    /**
     * classes
     */
    classes: PropTypes.shape({
        input: PropTypes.string,
        isAlignedRight: PropTypes.string,
        isChecked: PropTypes.string,
        isDisabled: PropTypes.string,
        isFluid: PropTypes.string,
        isPill: PropTypes.string,
        label: PropTypes.string,
        labelNotClickable: PropTypes.string,
        root: PropTypes.string,
    }),
    /**
     * Additional classes.
     */
    className: PropTypes.string,
    /**
     * A Radio can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    /**
     * A radio input can take on the size of its container.
     */
    fluid: PropTypes.bool,
    /**
     * Give a radio input an id.
     */
    id: PropTypes.string,
    /**
     * Optional label to display with the radio input.
     */
    label: PropTypes.string,
    /**
     * Disable the label\'s definition onClick handler.
     */
    labelClick: PropTypes.bool,
    /**
     * Force the radio button group to work in a multi checkbox mode.
     */
    multi: PropTypes.bool,
    /**
     * Radio input\'s name.
     */
    name: PropTypes.string,
    /**
     * Can handle an onChange event from parent.
     */
    onChange: PropTypes.func,
    /**
     * onKeyDown
     */
    onKeyDown: PropTypes.func,
    /**
     * Group radio buttons together in a pill container.
     */
    pill: PropTypes.bool,
    /**
     * Supply any inline styles to the radio input\'s container. Mainly used for padding and margins.
     */
    style: PropTypes.shape({}),
    /**
     * tabIndex
     */
    tabIndex: PropTypes.number,
    /**
     * Radio input\'s value.
     */
    value: PropTypes.string,
};

const defaultProps = {
    align: null,
    checked: null,
    children: null,
    classes: null,
    className: null,
    disable: false,
    disabled: false,
    fluid: false,
    id: null,
    label: null,
    labelClick: true,
    multi: false,
    name: null,
    onChange: null,
    onKeyDown: null,
    pill: false,
    style: null,
    tabIndex: -1,
    value: '',
};

const isCheckedSingle = (id, index, isChecked) => (id === isChecked || index === isChecked);

const isCheckedMulti = (id, index, isChecked) => {
    const newId = id || index;

    return includes(isChecked, newId);
};

const styles = (theme) => {
    const size = 22;
    const sizeDot = 14;

    const inputStyle = {
        display: 'none',
        '&:checked +': {
            '& $label::after': {
                opacity: 1,
            },
        },
    };

    return {
        isAlignedRight: {},
        isDisabled: {},
        isFluid: {},
        isPill: {},
        input: {
            ...inputStyle,
        },
        label: {},
        labelNotClickable: {},
        root: {
            display: 'inline-block',
            marginRight: theme.spacing(2),
            minHeight: size,
            outline: 'none',
            position: 'relative',
            textAlign: 'left',
            '&:focus': {
                boxShadow: `0 0 0 1px ${theme.palette.active.primary}`,
            },
            '& .label': {
                color: theme.palette.text.primary,
                cursor: 'pointer',
                display: 'block',
                fontSize: 16,
                position: 'relative',
                '&::before, &::after': {
                    content: '""',
                    height: size,
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    transition: 'opacity 150ms ease',
                    width: size,
                },
                '&::before': {
                    background: theme.palette.background.primary,
                    border: `1px solid ${theme.palette.border.primary}`,
                    borderRadius: 11,
                },
                '&::after': {
                    backgroundColor: theme.palette.cyan[500],
                    borderRadius: sizeDot / 2,
                    height: sizeDot,
                    margin: (size - sizeDot) / 2,
                    opacity: 0,
                    width: sizeDot,
                },
                '&$labelNotClickable': {
                    cursor: 'auto',
                    '&::before, &::after': {
                        cursor: 'pointer',
                    },
                },
                '& > span': {
                    display: 'inline-block',
                    paddingLeft: 33,
                    paddingTop: 2,
                },
            },
            '&$isAlignedRight': {
                marginLeft: 11,
                marginRight: 0,
                textAlign: 'left',
                '& .label': {
                    '&::before, &::after': {
                        left: 'auto',
                        right: 0,
                    },
                    '& > span': {
                        paddingLeft: 0,
                        paddingRight: 33,
                    },
                },
            },
            '&$isDisabled': {
                '& .radio-item .label': {
                    cursor: 'auto',
                    '&::before': {
                        background: theme.palette.background.secondary,
                    },
                    '&::after': {
                        backgroundColor: theme.palette.grey[400],
                    },
                },
                '& .label': {
                    cursor: 'auto',
                    color: theme.palette.text.secondary,
                    '&::before': {
                        background: theme.palette.background.secondary,
                    },
                    '&::after': {
                        backgroundColor: theme.palette.grey[400],
                    },
                },
                '&$isPill': {
                    '& .radio-item': {
                        '& .label': {
                            cursor: 'default',
                        },
                        '& .input:checked + .label': {
                            backgroundColor: theme.palette.grey[400],
                            borderColor: theme.palette.grey[400],
                        },
                        '&:last-child': {
                            input: {
                                '&:checked + .label': {
                                    borderRight: `1px solid ${theme.palette.grey[400]}`,
                                },
                            },
                        },
                        '&.radio-item-is-checked + .radio-item .label': {
                            borderLeft: `1px solid ${theme.palette.grey[400]}`,
                        },
                    },
                },
            },
            '&$isFluid': {
                display: 'block',
                marginRight: 0,
            },
            '&$isPill': {
                '& .radio-item': {
                    cursor: 'pointer',
                    display: 'inline-block',
                    outline: 'none',
                    '&:focus': {
                        boxShadow: `0 0 0 1px ${theme.palette.active.primary}`,
                    },
                    '&:first-child:focus': {
                        borderRadius: '16px 0 0 16px',
                    },
                    '&:last-child:focus': {
                        borderRadius: '0 16px 16px 0',
                    },
                    '& .input': {
                        ...inputStyle,
                    },
                    '& .label': {
                        backgroundColor: theme.palette.background.primary,
                        border: `1px solid ${theme.palette.border.primary}`,
                        borderRight: 0,
                        display: 'inline-block',
                        fontSize: 14,
                        fontWeight: theme.typography.fontWeightRegular,
                        outline: 'none',
                        padding: '6px 22px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        transition: [
                            [
                                'background-color',
                                '125ms',
                                'linear',
                            ],
                            [
                                'border',
                                '125ms',
                                'linear',
                            ],
                            [
                                'color',
                                '125ms',
                                'linear',
                            ],
                        ],
                        whiteSpace: 'nowrap',
                        zIndex: -1,
                        '&::before, &::after': {
                            display: 'none',
                        },
                    },
                    '& .input:checked + .label': {
                        backgroundColor: theme.palette.cyan[500],
                        borderColor: theme.palette.cyan[500],
                        color: theme.palette.text.contrastText,
                    },
                    '&:first-child .label': {
                        borderRadius: '15.5px 0 0 15.5px',
                    },
                    '&:last-child': {
                        '& .label': {
                            borderRight: `1px solid ${theme.palette.border.primary}`,
                            borderRadius: '0 15.5px 15.5px 0',
                        },
                        '& .input:checked + .label': {
                            borderRight: `1px solid ${theme.palette.cyan[500]}`,
                        },
                    },
                    '&.radio-item-is-checked + .radio-item .label': {
                        borderLeft: `1px solid ${theme.palette.cyan[500]}`,
                    },
                },
            },
        },
    };
};

class Radio extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isChecked: props.checked };

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onLabelClick = this.onLabelClick.bind(this);
        this.onLabelKeyDown = this.onLabelKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            checked: prevChecked,
            disabled: prevDisabled,
        } = prevProps;

        const {
            checked,
            disabled,
        } = this.props;

        if (!isEqual(checked, prevChecked)) {
            this.setState({ isChecked: checked });
        }

        if (prevDisabled !== disabled && disabled) {
            // eslint-disable-next-line no-console
            console.warn('Radio (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }
    }

    onClick(idArg, customValue) {
        const {
            disable,
            disabled,
            id,
            onChange,
            pill,
        } = this.props;

        const newValue = this.setIsChecked(idArg);
        const isNotDisabled = !disable && !disabled;

        if (isNotDisabled) {
            if (isFunction(onChange)) {
                onChange(pill ? idArg : id, newValue, customValue);
            } else {
                this.setState({ isChecked: newValue });
            }
        }
    }

    onKeyDown(event, idArg) {
        const {
            disable,
            disabled,
            id,
            onKeyDown,
            pill,
        } = this.props;

        if (event.keyCode === ENTER_KEY_CODE) {
            const newValue = this.setIsChecked(idArg);
            const isNotDisabled = !disable && !disabled;

            if (!isNotDisabled) {
                if (isFunction(onKeyDown)) {
                    onKeyDown(pill ? idArg : id, newValue);
                } else {
                    this.setState({ isChecked: newValue });
                }
            }
        }
    }

    onLabelClick(event) {
        const { labelClick } = this.props;

        if (labelClick === false) {
            event.stopPropagation();
        }
    }

    onLabelKeyDown() {
        /**
         * NOTE: Need to use a prop function here someday.
         */

        return null;
    }

    onMouseDown(event) {
        event.preventDefault();
    }

    setIsChecked(idArg) {
        const {
            pill,
            multi,
        } = this.props;

        const {
            isChecked,
        } = this.state;

        let newValue = clone(isChecked);

        if (multi) {
            if (includes(newValue, idArg)) {
                remove(newValue, (v) => v === idArg);
            } else if (isArray(newValue)) {
                newValue.push(idArg);
            } else {
                newValue = [idArg];
            }
        } else if (pill) {
            newValue = idArg;
        } else {
            newValue = true;
        }

        return newValue;
    }

    render() {
        const {
            align,
            children,
            classes,
            className,
            disable,
            disabled,
            fluid,
            id,
            label,
            labelClick,
            multi,
            name,
            pill,
            style,
            tabIndex,
            value,
        } = this.props;

        const { isChecked } = this.state;
        const isDisabled = disable || disabled;

        const rootClasses = ClassNames(
            'ui',
            BEM_RADIO,
            classes.root,
            className,
            {
                [classes.isAlignedRight]: align === 'right',
                'radio-align-right': align === 'right',
                [classes.isDisabled]: isDisabled,
                'radio-disabled': isDisabled,
                [classes.isFluid]: fluid,
                'radio-full-width': fluid,
                [classes.isChecked]: !pill && isChecked,
                'radio-is-checked': !pill && isChecked,
                [classes.isPill]: pill,
                'radio-pill': pill,
            },
        );

        if (pill) {
            const isCheckedItem = multi ? isCheckedMulti : isCheckedSingle;

            return (
                <div
                    className={rootClasses}
                    style={style}
                >
                    {React.Children.map(children, (child, index) => React.cloneElement(child, {
                        checked: isCheckedItem(child.props.id, index, isChecked),
                        className: child.props.className,
                        id: child.props.id,
                        index,
                        label: child.props.label,
                        name: !multi ? name : null,
                        onClick: this.onClick,
                        onKeyDown: this.onKeyDown,
                        style: child.props.style,
                        tabIndex: child.props.tabIndex,
                        ...(isDisabled && {
                            disable: isDisabled,
                        }),
                    }))}
                </div>
            );
        }

        return (
            <div
                aria-checked={isChecked}
                aria-labelledby={id}
                className={rootClasses}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                onMouseDown={this.onMouseDown}
                role="radio"
                style={style}
                tabIndex={isDisabled ? -1 : tabIndex}
            >
                <input
                    checked={isChecked}
                    className={ClassNames(
                        'input',
                        classes.input,
                    )}
                    disabled={isDisabled}
                    id={id}
                    name={name}
                    readOnly
                    type="radio"
                    value={value}
                />

                {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                <label
                    className={ClassNames(
                        'label',
                        classes.label,
                        {
                            [classes.labelNotClickable]: !labelClick,
                            'label-not-clickable': labelClick === false,
                        },
                    )}
                >
                    {label && (
                        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                        <span
                            onClick={this.onLabelClick}
                            onKeyDown={this.onLabelKeyDown}
                        >
                            {label}
                        </span>
                    )}
                </label>
            </div>
        );
    }
}

Radio.Item = RadioItem;

Radio.propTypes = propTypes;
Radio.defaultProps = defaultProps;

export default withStyles(styles)(Radio);
