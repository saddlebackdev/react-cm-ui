import React from 'react';
// import PropTypes from 'prop-types';
import MuiButtonGroup from '@material-ui/core/ButtonGroup';

function ButtonGroup(props) {

    return (
        <MuiButtonGroup
            // eslint-disable-next-line linebreak-style, react/jsx-props-no-spreading
            {...props}
        />
    );
}

export default ButtonGroup;
