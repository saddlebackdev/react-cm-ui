import _ from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ActionBarActionsButtonDrawerOption from './actionBarActionsButtonDrawerOption.js';
import Button from '../elements/button.js';
import Drawer from './drawer.js'; // eslint-disable-line import/no-cycle
import Header from '../elements/header.js';
import Icon from '../elements/icon.js';

class ActionBarActionsButton extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isDrawerOpen: false,
            selectedOption: {},
        };

        this.onDrawerCloseComplete = this.onDrawerCloseComplete.bind(this);
        this.onDrawerToggle = this.onDrawerToggle.bind(this);
        this.onOptionClick = this.onOptionClick.bind(this);
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

    render() {
        const {
            header,
            id,
            isMobileSearchVisible,
            options,
            style,
        } = this.props;
        const { isDrawerOpen, selectedOption } = this.state;
        const isSelectedOption = !_.isEmpty(selectedOption);
        const titleClasses = ClassNames('actions_button_drawer--title', {
            'actions_button_drawer--title-hide': isSelectedOption,
            'actions_button_drawer--title-show': !isSelectedOption,
        });
        const headerHeight = 55;
        const actionBarHeight = isMobileSearchVisible ? 105 : 50;
        let optionKeyNum = 1;

        return (
            <React.Fragment>
                <Button
                    className="action_bar--actions_button"
                    color={isDrawerOpen ? 'highlight' : 'alternate'}
                    icon
                    id={id}
                    onClick={this.onDrawerToggle}
                    style={style}
                >
                    <Icon size="small" type="ellipsis-h" />
                </Button>

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
                                const isSelected = isSelectedOption &&
                                    selectedOption.label === option.label;
                                const hide = (isSelectedOption &&
                                    selectedOption.label !== option.label) || false;

                                return (
                                    <ActionBarActionsButtonDrawerOption
                                        hide={hide}
                                        idNumber={optionKeyNum}
                                        isSelected={isSelected}
                                        key={`actions_button_drawer--option-${optionKeyNum}`}
                                        onClick={this.onOptionClick}
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

ActionBarActionsButton.propTypes = {
    header: PropTypes.string.isRequired,
    id: PropTypes.string,
    isMobileSearchVisible: PropTypes.bool,
    options: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
    style: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

ActionBarActionsButton.defaultProps = {
    id: undefined,
    isMobileSearchVisible: false,
    style: {},
};

export default ActionBarActionsButton;
