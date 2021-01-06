import {
    debounce,
    get,
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import domUtils from '../../utils/domUtils';
import {
    BEM_BLOCK_NAME,
    OPTION_INNER_CLASS_NAME,
    OPTIONS_THEME_LIGHT,
} from './dropdownMenuConstants';

import makeStyles from '../../styles/makeStyles';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    getParentContainer: PropTypes.func,
    onToggleOpen: PropTypes.func.isRequired,
    /**
     * The onChange event handler.
     */
    onChange: PropTypes.func,
    /**
     * Options list theme
     */
    optionsTheme: PropTypes.oneOf([
        'dark',
        'light',
    ]),
    style: PropTypes.shape({}),
    /**
     * Indicates whether or not the Dropdown Menu can be focused.
     */
    tabIndex: PropTypes.number,
};

const defaultProps = {
    optionsTheme: 'dark',
    className: undefined,
    id: undefined,
    style: undefined,
    getParentContainer: undefined,
    onChange: undefined,
    tabIndex: -1,
};
const useStyles = makeStyles((theme) => {
    const backgroundColorInverse = get(theme, 'palette.grey[500]');
    const backgroundColorPrimary = get(theme, 'palette.background.primary');
    const borderColorPrimary = get(theme, 'palette.border.primary');
    const borderRadiusMain = get(theme, 'shape.borderRadius.main');
    const colorHighlight = get(theme, 'palette.cyan[500]');
    const colorPrimary = get(theme, 'palette.background.contrastPrimary');
    const colorStatic = get(theme, 'palette.text.secondary');
    const fontWeightMedium = get(theme, 'typography.fontWeightMedium');
    const textColorConstrast = get(theme, 'palette.text.contrastText');
    const textColorPrimary = get(theme, 'palette.text.primary');
    const pxToRem = get(theme, 'typography.pxToRem', (px) => px);

    return {
        root: {
            backgroundColor: ({ optionsTheme }) => (optionsTheme === OPTIONS_THEME_LIGHT ?
                backgroundColorPrimary :
                backgroundColorInverse
            ),
            borderRadius: borderRadiusMain,
            border: ({ optionsTheme }) => (optionsTheme === OPTIONS_THEME_LIGHT ?
                `1px solid ${borderColorPrimary}` :
                0
            ),
            boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.43)',
            boxSizing: 'border-box',
            margin: '5px 0',
            padding: 0,
            position: 'absolute',
            transform: 'opacity 300ms ease-in',
            zIndex: '1000',
            '& .dropdown_menu': {
                '&--option': {
                    color: ({ optionsTheme }) => (optionsTheme === OPTIONS_THEME_LIGHT ?
                        textColorPrimary :
                        textColorConstrast
                    ),
                    fontSize: pxToRem(14),
                    fontWeight: fontWeightMedium,
                    outline: 'none',
                    padding: `${pxToRem(4)} 0`,
                    textAlign: 'left',
                    '&:first-child': {
                        paddingTop: pxToRem(11),
                    },
                    '&:last-child': {
                        paddingBottom: pxToRem(11),
                    },
                    '&_inner': {
                        alignItems: 'center',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        padding: `${pxToRem(7)} ${pxToRem(22)}`,
                        transition: 'background-color 150ms ease-out, color 150ms ease-out',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                            backgroundColor: ({ optionsTheme }) => (
                                optionsTheme === OPTIONS_THEME_LIGHT ?
                                    colorHighlight :
                                    backgroundColorPrimary
                            ),
                            color: ({ optionsTheme }) => (optionsTheme === OPTIONS_THEME_LIGHT ?
                                textColorConstrast :
                                textColorPrimary
                            ),
                            '& .ui.icon': {
                                '& .icon-use-path': {
                                    fill: colorPrimary,
                                },
                            },
                        },
                    },
                    '&-disable': {
                        color: `${colorStatic} !important`,
                        cursor: 'default',
                        pointerEvents: 'none',
                    },
                },
            },
        },
        dropdownMenuClosed: {
            opacity: 0,
            visibility: 'hidden',
        },
        dropdownMenuOpen: {
            opacity: 1,
            visibility: 'visible',
        },
    };
});
function DropdownMenu(props) {
    const {
        children,
        className,
        getParentContainer,
        id,
        isOpen,
        onChange,
        onToggleOpen,
        optionsTheme,
        style,
        tabIndex,
    } = props;

    const dropdownMenuRef = useRef(null);

    const [menuPositionStyle, setMenuPositionStyle] = useState({
        bottom: null,
        left: 0,
        right: null,
        top: '100%',
    });

    const classes = useStyles({
        ...props,
        optionsTheme, // just to avoid the ESLint issue 'PropType is defined but prop is never used'
    });

    function onDropdownMenuReposition() {
        let parentContainer = get(dropdownMenuRef, 'current.parentElement');

        if (isFunction(getParentContainer)) {
            // eslint-disable-next-line react/no-find-dom-node
            parentContainer = ReactDOM.findDOMNode(getParentContainer());
        }

        const dropdownMenuObj = domUtils.isInViewport(dropdownMenuRef.current, parentContainer);
        const {
            isInTop,
            isInRight,
            isInBottom,
            topBias,
            bottomBias,
        } = dropdownMenuObj;
        const menuXPosition = isInRight ? 'left' : 'right';
        let menuYPosition = topBias < bottomBias ? 'top' : 'bottom';

        if (isInBottom || bottomBias < 0) {
            menuYPosition = 'top';
        } else if (isInTop || topBias < 0) {
            menuYPosition = 'bottom';
        }

        const newMenuPositionStyle = {
            bottom: menuYPosition === 'bottom' ? '100%' : null,
            left: menuXPosition === 'left' ? 0 : null,
            right: menuXPosition === 'right' ? 0 : null,
            top: menuYPosition === 'top' ? '100%' : null,
        };

        setMenuPositionStyle((prevState) => ({
            ...prevState,
            ...newMenuPositionStyle,
        }));
    }

    const debounceDropdownMenuReposition = debounce(() => onDropdownMenuReposition(), 100);

    useEffect(() => {
        function onClickOutside(event) {
            const parentContainer = dropdownMenuRef.current;
            const containsTarget = parentContainer.contains(event.target);

            if (
                !containsTarget ||
                (containsTarget && event.target.className === OPTION_INNER_CLASS_NAME)
            ) {
                onToggleOpen(event);
            }

            return null;
        }

        if (isOpen) {
            window.addEventListener('resize', debounceDropdownMenuReposition);
            window.addEventListener('scroll', debounceDropdownMenuReposition);
            document.addEventListener('click', onClickOutside);
        }

        onDropdownMenuReposition();

        return () => {
            if (isOpen) {
                window.removeEventListener('resize', debounceDropdownMenuReposition);
                window.removeEventListener('scroll', debounceDropdownMenuReposition);
                document.removeEventListener('click', onClickOutside);
            }
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const containerClasses = ClassNames('ui', BEM_BLOCK_NAME, className, classes.root, {
        [classes.dropdownMenuClosed]: !isOpen,
        [classes.dropdownMenuOpen]: isOpen,
        [`${BEM_BLOCK_NAME}-closed`]: !isOpen,
        [`${BEM_BLOCK_NAME}-opened`]: isOpen,
    });

    return (
        <div
            className={containerClasses}
            id={id}
            ref={dropdownMenuRef}
            style={{
                ...style,
                ...menuPositionStyle,
            }}
            tabIndex={tabIndex}
        >
            {React.Children.map(children, (child, index) => React.cloneElement(child, {
                ...child.props,
                index,
                onChange,
            }))}
        </div>
    );
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
