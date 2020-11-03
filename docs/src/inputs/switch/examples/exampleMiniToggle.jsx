import {
    Checkbox,
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
                sm="auto"
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
                        <Checkbox
                            size="small"
                            toggle
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>

            <Grid.Column
                sm="auto"
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
                        <Checkbox
                            checked
                            size="small"
                            toggle
                            tabIndex={0}
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>

            <Grid.Column
                sm="auto"
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
                        <Checkbox
                            disable
                            size="small"
                            toggle
                            tabIndex={0}
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>

            <Grid.Column
                sm="auto"
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
                        <Checkbox
                            disable
                            checked
                            size="small"
                            toggle
                            tabIndex={0}
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleMiniToggle;
