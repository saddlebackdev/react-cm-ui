import MUICardMedia from '@material-ui/core/CardMedia';
import React from 'react';

function CardMedia(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUICardMedia
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default CardMedia;
