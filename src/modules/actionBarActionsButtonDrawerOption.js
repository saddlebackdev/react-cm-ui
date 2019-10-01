import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../elements/icon.js';

class ActionBarActionsButtonDrawerOption extends React.PureComponent {
    constructor() {
        super();

        this.onParentClick = this.onParentClick.bind(this);
        this.onSubOptionClick = this.onSubOptionClick.bind(this);
    }

    onSubOptionClick(onClick) {

    }

    onParentClick() {
        const { isSelected, onClick, option } = this.props;

        if (_.isFunction(option.onClick)) {
            option.onClick();

            return false;
        }

        onClick(isSelected ? {} : option);
    }

    render() {
        const {
            hide,
            idNumber,
            isSelected,
            option,
        } = this.props;
        const containerClasses = ClassNames(
            'actions_button_drawer--option_container',
            `actions_button_drawer--option_container-${idNumber}`,
            `${hide ? `actions_button_drawer--option_container-${idNumber}-hide` : ''}`,
            `${!hide && !isSelected ? `actions_button_drawer--option_container-${idNumber}-show` : ''}`,
            {
                'actions_button_drawer--option_container-selected': isSelected,
            },
        );
        const parentOptionClasses = ClassNames('actions_button_drawer--option', {
            'actions_button_drawer--option-selected': isSelected,
            'actions_button_drawer--option-disable': option.disable,
        });
        const subOptionsClasses = ClassNames('actions_button_drawer--sub_options', {
            'actions_button_drawer--sub_options-hide': !isSelected,
            'actions_button_drawer--sub_options-show': isSelected,
        });
        let subOptionClassNameNum = 1;
        let subOptionKeyNum = 1;

        return (
            <div
                className={containerClasses}
            >
                <div
                    className={parentOptionClasses}
                    onClick={this.onParentClick}
                >
                    <div
                        className="actions_button_drawer_option--icon_container"
                        id={option.id}
                        style={{
                            backgroundColor: option.iconBackgroundColor,
                        }}
                    >
                        <Icon
                            color={option.iconColor}
                            compact
                            className="actions_button_drawer_option--icon"
                            inverse
                            size={option.iconSize || 16}
                            type={option.iconType}
                        />
                    </div>

                    <div
                        className="actions_button_drawer_option--label"
                    >
                        {option.label}
                    </div>
                </div>

                {option.options && (
                    <div className={subOptionsClasses}>
                        {_.map(option.options, (subOption) => {
                            const classNameNumber = subOptionClassNameNum++;
                            const subOptionClasses = ClassNames(
                                'actions_button_drawer--sub_option',
                                `actions_button_drawer--sub_option-${classNameNumber}`,
                                `${isSelected ? `actions_button_drawer--sub_option-${classNameNumber}-show` : ''}`,
                            );

                            return (
                                <div
                                    className={subOptionClasses}
                                    key={`actions_button_drawer_sub_option-${subOptionKeyNum++}`}
                                    onClick={this.onSubOptionClick}
                                >
                                    <div
                                        className="actions_button_drawer_sub_option--icon_container"
                                        id={subOption.id}
                                    >
                                        <Icon
                                            color={subOption.iconColor}
                                            compact
                                            className="actions_button_drawer_sub_option--icon"
                                            size={subOption.iconSize || 16}
                                            type={subOption.iconType}
                                        />
                                    </div>

                                    <div
                                        className="actions_button_drawer_sub_option--label"
                                    >
                                        {subOption.label}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

ActionBarActionsButtonDrawerOption.propsTypes = {
    hide: PropTypes.bool,
    idNumber: PropTypes.number,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    option: PropTypes.object.isRequired,
};

ActionBarActionsButtonDrawerOption.defaultProps = {
    hide: false,
    idNumber: false,
    isSelected: false,
};

export default ActionBarActionsButtonDrawerOption;
