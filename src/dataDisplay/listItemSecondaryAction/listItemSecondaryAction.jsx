import MUIListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import React from 'react';

function ListItemSecondaryAction(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUIListItemSecondaryAction
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default ListItemSecondaryAction;
