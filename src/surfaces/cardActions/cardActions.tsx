import MUICardActions from '@material-ui/core/CardActions';
import React from 'react';

function CardActions(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUICardActions
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default CardActions;
