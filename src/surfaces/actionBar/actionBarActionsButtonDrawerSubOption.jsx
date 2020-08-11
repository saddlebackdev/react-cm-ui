import { isFunction } from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Icon from '../../dataDisplay/icon';
import Utils from '../../utils/utils';

export const singleOptionPropTypeShape = {
    disable: PropTypes.bool,
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

    componentDidUpdate(prevProps) {
        const {
            subOption: {
                disabled: prevSubOptionDisabled,
            },
        } = prevProps;
        const {
            subOption: {
                disabled: subOptionDisabled,
            },
        } = this.props;

        if (prevSubOptionDisabled !== subOptionDisabled && subOptionDisabled) {
            // eslint-disable-next-line no-console
            console.warn('ActionBarActionsButtonDrawerSubOption (react-cm-ui): The prop \'disabled\' is deprecrated. Please use \'disable\' instead.');
        }
    }

    onClick() {
        const {
            onRequestPrompt,
            subOption,
        } = this.props;
        const {
            disable,
            disabled,
            onClick: subOptionOnClick,
            requiresPrompt,
        } = subOption;

        if (!isFunction(subOptionOnClick)) {
            return false;
        }

        if (disable || disabled) {
            return false;
        }

        if (requiresPrompt && isFunction(onRequestPrompt)) {
            onRequestPrompt(subOption);
            return false;
        }

        if (isFunction(subOptionOnClick)) {
            subOptionOnClick();
        }

        return true;
    }

    render() {
        const {
            isSelected,
            subOption,
            subOptionClassNameNum,
        } = this.props;
        const isSubOptionDisabled = subOption.disable || subOption.disabled;
        const classNameNumber = subOptionClassNameNum;
        const subOptionClasses = ClassNames(
            'actions_button_drawer--sub_option',
            `actions_button_drawer--sub_option-${classNameNumber}`,
            `${isSelected ? `actions_button_drawer--sub_option-${classNameNumber}-show` : ''}`,
            `${isSubOptionDisabled ? `actions_button_drawer--sub_option-${classNameNumber}-disabled` : ''}`,
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
                            color={isSubOptionDisabled ? 'static' : subOption.iconColor}
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
