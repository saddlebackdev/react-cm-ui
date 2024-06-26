import {
    filter,
    get,
    isEmpty,
    map,
    startCase,
} from 'lodash';
import {
    Typography,
    versions,
} from '@saddlebackchurch/react-cm-ui';
import PropTypes from 'prop-types';
import React from 'react';
import MarkdownContainer from './markdownContainer';

const propTypes = {
    pathname: PropTypes.string.isRequired,
};

function ComponentVersionIdentifier(props) {
    const {
        pathname,
    } = props;

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

            <Typography
                variant="body1"
            >
                {map(version, (v, key) => {
                    if (key === 'designLibraryDoc') {
                        return (
                            <div
                                key={key}
                            >
                                {`${startCase(key)}: `}

                                {!isEmpty(v) && v !== 'N/A' ? (
                                    <a
                                        href={v}
                                    >
                                        {v}
                                    </a>
                                ) : (
                                    <span>{v}</span>
                                )}
                            </div>
                        );
                    }

                    return (
                        <div
                            key={key}
                        >
                            {`${startCase(key)}: ${v}`}
                        </div>
                    );
                })}
            </Typography>
        </MarkdownContainer>
    );
}

ComponentVersionIdentifier.propTypes = propTypes;

export default ComponentVersionIdentifier;
