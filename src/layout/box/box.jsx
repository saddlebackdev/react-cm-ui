import MuiBox from '@material-ui/core/Box';
import React from 'react';

/**
 * The Box component serves as a wrapper component for most of the CSS utility needs.
 */
function Box(props) {
    return (
        <MuiBox
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
}

export default Box;
