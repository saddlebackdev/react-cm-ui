import {
    Button,
    Grid,
} from 'react-cm-ui';
import React from 'react';

function ExampleSolidColors() {
    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm="auto"
            >
                <Button
                    color="primary"
                    designVersion={2}
                >
                    Primary
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="secondary"
                    designVersion={2}
                >
                    Secondary
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="active"
                    designVersion={2}
                >
                    Active
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    disabled
                    designVersion={2}
                >
                    Disable
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="success"
                    designVersion={2}
                >
                    Success
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="warning"
                    designVersion={2}
                >
                    Warning
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleSolidColors;
