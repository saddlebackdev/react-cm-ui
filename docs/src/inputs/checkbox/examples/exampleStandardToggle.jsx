import {
    Checkbox,
    Grid,
    Typography,
} from 'react-cm-ui';
import React from 'react';

function ExampleStandardToggle() {
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
                    <Grid.Column
                        sm={12}
                    >
                        <Typography>
                            Off
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Checkbox
                            toggle
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
                    <Grid.Column
                        sm={12}
                    >
                        <Typography>
                            On
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Checkbox
                            checked
                            toggle
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
                    <Grid.Column
                        sm={12}
                    >
                        <Typography>
                            Disabled Off
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Checkbox
                            disable
                            toggle
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
                    <Grid.Column
                        sm={12}
                    >
                        <Typography>
                            Disabled On
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Checkbox
                            disable
                            checked
                            toggle
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleStandardToggle;
