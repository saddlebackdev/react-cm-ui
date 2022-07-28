import MUICardActionArea from '@material-ui/core/CardActionArea';
import React from 'react';

function CardActionArea(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUICardActionArea
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default CardActionArea;
