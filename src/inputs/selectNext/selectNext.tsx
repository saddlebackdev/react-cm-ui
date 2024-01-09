import ClassNames from 'classnames';
import {
    isEmpty,
    isFunction,
    isString,
} from 'lodash';
import React, {
    LegacyRef,
    ReactNode,
} from 'react';
import ScrollBar from 'react-custom-scrollbars';
import Select, {
    components,
    StylesConfig,
} from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { ClearIndicatorProps } from 'react-select/dist/declarations/src/components/indicators';
import { SelectScreenGuard } from 'inputs/greyScreenGuard';
import Icon from '../../dataDisplay/icon';
import {
    BEM_SELECT,
    UI_CLASS_NAME,
} from '../../global/constants';
import makeStyles from '../../styles/makeStyles';

const BEM_BLOCK_NAME = 'react_select';

type PropTypes = {
    /**
    * Forces the Select component to always show the required indicator
    * next to the label. The default behavior (if this prop is omitted or false) is for
    * the required field indicator to disappear once a value has been selected.
    */
    alwaysShowRequiredIndicator?: boolean;
    /**
    * Assign a class name to the outer component.
    */
    className?: string;
    /**
    * A Select can clear its value using close icon
    */
    clearable?: boolean,
    /**
    * A Select can create an option
    */
    creatable?: boolean,
    /**
    * A Select can be disabled
    */
    disabled?: boolean,
    /**
    * Supply dropdown menu maximum height
    */
    dropdownMenuMaxHeight?: number;
    /**
    * Supply dropdown menu minimum height
    */
    dropdownMenuMinHeight?: number;
    /**
    * A select can have an error
    */
    error?: string;
    /**
     * The `id` of the Select.
     */
    id?: string;
    /**
     * To prevent sensitive data from being read, we need to be able to block the contents of the
     * control with a gray placeholder. This flag triggers this kind of display instead of the usual one.
     */
    isRedacted?: boolean;
    /**
     * A Select will be resized to its parent container's width.
     */
    fluid?: boolean;
    /**
    * A Select can enable multiple option search
    */
    multiple?: boolean;
    /**
    * A Select can enable option search
    */
    searchable?: boolean;
    /**
     * The label for the Select.
     */
    label: string;
    /**
     * Whether the menu should use a portal, and where it should attach
     * An example can be found in the Portaling documentation https://react-select.com/advanced#portaling
     */
    menuPortalTarget?: HTMLElement | null;
    /**
     * Name of the HTML Input (without this, no input will be rendered)
     */
    name: string;
    /**
     * Text to display when there are no options
     */
    noOptionsMessage?: (selectValue: { inputValue: string }) => ReactNode;
    /**
     * Handle change events on the select
     */
    onChange: (nextValue: Option) => void;
    /**
     * Supply a list of options that the user can select from.
     */
    options: Option[];
    optionComponent?;
    /**
     * Supply a placeholder text for the best UX.
     */
    placeholder?: string;
    /**
     * A Select can be required
     */
    required?: boolean;
    /**
     * Style modifier methods
     * A basic example can be found at the bottom of the Replacing builtins documentation.
     * https://react-select.com/advanced#replacing-builtins
     */
    styles?: StylesConfig;
    /**
     * Sets the tabIndex attribute on the input
     * Indicates whether or not the Select can be focused.
     */
    tabIndex?: number;
    /**
     * Underlined Select selection.
     */
    underline?: boolean;
    /**
     * The value of the select; reflected by the selected option
     */
    value?: Option;
    valueComponent?;
};

const defaultProps = {
    alwaysShowRequiredIndicator: false,
    className: null,
    clearable: false,
    creatable: false,
    disabled: false,
    dropdownMenuMaxHeight: 180,
    dropdownMenuMinHeight: null,
    error: null,
    fluid: false,
    id: null,
    isRedacted: false,
    multiple: false,
    menuPortalTarget: null,
    noOptionsMessage: () => ('No results found'),
    onChange: null,
    options: [],
    optionComponent: null,
    placeholder: null,
    required: false,
    searchable: false,
    tabIndex: -1,
    underline: false,
    value: null,
    valueComponent: null,
};

