import {
    Button,
    Grid,
    Icon,
    Typography,
} from 'react-cm-ui';
import React from 'react';

function ButtonTransparentButtonExample() {
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
                            transparent
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
                            Icon
                        </Typography>
                    </Grid.Column>

                    <Grid.Column
                        sm
                    >
                        <Button
                            icon
                            transparent
                        >
                            <Icon
                                type="shape-heart"
                            />
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
                        <Typography
                            color="inherit"
                        >
                            Label &amp; Icon
                        </Typography>
                    </Grid.Column>

                    <Grid.Column
                        sm
                    >
                        <Button
                            transparent
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

export default ButtonTransparentButtonExample;
