import MUIListItemText from '@material-ui/core/ListItemText';
import React from 'react';

function ListItemText(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUIListItemText
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default ListItemText;
