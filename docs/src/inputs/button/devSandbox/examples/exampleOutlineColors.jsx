import {
    Button,
    Grid,
    Icon,
} from 'react-cm-ui';
import React from 'react';

function ExampleOutlineColors() {
    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm="auto"
            >
                <Button
                    color="primary"
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
                    color="success"
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

export default ExampleOutlineColors;
