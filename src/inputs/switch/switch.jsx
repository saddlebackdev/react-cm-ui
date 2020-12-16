import {
    isFunction,
    noop,
} from 'lodash';
import React from 'react';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import {
    BEM_SWITCH,
    ENTER_KEY_CODE,
    UI_CLASS_NAME,
} from '../../global/constants';
import Typography from '../../dataDisplay/typography';
import withStyles from '../../styles/withStyles';

const propTypes = {
    /**
     * If `true`, the Switch will be checked.
     */
    checked: PropTypes.bool,
    /**
     * Override or extend the styles applied to Switch.
     */
    classes: PropTypes.shape({
        hasLabel: PropTypes.string,
        innerContainer: PropTypes.string,
        input: PropTypes.string,
        isDisabled: PropTypes.string,
        isSmall: PropTypes.string,
        label: PropTypes.string,
        root: PropTypes.string,
        textContainer: PropTypes.string,
        textOff: PropTypes.string,
        textOn: PropTypes.string,
    }).isRequired,
    /**
     * Assign additional class names to Switch.
     */
    className: PropTypes.string,
    /**
     * If `true`, the Switch will be disabled.
     */
    disable: PropTypes.bool,
    /**
     * The `id` of the Switch.
     */
    id: PropTypes.string,
    /**
     * The label for the Switch.
     */
    label: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    /**
     * Name of the form control. Submitted with the form as part of a name/value pair.
     */
    name: PropTypes.string,
    /**
     * Event handler for consumer to change the value of the Switch.
     */
    onChange: PropTypes.func,
    /**
     * The size of a Switch
     */
    size: PropTypes.oneOf(['small', 'large']),
    /**
     * Indicates whether or not the Switch can be focused and where it participates in
     * sequential keyboard navigation.
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
     */
    tabIndex: PropTypes.number,
    /**
     * The value to pass to the Switch input node.
     */
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

const defaultProps = {
    checked: false,
    className: null,
    disable: false,
    id: null,
    label: null,
    name: null,
    onChange: null,
    size: null,
    tabIndex: -1,
    value: null,
};

const styles = ({
    palette,
    typography,
}) => {
    const largeContainerHeight = 22;
    const largeContainerWidth = 52;
    const largeToggleSize = 25;
    const smallContainerHeight = 16;
    const smallContainerWidth = 40;
    const smallToggleSize = 18;

    return {
        hasLabel: {},
        innerContainer: {
            color: palette.text.primary,
            cursor: 'pointer',
            display: 'block',
            flexBasis: largeContainerWidth,
            height: largeContainerHeight,
            position: 'relative',
            '&::before': { // switch ui container
                background: palette.background.main,
                border: `1px solid ${palette.border.primary}`,
                borderRadius: 11,
                content: '""',
                display: 'block',
                height: largeContainerHeight,
                left: 0,
                position: 'absolute',
                top: 0,
                transition: [
                    ['background', '150ms', 'ease'],
                    ['border', '150ms', 'ease'],
                    ['opacity', '150ms', 'ease'],
                ],
                width: largeContainerWidth,
                zIndex: 1,
            },
            '&::after': { // switch ui toggle
                backgroundColor: palette.secondary.main,
                border: 0,
                borderRadius: 12.5,
                boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.30)',
                content: '""',
                height: largeToggleSize,
                left: 0,
                opacity: 1,
                position: 'absolute',
                top: -1.5,
                transition: [
                    ['background-color', '300ms', 'ease'],
                    ['left', '300ms', 'ease'],
                    ['right', '300ms', 'ease'],
                ],
                width: largeToggleSize,
                zIndex: 3,
            },
        },
        isDisabled: {},
        isSmall: {},
        input: {
            display: 'none',
        },
        label: {
            display: 'inline-block',
            flexGrow: 1,
            fontSize: typography.pxToRem(12),
            paddingRight: 11,
        },
        root: {
            alignItems: 'center',
            display: 'flex',
            minHeight: largeContainerHeight,
            outline: 'none',
            position: 'relative',
            textAlign: 'left',
            '&:focus $innerContainer::before': {
                boxShadow: `0 0 0 1px ${palette.active.main}`,
            },
            '&$isSmall': {
                minHeight: smallContainerHeight,
                '& $innerContainer': {
                    flexBasis: smallContainerWidth,
                    height: smallContainerHeight,
                    '&::before': { // switch ui container
                        backgroundColor: palette.grey[300],
                        boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.35)',
                        height: smallContainerHeight,
                        width: smallContainerWidth,
                    },
                    '&::after': { // switch ui toggle
                        backgroundColor: palette.background.primary,
                        boxShadow: '1px 2px 1px 0 rgba(0, 0, 0, 0.15)',
                        height: smallToggleSize,
                        top: -1,
                        width: smallToggleSize,
                    },
                },
                '& $input:checked + $innerContainer::after': {
                    left: 22,
                },
            },
            '& $input:checked + $innerContainer': {
                '&::before': {
                    backgroundColor: palette.active.main,
                    border: `1px solid ${palette.active.main}`,
                },
            },
            '&$isDisabled': {
                '&:not($isSmall) $input': {
                    '& + $innerContainer, &:checked + $innerContainer': {
                        cursor: 'auto',
                        '&::before': { // switch ui container
                            backgroundColor: palette.grey[300],
                            border: `1px solid ${palette.border.primary}`,
                        },
                        '&::after': { // switch ui toggle
                            backgroundColor: palette.grey[400],
                        },
                    },
                },
                '&$isSmall $input': {
                    '& + $innerContainer::after': { // switch ui toggle
                        backgroundColor: `${palette.grey[200]}`,
                    },
                    '&:checked + $innerContainer': {
                        '&::before': { // switch ui container
                            backgroundColor: palette.grey[400],
                            border: 0,
                        },
                    },
                },
            },
            '&:not($isSmall) $input:checked +': {
                '& $innerContainer::after': {
                    left: 27,
                },
            },
        },
        textContainer: {
            alignItems: 'center',
            display: 'inline-flex',
            height: largeContainerHeight,
            justifyContent: 'center',
            left: 0,
            letterSpacing: '.4px',
            padding: '0 7px 0 8px',
            position: 'absolute',
            textAlign: 'left',
            top: 0,
            width: largeContainerWidth,
            zIndex: 2,
            '& $textOn, & $textOff': {
                flex: '1 0 auto',
                fontSize: typography.pxToRem(12),
                lineHeight: 'inherit',
            },
        },
        textOn: {
            color: palette.text.contrastText,
            fontWeight: typography.fontWeightBold,
        },
        textOff: {
            color: palette.text.secondary,
            fontWeight: typography.fontWeightMedium,
            textAlign: 'right',
        },
    };
};

