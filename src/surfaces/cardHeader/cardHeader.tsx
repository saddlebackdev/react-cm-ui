import MUICardHeader from '@material-ui/core/CardHeader';
import React from 'react';

function CardHeader(props) {
    return (
        <MUICardHeader
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
}

export default CardHeader;
