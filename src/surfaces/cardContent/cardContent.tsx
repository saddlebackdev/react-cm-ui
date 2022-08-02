import MUICardContent from '@material-ui/core/CardContent';
import React from 'react';

function CardContent(props) {
    return (
        <MUICardContent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
}

export default CardContent;
