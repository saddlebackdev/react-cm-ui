import {
    Button,
    Grid,
    Icon,
} from 'react-cm-ui';
import React from 'react';

function ButtonPillOutlineColorsExample() {
    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm="auto"
            >
                <Button
                    outline
                    pill
                >
                    <Icon
                        type="shape-heart"
                    />

                    <span>Default</span>
                </Button>
            </Grid.Column>

            <Grid.Column
                sm="auto"
            >
                <Button
                    color="primary"
                    outline
                    pill
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
                    pill
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
                    pill
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
                    pill
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
                    pill
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
                    outline
                    pill
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
                    outline
                    pill
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
                    pill
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

export default ButtonPillOutlineColorsExample;
