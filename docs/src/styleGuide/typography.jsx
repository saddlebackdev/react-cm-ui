import {
    Grid,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React from 'react';
import Heading from '../global/heading';
import Main from '../global/main';
import MarkdownContainer from '../global/markdownContainer';
import TypographyGridColumn from './typographyGridColumn';

const useStyles = makeStyles(({
    palette,
    spacing,
    typography,
}) => ({
    root: {},
}));

function DocsTypography() {
    const classes = useStyles();

    return (
        <Main page="typography">
            <Main.Content>
                <MarkdownContainer>
                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Text Styles
                    </Heading>
                </MarkdownContainer>

                <Grid
                    columns={3}
                >
                    <TypographyGridColumn
                        color="primary"
                        backgroundColor="primary"
                    />

                    <TypographyGridColumn
                        color="textSecondary"
                        backgroundColor="primary"
                    />

                    <TypographyGridColumn
                        color="textContrastText"
                        backgroundColor="contrastPrimary"
                    />
                </Grid>
            </Main.Content>
        </Main>
    );
}

export default DocsTypography;
