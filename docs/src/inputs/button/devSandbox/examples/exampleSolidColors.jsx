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
                    version={2}
                >
                    Primary
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="secondary"
                    version={2}
                >
                    Secondary
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="active"
                    version={2}
                >
                    Active
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    disabled
                    version={2}
                >
                    Disable
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="success"
                    version={2}
                >
                    Success
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="warning"
                    version={2}
                >
                    Warning
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleSolidColors;
