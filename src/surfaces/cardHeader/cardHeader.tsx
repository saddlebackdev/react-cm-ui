import MUICardHeader from '@material-ui/core/CardHeader';
import React from 'react';

function CardHeader(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUICardHeader
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default CardHeader;
