import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../../dataDisplay/icon';
import Input from '../../inputs/input';

const propTypes = {
    autoFocus: PropTypes.bool,
    id: PropTypes.string,
    isMobileSearch: PropTypes.bool,
    isMobileSearchVisible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onClearClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
    value: PropTypes.string,
};

const defaultProps = {
    autoFocus: false,
    id: undefined,
    isMobileSearch: false,
    isMobileSearchVisible: false,
    onClearClick: undefined,
    onKeyDown: undefined,
    placeholder: 'Search',
    style: {},
    value: '',
};

class ActionBarSearch extends React.PureComponent {
    constructor() {
        super();

        this.onChange = this.onChange.bind(this);
        this.onClearClick = this.onClearClick.bind(this);
        this.onClearKeyDown = this.onClearKeyDown.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onChange(value) {
        const { onChange } = this.props;

        onChange(value);
    }

    onClearClick() {
        const { onChange, onClearClick } = this.props;

        if (_.isFunction(onClearClick)) {
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

        if (_.isFunction(onKeyDown)) {
            onKeyDown(event);
        }
    }

    render() {
        const {
            autoFocus,
            id,
            isMobileSearch,
            isMobileSearchVisible,
            placeholder,
            style,
            value,
        } = this.props;
        const inputContainerClasses = ClassNames('action_bar--search', {
            'action_bar--search-mobile': isMobileSearch,
            'action_bar--search-mobile-show': isMobileSearch && isMobileSearchVisible,
        });
        let magnificationIcon = null;

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
                <Input
                    autoFocus={autoFocus}
                    className="action_bar--search_input"
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
