import {
    Typography,
} from 'react-cm-ui';
import { camelCase } from 'lodash';
import { withRouter } from 'react-router';
import React from 'react';
import ExampleStandard from './examples/exampleStandard';
import ExampleSortableRows from './examples/exampleSortableRows';
import ExampleStickyColumns from './examples/exampleStickyColumns';
import Example from '../../../global/example';
import Heading from '../../../global/heading';
import Main from '../../../global/main';
import MarkdownContainer from '../../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/dataGrid/dataGrid';
/* eslint-enable import/no-named-default, import/extensions */

function DocsDataGrid() {
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

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Sticky Columns
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        An example to show the use of the DataGrid&apos;s `stickyColumns` prop.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleStickyColumns').default}
                >
                    <ExampleStickyColumns />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Sortable Rows
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        An example to show the use of the DataGrid&apos;s `sortable` prop.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleSortableRows').default}
                >
                    <ExampleSortableRows />
                </Example>
            </Main.Content>
        </Main>
    );
}

export default withRouter(DocsDataGrid);
