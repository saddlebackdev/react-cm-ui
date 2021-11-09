import MUIListItem from '@material-ui/core/ListItem';
import React from 'react';

function ListItem(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUIListItem
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default ListItem;
