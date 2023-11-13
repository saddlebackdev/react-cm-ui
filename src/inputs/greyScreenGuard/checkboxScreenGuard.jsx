import React from 'react';
import makeStyles from '../../styles/makeStyles';

const useStyles = makeStyles(({
    palette,
}) => ({
    root: {
        backgroundColor: palette.grey[400],
        borderRadius: 4,
        height: '100%',
        position: 'absolute',
        top: 0,
        width: '100%',
    },
}));

function CheckboxScreenGuard() {
    const classes = useStyles();
    return <div className={classes.root} />;
}

export default CheckboxScreenGuard;
