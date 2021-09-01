import {
    Button,
    Grid,
} from 'react-cm-ui';
import React from 'react';

function ExampleSolidButton() {
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
                    color="link"
                    variant="text"
                    version={2}
                >
                    Link
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleSolidButton;
