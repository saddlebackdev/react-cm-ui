import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../elements/icon.js';
import Input from '../elements/input.js';

class ActionBarSearch extends React.PureComponent {
    constructor() {
        super();

        this.onClearClick = this.onClearClick.bind(this);
        this.onChange = this.onChange.bind(this);
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

    onKeyDown(event) {
        const { onKeyDown } = this.props;

        if (_.isFunction(onKeyDown)) {
            onKeyDown(event);
        }
    }

    render() {
        const {
            id,
            isMobileSearch,
            isMobileSearchVisible,
            style,
            value,
        } = this.props;
        const inputContainerClasses = ClassNames('action_bar--search', {
            'action_bar--search-mobile': isMobileSearch,
            'action_bar--search-mobile-show': isMobileSearch && isMobileSearchVisible,
        });

        return (
            <div
                className={inputContainerClasses}
            >
                <Input
                    className="action_bar--search_input"
                    fluid
                    icon={value ? (
                        <Icon
                            compact
                            onClick={this.onClearClick}
                            title="Clear Search"
                            type="times"
                        />
                    ) : (
                        <Icon
                            compact
                            title="Search"
                            type="search"
                        />
                    )}
                    id={id}
                    onChange={this.onChange}
                    onKeyDown={this.onKeyDown}
                    placeholder="Search"
                    value={value}
                    style={style}
                />
            </div>
        );
    }
}

ActionBarSearch.propTypes = {
    id: PropTypes.string,
    isMobileSearch: PropTypes.bool,
    isMobileSearchVisible: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
    onClearClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
    value: PropTypes.string,
};

ActionBarSearch.defaultProps = {
    id: undefined,
    isMobileSearch: false,
    isMobileSearchVisible: false,
    onClearClick: undefined,
    onKeyDown: undefined,
    style: {},
    value: '',
};

export default ActionBarSearch;
