import {
    Button,
    Grid,
} from 'react-cm-ui';
import React from 'react';

function ButtonSolidButtonExample() {
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
                    color="error"
                    text
                >
                    Error
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

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="success"
                    text
                >
                    Success
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="warning"
                    text
                >
                    Warning
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ButtonSolidButtonExample;
