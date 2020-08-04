import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ActionBarActionsButtonDrawerOption from './actionBarActionsButtonDrawerOption';
import Button from '../../inputs/button';
import Drawer from '../../templates/drawer'; // eslint-disable-line import/no-cycle
import Header from '../../dataDisplay/header';
import Icon from '../../dataDisplay/icon';
import Prompt from '../../inputs/prompt';

const propTypes = {
    className: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    iconBackgroundColor: PropTypes.string,
    iconBackgroundHighlightColor: PropTypes.string,
    iconType: PropTypes.string,
    id: PropTypes.string,
    isMobileSearchVisible: PropTypes.bool,
    moduleType: PropTypes.oneOf(['drawer', 'page']),
    options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.shape({}), // eslint-disable-line react/forbid-prop-types
};

const defaultProps = {
    className: undefined,
    iconBackgroundColor: 'alternate',
    iconBackgroundHighlightColor: 'highlight',
    iconType: 'ellipsis-h',
    id: undefined,
    isMobileSearchVisible: false,
    moduleType: undefined,
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
            className,
            header,
            iconBackgroundColor,
            iconBackgroundHighlightColor,
            iconType,
            id,
            isMobileSearchVisible,
            moduleType,
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
        const containerClasses = ClassNames('action_bar--actions_button_drawer', className);
        const titleClasses = ClassNames('actions_button_drawer--title', {
            'actions_button_drawer--title-hide': hasSelectedOption,
            'actions_button_drawer--title-show': !hasSelectedOption,
        });

        const headerHeight = 55;
        const actionBarHeight = isMobileSearchVisible ? 105 : 50;

        let navigationBarHeight = 0;

        if (moduleType === 'drawer' && document.querySelector('.ui.drawer.drawer-has_navigation')) {
            navigationBarHeight = 55;
        }

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
                        color={isDrawerOpen ? iconBackgroundHighlightColor : iconBackgroundColor}
                        icon
                        id={id}
                        style={style}
                    >
                        <Icon
                            size="small"
                            type={iconType}
                        />
                    </Button>
                </Prompt>

                <Drawer
                    className={containerClasses}
                    dimmer={false}
                    isOpen={isDrawerOpen}
                    maxWidth={224}
                    onClose={this.onDrawerToggle}
                    onCloseComplete={this.onDrawerCloseComplete}
                    positionYOffset={headerHeight + actionBarHeight + navigationBarHeight}
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
