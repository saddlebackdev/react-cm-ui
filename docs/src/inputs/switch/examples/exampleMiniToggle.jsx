import {
    Switch,
    Grid,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    column: {
        minWidth: 71,
    },
}));

function ExampleMiniToggle() {
    const classes = useStyles();

    return (
        <Grid
            spacing={4}
        >
            <Grid.Column
                sm
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column
                        classes={{
                            root: classes.column,
                        }}
                    >
                        <Typography>
                            Off
                        </Typography>
                    </Grid.Column>

                    <Grid.Column
                        classes={{
                            root: classes.column,
                        }}
                    >
                        <Switch
                            label="Label"
                            size="small"
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>

            <Grid.Column
                sm
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column
                        classes={{
                            root: classes.column,
                        }}
                    >
                        <Typography>
                            On
                        </Typography>
                    </Grid.Column>

                    <Grid.Column
                        classes={{
                            root: classes.column,
                        }}
                    >
                        <Switch
                            checked
                            label="Label"
                            size="small"
                            tabIndex={0}
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>

            <Grid.Column
                sm
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column
                        classes={{
                            root: classes.column,
                        }}
                    >
                        <Typography>
                            Disabled Off
                        </Typography>
                    </Grid.Column>

                    <Grid.Column
                        classes={{
                            root: classes.column,
                        }}
                    >
                        <Switch
                            disable
                            label="Label"
                            size="small"
                            tabIndex={0}
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>

            <Grid.Column
                sm
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column
                        classes={{
                            root: classes.column,
                        }}
                    >
                        <Typography>
                            Disabled On
                        </Typography>
                    </Grid.Column>

                    <Grid.Column
                        classes={{
                            root: classes.column,
                        }}
                    >
                        <Switch
                            disable
                            checked
                            label="Label"
                            size="small"
                            tabIndex={0}
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleMiniToggle;
