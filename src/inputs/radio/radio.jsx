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
import RadioItem from './radioItem';
import withStyles from '../../styles/withStyles';

const propTypes = {
    align: PropTypes.oneOf(['left', 'right']),
    checked: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
    ]),
    children: PropTypes.node,
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
    className: PropTypes.string,
    /**
     * A Radio can be disabled.
     */
    disable: PropTypes.bool,
    /**
     * Deprecated prop. Please use `disable` instead.
     */
    disabled: PropTypes.bool,
    fluid: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    labelClick: PropTypes.bool,
    multi: PropTypes.bool,
    name: PropTypes.string,
    onChange: PropTypes.func,
    pill: PropTypes.bool,
    style: PropTypes.shape({}),
    tabIndex: PropTypes.number,
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
    pill: false,
    style: null,
    tabIndex: -1,
    value: null,
};

const isCheckedSingle = (c, i, isChecked) => (
    c.id ? c.id === isChecked : i === isChecked
);

const isCheckedMulti = (c, i, isChecked) => {
    const id = c.id ? c.id : i;

    return includes(isChecked, id);
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
        label: {
            color: theme.palette.text.primary,
            cursor: 'pointer',
            display: 'block',
            fontSize: 14,
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
        labelNotClickable: {},
        root: {
            display: 'inline-block',
            marginRight: theme.spacing(4),
            minHeight: size,
            position: 'relative',
            textAlign: 'left',
            '&$isAlignedRight': {
                marginLeft: 11,
                marginRight: 0,
                textAlign: 'left',
                '& $label': {
                    '&::before, &::after': {
                        left: 'auto',
                        right: 0,
                    },
                    '& > span': {
                        paddingLeft: 0,
                        paddingRight: 'rem(33px)',
                    },
                },
            },
            '&$isDisabled': {
                '& $label': {
                    cursor: 'auto',
                    '&::before': {
                        background: theme.palette.background.secondary,
                    },
                    '&::after': {
                        backgroundColor: theme.palette.grey[400],
                    },
                },
                radioPill: {
                    '& .radio-item': {
                        '& $label': {
                            cursor: 'default',
                        },
                        '& $input:checked + $label': {
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
                        '&.radio-item-is-checked + .radio-item $label': {
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
                    display: 'inline-block',
                    '& .input': {
                        ...inputStyle,
                    },
                    '& label': {
                        backgroundColor: theme.palette.background.primary,
                        border: `1px solid ${theme.palette.border.primary}`,
                        borderRight: 0,
                        cursor: 'pointer',
                        display: 'inline-block',
                        fontSize: 14,
                        fontWeight: theme.typography.fontWeightRegular,
                        outline: 'none',
                        padding: '6px 22px',
                        textAlign: 'center',
                        textDecoration: 'none',
                        transition: 'background-color 125ms linear, border 125ms linear, color 125ms linear',
                        whiteSpace: 'nowrap',
                        '&::before, &::after': {
                            display: 'none',
                        },
                    },
                    '& .input:checked + label': {
                        backgroundColor: theme.palette.cyan[500],
                        borderColor: theme.palette.cyan[500],
                        color: theme.palette.text.contrastText,
                    },
                    '&:first-child label': {
                        borderRadius: '15.5px 0 0 15.5px',
                    },
                    '&:last-child': {
                        '& label': {
                            borderRight: `1px solid ${theme.palette.border.primary}`,
                            borderRadius: '0 15.5px 15.5px 0',
                        },
                        '& .input:checked + label': {
                            borderRight: `1px solid ${theme.palette.cyan[500]}`,
                        },
                    },
                    '&.radio-item-is-checked + .radio-item label': {
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

    onClick(idArg) {
        const {
            disable,
            disabled,
            id,
            onChange,
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

        if (!disable && !disabled) {
            if (isFunction(onChange)) {
                onChange(pill ? idArg : id, newValue);
            } else {
                this.setState({ isChecked: newValue });
            }
        }
    }

    onKeyDown() {
        /**
         * NOTE: Need to use a prop function here someday.
         */

        return null;
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
            'radio',
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
                <div className={rootClasses} style={style}>
                    {React.Children.map(children, (c, i) => React.cloneElement(c, {
                        index: i,
                        checked: isCheckedItem(c, i, isChecked),
                        name: multi ? null : name,
                        onClick: this.onClick,
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
