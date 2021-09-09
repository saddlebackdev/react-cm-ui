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
                    pill
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
                    pill
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
                    pill
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
                    pill
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
                    pill
                    designVersion={2}
                >
                    Warning
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ExamplePillColors;
