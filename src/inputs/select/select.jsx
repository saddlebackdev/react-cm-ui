import {
    findIndex,
    has,
    isEmpty,
    isFunction,
    map,
    noop,
    size,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import ReactSelect from 'react-select';
import ScrollBar from 'react-custom-scrollbars';
import {
    BEM_SELECT,
    UI_CLASS_NAME,
} from '../../global/constants';
import Icon from '../../dataDisplay/icon';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Override or extend the styles applied to Select.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    /**
    * Assign additional class names to Select.
    */
    className: PropTypes.string,
    /**
    * A Select can clear its value using close icon
    */
    clearable: PropTypes.bool,
    /**
    * A Select can create custom options
    */
    creatable: PropTypes.bool,
    /**
    * A Select can be disabled
    */
    disable: PropTypes.bool,
    /**
    * Supply style to dropdown menu container
    */
    dropdownMenuContainerStyle: PropTypes.shape({}),
    /**
    * Supply dropdown menu maximum height
    */
    dropdownMenuMaxHeight: PropTypes.number,
    /**
    * Supply dropdown menu minimum height
    */
    dropdownMenuMinHeight: PropTypes.number,
    /**
    * Supply dropdown menu style
    */
    dropdownMenuStyle: PropTypes.shape({}),
    /**
     * A Select will be resized to its parent container's width.
     */
    fluid: PropTypes.bool,
    /**
     * The `id` of the Select.
     */
    id: PropTypes.string,
    /**
     * The label for the Select.
     */
    label: PropTypes.string,
    /**
     * Whether to match the value, label or both values of each selection option when filtering.
     * enums:any, label, value
     */
    matchProp: PropTypes.oneOf(['any', 'label', 'value']),
    /**
     * A Select can have multiple values
     */
    multiple: PropTypes.bool,
    /**
     * Placeholder displayed when there are no matching search results or a falsy value to hide it
     * (can also be a react component)
     */
    noResultsText: PropTypes.string,
    /**
     * The onChange event handler.
     */
    onChange: PropTypes.func,
    /**
     * The onClose event handler.
     */
    onClose: PropTypes.func,
    /**
     * The onOpen event handler.
     */
    onOpen: PropTypes.func,
    /**
     * A Select can have custom option component
     */
    optionComponent: PropTypes.func,
    /**
     * Supply a list of options that the user can select from.
     */
    options: PropTypes.arrayOf(PropTypes.shape({})),
    /**
     * Supply a placeholder text for the best UX.
     */
    placeholder: PropTypes.string,
    /**
     * Supply a custom label option, when creatable is true
     */
    promptTextCreator: PropTypes.func,
    /**
     * A Select can be required
     */
    required: PropTypes.bool,
    /**
    * A Select can enable option search
    */
    searchable: PropTypes.bool,
    /**
     * Indicates whether or not the Select can be focused.
     */
    tabIndex: PropTypes.number,
    /**
     * Underlined Select selection.
     */
    underline: PropTypes.bool,
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.shape({})),
        PropTypes.shape({}),
        PropTypes.string,
    ]),
    valueComponent: PropTypes.func,
};

const defaultProps = {
    classes: null,
    className: null,
    clearable: false,
    creatable: false,
    disable: false,
    dropdownMenuContainerStyle: null,
    dropdownMenuMaxHeight: 180,
    dropdownMenuMinHeight: null,
    dropdownMenuStyle: null,
    fluid: false,
    id: null,
    label: null,
    matchProp: 'any',
    multiple: false,
    noResultsText: 'No results found',
    onChange: null,
    onClose: undefined,
    onOpen: undefined,
    optionComponent: null,
    options: [],
    promptTextCreator: undefined,
    placeholder: null,
    required: false,
    searchable: false,
    tabIndex: -1,
    underline: false,
    value: {},
    valueComponent: undefined,
};

class CustomReactSelect extends ReactSelect {
    renderHiddenField(valueArray) {
        const {
            menuContainerStyle,
            menuStyle,
            multi,
            removeSelected,
        } = this.props;

        const options = this.filterOptions(
            multi && removeSelected ? valueArray : null,
        );

        // eslint-disable-next-line no-underscore-dangle
        this._visibleOptions = options;

        const menu = this.renderMenu(options, valueArray);

        const styles = {
            ...menuContainerStyle,
            visibility: 'hidden',
        };

        return (
            <div className="Select-menu-outer" style={styles}>
                <div
                    role="listbox"
                    tabIndex={-1}
                    className="Select-menu"
                    // eslint-disable-next-line no-underscore-dangle
                    id={`${this._instancePrefix}-list`}
                    style={menuStyle}
                >
                    {menu}
                </div>
            </div>
        );
    }
}

