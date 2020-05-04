import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../dataDisplay/icon';
import Utils from '../utils/utils';

export const singleOptionPropTypeShape = {
    disabled: PropTypes.bool,
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
    promptColor: PropTypes.string,
    promptMessage: PropTypes.string,
    requiresPrompt: PropTypes.bool,
};

const propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onRequestPrompt: PropTypes.func,
    subOption: PropTypes.shape(singleOptionPropTypeShape).isRequired,
    subOptionClassNameNum: PropTypes.number.isRequired,
};

const defaultProps = {
    onRequestPrompt: undefined,
};

class ActionBarActionsButtonDrawerSubOption extends React.PureComponent {
    constructor() {
        super();

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const {
            onRequestPrompt,
            subOption,
            subOption: {
                disabled,
                onClick: subOptionOnClick,
                requiresPrompt,
            },
        } = this.props;

        if (!_.isFunction(subOptionOnClick)) {
            return false;
        }

        if (disabled) {
            return false;
        }

        if (requiresPrompt && _.isFunction(onRequestPrompt)) {
            onRequestPrompt(subOption);
            return false;
        }

        subOptionOnClick();
        return true;
    }

    render() {
        const {
            isSelected,
            subOption,
            subOptionClassNameNum,
        } = this.props;

        const classNameNumber = subOptionClassNameNum;
        const subOptionClasses = ClassNames(
            'actions_button_drawer--sub_option',
            `actions_button_drawer--sub_option-${classNameNumber}`,
            `${isSelected ? `actions_button_drawer--sub_option-${classNameNumber}-show` : ''}`,
            `${subOption.disabled ? `actions_button_drawer--sub_option-${classNameNumber}-disabled` : ''}`,
        );

        /* eslint-disable jsx-a11y/click-events-have-key-events */
        /* eslint-disable jsx-a11y/interactive-supports-focus */
        return (
            <div
                className={subOptionClasses}
                onClick={this.onClick}
                role="menuitem"
            >
                {subOption.iconType && (
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
                )}

                <div
                    className="actions_button_drawer_sub_option--label"
                >
                    {subOption.label}
                </div>
            </div>
        );
        /* eslint-enable jsx-a11y/click-events-have-key-events */
        /* eslint-enable jsx-a11y/interactive-supports-focus */
    }
}

ActionBarActionsButtonDrawerSubOption.propTypes = propTypes;
ActionBarActionsButtonDrawerSubOption.defaultProps = defaultProps;

export default ActionBarActionsButtonDrawerSubOption;
