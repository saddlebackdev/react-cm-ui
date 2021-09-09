import MUIListItemAvatar from '@material-ui/core/ListItemAvatar';
import React from 'react';

function ListItemAvatar(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUIListItemAvatar
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default ListItemAvatar;
