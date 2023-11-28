import React from 'react';
import makeStyles from '../../styles/makeStyles';

const useStyles = makeStyles(({
    palette,
    spacing,
}) => ({
    root: {
        backgroundColor: palette.grey[400],
        borderRadius: 4,
        height: '100%',
        position: 'absolute',
        top: 0,
        width: `calc(100% - ${spacing(3)}px)`,
    },
}));

function RadioScreenGuard() {
    const classes = useStyles();
    return <div className={classes.root} />;
}

export default RadioScreenGuard;
