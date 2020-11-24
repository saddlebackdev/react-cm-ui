import {
    Button,
    Grid,
    Icon,
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

function ExampleButtonsBehaviors() {
    const classes = useStyles();

    return (
        <div
            className={classes.root}
        >
            <Grid
                spacing={1}
            >
                <Grid.Column>
                    <Tooltip
                        title="Compose New SMS"
                    >
                        <Button
                            icon
                        >
                            <Icon
                                type="sms"
                            />
                        </Button>
                    </Tooltip>
                </Grid.Column>

                <Grid.Column>
                    <Tooltip
                        open
                        title="Compose New Email"
                    >
                        <Button
                            icon
                        >
                            <Icon
                                type="email"
                            />
                        </Button>
                    </Tooltip>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default ExampleButtonsBehaviors;
