import {
    Button,
    Grid,
    Icon,
    Tooltip,
} from 'react-cm-ui';
import React, {
    useCallback,
    useState,
} from 'react';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    root: {
        minHeight: 80,
        padding: [[0, 18]],
    },
}));

function ExampleButtonsBehaviors() {
    const [isEmailOpen, setIsEmailOpen] = useState(true);
    const [isTriggered, setIsTriggered] = useState(false);

    const classes = useStyles();

    const onSmsMouseEnter = useCallback(() => {
        setIsEmailOpen(false);
    }, [setIsEmailOpen]);

    const onEmailMouseEnter = useCallback(() => {
        if (isTriggered) {
            setIsEmailOpen(true);
        }
    }, [isTriggered, setIsEmailOpen]);

    const onEmailMouseLeave = useCallback(() => {
        setIsTriggered(true);
        setIsEmailOpen(false);
    }, [setIsEmailOpen, setIsTriggered]);

    return (
        <div
            className={classes.root}
        >
            <Grid
                spacing={1}
            >
                <Grid.Column>
                    <Tooltip
                        title="Compose New SMS"
                    >
                        <Button
                            onMouseEnter={onSmsMouseEnter}
                            icon
                        >
                            <Icon
                                type="sms"
                            />
                        </Button>
                    </Tooltip>
                </Grid.Column>

                <Grid.Column>
                    <Tooltip
                        open={isEmailOpen}
                        title="Compose New Email"
                    >
                        <Button
                            onMouseEnter={onEmailMouseEnter}
                            onMouseLeave={onEmailMouseLeave}
                            icon
                        >
                            <Icon
                                type="email"
                            />
                        </Button>
                    </Tooltip>
                </Grid.Column>
            </Grid>
        </div>
    );
}

export default ExampleButtonsBehaviors;
