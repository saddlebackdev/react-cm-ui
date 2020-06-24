import {
    TitleBar,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Example from '../../global/example';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
import TableSample from './tableSample';
import TableSampleActive from './tableSampleActive';
import TableSampleCelled from './tableSampleCelled';
import TableSampleCollapsing from './tableSampleCollapsing';
import TableSampleDefinition from './tableSampleDefinition';
import TableSampleDisabled from './tableSampleDisabled';
import TableSampleDragAndDropRowReordering from './tableSampleDragAndDropRowReordering';
import TableSampleFixed from './tableSampleFixed';
import TableSampleFontSize from './tableSampleFontSize';
import TableSampleOnClick from './tableSampleOnClick';
import TableSampleResponsiveWidth from './tableSampleResponsiveWidth';
import TableSampleSelectable from './tableSampleSelectable';
import TableSampleSingleLine from './tableSampleSingleLine';
import TableSampleSize from './tableSampleSize';
import TableSampleStickyColumns from './tableSampleStickyColumns';
import TableSampleStretch from './tableSampleStretch';
import TableSampleTextAlign from './tableSampleTextAlign';
import TableSampleVerticalAlign from './tableSampleVerticalAlign';
/* eslint-disable import/no-named-default, import/extensions */
import { default as tableDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/table';
/* eslint-enable import/no-named-default, import/extensions */

function DocsPersonPanel() {
    const descriptionCopy = tableDoc.description;

    return (
        <Main page="headers">
            <TitleBar title="Person Panel" />

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
                        Table
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A standard table.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSample').default}
                >
                    <TableSample />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Celled Table
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s cells can be divided.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleCelled').default}
                >
                    <TableSampleCelled />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Collapsing Table
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        If `true`, applies `width: auto` to the Table.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleCollapsing').default}
                >
                    <TableSampleCollapsing />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Definition Table
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table may be formatted to emphasize a first column
                        that defines a row content.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleDefinition').default}
                >
                    <TableSampleDefinition />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Fixed Table
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table column&rsquo;s width can be evenly spaced.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleFixed').default}
                >
                    <TableSampleFixed />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Font Size
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s default font size can be changed.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleFontSize').default}
                >
                    <TableSampleFontSize />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Selectable Table
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s rows can appear to be selectable when rolling over them.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleSelectable').default}
                >
                    <TableSampleSelectable />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Single Line Table
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s cells will not wrap content in them.
                    </Typography>

                    <Typography
                        variant="body2"
                    >
                        <span className="font-weight-semibold">Note:</span>
                        &nbsp;
                        Must have
                        <code>fixed</code>
                        enabled.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleSingleLine').default}
                >
                    <TableSampleSingleLine />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Size
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s default cell size (vertical gutters) can be changed.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleSize').default}
                >
                    <TableSampleSize />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Stretch Table
                    </Heading>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleStretch').default}
                >
                    <TableSampleStretch />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Active
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s row or cell can be active.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleActive').default}
                >
                    <TableSampleActive />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Disable
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s row or cell can be disabled.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleDisabled').default}
                >
                    <TableSampleDisabled />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Text Align
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s row or cell&rsquo;s text alignment can be changed.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleTextAlign').default}
                >
                    <TableSampleTextAlign />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Vertical Align
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s row or cell&rsquo;s vertical alignment can be changed.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleVerticalAlign').default}
                >
                    <TableSampleVerticalAlign />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Table Header Cell onClick Event Handler
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table header cell can handle an onClick event.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleOnClick').default}
                >
                    <TableSampleOnClick />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Responsive Width
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table header cell and table ceel can specify a width
                        for a specific device.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleResponsiveWidth').default}
                >
                    <TableSampleResponsiveWidth />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Drag and Drop Row Reordering
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        A table&rsquo;s rows can be drag and drop enabled to allow reordering.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleDragAndDropRowReordering').default}
                >
                    <TableSampleDragAndDropRowReordering />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Sticky Columns
                    </Heading>

                    {/* <Typography
                        variant="body1"
                    >
                        // Need Description.
                    </Typography> */}
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./tableSampleStickyColumns').default}
                >
                    <TableSampleStickyColumns />
                </Example>

                <ComponentApi
                    docs={[
                        tableDoc,
                    ]}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsPersonPanel;
