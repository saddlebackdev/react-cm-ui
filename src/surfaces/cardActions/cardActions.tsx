import MUICardActions from '@material-ui/core/CardActions';
import React from 'react';

function CardActions(props) {
    return (
        <MUICardActions
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
}

export default CardActions;
