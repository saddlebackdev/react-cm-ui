import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import colorStyles from '../../styles/colorExports'; // eslint-disable-line import/extensions
import ActionBarActionsButtonDrawerSubOption, {
    singleOptionPropTypeShape,
} from './actionBarActionsButtonDrawerSubOption';
import Icon from '../../dataDisplay/icon';

const rootOptionPropTypeShape = {
    ...singleOptionPropTypeShape,
    options: PropTypes.arrayOf(PropTypes.shape(singleOptionPropTypeShape)),
};

const propTypes = {
    hide: PropTypes.bool,
    idNumber: PropTypes.number,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    onRequestPrompt: PropTypes.func,
    option: PropTypes.shape(rootOptionPropTypeShape).isRequired,
};

const defaultProps = {
    hide: false,
    idNumber: false,
    isSelected: false,
    onRequestPrompt: undefined,
};

class ActionBarActionsButtonDrawerOption extends React.PureComponent {
    constructor() {
        super();

        this.onParentClick = this.onParentClick.bind(this);
    }

    onParentClick() {
        const {
            isSelected,
            onClick,
            onRequestPrompt,
            option,
        } = this.props;

        if (_.isFunction(option.onClick)) {
            if (option.disabled) {
                return false;
            }

            if (option.requiresPrompt) {
                if (_.isFunction(onRequestPrompt)) {
                    onRequestPrompt(option);
                    return false;
                }
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
            onRequestPrompt,
            option,
        } = this.props;

        const containerClasses = ClassNames(
            'actions_button_drawer--option_container',
            `actions_button_drawer--option_container-${idNumber}`,
            `${hide ? `actions_button_drawer--option_container-${idNumber}-hide` : ''}`,
            `${!hide && !isSelected ? `actions_button_drawer--option_container-${idNumber}-show` : ''}`,
            {
                [`actions_button_drawer--option_container-${idNumber}-selected`]: isSelected,
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
                    {option.iconType && (
                        <div
                            className="actions_button_drawer_option--icon_container"
                            id={option.id}
                            style={{
                                backgroundColor: option.disabled ?
                                    colorStyles.backgroundColorStatic :
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
                    )}

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
                                    onRequestPrompt={onRequestPrompt}
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

ActionBarActionsButtonDrawerOption.propTypes = propTypes;
ActionBarActionsButtonDrawerOption.defaultProps = defaultProps;

export default ActionBarActionsButtonDrawerOption;
