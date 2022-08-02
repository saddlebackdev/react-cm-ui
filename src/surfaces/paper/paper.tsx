import MUIPaper from '@material-ui/core/Paper';
import React from 'react';

function Paper(props) {
    return (
        <MUIPaper
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
}

export default Paper;