const useStyles = makeStyles((theme) => {
    const {
        // @ts-ignore
        palette: p,
        // @ts-ignore
        typography,
        // @ts-ignore
        spacing,
    } = theme;

    const darkThemeBoxShadow = '0 4px 4px 0 rgba(0, 0, 0, 0.43)';

    // Control Options
    const selectInputBg = p.background.primary;
    const selectInputBgDisabled = p.background.secondary;
    const selectInputBgFocus = p.background.contrastPrimary;
    const selectInputBorderColor = p.border.primary;
    const selectInputBorderRadius = '3px';
    const selectInputBorderFocus = p.cyan[500];
    const selectInputBorderWidth = 1;
    const selectInputArrowColorFocus = p.text.contrastText;
    const selectInputHeight = 44;
    const selectInputInternalHeight = (selectInputHeight - (selectInputBorderWidth * 2));
    const selectInputPlaceholder = p.text.secondary;
    const selectTextColor = p.text.primary;
    const selectTextColorFocus = p.text.contrastText;
    const selectPaddingHorizontal = 11;
    const selectItemFontSize = '.9em';
    const selectMenuMarginTop = 4;

    // Menu Options
    const selectMenuBg = p.grey[500];
    const selectMenuBorderRadius = 3;
    const selectItemBorderRadius = 2;
    const selectMenuPaddingVertical = 11;
    const selectMenuZindex = 1000;

    const selectOptionBg = selectMenuBg;
    const selectOptionColor = p.text.contrastText;
    const selectOptionSelectedBg = p.background.primary;
    const selectOptionMarginVertical = 4;
    const selectOptionPaddingHorizontal = 22;
    const selectOptionPaddingVertical = 7;

    const selectNoresultsColor = p.text.contrastText;

    const inputTextBaseStyle = {
        lineHeight: `${selectInputInternalHeight}px`,
        maxWidth: '100%',
        overflow: 'hidden',
        paddingLeft: selectPaddingHorizontal,
        paddingRight: selectPaddingHorizontal,
        position: 'absolute',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    };

    return {
        '@global': {
            '.react_select': {
                '&__control': {
                    backgroundColor: selectInputBg,
                    border: `${selectInputBorderWidth}px solid ${selectInputBorderColor}`,
                    borderCollapse: 'separate',
                    borderColor: `${selectInputBorderColor} ${selectInputBorderColor} ${selectInputBorderColor}`,
                    borderRadius: selectInputBorderRadius,
                    borderSpacing: 0,
                    color: selectTextColor,
                    cursor: 'default',
                    display: 'table',
                    height: selectInputHeight,
                    outline: 'none',
                    position: 'relative',
                    width: '100%',
                    boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
                    '&:hover': {
                        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
                    },
                    '&--menu-is-open': {
                        backgroundColor: selectInputBgFocus,
                        borderColor: `${selectInputBorderColor} ${selectInputBorderColor} ${selectInputBorderColor}`,
                        color: selectTextColorFocus,
                        '& .icon-use-path': {
                            fill: `${selectInputArrowColorFocus} !important`,
                        },
                    },
                    '&--is-disabled': {
                        backgroundColor: selectInputBgDisabled,
                        color: selectInputPlaceholder,
                        cursor: 'not-allowed',
                        '&:hover': {
                            boxShadow: 'none',
                        },
                        '& .react_select__indicator': {
                            '& .ui.icon .icon-use-path': {
                                fill: p.grey[400],
                            },
                        },
                    },
                    '&--is-focused:not(.react_select__control--menu-is-open)': {
                        borderColor: `${selectInputBorderFocus} ${selectInputBorderFocus} ${selectInputBorderFocus}`,
                        boxShadow: [
                            [
                                'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                            ],
                            [
                                `0 0 5px -1px rgba(${selectInputBorderFocus}, 50%)`,
                            ],
                        ],
                    },
                    '& .is-searchable.react_select__control--menu-is-open': {
                        cursor: 'text',
                    },
                },
                '&__menu': {
                    backgroundColor: selectMenuBg,
                    borderRadius: selectMenuBorderRadius,
                    boxShadow: darkThemeBoxShadow,
                    boxSizing: 'border-box',
                    marginTop: selectMenuMarginTop,
                    WebkitOverflowScrolling: 'touch',
                    paddingBottom: selectMenuPaddingVertical,
                    paddingTop: selectMenuPaddingVertical,
                    position: 'absolute',
                    top: '100%',
                    width: '100%',
                    zIndex: selectMenuZindex,
                },
                '&__indicator': {
                    cursor: 'pointer',
                    display: 'table-cell',
                    paddingBottom: 0,
                    paddingRight: 11,
                    position: 'relative',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    '& > div': {
                        height: 16,
                        width: 16,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    },
                },
                '&__indicator-separator': {
                    display: 'none',
                },
                '&__placeholder': {
                    ...inputTextBaseStyle,
                    color: selectInputPlaceholder,
                },
                '&__single-value': {
                    ...inputTextBaseStyle,
                },
                '&__multi-value': {
                    alignItems: 'flex-start',
                    backgroundColor: p.grey[100],
                    border: `1px solid ${p.border.primary}`,
                    borderRadius: selectItemBorderRadius,
                    color: p.text.primary,
                    display: 'inline-flex',
                    fontSize: selectItemFontSize,
                    height: 30,
                    justifyContent: 'flex-start',
                    marginLeft: 6,
                    marginTop: 6,
                    verticalAlign: 'top',
                    '&__label': {
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        display: 'inline-flex',
                        flex: '0 1 auto',
                        justifyContent: 'center',
                        verticalAlign: 'middle',
                        borderBottomLeftRadius: selectItemBorderRadius,
                        borderTopLeftRadius: selectItemBorderRadius,
                        cursor: 'default',
                        fontSize: 14,
                        padding: '0 11px',
                    },
                    '&__remove': {
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        display: 'inline-flex',
                        flex: '0 1 auto',
                        justifyContent: 'center',
                        verticalAlign: 'middle',
                        border: `1px solid ${p.border.primary}`,
                        borderBottomRightRadius: selectItemBorderRadius,
                        borderRightRadius: selectItemBorderRadius,
                        borderTopRightRadius: selectItemBorderRadius,
                        color: p.text.secondary,
                        cursor: 'pointer',
                        lineHeight: 1,
                        margin: '-1px -1px -1px 0',
                        padding: '0 6px',
                        position: 'relative',
                        speak: 'none',
                        textTransform: 'none',
                        transition: [
                            [
                                'background-color 150ms linear',
                            ],
                            [
                                'border-color 150ms linear',
                            ],
                            [
                                'color 150ms linear',
                            ],
                        ],
                        '&:hover, &:focus': {
                            backgroundColor: p.grey[400],
                            borderColor: p.grey[400],
                            color: p.text.contrastText,
                        },
                    },
                },
                '&__menu-notice--no-options': {
                    color: selectNoresultsColor,
                    cursor: 'default',
                    display: 'block',
                    padding: `${selectOptionPaddingVertical}px ${selectOptionPaddingHorizontal}px`,
                    textAlign: 'left',
                    width: 'fit-content',
                },
                '&__input-container': {
                    paddingLeft: 11,
                },
                '&__option': {
                    backgroundColor: selectOptionBg,
                    boxSizing: 'border-box',
                    color: `${selectOptionColor} !important`,
                    cursor: 'pointer !important',
                    display: 'block',
                    fontSize: '14px !important',
                    // @ts-ignore
                    fontWeight: theme.typography.fontWeightMedium,
                    margin: `${selectOptionMarginVertical}px 0`,
                    padding: `${selectOptionPaddingVertical}px ${selectOptionPaddingHorizontal}px`,
                    whiteSpace: 'nowrap',
                    '&--is-selected, &--is-focused, &:hover': {
                        backgroundColor: selectOptionSelectedBg,
                        color: `${p.text.primary} !important`,
                    },
                },
                '&--clear_icon_container': {
                    marginRight: spacing(1),
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    cursor: 'pointer',
                },

            },
        },
        hasError: {},
        isFluid: {},
        isMultiple: {},
        root: {
            display: 'inline-block',
            minWidth: 200,
            position: 'relative',
            '&$hasError .react_select__control': {
                borderColor: p.error.main,
            },
            '&$isMultiple .react_select__control': {
                height: 'auto',
                minHeight: selectInputHeight,
            },
            '&$isMultiple .react_select__value-container--has-value': {
                marginBottom: 6,
            },
            '&$isFluid': {
                display: 'block',
            },
        },
        label: {
            marginBottom: 8,
        },
        requiredIndicator: {
            color: p.error.main,
            display: 'inline-block',
            fontSize: typography.pxToRem(14),
            marginLeft: 3,
        },
        errorMessage: {
            color: p.error.main,
            fontSize: typography.pxToRem(14),
            marginTop: spacing(0.5),
        },
    };
});

/**
 * Define custom Arrow Component
 */
const CustomArrow = (componentProps) => {
    const {
        selectProps: {
            underline,
        },
    } = componentProps;
    // console.log(componentProps, 'componentProps', underline);

    if (underline) {
        return (
            <components.DropdownIndicator
            // eslint-disable-next-line react/jsx-props-no-spreading
                {...componentProps}
            >
                <div>
                    <Icon
                        compact
                        size={10}
                        title="Select"
                        type="caret-down"
                    />
                </div>
            </components.DropdownIndicator>
        );
    }

    return (
        <components.DropdownIndicator
        // eslint-disable-next-line react/jsx-props-no-spreading
            {...componentProps}
        >
            <div>
                <Icon
                    compact
                    size={16}
                    title="Select"
                    type="chevron-down"
                />
            </div>
        </components.DropdownIndicator>
    );
};

/**
 * Define custom Component for creatable option
 */
const CustomAdd = (componentProps) => (
    <components.DropdownIndicator
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...componentProps}
    >
        <div>
            <Icon
                compact
                size={16}
                title="Creatable"
                type="add"
            />
        </div>
    </components.DropdownIndicator>
);

