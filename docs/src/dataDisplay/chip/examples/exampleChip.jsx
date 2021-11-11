import {
    Chip,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles(({
    spacing,
}) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: spacing(0.5),
        },
    },
}));

function ExampleChip() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Chip color="green" disabled label="Disabled" />
            <Chip color="green" label="Green" />
            <Chip color="teal" label="Teal" />
            <Chip color="sky" label="Sky" />
            <Chip color="teal" label="Teal" />
            <Chip color="purple" label="Purple" />
            <Chip color="pink" label="Pink" />
            <Chip color="red" label="Red" />
            <Chip color="redOrange" label="Red Orange" />
            <Chip color="orange" label="Orange" />
        </div>
    );
}

export default ExampleChip;
