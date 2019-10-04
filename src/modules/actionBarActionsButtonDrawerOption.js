import { backgroundColorStatic } from 'shared/styles/colors.scss';
import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../elements/icon.js';
import Utils from '../utils/utils.js';

const nop = () => {};

function ActionBarActionsButtonDrawerSubOption({
    isSelected,
    subOption,
    subOptionClassNameNum,
}) {
    const classNameNumber = subOptionClassNameNum;
    const subOptionClasses = ClassNames(
        'actions_button_drawer--sub_option',
        `actions_button_drawer--sub_option-${classNameNumber}`,
        `${isSelected ? `actions_button_drawer--sub_option-${classNameNumber}-show` : ''}`,
        `${subOption.disabled ? `actions_button_drawer--sub_option-${classNameNumber}-disabled` : ''}`,
    );

    const subOptionOnClick = _.isFunction(subOption.onClick) && !subOption.disabled ?
        subOption.onClick :
        nop;

    /* eslint-disable jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */
    return (
        <div
            className={subOptionClasses}
            onClick={subOptionOnClick}
            role="menuitem"
        >
            <div
                className="actions_button_drawer_sub_option--icon_container"
                id={subOption.id}
            >
                <Icon
                    color={subOption.disabled ? 'static' : subOption.iconColor}
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
    /* eslint-enable jsx-a11y/interactive-supports-focus,jsx-a11y/click-events-have-key-events */
}

const singleOptionPropTypeShape = {
    disable: PropTypes.bool,
    id: PropTypes.string,
    iconBackgroundColor: PropTypes.string,
    iconColor: PropTypes.string,
    iconSize: PropTypes.oneOfType([
        PropTypes.oneOf(Utils.sizeEnums()),
        PropTypes.number,
    ]),
    iconType: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
};

ActionBarActionsButtonDrawerSubOption.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    subOption: PropTypes.shape(singleOptionPropTypeShape).isRequired,
    subOptionClassNameNum: PropTypes.number.isRequired,
};

class ActionBarActionsButtonDrawerOption extends React.PureComponent {
    constructor() {
        super();

        this.onParentClick = this.onParentClick.bind(this);
    }

    onParentClick() {
        const { isSelected, onClick, option } = this.props;

        if (_.isFunction(option.onClick)) {
            if (option.disabled) {
                return false;
            }

            option.onClick();
            return false;
        }

        onClick(isSelected ? {} : option);
        return true;
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
            'actions_button_drawer--option-disabled': option.disabled,
        });

        const subOptionsClasses = ClassNames('actions_button_drawer--sub_options', {
            'actions_button_drawer--sub_options-hide': !isSelected,
            'actions_button_drawer--sub_options-show': isSelected,
        });

        let subOptionClassNameNum = 1;
        let subOptionKeyNum = 1;

        /* eslint-disable jsx-a11y/click-events-have-key-events */
        return (
            <div
                className={containerClasses}
            >
                <div
                    className={parentOptionClasses}
                    onClick={this.onParentClick}
                    role="menuitem"
                    tabIndex={idNumber}
                >
                    <div
                        className="actions_button_drawer_option--icon_container"
                        id={option.id}
                        style={{
                            backgroundColor: option.disabled ?
                                backgroundColorStatic :
                                option.iconBackgroundColor,
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
                            const classNameNumber = subOptionClassNameNum++; // eslint-disable-line max-len,no-plusplus

                            return (
                                <ActionBarActionsButtonDrawerSubOption
                                    isSelected={isSelected}
                                    key={`actions_button_drawer_sub_option-${subOptionKeyNum++/* eslint-disable-line no-plusplus */}`}
                                    subOption={subOption}
                                    subOptionClassNameNum={classNameNumber}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        );
        /* eslint-enable jsx-a11y/click-events-have-key-events */
    }
}

const rootOptionPropTypeShape = {
    ...singleOptionPropTypeShape,
    options: PropTypes.arrayOf(PropTypes.shape(singleOptionPropTypeShape)),
};

ActionBarActionsButtonDrawerOption.propTypes = {
    hide: PropTypes.bool,
    idNumber: PropTypes.number,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    option: PropTypes.shape(rootOptionPropTypeShape).isRequired,
};

ActionBarActionsButtonDrawerOption.defaultProps = {
    hide: false,
    idNumber: false,
    isSelected: false,
};

export default ActionBarActionsButtonDrawerOption;
