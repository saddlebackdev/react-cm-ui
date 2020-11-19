import {
    filter,
    get,
    isArray,
    map,
    startCase,
} from 'lodash';
import {
    Typography,
    versions,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import PropTypes from 'prop-types';
import React from 'react';
import MarkdownContainer from './markdownContainer';

const propTypes = {
    pathname: PropTypes.string.isRequired,
};

const useStyles = makeStyles(({ typography }) => ({
    pre: {
        display: 'inline',
        fontFamily: typography.fontFamily,
        margin: 0,
        padding: 0,
    },
}));

function ComponentVersionIdentifier(props) {
    const {
        pathname,
    } = props;

    const classes = useStyles();

    const pathNameArray = map(
        filter(
            pathname.split('/'),
            (segment) => !!segment,
        ),
        (segment) => segment.replace(/-([a-z])/g, (match, capture) => (capture.toUpperCase())), // e.g. 'duration-picker' => 'durationPicker'
    );

    const version = get(
        versions,
        [
            'react-cm-ui',
            ...pathNameArray,
        ],
    );

    if (!version) {
        return null;
    }

    return (
        <MarkdownContainer>
            <Typography
                variant="h2"
            >
                Version
            </Typography>

            <div>
                {map(version, (v, key) => {
                    if (isArray(v)) {
                        return (
                            <div
                                key={key}
                            >
                                {`"${startCase(key)}": `}

                                <pre
                                    className={classes.pre}
                                >
                                    {JSON.stringify(v, null, 4)}
                                </pre>
                            </div>
                        );
                    }

                    return (
                        <div
                            key={key}
                        >
                            {`"${startCase(key)}": "${v}"`}
                        </div>
                    );
                })}
            </div>
        </MarkdownContainer>
    );
}

ComponentVersionIdentifier.propTypes = propTypes;

export default ComponentVersionIdentifier;
