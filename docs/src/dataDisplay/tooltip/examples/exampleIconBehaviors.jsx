import {
    Icon,
    Tooltip,
} from 'react-cm-ui';
import React from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: 67,
        padding: [[0, 18]],
    },
}));

function ExampleIconBehaviors() {
    const classes = useStyles();

    return (
        <div
            className={classes.root}
        >
            <Tooltip
                open
                title="Expand"
            >
                <Icon
                    size={24}
                    type="expand"
                />
            </Tooltip>
        </div>
    );
}

export default ExampleIconBehaviors;
