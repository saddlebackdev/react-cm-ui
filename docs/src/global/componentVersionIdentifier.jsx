import {
    filter,
    get,
    map,
    startCase,
} from 'lodash';
import {
    Typography,
    versions,
} from 'react-cm-ui';
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

    const pathNameArray = filter(pathname.split('/'), (segment) => segment);

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

                                <a
                                    href={v}
                                >
                                    {v}
                                </a>
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
