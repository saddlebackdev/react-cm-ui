import {
    isFunction,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../inputs/button';
import Prompt from '../../inputs/prompt';
import makeStyles from '../../styles/makeStyles';
import { BEM_PERSON_PANEL_DETAILS_ACTION_BUTTON } from '../../global/constants';

const propTypes = {
    className: PropTypes.string,
    disable: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDown: PropTypes.func,
    onPromptCancelClick: PropTypes.func,
    onPromptConfirmClick: PropTypes.func,
    outlined: PropTypes.bool,
    prompt: PropTypes.bool,
    promptId: PropTypes.string,
    title: PropTypes.string,
};

const defaultProps = {
    className: null,
    disable: false,
    id: null,
    onClick: null,
    onKeyDown: null,
    onPromptCancelClick: null,
    onPromptConfirmClick: null,
    outlined: false,
    prompt: false,
    promptId: null,
};

const useStyles = makeStyles({
    button: {},
    prompt: {
        marginRight: 11,
    },
});

function PersonPanelDetailsActionButton(props) {
    const {
        className,
        disable,
        id,
        label,
        onClick: onClickProp,
        onKeyDown: onKeyDownProp,
        onNoClick: onNoClickProp,
        onYesClick: onYesClickProp,
        outlined,
        prompt,
        promptId,
        title,
    } = props;
    const [showPrompt, setShowPrompt] = useState(false);
    const classes = useStyles(props);

    const onClick = (event) => {
        if (isFunction(onClickProp)) {
            onClickProp(event);
        }
    };

    const onKeyDownClick = (event) => {
        if (isFunction(onKeyDownProp)) {
            onKeyDownProp(event);
        }
    };

    const onNoClick = (event) => {
        setShowPrompt(false);

        if (isFunction(onNoClickProp)) {
            onNoClickProp(event);
        }
    };

    const onPromptClick = () => {
        setShowPrompt(true);
    };

    const onYesClick = (event) => {
        setShowPrompt(false);

        if (isFunction(onYesClickProp)) {
            onYesClickProp(event);
        }
    };

    const buttonJSX = (
        <Button
            className={ClassNames(
                BEM_PERSON_PANEL_DETAILS_ACTION_BUTTON,
                classes.button,
                className,
            )}
            color="primary"
            designVersion={2}
            disabled={disable}
            id={id}
            onClick={onClick}
            onKeyDown={onKeyDownClick}
            title={title}
            variant={outlined ? 'outlined' : 'contained'}
        >
            {label}
        </Button>
    );

    if (prompt && !disable) {
        return (
            <Prompt
                className={ClassNames(
                    classes.prompt,
                    className,
                )}
                id={promptId}
                inline
                inlineMessageColor="success"
                onClick={onPromptClick}
                onNoClick={onNoClick}
                onYesClick={onYesClick}
                show={showPrompt}
            >
                {buttonJSX}
            </Prompt>
        );
    }

    return buttonJSX;
}

PersonPanelDetailsActionButton.propTypes = propTypes;
PersonPanelDetailsActionButton.defaultProps = defaultProps;

export default PersonPanelDetailsActionButton;
