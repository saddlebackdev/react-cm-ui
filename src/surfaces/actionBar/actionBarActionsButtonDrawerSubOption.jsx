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
    onKeyDown: PropTypes.func,
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
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    onClick() {
        const {
            onRequestPrompt,
            subOption,
        } = this.props;

        const {
            disable,
            onClick: subOptionOnClick,
            requiresPrompt,
        } = subOption;

        if (!isFunction(subOptionOnClick) || disable) {
            return;
        }

        if (requiresPrompt && isFunction(onRequestPrompt)) {
            onRequestPrompt(subOption);

            return;
        }

        if (isFunction(subOptionOnClick)) {
            subOptionOnClick();
        }
    }

    onKeyDown(event) {
        const {
            subOption: {
                onKeyDown,
            },
        } = this.props;

        if (isFunction(onKeyDown)) {
            onKeyDown(event);
        }
    }

    render() {
        const {
            isSelected,
            subOption,
            subOptionClassNameNum,
        } = this.props;

        const isSubOptionDisabled = subOption.disable;
        const classNameNumber = subOptionClassNameNum;
        const subOptionClassName = 'actions_button_drawer--sub_option';

        const subOptionClasses = ClassNames(
            subOptionClassName,
            `${subOptionClassName}-${classNameNumber}`,
            {
                [`${subOptionClassName}-${classNameNumber}-show`]: isSelected,
                [`${subOptionClassName}-${classNameNumber}-disabled`]: isSubOptionDisabled,
            },
        );

        return (
            <div
                className={subOptionClasses}
                onClick={this.onClick}
                onKeyDown={this.onKeyDown}
                role="menuitem"
                tabIndex={0}
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
    }
}

ActionBarActionsButtonDrawerSubOption.propTypes = propTypes;
ActionBarActionsButtonDrawerSubOption.defaultProps = defaultProps;

export default ActionBarActionsButtonDrawerSubOption;
