import {
    Typography,
} from 'react-cm-ui';
import { camelCase } from 'lodash';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import ExampleStandard from './examples/exampleStandard';
import Example from '../../global/example';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/dataGrid/dataGrid';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsDataGrid(props) {
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
                        Basic Data Grid
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        The most basic thing you can do with a DataGrid.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleStandard').default}
                >
                    <ExampleStandard />
                </Example>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsDataGrid.propTypes = propTypes;

export default withRouter(DocsDataGrid);
