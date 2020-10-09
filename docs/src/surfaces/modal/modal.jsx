import {
    TitleBar,
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
    startCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
import ModalLeftAlignedSample from './modalLeftAlignedSample';
import ModalCenterAlignedSample from './modalCenterAlignedSample';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/modal/modal';
import { default as modalActionsDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/modal/modalActions';
import { default as modalContentDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/modal/modalContent';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsActionBar(props) {
    const {
        location: {
            pathname,
        },
    } = props;

    const {
        description,
        displayName,
    } = rootDoc;

    console.log(rootDoc);

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

                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Left Aligned Modal
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Used in situations when 2 or more data capture elements are needed that
                        differ in component type and or context. Exceptions to these principles are
                        rare.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./modalLeftAlignedSample').default}
                    >
                        <ModalLeftAlignedSample />
                    </Example>

                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Center Aligned Modal
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Used in situations when only 1 data capture elements is needed to complete
                        a process or a step in a process, or if 2 are needed that do not differ in
                        component type and or context.
                    </Typography>

                    <Example
                        rawCode={require('!!raw-loader!./modalCenterAlignedSample').default}
                    >
                        <ModalCenterAlignedSample />
                    </Example>
                </MarkdownContainer>

                <ComponentApi
                    docs={[
                        rootDoc,
                        modalActionsDoc,
                        modalContentDoc,
                    ]}
                />

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsActionBar.propTypes = propTypes;

export default DocsActionBar;
