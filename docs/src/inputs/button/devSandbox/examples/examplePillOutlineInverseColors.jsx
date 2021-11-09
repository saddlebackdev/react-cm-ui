import {
    Button,
    Grid,
    Icon,
} from 'react-cm-ui';
import React from 'react';

function ExamplePillOutlineInverseColors() {
    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm="auto"
            >
                <Button
                    color="primary"
                    inverse
                    pill
                    variant="outlined"
                    designVersion={2}
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>Primary</span>
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="secondary"
                    inverse
                    pill
                    variant="outlined"
                    designVersion={2}
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>Secondary</span>
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="active"
                    inverse
                    pill
                    variant="outlined"
                    designVersion={2}
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>Active</span>
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    disabled
                    inverse
                    pill
                    variant="outlined"
                    designVersion={2}
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>disable</span>
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="error"
                    inverse
                    pill
                    variant="outlined"
                    designVersion={2}
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>Error</span>
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="success"
                    inverse
                    pill
                    variant="outlined"
                    designVersion={2}
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>Success</span>
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="warning"
                    inverse
                    pill
                    variant="outlined"
                    designVersion={2}
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>Warning</span>
                </Button>
            </Grid.Column>
        </Grid>
    );
}

export default ExamplePillOutlineInverseColors;
