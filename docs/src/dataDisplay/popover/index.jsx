/* eslint-disable linebreak-style */
import React from 'react';
import {
    TitleBar,
    Typography,
} from 'react-cm-ui';
import {
    startCase,
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import Main from '../../global/main';
import Example from '../../global/example';
import MarkdownContainer from '../../global/markdownContainer';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Heading from '../../global/heading';
import ComponentApi from '../../global/componentApi';
import PopoverSample from './popoverSample';
// eslint-disable-next-line import/extensions, import/no-named-default
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/popover/popover';

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function PopoverExample(props) {
    const {
        location: {
            pathname,
        },
    } = props;

    const {
        description,
        displayName,
    } = rootDoc;

    return (
        <Main page={camelCase(displayName)}>

            <TitleBar title={startCase(displayName)} />

            <Main.Content>

                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {description}
                    </Typography>

                    <Heading anchorLink="children" variant="h2">
                        Simple popover sample
                    </Heading>

                    <Typography variant="body1">
                        Simple popover sample
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./popoverSample.jsx').default}>
                    <PopoverSample />
                </Example>

                <ComponentApi docs={[rootDoc]} />

                <ComponentVersionIdentifier pathname={pathname} />

            </Main.Content>

        </Main>
    );
}

PopoverExample.propTypes = propTypes;

export default PopoverExample;
