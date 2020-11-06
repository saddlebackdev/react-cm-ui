import {
    Button,
    Grid,
    Icon,
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

function ExampleSuccessPrompt() {
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
                            icon="success"
                            inline
                            inlineMessageColor="success"
                            message="Save Draft and Close?"
                            onClick={() => {}}
                            onNoClick={onNoClick}
                            onYesClick={onYesClick}
                            show={showPrompt}
                        >
                            <Button
                                color="success"
                                disable={showPrompt}
                                onClick={() => onPromptClick()}
                            >
                                <Icon color="inverse" type="save" />
                                <span>Save</span>
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
                            icon="success"
                            inline
                            inlineMessageColor="success"
                            message="Save Draft and Close?"
                            onClick={() => {}}
                            onNoClick={onNoClick}
                            onYesClick={onYesClick}
                            show
                        >
                            <Button
                                color="success"
                                disable
                                onClick={() => onPromptClick()}
                            >
                                <Icon color="inverse" type="save" />
                                <span>Save</span>
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
                            icon="success"
                            inline
                            inlineMessageColor="success"
                            message="Save Draft and Close?"
                            onClick={() => {}}
                            onNoClick={onNoClick}
                            onYesClick={onYesClick}
                            show
                        >
                            <Button
                                color="success"
                                disable
                                onClick={() => onPromptClick()}
                            >
                                <Icon color="inverse" type="save" />
                                <span>Save</span>
                            </Button>
                        </Prompt>
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleSuccessPrompt;