class Switch extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: props.checked || false,
        };

        this.onClick = this.onClick.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);

        this.inputRef = React.createRef();
    }

    componentDidMount() {
        const { checked } = this.props;

        if (checked && this.inputRef.current) {
            // isChecked is already set by the props.checked in the constructor.
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
                    this.inputRef.current.checked = !isChecked;
                });
            }
        } else {
            event.stopPropagation();
        }
    }

    render() {
        const {
            classes,
            className,
            disable: isDisabled,
            id,
            label,
            name,
            size,
            tabIndex,
            value,
        } = this.props;

        const { isChecked } = this.state;

        const newValue = value || '';
        const isSmall = size === 'small';

        const rootClasses = ClassNames(
            UI_CLASS_NAME,
            BEM_SWITCH,
            classes.root,
            className,
            {
                [classes.isDisabled]: isDisabled,
                [classes.isSmall]: isSmall,
                [classes.hasLabel]: label,
            },
        );

        const inputId = id ? `${id}_hidden_input` : null;

        return (
            <div
                aria-checked={isChecked}
                className={rootClasses}
                id={id}
                onClick={this.onClick}
                onKeyDown={noop}
                onMouseDown={this.onMouseDown}
                role="checkbox"
                tabIndex={tabIndex}
            >
                {label && (
                    <Typography
                        className={ClassNames(
                            `${BEM_SWITCH}--label`,
                            classes.label,
                        )}
                    >
                        {label}
                    </Typography>
                )}

                <input
                    checked={isChecked}
                    className={ClassNames(
                        `${BEM_SWITCH}--input`,
                        classes.input,
                    )}
                    disabled={isDisabled}
                    id={inputId}
                    name={name}
                    readOnly
                    ref={this.inputRef}
                    type="checkbox"
                    value={newValue}
                />

                <div
                    className={ClassNames(
                        `${BEM_SWITCH}--inner_container`,
                        classes.innerContainer,
                    )}
                >
                    {!isSmall && (
                        <div
                            className={ClassNames(
                                `${BEM_SWITCH}--text_container`,
                                classes.textContainer,
                            )}
                        >
                            <Typography
                                className={ClassNames(
                                    `${BEM_SWITCH}--text_on`,
                                    classes.textOn,
                                )}
                                component="span"
                            >
                                On
                            </Typography>

                            <Typography
                                className={ClassNames(
                                    `${BEM_SWITCH}--text_off`,
                                    classes.textOff,
                                )}
                                component="span"
                            >
                                Off
                            </Typography>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default withStyles(styles)(Switch);
