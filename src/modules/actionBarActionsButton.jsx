import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ActionBarActionsButtonDrawerOption from './actionBarActionsButtonDrawerOption';
import Button from '../elements/button';
import Drawer from './drawer'; // eslint-disable-line import/no-cycle
import Header from '../elements/header';
import Icon from '../elements/icon';
import Prompt from './prompt';

const propTypes = {
    header: PropTypes.string.isRequired,
    id: PropTypes.string,
    isMobileSearchVisible: PropTypes.bool,
    options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
    id: undefined,
    isMobileSearchVisible: false,
    style: {},
};

class ActionBarActionsButton extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isDrawerOpen: false,
            isPromptVisible: false,
            promptingOption: null,
            selectedOption: {},
        };

        this.onDrawerCloseComplete = this.onDrawerCloseComplete.bind(this);
        this.onDrawerToggle = this.onDrawerToggle.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.onPromptNoClick = this.onPromptNoClick.bind(this);
        this.onPromptRequested = this.onPromptRequested.bind(this);
        this.onPromptYesClick = this.onPromptYesClick.bind(this);
    }

    onDrawerCloseComplete() {
        this.setState({
            selectedOption: {},
        });
    }

    onDrawerToggle() {
        this.setState((prevState) => ({
            isDrawerOpen: !prevState.isDrawerOpen,
        }));
    }

    onOptionClick(option) {
        this.setState({
            selectedOption: option || {},
        });
    }

    onPromptNoClick() {
        this.setState({
            isDrawerOpen: true,
            isPromptVisible: false,
            promptingOption: null,
        });
    }

    onPromptRequested(option) {
        this.setState({
            isDrawerOpen: false,
            isPromptVisible: true,
            promptingOption: option,
        });
    }

    onPromptYesClick() {
        const { promptingOption } = this.state;

        if (!_.isEmpty(promptingOption) && _.isFunction(promptingOption.onClick)) {
            promptingOption.onClick();
        }

        this.setState({
            isPromptVisible: false,
            promptingOption: null,
        });
    }

    render() {
        const {
            header,
            id,
            isMobileSearchVisible,
            options,
            style,
        } = this.props;

        const {
            isDrawerOpen,
            isPromptVisible,
            promptingOption,
            selectedOption,
        } = this.state;

        const hasSelectedOption = !_.isEmpty(selectedOption);
        const titleClasses = ClassNames('actions_button_drawer--title', {
            'actions_button_drawer--title-hide': hasSelectedOption,
            'actions_button_drawer--title-show': !hasSelectedOption,
        });

        const headerHeight = 55;
        const actionBarHeight = isMobileSearchVisible ? 105 : 50;

        const promptMessage = !_.isEmpty(promptingOption) ?
            promptingOption.promptMessage :
            undefined;

        const promptColor = !_.isEmpty(promptingOption) ?
            promptingOption.promptColor :
            undefined;

        let optionKeyNum = 1;

        return (
            <React.Fragment>
                <Prompt
                    inline
                    inlineHorizontalAlign="right"
                    inlineMessageColor={promptColor}
                    message={promptMessage}
                    onClick={this.onDrawerToggle}
                    onNoClick={this.onPromptNoClick}
                    onYesClick={this.onPromptYesClick}
                    show={isPromptVisible}
                >
                    <Button
                        className="action_bar--actions_button"
                        color={isDrawerOpen ? 'highlight' : 'alternate'}
                        icon
                        id={id}
                        style={style}
                    >
                        <Icon size="small" type="ellipsis-h" />
                    </Button>
                </Prompt>

                <Drawer
                    className="action_bar--actions_button_drawer"
                    dimmer={false}
                    isOpen={isDrawerOpen}
                    maxWidth={224}
                    onClose={this.onDrawerToggle}
                    onCloseComplete={this.onDrawerCloseComplete}
                    positionYOffset={headerHeight + actionBarHeight}
                    shadowSize="xsmall"
                >
                    <Drawer.Content className="actions_button_drawer--content">
                        <Header
                            className={titleClasses}
                            size="small"
                            fontWeight="bold"
                        >
                            {header}
                        </Header>

                        <div className="actions_button_drawer--options">
                            {_.map(options, (option) => {
                                optionKeyNum += 1;
                                const isSelected = hasSelectedOption &&
                                    selectedOption.label === option.label;
                                const hide = (hasSelectedOption &&
                                    selectedOption.label !== option.label) || false;

                                return (
                                    <ActionBarActionsButtonDrawerOption
                                        hide={hide}
                                        idNumber={optionKeyNum}
                                        isSelected={isSelected}
                                        key={`actions_button_drawer--option-${optionKeyNum}`}
                                        onClick={this.onOptionClick}
                                        onRequestPrompt={this.onPromptRequested}
                                        option={option}
                                    />
                                );
                            })}
                        </div>
                    </Drawer.Content>
                </Drawer>
            </React.Fragment>
        );
    }
}

ActionBarActionsButton.propTypes = propTypes;
ActionBarActionsButton.defaultProps = defaultProps;

export default ActionBarActionsButton;
