/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';
import MUIButton from '@material-ui/core/Button';
import MUIButtonGroup from '@material-ui/core/ButtonGroup';
import {
    noop,
} from 'lodash';

function ButtonGroup(props) {
    const {
        buttons,
        classes,
        onChange: onChangeProp = noop,
        value,
    } = props;

    return (
        <MUIButtonGroup
            color="primary"
            size="large"
            classes={classes}
        >
            {buttons.map((button) => (
                <MUIButton
                    key={button.value}
                    onClick={() => { onChangeProp(button.value); }}
                    variant={value === button.value ? 'contained' : 'outlined'}
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
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ButtonGroup.defaultProps = {
    classes: null,
    onChange: noop,
    value: null,
};

export default ButtonGroup;
