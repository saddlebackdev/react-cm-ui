import {
    Typography,
} from 'react-cm-ui';
import React from 'react';
import Example from '../../../global/example';
import Heading from '../../../global/heading';
import MarkdownContainer from '../../../global/markdownContainer';
import Main from '../../../global/main';
import ExampleStandard from './examples/exampleStandard';
import ExampleActive from './examples/exampleActive';
import ExampleCelled from './examples/exampleCelled';
import ExampleCollapsing from './examples/exampleCollapsing';
import ExampleDefinition from './examples/exampleDefinition';
import ExampleDisabled from './examples/exampleDisabled';
import ExampleDragAndDropRowReordering from './examples/exampleDragAndDropRowReordering';
import ExampleFixed from './examples/exampleFixed';
import ExampleFontSize from './examples/exampleFontSize';
import ExampleOnClick from './examples/exampleOnClick';
import ExampleResponsiveWidth from './examples/exampleResponsiveWidth';
import ExampleSelectable from './examples/exampleSelectable';
import ExampleSingleLine from './examples/exampleSingleLine';
import ExampleSize from './examples/exampleSize';
import ExampleStickyColumns from './examples/exampleStickyColumns';
import ExampleStretch from './examples/exampleStretch';
import ExampleTextAlign from './examples/exampleTextAlign';
import ExampleVerticalAlign from './examples/exampleVerticalAlign';
// eslint-disable-next-line import/no-named-default, import/extensions
import { default as tableDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/table/table';

function DocsTable() {
    const descriptionCopy = tableDoc.description;

    return (
        <Main page="headers">
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
                    rawCode={require('!!raw-loader!./examples/exampleStandard').default}
                >
                    <ExampleStandard />
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
                    rawCode={require('!!raw-loader!./examples/exampleCelled').default}
                >
                    <ExampleCelled />
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
                        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        If <code>true</code>, applies <code>width: auto</code> to the Table.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleCollapsing').default}
                >
                    <ExampleCollapsing />
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
                    rawCode={require('!!raw-loader!./examples/exampleDefinition').default}
                >
                    <ExampleDefinition />
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
                        The widths of the Table&rsquo;s columns can be evenly spaced.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleFixed').default}
                >
                    <ExampleFixed />
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
                    rawCode={require('!!raw-loader!./examples/exampleFontSize').default}
                >
                    <ExampleFontSize />
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
                    rawCode={require('!!raw-loader!./examples/exampleSelectable').default}
                >
                    <ExampleSelectable />
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
                    rawCode={require('!!raw-loader!./examples/exampleSingleLine').default}
                >
                    <ExampleSingleLine />
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
                    rawCode={require('!!raw-loader!./examples/exampleSize').default}
                >
                    <ExampleSize />
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
                    rawCode={require('!!raw-loader!./examples/exampleStretch').default}
                >
                    <ExampleStretch />
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
                        A Table&rsquo;s rows or cells can be active.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleActive').default}
                >
                    <ExampleActive />
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
                    rawCode={require('!!raw-loader!./examples/exampleDisabled').default}
                >
                    <ExampleDisabled />
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
                        The vertical alignment of a Table&rsquo;s rows or cells can be changed.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleTextAlign').default}
                >
                    <ExampleTextAlign />
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
                    rawCode={require('!!raw-loader!./examples/exampleVerticalAlign').default}
                >
                    <ExampleVerticalAlign />
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
                        {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                        A table header cell can handle an <code>onClick</code> event.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleOnClick').default}
                >
                    <ExampleOnClick />
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
                        A table header cell and table cell can specify a width for a specific
                        device.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleResponsiveWidth').default}
                >
                    <ExampleResponsiveWidth />
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
                    rawCode={require('!!raw-loader!./examples/exampleDragAndDropRowReordering').default}
                >
                    <ExampleDragAndDropRowReordering />
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
                        A table can have one or more columns defined as &quot;sticky&quot;
                        so that they stay fixed while the user horizontally scrolls
                        to see the remaining columns.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./examples/exampleStickyColumns').default}
                >
                    <ExampleStickyColumns />
                </Example>
            </Main.Content>
        </Main>
    );
}

export default DocsTable;
