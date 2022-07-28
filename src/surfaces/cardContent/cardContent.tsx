import MUICardContent from '@material-ui/core/CardContent';
import React from 'react';

function CardContent(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUICardContent
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default CardContent;
