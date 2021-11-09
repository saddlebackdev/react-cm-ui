import {
    Button,
    Grid,
    Icon,
    Typography,
} from 'react-cm-ui';
import React from 'react';

function ExamplePill() {
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
                            Label
                        </Typography>
                    </Grid.Column>

                    <Grid.Column
                        sm
                    >
                        <Button
                            pill
                            designVersion={2}
                        >
                            Label
                        </Button>
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
                            Label &amp; Icon
                        </Typography>
                    </Grid.Column>

                    <Grid.Column
                        sm
                    >
                        <Button
                            pill
                            designVersion={2}
                        >
                            <Icon
                                type="shape-heart"
                            />

                            <span>Label</span>
                        </Button>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExamplePill;
