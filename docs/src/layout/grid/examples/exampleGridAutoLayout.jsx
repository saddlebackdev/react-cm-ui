import { Card, Grid } from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.background.secondary,
        textAlign: 'center',
    },
}));

function GridAutoLayoutSample() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid
                spacing={2}
            >
                <Grid.Column
                    sm
                >
                    <Card
                        classes={{
                            root: classes.card,
                        }}
                    >
                        sm
                    </Card>
                </Grid.Column>

                <Grid.Column
                    sm
                >
                    <Card
                        classes={{
                            root: classes.card,
                        }}
                    >
                        sm
                    </Card>
                </Grid.Column>

                <Grid.Column
                    sm
                >
                    <Card
                        classes={{
                            root: classes.card,
                        }}
                    >
                        sm
                    </Card>
                </Grid.Column>
            </Grid>

            <Grid
                spacing={2}
            >
                <Grid.Column
                    sm
                >
                    <Card
                        classes={{
                            root: classes.card,
                        }}
                    >
                        sm
                    </Card>
                </Grid.Column>

                <Grid.Column
                    sm={6}
                >
                    <Card
                        classes={{
                            root: classes.card,
                        }}
                    >
                        sm=6
                    </Card>
                </Grid.Column>

                <Grid.Column
                    sm
                >
                    <Card
                        classes={{
                            root: classes.card,
                        }}
                    >
                        sm
                    </Card>
                </Grid.Column>
            </Grid>
        </React.Fragment>
    );
}

export default GridAutoLayoutSample;