/**
 * Define custom MenuList Component
 */
const CustomMenuList = (componentProps) => {
    const {
        children,
        innerRef,
        selectProps,
    } = componentProps;

    return (
        <components.MenuList
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...componentProps}
            ref={innerRef}
        >
            <ScrollBar
                autoHeight
                autoHeightMax={selectProps.dropdownMenuMaxHeight || 180}
                autoHeightMin={selectProps.dropdownMenuMinHeight}
                autoHide
                className="select-menu-scrollbar"
                ref={selectProps.menuScrollBarRef}
            >
                {children}
            </ScrollBar>
        </components.MenuList>
    );
};

const CustomClear = ({ innerProps }: ClearIndicatorProps) => (
    <div
        className={`${BEM_BLOCK_NAME}--clear_icon_container`}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...innerProps}
    >
        <Icon
            compact
            size={16}
            title="Clear Selection"
            type="times"
        />
    </div>
);

const CustomOption = (componentProps) => {
    const {
        children,
        className,
        clearable,
        disabled,
        innerRef,
        isSelected,
        selectOption,
    } = componentProps;

    const optionClass = ClassNames(
        className,
    );

    return (
        <components.Option
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...componentProps}
            aria-selected={isSelected}
            className={optionClass}
            isClearable={clearable}
            isDisabled={disabled}
            selectOption={selectOption}
            ref={innerRef}
            tabIndex={0}
        >
            {children}
        </components.Option>
    );
};

