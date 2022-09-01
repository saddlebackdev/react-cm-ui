/* eslint-disable linebreak-style */
import React, {
    useState,
    useEffect,
} from 'react';
import PropTypes from 'prop-types';
import MUIButton from '@material-ui/core/Button';
import MUIButtonGroup from '@material-ui/core/ButtonGroup';
import {
    noop,
} from 'lodash';

function ButtonGroup(props) {
    const {
        classes,
        buttons,
        defaultSelectedButton,
        onChange: onChangeProp = noop,
    } = props;

    const [selectedButton, setSelectedButton] = useState(defaultSelectedButton || buttons[0].value);

    useEffect(() => {
        onChangeProp(selectedButton);
    }, [selectedButton, onChangeProp]);

    return (
        <MUIButtonGroup
            color="primary"
            size="large"
            classes={classes}
        >
            {buttons.map((button) => (
                <MUIButton
                    key={button.value}
                    onClick={() => { setSelectedButton(button.value); }}
                    variant={button.value === selectedButton ? 'contained' : 'outlined'}
                >
                    {button.icon}
                    {button.label}
                </MUIButton>
            ))}
        </MUIButtonGroup>
    );
}

ButtonGroup.propTypes = {
    buttons: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]).required,
            label: PropTypes.string.required,
            icon: PropTypes.node,
        }),
    ).isRequired,
    classes: PropTypes.shape({}),
    defaultSelectedButton: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func,
};

ButtonGroup.defaultProps = {
    classes: null,
    defaultSelectedButton: null,
    onChange: noop,
};

export default ButtonGroup;
