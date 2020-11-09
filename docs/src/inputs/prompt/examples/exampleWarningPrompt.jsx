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

function ExampleWarningPrompt() {
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
        <Grid>
            <Grid.Column sm>
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
                            inlineMessageColor="warning"
                            onClick={() => {}}
                            onNoClick={onNoClick}
                            onYesClick={onYesClick}
                            show={showPrompt}
                        >
                            <Button
                                color="alternate"
                                disable={showPrompt}
                                onClick={() => onPromptClick()}
                            >
                                Unpublish
                            </Button>
                        </Prompt>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column sm>
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
                            inlineMessageColor="warning"
                            onClick={() => {}}
                            onNoClick={onNoClick}
                            onYesClick={onYesClick}
                            show
                        >
                            <Button
                                color="alternate"
                                disable
                                onClick={() => onPromptClick()}
                            >
                                Unpublish
                            </Button>
                        </Prompt>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column sm>
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
                            inlineMessageColor="warning"
                            onClick={() => {}}
                            onNoClick={onNoClick}
                            onYesClick={onYesClick}
                            show
                        >
                            <Button
                                color="alternate"
                                disable
                                onClick={() => onPromptClick()}
                            >
                                Unpublish
                            </Button>
                        </Prompt>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleWarningPrompt;