const CustomAdvanceOption = (componentProps) => {
    const {
        children,
        className,
        clearable,
        disabled,
        innerRef,
        isSelected,
        selectOption,
    } = componentProps;

    const optionClass = ClassNames(
        className,
    );

    console.log(children, 'children', componentProps);

    return (
        <components.Option
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...componentProps}
            aria-selected={isSelected}
            className={optionClass}
            isClearable={clearable}
            isDisabled={disabled}
            selectOption={selectOption}
            ref={innerRef}
            tabIndex={0}
        >
            <Icon
                compact
                size={16}
                title="Creatable"
                type="add"
            />
            <span>
                {children}
            </span>
            {/* {selectOption.optionComponent()} */}
        </components.Option>
    );
};

type Option = {
    value: string;
    label: string;
};

/**
 * The Select component represents a control that provides a menu of options.
 */
// eslint-disable-next-line prefer-arrow-callback
const SelectNext = React.forwardRef(function SelectNext(
    props: PropTypes,
    ref: LegacyRef<HTMLDivElement>,
) {
    const {
        alwaysShowRequiredIndicator,
        className,
        clearable,
        creatable: isCreatable,
        disabled,
        dropdownMenuMaxHeight,
        dropdownMenuMinHeight,
        error,
        fluid: isFluid,
        id,
        isRedacted,
        label,
        multiple: isMultiple,
        menuPortalTarget,
        name,
        noOptionsMessage,
        onChange: onChangeProp,
        options,
        optionComponent,
        placeholder,
        required,
        searchable: isSearchable,
        styles,
        tabIndex,
        underline: isUnderlined,
        value,
        valueComponent,
        ...otherProps
    } = props;

    const classes = useStyles(props);

    const optionSelect = !isEmpty(optionComponent) ? CustomAdvanceOption : CustomOption;

    console.log(optionComponent, 'optionnnnnnnn', optionSelect);

    const onChange = (selectedOption) => {
        if (isFunction(onChangeProp)) {
            onChangeProp(selectedOption);
        }
    };

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_SELECT,
        classes.root,
        className,
        {
            [classes.hasError]: !!error,
            [classes.isFluid]: isFluid,
            [classes.isMultiple]: isMultiple,
        },

    );

    const showRequiredIndicator = required && (alwaysShowRequiredIndicator || isEmpty(value));

    return (
        <div
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            className={rootClasses}
            id={id}
            ref={ref}
        >
            {label && (
                <label
                    className={ClassNames(
                        'label',
                        classes.label,
                    )}
                    htmlFor={id}
                >
                    {label}

                    {showRequiredIndicator ? (
                        <span className={classes.requiredIndicator}>*</span>
                    ) : null}
                </label>
            )}

            {isRedacted && <SelectScreenGuard hasLabel={!isEmpty(label)} />}

            {!isCreatable && (
                <Select
                    components={{
                        DropdownIndicator: CustomArrow,
                        MenuList: CustomMenuList,
                        Option: CustomOption,
                        ClearIndicator: CustomClear,
                    }}
                    // @ts-ignore
                    dropdownMenuMaxHeight={dropdownMenuMaxHeight}
                    dropdownMenuMinHeight={dropdownMenuMinHeight}
                    isClearable={clearable}
                    isDisabled={disabled || isRedacted}
                    isMulti={isMultiple}
                    isSearchable={isSearchable}
                    menuPortalTarget={menuPortalTarget}
                    name={name}
                    noOptionsMessage={noOptionsMessage}
                    onChange={onChange}
                    options={options}
                    placeholder={placeholder}
                    tabIndex={tabIndex}
                    value={value}
                    styles={styles}
                    menuShouldScrollIntoView={false}
                    classNamePrefix="react_select"
                    underline={isUnderlined}
                    unstyled
                    {...otherProps}
                />
            )}
            {isString(error) && !!error && (
                <p className={classes.errorMessage}>
                    {error}
                </p>
            )}
            {isCreatable && (
                <CreatableSelect
                    components={{
                        DropdownIndicator: CustomAdd,
                        MenuList: CustomMenuList,
                        Option: CustomAdvanceOption,
                        ClearIndicator: CustomClear,
                        SingleValue: valueComponent,
                    }}
                    // @ts-ignore
                    dropdownMenuMaxHeight={dropdownMenuMaxHeight}
                    dropdownMenuMinHeight={dropdownMenuMinHeight}
                    isClearable={clearable}
                    isDisabled={disabled}
                    // isMulti={isMultiple}
                    isSearchable={isSearchable}
                    menuPortalTarget={menuPortalTarget}
                    name={name}
                    noOptionsMessage={noOptionsMessage}
                    onChange={onChange}
                    options={options}
                    optionComponent={optionComponent}
                    placeholder={placeholder}
                    tabIndex={tabIndex}
                    value={value}
                    styles={styles}
                    menuShouldScrollIntoView={false}
                    classNamePrefix="react_select"
                    unstyled
                />
            )}
        </div>
    );
});

SelectNext.defaultProps = defaultProps;

export default SelectNext;
