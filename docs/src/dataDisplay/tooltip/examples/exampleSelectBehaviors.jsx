import {
    Grid,
    Icon,
    Select,
    Tooltip,
} from 'react-cm-ui';
import React from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: 80,
        padding: [[0, 18]],
    },
}));

function ExampleSelectBehaviors() {
    const classes = useStyles();

    const options = [
        {
            label: 'In Training',
            value: 1,
        },
        {
            label: 'Not In Training',
            value: 2,
        },
    ];

    return (
        <div
            className={classes.root}
        >
            <Tooltip
                title="Ministry Member Status"
            >
                <Select
                    options={options}
                    value={options[0]}
                />
            </Tooltip>
        </div>
    );
}

export default ExampleSelectBehaviors;
