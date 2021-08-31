import MUIListSubheader from '@material-ui/core/ListSubheader';
import React from 'react';

function ListSubheader(props) {
    const {
        ...otherProps
    } = props;

    return (
        <MUIListSubheader
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...otherProps}
        />
    );
}

export default ListSubheader;
