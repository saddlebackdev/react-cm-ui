import {
    Checkbox,
    Grid,
    Typography,
} from 'react-cm-ui';
import React from 'react';

function ExampleStandardCheckbox() {
    return (
        <Grid
            spacing={4}
        >
            <Grid.Column
                sm="auto"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Unchecked
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Checkbox
                            label="Label"
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Checked
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Checkbox
                            checked
                            label="Label"
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Disabled Unchecked
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Checkbox
                            disable
                            label="Label"
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Disabled Checked
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Checkbox
                            disable
                            checked
                            label="Label"
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleStandardCheckbox;
