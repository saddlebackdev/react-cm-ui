import MUIPaper from '@material-ui/core/Paper';
import React from 'react';

function Paper(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUIPaper
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default Paper;
