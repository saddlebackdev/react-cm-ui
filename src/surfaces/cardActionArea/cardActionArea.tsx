import MUICardActionArea from '@material-ui/core/CardActionArea';
import React from 'react';

function CardActionArea(props) {
    return (
        <MUICardActionArea
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
        />
    );
}

export default CardActionArea;
