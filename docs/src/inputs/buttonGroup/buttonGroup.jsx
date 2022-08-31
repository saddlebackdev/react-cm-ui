import React from 'react';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import Button from '@material-ui/core/Button';
import {
    ButtonGroup,
    Typography,
} from 'react-cm-ui';// eslint-disable-line import/no-unresolved
import {
    camelCase,
} from 'lodash';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';

const displayName = 'button group';

const description = 'The ButtonGroup component can be used to group related buttons.';

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    groupOrientation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function DocsButtonGroup(props) {
    const classes = useStyles();

    const {
        location: {
            pathname,
        },
    } = props;

    return (
        <Main page={camelCase(displayName)}>
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {description}
                    </Typography>

                    <Heading
                        anchorLink="basic-button-group"
                        variant="h2"
                    >
                        Basic button group
                    </Heading>

                    <Example>
                        <div className={classes.root}>
                            <ButtonGroup
                                color="primary"
                                size="large"
                                variant="outlined"
                            >
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>

                            <ButtonGroup
                                color="primary"
                                size="large"
                                variant="contained"
                            >
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>

                            <ButtonGroup
                                color="primary"
                                size="large"
                                variant="text"
                            >
                                <Button>One</Button>
                                <Button>Two</Button>
                                <Button>Three</Button>
                            </ButtonGroup>
                        </div>
                    </Example>
                </MarkdownContainer>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsButtonGroup.propTypes = propTypes;
