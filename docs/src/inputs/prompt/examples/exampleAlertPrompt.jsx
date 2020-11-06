import {
    Button,
    Grid,
    Prompt,
    Typography,
} from 'react-cm-ui';
import React, { useState } from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => ({
    hoverExampleRoot: {
        '& .prompt-yes-btn': {
            backgroundColor: theme.palette.active.primary,
        },
    },
}));

function ExampleAlertPrompt() {
    const [showPrompt, setShowPrompt] = useState(false);
    const classes = useStyles();

    function onPromptClick() {
        setShowPrompt(true);
    }

    function onYesClick() {
        setShowPrompt(false);
    }

    function onNoClick() {
        setShowPrompt(false);
    }

    return (
        <Grid
            spacing={3}
        >
            <Grid.Column
                sm="3"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Inactive
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Prompt
                            icon="close"
                            inline
                            inlineMessageColor="alert"
                            onClick={() => {}}
                            onNoClick={onNoClick}
                            onYesClick={onYesClick}
                            show={false}
                        >
                            <Button
                                color="alert"
                                disable={showPrompt}
                                onClick={() => onPromptClick()}
                                outlined
                            >
                                Remove
                            </Button>
                        </Prompt>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column
                sm="3"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Active
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Prompt
                            icon="close"
                            inline
                            inlineMessageColor="alert"
                            onClick={() => {}}
                            onNoClick={onNoClick}
                            onYesClick={onYesClick}
                            show
                        >
                            <Button
                                color="alert"
                                disable
                                onClick={() => onPromptClick()}
                                outlined
                            >
                                Remove
                            </Button>
                        </Prompt>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column
                sm="3"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Hover
                        </Typography>
                    </Grid.Column>

                    <Grid.Column>
                        <Prompt
                            className={classes.hoverExampleRoot}
                            icon="close"
                            inline
                            inlineMessageColor="alert"
                            onClick={() => {}}
                            onNoClick={onNoClick}
                            onYesClick={onYesClick}
                            show
                        >
                            <Button
                                color="alert"
                                disable
                                onClick={() => onPromptClick()}
                                outlined
                            >
                                Remove
                            </Button>
                        </Prompt>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleAlertPrompt;
