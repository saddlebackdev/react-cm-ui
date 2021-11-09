import MUIListItemIcon from '@material-ui/core/ListItemIcon';
import React from 'react';

function ListItemIcon(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUIListItemIcon
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default ListItemIcon;
