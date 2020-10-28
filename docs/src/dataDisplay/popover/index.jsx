import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
import {
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import Main from '../../global/main';
import Example from '../../global/example';
import MarkdownContainer from '../../global/markdownContainer';
import Heading from '../../global/heading';
import ComponentApi from '../../global/componentApi';
import PopoverSample from './popoverSample';
import PopoverSampleControlled from './popoverSampleControlled';
import PopoverSamplePlacement from './popoverSamplePlacement';
import PopoverSampleWithJsx from './popoverSampleWithJsx';
// eslint-disable-next-line import/extensions, import/no-named-default
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/popover/popover';

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function PopoverExample() {
    const {
        description,
        displayName,
    } = rootDoc;

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

                    <Heading anchorLink="children" variant="h2">
                        Simple popover sample
                    </Heading>

                    <Typography variant="body1">
                        Simple popover sample.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./popoverSample.jsx').default}>
                    <PopoverSample />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Controlled Popover
                    </Heading>

                    <Typography variant="body1">
                        Open/Close the popover programmatically.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./popoverSampleControlled.jsx').default}>
                    <PopoverSampleControlled />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Placement
                    </Heading>

                    <Typography variant="body1">
                        The popover position can be changed.
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./popoverSamplePlacement.jsx').default}>
                    <PopoverSamplePlacement />
                </Example>

                <MarkdownContainer>
                    <Heading anchorLink="children" variant="h2">
                        Custom content
                    </Heading>

                    <Typography variant="body1">
                        The content can be either a string or custom jsx
                    </Typography>
                </MarkdownContainer>

                <Example rawCode={require('!!raw-loader!./popoverSampleWithJsx.jsx').default}>
                    <PopoverSampleWithJsx />
                </Example>

                <ComponentApi docs={[rootDoc]} />
            </Main.Content>
        </Main>
    );
}

PopoverExample.propTypes = propTypes;

export default PopoverExample;
