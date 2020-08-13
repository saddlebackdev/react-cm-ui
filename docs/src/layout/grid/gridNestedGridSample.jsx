import { Card, Grid } from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    card: {
        backgroundColor: theme.palette.background.secondary,
        textAlign: 'center',
    },
}));

function GridNestedGridSample() {
    const classes = useStyles();

    const someGridColumns = (
        <React.Fragment>
            <Grid.Column
                sm={4}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=4
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={4}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=4
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={4}
            >
                <Card
                    classes={{
                        root: classes.card,
                    }}
                >
                    sm=4
                </Card>
            </Grid.Column>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <Grid
                spacing={2}
            >
                <Grid.Column
                    sm={12}
                >
                    <Grid spacing={2}>
                        {someGridColumns}
                    </Grid>

                    <Grid spacing={2}>
                        {someGridColumns}
                    </Grid>

                    <Grid spacing={2}>
                        {someGridColumns}
                    </Grid>
                </Grid.Column>
            </Grid>
        </React.Fragment>
    );
}

export default GridNestedGridSample;
