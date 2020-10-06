import React from 'react';
import {
    AppBar,
    Typography,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => {
    const {
        palette,
    } = theme;

    return {
        root: {
            backgroundColor: palette.background.contrastPrimary,
            color: palette.text.contrastText,
        },
    };
});

function AppBarSamplePlacement() {
    const classes = useStyles();

    return (
        <AppBar classes={classes}>
            <Typography variant="h2">
                Some cool title
            </Typography>
        </AppBar>
    );
}

export default AppBarSamplePlacement;
