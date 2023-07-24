import {
    isArray,
    isFunction,
    isNil,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    UI_CLASS_NAME,
} from '../../global/constants';
import Icon from '../../dataDisplay/icon';
import Input from '../../inputs/input';
import ActionBarSearchSelect from './actionBarSearchSelect';

const propTypes = {
    autoFocus: PropTypes.bool,
    id: PropTypes.string,
    isMobileSearch: PropTypes.bool,
    isMobileSearchVisible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onClearClick: PropTypes.func,
    onFocus: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    searchWithSelect: PropTypes.shape({
        dropdownArrowIconType: PropTypes.string,
        onChange: PropTypes.func,
        options: PropTypes.arrayOf(PropTypes.shape({})),
        placeholder: PropTypes.string,
        value: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.shape({}),
        ]),
    }),
    style: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
    value: PropTypes.string,
};

const defaultProps = {
    autoFocus: false,
    id: undefined,
    isMobileSearch: false,
    isMobileSearchVisible: false,
    onClearClick: undefined,
    onFocus: undefined,
    onKeyDown: undefined,
    placeholder: 'Search',
    searchWithSelect: undefined,
    style: {},
    value: '',
};

class ActionBarSearch extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isSearchWithSelectMenuOpen: false,
        };

        this.onChange = this.onChange.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.onClearKeyDown = this.onClearKeyDown.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onCloseSelectMenu = this.onCloseSelectMenu.bind(this);
        this.onOpenSelectMenu = this.onOpenSelectMenu.bind(this);
    }

    onChange(value) {
        const { onChange } = this.props;

        onChange(value);
    }

    onClearClick() {
        const { onChange, onClearClick } = this.props;

        if (isFunction(onClearClick)) {
            onClearClick();
        } else {
            onChange('');
        }
    }

    onClearKeyDown(event) {
        if (event.keyCode === 13) {
            this.onClearClick();
        }
    }

    onKeyDown(event) {
        const { onKeyDown } = this.props;

        if (isFunction(onKeyDown)) {
            onKeyDown(event);
        }
    }

    onCloseSelectMenu() {
        this.setState({
            isSearchWithSelectMenuOpen: false,
        });
    }

    onOpenSelectMenu() {
        this.setState({
            isSearchWithSelectMenuOpen: true,
        });
    }

    render() {
        const {
            isSearchWithSelectMenuOpen,
        } = this.state;

        const {
            autoFocus,
            id,
            isMobileSearch,
            isMobileSearchVisible,
            onFocus,
            placeholder,
            searchWithSelect,
            style,
            value,
        } = this.props;

        const hasCorrectDataForSearchWithSelect = !isNil(searchWithSelect) &&
        isArray(searchWithSelect.options) &&
        isFunction(searchWithSelect.onChange) &&
        ('value' in searchWithSelect);

        if (!hasCorrectDataForSearchWithSelect) {
            console.warn( // eslint-disable-line no-console
                'Please provide correct props to integrate Select with action bar search. See documentation of react-cm-ui for more details.',
            );
        }

        const inputContainerClasses = ClassNames('action_bar--search', {
            'action_bar--search-mobile': isMobileSearch,
            'action_bar--search-mobile-show': isMobileSearch && isMobileSearchVisible,
            'action_bar--search-with-select': hasCorrectDataForSearchWithSelect,
            'action_bar--search-with-select-menu-open-mobile': isMobileSearch && isMobileSearchVisible && hasCorrectDataForSearchWithSelect && isSearchWithSelectMenuOpen,
        });
        let magnificationIcon = null;

        if (onFocus) {
            onFocus(isMobileSearchVisible);
        }

        if (!isMobileSearch) {
            magnificationIcon = (
                <Icon
                    compact
                    title="Search"
                    type="search"
                />
            );
        }

        return (
            <div
                className={inputContainerClasses}
            >
                {hasCorrectDataForSearchWithSelect && (
                    <ActionBarSearchSelect
                        dropdownArrowIconType={searchWithSelect.dropdownArrowIconType}
                        options={searchWithSelect.options}
                        onChange={searchWithSelect.onChange}
                        onCloseSelectMenu={this.onCloseSelectMenu}
                        onOpenSelectMenu={this.onOpenSelectMenu}
                        placeholder={searchWithSelect.placeholder}
                        value={searchWithSelect.value}
                    />
                )}
                <Input
                    autoFocus={autoFocus}
                    className="action_bar--search_input"
                    dataTestId={`${UI_CLASS_NAME}--search_input`}
                    fluid
                    icon={value ? (
                        <div
                            className="action_bar--clear_search"
                            onClick={this.onClearClick}
                            onKeyDown={this.onClearKeyDown}
                            role="button"
                            tabIndex={0}
                        >
                            <Icon
                                compact
                                title="Clear Search"
                                type="times-circle"
                            />
                        </div>
                    ) : magnificationIcon}
                    id={id}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    placeholder={placeholder}
                    value={value}
                    style={style}
                />
            </div>
        );
    }
}

ActionBarSearch.propTypes = propTypes;
ActionBarSearch.defaultProps = defaultProps;

export default ActionBarSearch;
