import React from 'react';
import {
    AppBar,
    Typography,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles(() => ({
    root: {
        marginBottom: 5,
    },
}));

function AppBarSamplePlacement() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <AppBar classes={classes}>
                <Typography variant="h2">
                    Default Placement (Top Left)
                </Typography>
            </AppBar>
            <AppBar classes={classes} placement="top-center">
                <Typography variant="h2">
                    Top Center
                </Typography>
            </AppBar>
            <AppBar classes={classes} placement="top-right">
                <Typography variant="h2">
                    Top Right
                </Typography>
            </AppBar>
            <AppBar classes={classes} placement="middle-left">
                <Typography variant="h2">
                    Middle Left
                </Typography>
            </AppBar>
            <AppBar classes={classes} placement="middle-center">
                <Typography variant="h2">
                    Middle Center
                </Typography>
            </AppBar>
            <AppBar classes={classes} placement="middle-right">
                <Typography variant="h2">
                    Middle Left
                </Typography>
            </AppBar>
            <AppBar classes={classes} placement="bottom-left">
                <Typography variant="h2">
                    Bottom Left
                </Typography>
            </AppBar>
            <AppBar classes={classes} placement="bottom-center">
                <Typography variant="h2">
                    Bottom Center
                </Typography>
            </AppBar>
            <AppBar classes={classes} placement="bottom-right">
                <Typography variant="h2">
                    Bottom Left
                </Typography>
            </AppBar>
        </React.Fragment>
    );
}

export default AppBarSamplePlacement;
