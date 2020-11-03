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
                    disable
                    text
                >
                    Disable
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="link"
                    text
                >
                    Link
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleSolidButton;
