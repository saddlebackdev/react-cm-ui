import {
    Button,
    Grid,
} from 'react-cm-ui';
import React from 'react';

function ExampleTextColors() {
    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm="auto"
            >
                <Button
                    disabled
                    variant="text"
                    version={2}
                >
                    Disable
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="error"
                    variant="text"
                    version={2}
                >
                    Error
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="link"
                    variant="text"
                    version={2}
                >
                    Link
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="success"
                    variant="text"
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
                    variant="text"
                    version={2}
                >
                    Warning
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleTextColors;
