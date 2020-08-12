import { Card, Grid } from 'react-cm-ui';
import React from 'react';

function TableSample() {
    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm={10}
            >
                <Card>
                    sm=10
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={6}
            >
                <Card>
                    sm=6
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={6}
            >
                <Card>
                    sm=6
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={3}
            >
                <Card>
                    sm=3
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={3}
            >
                <Card>
                    sm=3
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={3}
            >
                <Card>
                    sm=3
                </Card>
            </Grid.Column>

            <Grid.Column
                sm={3}
            >
                <Card>
                    sm=3
                </Card>
            </Grid.Column>
        </Grid>
    );
}

export default TableSample;
