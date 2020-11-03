import {
    Button,
    Grid,
} from 'react-cm-ui';
import React from 'react';

function ExamplePillColors() {
    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm="auto"
            >
                <Button
                    color="primary"
                    pill
                >
                    Primary
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="secondary"
                    pill
                >
                    Secondary
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="active"
                    pill
                >
                    Active
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    disable
                    pill
                >
                    Disable
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="success"
                    pill
                >
                    Success
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="warning"
                    pill
                >
                    Warning
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ExamplePillColors;
