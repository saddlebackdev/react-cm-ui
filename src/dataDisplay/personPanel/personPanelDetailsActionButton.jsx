import {
    isFunction,
} from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Button from '../../inputs/button';
import Prompt from '../../inputs/prompt';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onKeyDownClick: PropTypes.func,
    onPromptCancelClick: PropTypes.func,
    onPromptConfirmClick: PropTypes.func,
    outlined: PropTypes.bool,
    prompt: PropTypes.bool,
    promptId: PropTypes.bool,
    title: PropTypes.string,
};

const defaultProps = {
    className: null,
    id: null,
    onClick: null,
    onKeyDownClick: null,
    onPromptCancelClick: null,
    onPromptConfirmClick: null,
    outlined: false,
    prompt: null,
    promptId: null,
};

const useStyles = makeStyles({
    prompt: {
        marginRight: '11px',
    },
});

function PersonPanelDetails(props) {
    const {
        className,
        id,
        label,
        onClick: onClickProp,
        onKeyDownClick: onKeyDownClickProp,
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
        if (isFunction(onKeyDownClickProp)) {
            onKeyDownClickProp(event);
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
            className={className}
            id={id}
            outlined={outlined}
            onClick={onClick}
            onKeyDownClick={onKeyDownClick}
            title={title}
        >
            {label}
        </Button>
    );

    if (prompt) {
        return (
            <Prompt
                className={classes.prompt}
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

PersonPanelDetails.propTypes = propTypes;
PersonPanelDetails.defaultProps = defaultProps;

export default PersonPanelDetails;
