import React from 'react';
import makeStyles from '../../styles/makeStyles';

const useStyles = makeStyles(({
    palette,
    spacing,
}) => ({
    root: {
        backgroundColor: palette.grey[400],
        borderRadius: 4,
        height: `calc(100% - ${spacing(2)}px)`,
        left: spacing(1),
        position: 'absolute',
        top: spacing(1),
        width: `calc(100% - ${spacing(2)}px)`,
    },
}));

function InputScreenGuard() {
    const classes = useStyles();
    return <div className={classes.root} />;
}

export default InputScreenGuard;
