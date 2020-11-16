import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Example from '../../global/example';
import GridAutoLayoutSample from './gridAutoLayoutSample';
import GridBreakpointsSample from './gridBreakpointsSample';
import GridInteractive from './gridInteractive';
import GridNestedGridSample from './gridNestedGridSample';
import GridSample from './gridSample';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/layout/grid/grid';
import { default as rootDocColumn } from '!!@advclb/react-docgen-loader!react-cm-ui/layout/grid/gridColumn';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsGrid(props) {
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
                        Standard Grid
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        The column widths apply at all breakpoints (i.e. sm and up).
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./gridSample').default}
                >
                    <GridSample />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Grid with Breakpoints
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Some columns have multiple widths defined, causing the layout to change at
                        the defined breakpoint.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./gridBreakpointsSample').default}
                >
                    <GridBreakpointsSample />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Auto Layout
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Grid Columns are able to share the available space. Set the width of one
                        Grid Column and the others will automatically resize around it.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./gridAutoLayoutSample').default}
                >
                    <GridAutoLayoutSample />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Nested Grids
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Nesting a Grid within another Grid is possible.
                    </Typography>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./gridNestedGridSample').default}
                >
                    <GridNestedGridSample />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="children"
                        variant="h2"
                    >
                        Interactive Grid System
                    </Heading>

                    <Typography
                        variant="body1"
                    >
                        Go ahead, give it a whirl
                    </Typography>
                </MarkdownContainer>

                <Example>
                    <GridInteractive />
                </Example>

                <ComponentApi
                    docs={[
                        rootDoc,
                        rootDocColumn,
                    ]}
                />

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsGrid.propTypes = propTypes;

export default withRouter(DocsGrid);