const CustomCreatableSelect = (props) => (
    <CustomReactSelect
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
    />
);

const useStyles = makeStyles((theme) => {
    const {
        palette: p,
        typography,
    } = theme;

    const darkThemeBoxShadow = '0 4px 4px 0 rgba(0, 0, 0, 0.43)';

    // Control Options
    const selectInputBg = p.background.primary;
    const selectInputBgFocus = p.background.contrastPrimary;
    const selectInputBgDisabled = p.background.secondary;
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
    const selectLinkHoverColor = selectInputBgFocus;
    const selectPaddingHorizontal = 11;

    // Menu Options
    const selectMenuBg = p.grey[500];
    const selectMenuBorderRadius = 3;
    const selectMenuMarginTop = 4;
    const selectMenuPaddingVertical = 11;
    const selectMenuZindex = 1000;

    const selectOptionBg = selectMenuBg;
    const selectOptionColor = p.text.contrastText;
    const selectOptionFocusedColor = p.text.primary;
    const selectOptionFocusedBg = p.background.primary;
    const selectOptionSelectedColor = p.text.primary;
    const selectOptionSelectedBg = p.background.primary;
    const selectOptionDisabledColor = p.text.secondary;
    const selectOptionMarginVertical = 4;
    const selectOptionPaddingHorizontal = 22;
    const selectOptionPaddingVertical = 7;

    const selectNoresultsColor = p.text.contrastText;

    // clear "x" button
    const selectClearSize = `floor((${selectInputHeight} / 2))`;
    const selectClearColor = '#999';
    const selectClearHoverColor = '#D0021B';
    const selectClearWidth = 16;

    // arrow indicator
    const selectArrowColor = '#999';
    const selectArrowColorHover = '#666';
    const selectArrowWidth = 16;

    // loading indicator
    const selectLoadingSize = 16;
    const selectLoadingColor = selectTextColor;
    const selectLoadingColorBg = selectInputBorderColor;

    // multi-select item
    const selectItemBorderRadius = 2;
    const selectItemGutter = 5;
    const selectItemFontSize = '.9em';
    const selectItemColor = '#08c';
    const selectItemBg = '#f2f9fc';
    const selectItemBorderColor = selectItemBg;
    const selectItemDisabledBg = '#fcfcfc';
    const selectItemDisabledBorderColor = selectItemDisabledBg;

    return {
        '@keyframes selectAnimationSpin': {
            to: {
                transform: 'rotate(1turn)',
            },
        },
        '@keyframes selectAnimationFadeIn': {
            from: {
                opacity: 0,
            },
            to: {
                opacity: 1,
            },
        },
        isFluid: {},
        isUnderlined: {},
        label: {
            marginBottom: 8,
        },
        requiredIndicator: {
            color: p.error.main,
            display: 'inline-block',
            fontSize: typography.pxToRem(14),
            marginLeft: 3,
        },
        root: {
            display: 'inline-block',
            minWidth: 200,
            position: 'relative',
            '&$isFluid': {
                display: 'block',
            },
            '& .Select': {
                position: 'relative',
                '&, & div, & input, & span': {
                    boxSizing: 'border-box',
                },
                '&.is-disabled': {
                    '& > .Select-control': {
                        backgroundColor: selectInputBgDisabled,
                        '&:hover': {
                            boxShadow: 'none',
                        },
                    },
                    '& .Select-arrow-zone': {
                        cursor: 'default',
                        pointerEvents: 'none',
                        '& .ui.icon .icon-use-path': {
                            fill: p.grey[400],
                        },
                    },
                },
            },
            '& .Select-control': {
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
                '&:hover': {
                    boxShadow: '0 1px 0 rgba(0, 0, 0, 0.06)',
                },
                '& .Select-input:focus': {
                    outline: 'none',
                },
            },
            '& .is-searchable.is-open > .Select-control': {
                cursor: 'text',
            },
            '& .is-open:not(.Select--multi) > .Select-control': {
                backgroundColor: selectInputBgFocus,
                borderColor: `${selectInputBorderColor} ${selectInputBorderColor} ${selectInputBorderColor}`,
                color: selectTextColorFocus,
                '& .Select-arrow': {
                    borderColor: `transparent transparent ${selectArrowColor}`,
                    borderWidth: `0 ${selectArrowWidth} ${selectArrowWidth}`,
                    top: -2,
                },
                '& .Select-value-label': {
                    color: `${p.text.contrastText} !important`,
                },
                '& .Select-arrow-zone, & .Select-clear-zone': {
                    '& .ui.icon .icon-use-path': {
                        fill: selectInputArrowColorFocus,
                    },
                },
            },
            '& .is-searchable.is-focused:not(.is-open) > .Select-control': {
                cursor: 'text',
            },
            '& .is-focused:not(.is-open) > .Select-control': {
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
            '& .Select-placeholder, & .Select--single > .Select-control .Select-value': {
                bottom: 0,
                color: selectInputPlaceholder,
                left: 0,
                lineHeight: `${selectInputInternalHeight}px`,
                maxWidth: '100%',
                overflow: 'hidden',
                paddingLeft: selectPaddingHorizontal,
                paddingRight: selectPaddingHorizontal,
                position: 'absolute',
                right: 0,
                textOverflow: 'ellipsis',
                top: 0,
                whiteSpace: 'nowrap',
            },
            '& .has-value.Select--single > .Select-control .Select-value, & .has-value.is-pseudo-focused.Select--single > .Select-control .Select-value': {
                '& .Select-value-label': {
                    color: selectTextColor,
                },
                '& a.Select-value-label': {
                    cursor: 'pointer',
                    textDecoration: 'none',
                    '&:hover, &:focus': {
                        color: selectLinkHoverColor,
                        outline: 'none',
                        textDecoration: 'underline',
                    },
                },
            },
            '& .Select-input': {
                height: `${selectInputInternalHeight}px`,
                paddingLeft: selectPaddingHorizontal,
                paddingRight: selectPaddingHorizontal,
                verticalAlign: 'middle',
                '& > input': {
                    background: 'none transparent',
                    border: '0 none',
                    boxShadow: 'none',
                    cursor: 'default',
                    display: 'inline-block',
                    fontFamily: 'inherit',
                    fontSize: 'inherit',
                    margin: 0,
                    outline: 'none',
                    lineHeight: '14px',
                    padding: `${((selectInputInternalHeight - 14) / 2 - 2)}px 0 ${((selectInputInternalHeight - 14) / 2 + 2)}px`,
                    WebkitAppearance: 'none',
                    '& .is-focused &': {
                        cursor: 'text',
                    },
                },
            },
            '& .has-value.is-pseudo-focused .Select-input': {
                opacity: 0,
            },
            '& .Select-control:not(.is-searchable) > .Select-input': {
                outline: 'none',
            },
            '& .Select-loading-zone': {
                cursor: 'pointer',
                display: 'table-cell',
                position: 'relative',
                textAlign: 'center',
                verticalAlign: 'middle',
                width: selectLoadingSize,
            },
            '& .Select-loading': {
                animation: '$selectAnimationSpin 400ms infinite linear',
                border: `floor((${selectLoadingSize / 8})) solid ${selectLoadingColorBg}`,
                borderRadius: '50%',
                borderRightColor: selectLoadingColor,
                boxSizing: 'border-box',
                display: 'inline-block',
                height: selectLoadingSize,
                position: 'relative',
                width: selectLoadingSize,
                verticalAlign: 'middle',
            },
            '& .Select-clear-zone': {
                animation: '$selectAnimationFadeIn 200ms',
                color: selectClearColor,
                cursor: 'pointer',
                display: 'table-cell',
                paddingRight: 11,
                position: 'relative',
                textAlign: 'center',
                verticalAlign: 'middle',
                width: selectClearWidth,
                '& > div': {
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                },
                '&:hover': {
                    color: selectClearHoverColor,
                },
            },
            '& .Select-clear': {
                display: 'inline-block',
                fontSize: selectClearSize,
                lineHeight: 1,
            },
            '& .Select--multi .Select-clear-zone': {
                width: selectClearWidth,
            },
            '& .Select-multi-value-wrapper': {
                position: 'relative',
            },
            '& .Select .Select-aria-only': {
                display: 'inline-block',
                height: 1,
                width: 1,
                margin: '-1px',
                clip: 'rect(0,0,0,0)',
                overflow: 'hidden',
            },
            '& .Select-arrow-zone': {
                cursor: 'pointer',
                display: 'table-cell',
                paddingBottom: 0,
                paddingRight: 11,
                position: 'relative',
                textAlign: 'center',
                verticalAlign: 'middle',
                width: selectArrowWidth,
                '& > div': {
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                },
            },
            '& .Select-arrow': {
                borderColor: `${selectArrowColor} transparent transparent`,
                borderStyle: 'solid',
                borderWidth: `${selectArrowWidth} ${selectArrowWidth} (${selectArrowWidth} / 2)`,
                display: 'inline-block',
                height: 0,
                position: 'relative',
                width: 0,
            },
            '& .is-open .Select-arrow, & .Select-arrow-zone:hover > .Select-arrow': {
                borderTopColor: selectArrowColorHover,
            },
            '& .Select-menu-outer': {
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
            '& .Select-option': {
                backgroundColor: selectOptionBg,
                boxSizing: 'border-box',
                color: selectOptionColor,
                cursor: 'pointer',
                display: 'block',
                fontSize: '14px',
                fontWeight: theme.typography.fontWeightMedium,
                margin: `${selectOptionMarginVertical}px 0`,
                padding: `${selectOptionPaddingVertical}px ${selectOptionPaddingHorizontal}px`,
                whiteSpace: 'nowrap',
                '&.is-selected': {
                    backgroundColor: selectOptionSelectedBg,
                    color: selectOptionSelectedColor,
                },
                '&.is-focused, &:hover': {
                    backgroundColor: selectOptionFocusedBg,
                    color: selectOptionFocusedColor,
                },
                '&.is-disabled': {
                    backgroundColor: theme.palette.grey[500],
                    color: selectOptionDisabledColor,
                    cursor: 'not-allowed',
                },
            },
            '& .Select-noresults': {
                boxSizing: 'border-box',
                color: selectNoresultsColor,
                cursor: 'default',
                display: 'block',
                padding: `${selectOptionPaddingVertical}px ${selectOptionPaddingHorizontal}px`,
            },
            '& .Select.Select--multi': {
                '& .Select-control': {
                    backgroundColor: selectInputBg,
                },
                '& .Select-input': {
                    marginLeft: selectPaddingHorizontal,
                    padding: 0,
                    verticalAlign: 'middle',
                },
                '&.has-value .Select-input': {
                    marginLeft: selectItemGutter,
                },
                '& .Select-value': {
                    alignItems: 'flex-start',
                    backgroundColor: 'color(backgroundColorLight)',
                    border: '1px solid color(borderColor)',
                    borderRadius: selectItemBorderRadius,
                    color: 'p.text.primary',
                    display: 'inline-flex',
                    flexDirection: 'row-reverse',
                    fontSize: selectItemFontSize,
                    height: 30,
                    justifyContent: 'flex-start',
                    marginLeft: 6,
                    marginTop: 6,
                    verticalAlign: 'top',
                },
                '& .Select-value-label, & .Select-value-icon': {
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    display: 'inline-flex',
                    flex: '0 1 auto',
                    justifyContent: 'center',
                    verticalAlign: 'middle',
                },
                '& .Select-value-label': {
                    borderBottomLeftRadius: selectItemBorderRadius,
                    borderTopLeftRadius: selectItemBorderRadius,
                    cursor: 'default',
                    fontSize: 14,
                    padding: '0 11px',
                },
                '& a.Select-value-label': {
                    color: selectItemColor,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                    },
                },
                '& .Select-value-icon': {
                    border: `1px solid ${p.border.primary}`,
                    borderBottomRightRadius: selectItemBorderRadius,
                    borderRightRadius: selectItemBorderRadius,
                    borderTopRightRadius: selectItemBorderRadius,
                    color: p.text.secondary,
                    cursor: 'pointer',
                    lineHeight: 1,
                    margin: '-1px -1px -1px 0',
                    padding: '0 9px',
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
                    '&:active': {
                        backgroundColor: selectItemBorderColor,
                    },
                },
                '&.is-open > .Select-control .Select-arrow-zone .ui.icon .icon-use-path': {
                    fill: p.cyan,
                },
            },
            '& .Select--multi.is-disabled': {
                '& > .Select-control': {
                    backgroundColor: selectInputBgDisabled,
                    '&:hover': {
                        boxShadow: 'none',
                    },
                },
                '& .Select-value-icon': {
                    cursor: 'not-allowed',
                    borderRight: `1px solid ${selectItemDisabledBorderColor}`,
                    '&:hover, &:focus, &:active': {
                        backgroundColor: selectItemDisabledBg,
                    },
                },
            },
            '&$isUnderlined': {
                '& .Select--single .Select-control': {
                    borderLeft: 0,
                    borderRadius: 0,
                    borderRight: 0,
                    borderTop: 0,
                    fontSize: '14px',
                    height: 32,
                    '&:hover': {
                        boxShadow: 'none',
                    },
                    '& .Select-placeholder': {
                        lineHeight: '33px',
                        paddingLeft: 0,
                        paddingRight: 0,
                    },
                    '& .Select-value': {
                        lineHeight: '33px',
                        paddingLeft: 0,
                    },
                    '& .Select-input': {
                        height: 32,
                        paddingLeft: 0,
                        '& > input': {
                            color: p.text.primary,
                            padding: '7px 0 11px',
                        },
                    },
                    '& .Select-arrow-zone': {
                        paddingRight: 0,
                        width: 10,
                    },
                    '& .ui.icon-times': {
                        height: 10,
                        width: 10,
                    },
                },
                '& .is-open:not(.Select--multi).Select--single > .Select-control': {
                    backgroundColor: p.background.primary,
                    borderBottomColor: selectInputBorderColor,
                    boxShadow: 'none',
                    color: p.text.primary,
                    '& .Select-arrow-zone .icon-use-path': {
                        fill: `${p.cyan[500]} !important`,
                    },
                },
            },
        },
    };
});

/**
 * The Select component represents a control that provides a menu of options.
 */
// eslint-disable-next-line prefer-arrow-callback
const Select = React.forwardRef(function Select(props, ref) {
    const {
        className,
        clearable: isClearable,
        creatable: isCreatable,
        disable: isDisabled,
        dropdownMenuContainerStyle,
        dropdownMenuStyle,
        dropdownMenuMaxHeight,
        dropdownMenuMinHeight,
        fluid: isFluid,
        id,
        label,
        matchProp,
        multiple,
        noResultsText,
        onChange: onChangeProp,
        onClose,
        onOpen: onOpenProp,
        optionComponent,
        options,
        placeholder,
        promptTextCreator,
        required,
        searchable: isSearchable,
        tabIndex,
        underline: isUnderlined,
        value,
        valueComponent,
        ...otherProps
    } = props;

    const classes = useStyles(props);
    const innerMenuRef = useRef();
    const menuScrollBarRef = useRef();
    const focusedOptionRef = useRef();
    const [scrollToFocusedOption, setScrollToFocusedOption] = React.useState(false);

    React.useEffect(() => {
        if (
            scrollToFocusedOption &&
            focusedOptionRef && focusedOptionRef.current &&
            innerMenuRef && innerMenuRef.current &&
            menuScrollBarRef && menuScrollBarRef.current
        ) {
            const focusedDOM = focusedOptionRef.current;
            const focusedRect = focusedDOM.getBoundingClientRect();
            const innerMenuDOM = innerMenuRef.current;
            const innerMenuRect = innerMenuDOM.getBoundingClientRect();

            if (focusedRect.bottom > innerMenuRect.bottom) {
                menuScrollBarRef.current.scrollTop(
                    focusedDOM.offsetTop + focusedDOM.clientHeight - innerMenuDOM.offsetHeight,
                );
            } else if (focusedRect.top < innerMenuRect.top) {
                menuScrollBarRef.current.scrollTop(focusedDOM.offsetTop);
            }

            setScrollToFocusedOption(false);
        }
    }, [scrollToFocusedOption]);

    const onChange = (selectedOption) => {
        if (isFunction(onChangeProp)) {
            onChangeProp(selectedOption);
        }
    };

    const menuRenderer = (params) => {
        const items = map(params.options, (o, i) => {
            const isFocused = o === params.focusedOption;
            const isSelected = params.valueArray && params.valueArray.some((x) => (
                x[params.valueKey] === o[params.valueKey]
            ));

            const optionClass = ClassNames(
                'Select-option',
                params.optionClassName,
                {
                    'is-disabled': o.disabled,
                    'is-focused': isFocused,
                    'is-selected': isSelected,
                },
            );

            if (optionComponent) {
                const OptionComponent = optionComponent;

                return (
                    <OptionComponent
                        className={optionClass}
                        focusOption={params.focusOption}
                        isDisabled={o.disabled}
                        isFocused={isFocused}
                        isSelected={isSelected}
                        key={`select-option-key-${i}`}
                        onFocus={params.onFocus}
                        onSelect={params.selectValue}
                        option={o}
                        ref={isFocused ? focusedOptionRef : undefined}
                    />
                );
            }

            return (
                <div
                    aria-selected={isSelected}
                    className={optionClass}
                    isDisabled={o.disabled}
                    isFocused={isFocused}
                    isSelected={isSelected}
                    key={`select-option-key-${i}`}
                    onClick={() => params.selectValue(o)}
                    onFocus={noop}
                    onKeyDown={noop}
                    onMouseOver={() => params.focusOption(o)}
                    ref={isFocused ? focusedOptionRef : undefined}
                    role="option"
                    tabIndex={0}
                >
                    {o.label}
                </div>
            );
        });

        return (
            <div
                ref={innerMenuRef}
            >
                <ScrollBar
                    autoHeight
                    autoHeightMax={dropdownMenuMaxHeight || 180}
                    autoHeightMin={dropdownMenuMinHeight}
                    autoHide
                    className="select-menu-scrollbar"
                    ref={menuScrollBarRef}
                >
                    {items}
                </ScrollBar>
            </div>
        );
    };

    const onInputKeyDown = (event) => {
        switch (event.keyCode) {
            case 38: // up
            case 40: // down
                setScrollToFocusedOption(true);

                break;
            default:
        }
    };

    const onOpen = () => {
        if (isFunction(onOpenProp)) {
            onOpenProp();
        }

        if (menuScrollBarRef && menuScrollBarRef.current && value) {
            const itemHeight = menuScrollBarRef.current.getScrollHeight() / size(options);
            const pageSize = menuScrollBarRef.current.getClientHeight() / itemHeight;

            const selectionIndex = findIndex(options, (o) => {
                if (matchProp === 'any') {
                    const hasValue = has(o, 'value');
                    const hasLabel = has(o, 'label');

                    if (!hasValue && !hasLabel) {
                        return false;
                    }

                    return (
                        (
                            hasValue && o.value === value.value
                        ) || o.value === value
                    ) || (
                        (
                            hasLabel && o.label === value.label
                        ) || o.label === value
                    );
                }

                return o[matchProp] === value[matchProp];
            });

            const scrollRatio = selectionIndex / pageSize;

            if (scrollRatio >= 1) {
                menuScrollBarRef.current.scrollTop(scrollRatio * pageSize * itemHeight);
            }
        }
    };

    const rootClasses = ClassNames(
        UI_CLASS_NAME,
        BEM_SELECT,
        classes.root,
        className,
        {
            [classes.isFluid]: isFluid,
            [classes.isUnderlined]: isUnderlined,
        },
    );

    const showRequiredIndicator = required && isEmpty(value);
    const ReactSelectComponent = isCreatable ? ReactSelect.Creatable : CustomReactSelect;

    return (
        <div
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
            className={rootClasses}
            id={id}
            ref={ref}
        >
            {label && (
                // eslint-disable-next-line jsx-a11y/label-has-associated-control
                <label
                    className={ClassNames(
                        'label',
                        classes.label,
                    )}
                >
                    {label}

                    {required && showRequiredIndicator ? (
                        <span className={classes.requiredIndicator}>*</span>
                    ) : null}
                </label>
            )}

            <ReactSelectComponent
                arrowRenderer={() => {
                    if (isCreatable) {
                        return (
                            <div>
                                <Icon
                                    compact
                                    size={16}
                                    title="Select"
                                    type="plus"
                                />
                            </div>
                        );
                    }

                    if (isUnderlined) {
                        return (
                            <Icon
                                compact
                                size={10}
                                title="Select"
                                type="caret-down"
                            />
                        );
                    }

                    return (
                        <div>
                            <Icon
                                compact
                                size={16}
                                title="Select"
                                type="chevron-down"
                            />
                        </div>
                    );
                }}
                clearRenderer={() => (
                    <div>
                        <Icon
                            compact
                            size={16}
                            title="Clear Selection"
                            type="times"
                        />
                    </div>
                )}
                clearable={isClearable}
                disabled={isDisabled}
                matchProp={!isCreatable ? matchProp : null}
                menuContainerStyle={dropdownMenuContainerStyle}
                menuRenderer={menuRenderer}
                menuStyle={dropdownMenuStyle}
                multi={multiple}
                noResultsText={noResultsText}
                onClose={onClose}
                onInputKeyDown={onInputKeyDown}
                onOpen={onOpen}
                name="firstSelect"
                onChange={onChange}
                optionComponent={optionComponent}
                options={options}
                promptTextCreator={isCreatable && promptTextCreator}
                placeholder={placeholder}
                searchable={isSearchable}
                tabIndex={tabIndex}
                value={value}
                valueComponent={valueComponent}
            >
                {isCreatable && CustomCreatableSelect}
            </ReactSelectComponent>
        </div>
    );
});

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default Select;
