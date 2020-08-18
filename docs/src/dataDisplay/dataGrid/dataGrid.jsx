import {
    TitleBar,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import DataGridSample from './dataGridSample';
import DataGridSortableRowsSample from './dataGridSortableRowsSample';
import DataGridStickyColumnsSample from './dataGridStickyColumnsSample';
import Example from '../../global/example';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as dataGridDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/dataGrid/dataGrid';
/* eslint-enable import/no-named-default, import/extensions */

function DocsDataGrid() {
    const descriptionCopy = dataGridDoc.description;

    return (
        <Main page="data_grid">
            <TitleBar title="Data Grid" />

            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {descriptionCopy}
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
                    rawCode={require('!!raw-loader!./dataGridSample').default}
                >
                    <DataGridSample />
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
                    rawCode={require('!!raw-loader!./dataGridStickyColumnsSample').default}
                >
                    <DataGridStickyColumnsSample />
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
                    rawCode={require('!!raw-loader!./dataGridSortableRowsSample').default}
                >
                    <DataGridSortableRowsSample />
                </Example>

                <ComponentApi
                    docs={[
                        dataGridDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsDataGrid;
