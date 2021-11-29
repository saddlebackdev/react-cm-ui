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

function ExampleDeletableChip() {
    const classes = useStyles();

    const onDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <div className={classes.root}>
            <Chip color="green" disabled label="Disabled" onDelete={onDelete} />
            <Chip color="green" label="Green" onDelete={onDelete}  />
            <Chip color="teal" label="Teal" onDelete={onDelete} />
            <Chip color="sky" label="Sky" onDelete={onDelete} />
            <Chip color="cyan" label="Cyan" onDelete={onDelete} />
            <Chip color="purple" label="Purple" onDelete={onDelete} />
            <Chip color="pink" label="Pink" onDelete={onDelete} />
            <Chip color="red" label="Red" onDelete={onDelete} />
            <Chip color="redOrange" label="Red Orange" onDelete={onDelete} />
            <Chip color="orange" label="Orange" onDelete={onDelete} />
        </div>
    );
}

export default ExampleDeletableChip;
