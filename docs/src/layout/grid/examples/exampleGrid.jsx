import { Card, Grid } from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.background.secondary,
        textAlign: 'center',
    },
}));

function GridSample() {
    const classes = useStyles();

    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm={12}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=12
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
                sm={3}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=3
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={3}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=3
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={3}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=3
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={3}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=3
                </Card>
            </Grid.Column>
        </Grid>
    );
}

export default GridSample;
