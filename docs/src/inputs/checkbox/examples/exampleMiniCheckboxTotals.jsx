import {
    Checkbox,
    Grid,
    Typography,
} from 'react-cm-ui';
import React from 'react';

function ExampleMiniCheckboxTotals() {
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
                            fluid
                            label="Label"
                            size="small"
                            total={9999}
                            tabIndex={0}
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
                            fluid
                            label="Label"
                            size="small"
                            total={9999}
                            tabIndex={0}
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
                            fluid
                            label="Label"
                            size="small"
                            total={9999}
                            tabIndex={0}
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
                            fluid
                            label="Label"
                            size="small"
                            total={9999}
                            tabIndex={0}
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleMiniCheckboxTotals;
