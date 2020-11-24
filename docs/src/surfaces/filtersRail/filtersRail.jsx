import {
    Typography,
} from 'react-cm-ui';
import {
    camelCase,
} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import FiltersRailPageSample from './filtersRailPageSample';
import FiltersRailDrawerSample from './filtersRailDrawerSample';
import Example from '../../global/example';
import Heading from '../../global/heading';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/surfaces/filtersRail/filtersRail';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsFiltersRail(props) {
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
                        Page Filters Rail
                    </Heading>
                </MarkdownContainer>

                <Example
                    height={700}
                    iframe
                    rawCode={require('!!raw-loader!./filtersRailPageSample').default}
                    title="Filters Rail Example"
                >
                    <FiltersRailPageSample />
                </Example>

                <MarkdownContainer>
                    <Heading
                        anchorLink="example"
                        variant="h2"
                    >
                        Drawer Filters Rail
                    </Heading>
                </MarkdownContainer>

                <Example
                    rawCode={require('!!raw-loader!./filtersRailDrawerSample').default}
                >
                    <FiltersRailDrawerSample />
                </Example>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsFiltersRail.propTypes = propTypes;

export default DocsFiltersRail;
