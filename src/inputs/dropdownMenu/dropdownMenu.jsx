import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import domUtils from '../../utils/domUtils';
import { BEM_BLOCK_NAME, OPTION_INNER_CLASS_NAME } from './dropdownMenuConstants';

const propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    id: PropTypes.string,
    isOpen: PropTypes.bool.isRequired,
    getParentContainer: PropTypes.func,
    onToggleOpen: PropTypes.func.isRequired,
    style: PropTypes.shape({}),
    /**
     * Indicates whether or not the Dropdown Menu can be focused.
     */
    tabIndex: PropTypes.number,
};

const defaultProps = {
    className: undefined,
    id: undefined,
    style: undefined,
    getParentContainer: undefined,
    tabIndex: -1,
};

function DropdownMenu(props) {
    const {
        children,
        className,
        getParentContainer,
        id,
        isOpen,
        onToggleOpen,
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

    function onDropdownMenuReposition() {
        let parentContainer = dropdownMenuRef.current.parentElement;

        if (_.isFunction(getParentContainer)) {
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

    const debounceDropdownMenuReposition = _.debounce(() => onDropdownMenuReposition(), 100);

    useEffect(() => {
        function onClickOutside(event) {
            const parentContainer = dropdownMenuRef.current;
            const containsTarget = parentContainer.contains(event.target);

            if (
                !containsTarget ||
                (containsTarget && event.target.className === OPTION_INNER_CLASS_NAME)
            ) {
                onToggleOpen();
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

    const containerClasses = ClassNames('ui', BEM_BLOCK_NAME, className, {
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
            {children}
        </div>
    );
}

DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;

export default DropdownMenu;
