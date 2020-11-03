import {
    isFunction,
    noop,
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
    /**
     * Whether to align the checkbox to the right or left of a container.
     */
    align: PropTypes.oneOf(['left', 'right']),
    /**
     * If `true`, the checkbox will be checked.
     */
    checked: PropTypes.bool,
    /**
     * Override or extend the styles applied to Checkbox.
     */
    classes: PropTypes.shape({
        alignRight: PropTypes.string,
        isChecked: PropTypes.string,
        innerContainer: PropTypes.string,
        isDisabled: PropTypes.string,
        isFluid: PropTypes.string,
        isInverse: PropTypes.string,
        isSmall: PropTypes.string,
        label: PropTypes.string,
        labelContainer: PropTypes.string,
        labelNotClickable: PropTypes.string,
        root: PropTypes.string,
        total: PropTypes.string,
    }).isRequired,
    /**
     * Assign additional class names to Checkbox.
     */
    className: PropTypes.string,
    /**
     * If `true`, the Checkbox will be disabled.
     */
    disable: PropTypes.bool,
    /**
     * If `true`, the Checkbox will be resized to its parent container's width.
     */
    fluid: PropTypes.bool,
    /**
     * The `id` of the Checkbox.
     */
    id: PropTypes.string,
    /**
     * If `true`, the Checkbox will be formatted to appear on dark background.
     */
    inverse: PropTypes.bool,
    /**
     * The label for the Checkbox.
     */
    label: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    /**
     * If `true`, the Label will be clickable.
     */
    labelClick: PropTypes.bool,
    /**
     * Name of the form control. Submitted with the form as part of a name/value pair.
     */
    name: PropTypes.string,
    /**
     * Event handler for consumer to change the value of the Checkbox.
     */
    onChange: PropTypes.func,
    /**
     * The size of a Checkbox
     */
    size: PropTypes.oneOf(['small', 'large']),
    /**
     * Indicates whether or not the Checkbox can be focused and where it participates in
     * sequential keyboard navigation.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
     */
    tabIndex: PropTypes.number,
    /**
     * The number (total) to be displayed to the right of the label.
     */
    total: PropTypes.number,
    /**
     * The value to pass to the Checkbox input node.
     */
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    align: 'left',
    checked: false,
    className: null,
    disable: false,
    fluid: false,
    id: null,
    inverse: false,
    label: null,
    labelClick: true,
    name: null,
    onChange: null,
    size: null,
    tabIndex: -1,
    total: -1,
    value: null,
};

const styles = ({
    palette,
    spacing,
    typography,
}) => {
    const size = 22;
    const sizeSmall = 18;

    return {
        alignRight: {
            textAlign: 'right',
            '& $innerContainer': {
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
        innerContainer: {
            color: palette.text.primary,
            cursor: 'pointer',
            display: 'block',
            position: 'relative',
            '& > .checkbox-label-text': {
                '&-weight-bold': {
                    fontWeight: typography.fontWeightBold,
                },
                '&-weight-normal': {
                    fontWeight: typography.fontWeightRegular,
                },
                '&-weight-semibold': {
                    fontWeight: typography.fontWeightMedium,
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
                background: palette.background.main,
                border: `1px solid ${palette.border.primary}`,
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
        isChecked: {},
        isDisabled: {
            '& .input': {
                '& + $innerContainer, &:checked + $innerContainer': {
                    cursor: 'auto !important',
                    '&::before': {
                        backgroundColor: `${palette.background.secondary} !important`,
                        border: `1px solid ${palette.border.primary} !important`,
                    },
                    '& $label, & $total': {
                        color: `${palette.text.secondary} !important`,
                    },
                },
                '&:checked + $innerContainer .ui.icon-check': {
                    opacity: 1,
                },
            },
        },
        isFluid: {},
        isInversed: {
            '& $innerContainer': {
                color: palette.text.contrastText,
            },
        },
        isSmall: {
            minHeight: sizeSmall,
            '& $innerContainer': {
                '&::before': {
                    height: sizeSmall,
                    width: sizeSmall,
                },
                '& $label': {
                    fontSize: typography.pxToRem(12),
                    paddingTop: 1,
                },
                '& .ui.icon-check': { // check
                    left: 5,
                    top: 5,
                },
            },
            '&$isChecked $innerContainer': {
                '& $label, & $total': {
                    fontWeight: typography.fontWeightMedium,
                },
            },
        },
        isToggle: {},
        label: {
            flexGrow: 1,
            fontSize: typography.pxToRem(16),
        },
        labelContainer: {
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'flex-start',
            paddingLeft: 33,
        },
        root: {
            display: 'inline-block',
            minHeight: size,
            outline: 'none',
            position: 'relative',
            textAlign: 'left',
            '&:focus $innerContainer::before': {
                boxShadow: `0 0 0 1px ${palette.active.main}`,
            },
            '& .input': {
                display: 'none',
            },
            '& .input:checked + $innerContainer': {
                '&::before': {
                    backgroundColor: palette.active.main,
                    border: `1px solid ${palette.active.main}`,
                },
                '& .ui.icon-check': {
                    opacity: 1,
                },
            },
            '&$isFluid': {
                display: 'block',
            },
        },
        total: {
            fontSize: typography.pxToRem(14),
            paddingLeft: spacing(1),
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

        if (!labelClick) {
            event.stopPropagation();
        }
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
            labelClick,
            name,
            size,
            tabIndex,
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
                [classes.isChecked]: isChecked,
                [classes.isDisabled]: isDisabled,
                [classes.isFluid]: isFluid,
                [classes.isInverse]: isInverse,
                [classes.isSmall]: isSmall,
            },
        );

        const innerContainerClasses = ClassNames(
            classes.innerContainer,
            {
                [classes.labelNotClickable]: !labelClick,
            },
        );

        const labelContainerClasses = ClassNames(
            `${BEM_CHECKBOX}--label_container`,
            classes.labelContainer,
        );

        const iconCheckSize = isSmall ? 8 : 10;
        const inputId = id ? `${id}_hidden_input` : null;

        return (
            <div
                aria-checked={isChecked}
                className={rootClasses}
                id={id}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                onMouseDown={this.onMouseDown}
                role="checkbox"
                tabIndex={tabIndex}
            >
                <input
                    checked={isChecked}
                    className="input"
                    disabled={isDisabled}
                    id={inputId}
                    name={name}
                    readOnly
                    ref={this.inputRef}
                    type="checkbox"
                    value={newValue}
                />

                <div
                    className={innerContainerClasses}
                >
                    {label && (
                        <div
                            className={labelContainerClasses}
                            onClick={this.onLabelClick}
                            onKeyDown={noop()}
                            role="button"
                            tabIndex={-1}
                        >
                            <div
                                className={ClassNames(
                                    `${BEM_CHECKBOX}--label`,
                                    classes.label,
                                )}
                            >
                                {label}
                            </div>

                            {total >= 0 && (
                                <div
                                    className={ClassNames(
                                        `${BEM_CHECKBOX}--total`,
                                        classes.total,
                                    )}
                                >
                                    {Number(total).toLocaleString()}
                                </div>
                            )}
                        </div>
                    )}

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
