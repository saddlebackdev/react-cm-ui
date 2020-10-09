import {
    Button,
    Grid,
    Icon,
} from 'react-cm-ui';
import React from 'react';

function ButtonPillOutlineInverseColorsExample() {
    return (
        <Grid
            spacing={2}
        >
            <Grid.Column
                sm="auto"
            >
                <Button
                    inverse
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
                    inverse
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
                    inverse
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
                    inverse
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
                    inverse
                    outline
                    pill
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
                    inverse
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
                    inverse
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
                    inverse
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

export default ButtonPillOutlineInverseColorsExample;
