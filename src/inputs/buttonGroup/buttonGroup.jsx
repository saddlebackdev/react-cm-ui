import MUIButton from '@material-ui/core/Button';
import MUIButtonGroup from '@material-ui/core/ButtonGroup';
import { noop } from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * The <ButtonGroup /> component can be used to group related buttons.
 */
function ButtonGroup(props) {
    const {
        buttons,
        classes,
        onChange: onChangeProp,
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
            ]).isRequired,
            label: PropTypes.string.isRequired,
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
