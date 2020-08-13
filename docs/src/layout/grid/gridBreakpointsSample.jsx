import { Card, Grid } from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.background.secondary,
        textAlign: 'center',
    },
}));

function GridBreakpointsSample() {
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
                md={6}
                sm={12}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=12 md=6
                </Card>
            </Grid.Column>

            <Grid.Column
                md={6}
                sm={12}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=12 md=6
                </Card>
            </Grid.Column>

            <Grid.Column
                md={3}
                sm={6}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=6 md=3
                </Card>
            </Grid.Column>

            <Grid.Column
                md={3}
                sm={6}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=6 md=3
                </Card>
            </Grid.Column>

            <Grid.Column
                md={3}
                sm={6}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=6 md=3
                </Card>
            </Grid.Column>

            <Grid.Column
                md={3}
                sm={6}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=6 md=3
                </Card>
            </Grid.Column>
        </Grid>
    );
}

export default GridBreakpointsSample;
