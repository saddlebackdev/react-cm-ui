import {
    Button,
    Grid,
    Icon,
} from 'react-cm-ui';
import React from 'react';

function ExampleOutlineInverseColors() {
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
                    outline
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
                    outline
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
                    outline
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
                    disable
                    inverse
                    outline
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>Disable</span>
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="error"
                    inverse
                    outline
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
                    color="link"
                    inverse
                    outline
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>Link</span>
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="success"
                    inverse
                    outline
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
                    outline
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

export default ExampleOutlineInverseColors;
