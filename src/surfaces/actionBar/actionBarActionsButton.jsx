import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    MD_HEIGHT,
    SM_HEIGHT,
} from './actionBarConstants';
import ActionBarActionsButtonDrawerOption from './actionBarActionsButtonDrawerOption';
import Button from '../../inputs/button';
import Drawer from '../drawer'; // eslint-disable-line import/no-cycle
import Typography from '../../dataDisplay/typography';
import Icon from '../../dataDisplay/icon';
import Prompt from '../../inputs/prompt';
import withTheme from '../../styles/withTheme';

const propTypes = {
    actionBarNode: PropTypes.shape({}),
    className: PropTypes.string,
    drawerContainer: PropTypes.shape({}),
    header: PropTypes.string.isRequired,
    iconBackgroundColor: PropTypes.string,
    iconBackgroundActiveColor: PropTypes.string,
    iconType: PropTypes.string,
    id: PropTypes.string,
    isMobileSearchVisible: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    style: PropTypes.shape({}),
    theme: PropTypes.shape({
        breakpoints: PropTypes.shape({
            values: PropTypes.shape({
                md: PropTypes.number,
            }),
        }),
    }).isRequired,
};

const defaultProps = {
    actionBarNode: null,
    className: undefined,
    drawerContainer: null,
    iconBackgroundColor: 'secondary',
    iconBackgroundHighlightColor: 'primary',
    iconType: 'ellipsis-h',
    id: undefined,
    isMobileSearchVisible: false,
    style: {},
};

class ActionBarActionsButton extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            actionBarBottomPosY: null,
            isDrawerOpen: false,
            isPromptVisible: false,
            promptingOption: null,
            selectedOption: {},
        };

        this.isDrawerClosing = false;
        this.onDrawerCloseComplete = this.onDrawerCloseComplete.bind(this);
        this.onDrawerToggle = this.onDrawerToggle.bind(this);
        this.onDrawerClose = this.onDrawerClose.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
        this.onPromptNoClick = this.onPromptNoClick.bind(this);
        this.onPromptRequested = this.onPromptRequested.bind(this);
        this.onPromptYesClick = this.onPromptYesClick.bind(this);
    }

    componentDidUpdate(prevProps) {
        const {
            isMobileSearchVisible: prevIsMobileSearchVisible,
        } = prevProps;

        const {
            isMobileSearchVisible,
        } = this.props;

        const {
            actionBarBottomPosY,
        } = this.state;

        if (!actionBarBottomPosY || prevIsMobileSearchVisible !== isMobileSearchVisible) {
            this.setState({
                actionBarBottomPosY: this.setActionBarBottomPosY(),
            });
        }
    }

    onDrawerCloseComplete() {
        this.isDrawerClosing = false;

        this.setState({
            selectedOption: {},
        });
    }

    onDrawerClose() {
        this.isDrawerClosing = true;

        this.setState({
            isDrawerOpen: false,
        });
    }

    onDrawerToggle() {
        if (!this.isDrawerClosing) {
            this.setState((prevState) => ({
                isDrawerOpen: !prevState.isDrawerOpen,
            }));
        }
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

    setActionBarBottomPosY() {
        const {
            actionBarNode,
            isMobileSearchVisible,
            theme,
        } = this.props;

        if (actionBarNode) {
            const bodyWidth = actionBarNode.closest('body').offsetWidth;

            let actionBarHeight;

            if (bodyWidth >= theme.breakpoints.values.md) {
                actionBarHeight = MD_HEIGHT;
            } else {
                const searchVisibleHeightAdjustment = isMobileSearchVisible ? 55 : 0;

                actionBarHeight = SM_HEIGHT + searchVisibleHeightAdjustment;
            }

            const actionBarPosY = actionBarNode.getBoundingClientRect().y;

            return actionBarPosY + actionBarHeight;
        }

        return null;
    }

    render() {
        const {
            actionBarNode,
            className,
            drawerContainer,
            header,
            iconBackgroundColor,
            iconBackgroundActiveColor,
            iconType,
            id,
            options,
            style,
        } = this.props;

        const {
            actionBarBottomPosY,
        } = this.state;

        if (!actionBarNode || !actionBarBottomPosY) {
            return null;
        }

        const {
            isDrawerOpen,
            isPromptVisible,
            promptingOption,
            selectedOption,
        } = this.state;

        const hasSelectedOption = !_.isEmpty(selectedOption);
        const drawerContainerClasses = ClassNames('action_bar--actions_button_drawer', className);

        const titleClasses = ClassNames(
            'actions_button_drawer--title',
            {
                'actions_button_drawer--title-hide': hasSelectedOption,
                'actions_button_drawer--title-show': !hasSelectedOption,
            },
        );

        const promptMessage = !_.isEmpty(promptingOption) ?
            promptingOption.promptMessage :
            undefined;

        const promptColor = !_.isEmpty(promptingOption) ?
            promptingOption.promptColor :
            undefined;

        let optionKeyNum = 0;

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
                        color={isDrawerOpen ? iconBackgroundActiveColor : iconBackgroundColor}
                        designVersion={2}
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
                    className={drawerContainerClasses}
                    container={drawerContainer}
                    dimmer={false}
                    isOpen={isDrawerOpen}
                    maxWidth={224}
                    onClickOutside
                    onClose={this.onDrawerClose}
                    onCloseComplete={this.onDrawerCloseComplete}
                    positionYOffset={actionBarBottomPosY}
                    shadowSize="xsmall"
                >
                    <Drawer.Content className="actions_button_drawer--content">
                        <Typography
                            className={titleClasses}
                            variant="h4"
                        >
                            {header}
                        </Typography>

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

export default withTheme(ActionBarActionsButton);
