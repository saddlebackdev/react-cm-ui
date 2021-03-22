import {
    Tag,
    Typography,
} from 'react-cm-ui';
import { camelCase } from 'lodash';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import {
    LABEL_SAMPLE,
    COLOR_SAMPLE,
    FLUID_SAMPLE,
    INVERSE_SAMPLE,
    ON_CLICK_SAMPLE,
    ON_CLEAR_CLICK_SAMPLE,
} from './examples/examples';
import Block from '../../global/block';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/tag/tag';
/* eslint-enable import/no-named-default, import/extensions */

const propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
};

function DocsTag(props) {
    const {
        location: {
            pathname,
        },
    } = props;

    const {
        description,
        displayName,
    } = rootDoc;

    const onClick = useCallback(() => {
        // eslint-disable-next-line no-console
        console.log('Tag has been clicked!');
    }, []);

    const onClearClick = useCallback(() => {
        // eslint-disable-next-line no-console
        console.log('Tag removed.');
    }, []);

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
                </MarkdownContainer>

                <Heading
                    anchorLink="alert-banner"
                    variant="h2"
                >
                    Tag
                </Heading>

                <Typography variant="body1">
                    A standard tag that can be attached to something, giving information about it.
                </Typography>

                <Tag>Label</Tag>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {LABEL_SAMPLE}
                </Highlighter>

                <Heading
                    anchorLink="alert-banner"
                    variant="h2"
                >
                    Color
                </Heading>

                <Typography variant="body1">
                Labels can have different colors.
                </Typography>

                <Tag color="alert">Alert</Tag>
                <Tag color="highlight">Highlight</Tag>
                <Tag color="success">Success</Tag>
                <Tag color="primary">Primary</Tag>
                <Tag color="transparent">Transparent</Tag>
                <Tag color="warning">Warning</Tag>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {COLOR_SAMPLE}
                </Highlighter>

                <Heading
                    anchorLink="alert-banner"
                    variant="h2"
                >
                    Fluid
                </Heading>

                <Typography variant="body1">
                    A Tag's container can take on the size of its parent container.
                </Typography>

                <Tag fluid>A Fluid Label</Tag>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {FLUID_SAMPLE}
                </Highlighter>

                <Heading
                    anchorLink="alert-banner"
                    variant="h2"
                >
                    Inverse
                </Heading>

                <Typography variant="body1">
                    Labels can have different colors.
                </Typography>

                <Block inverse style={{ marginTop: '33px' }}>
                    <Tag color="alert" inverse>Alert</Tag>
                    <Tag color="highlight" inverse>Highlight</Tag>
                    <Tag color="success" inverse>Success</Tag>
                    <Tag color="primary" inverse>Primary</Tag>
                    <Tag color="transparent" inverse>Transparent</Tag>
                    <Tag color="warning" inverse>Warning</Tag>
                </Block>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {INVERSE_SAMPLE}
                </Highlighter>

                <Heading
                    anchorLink="alert-banner"
                    variant="h2"
                >
                    onClick Handler
                </Heading>

                <Typography variant="body1">
                A Label can be have a onClick handler.
                </Typography>

                <Tag onClick={onClick}>Click Me</Tag>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {ON_CLICK_SAMPLE}
                </Highlighter>

                <Heading
                    anchorLink="alert-banner"
                    variant="h2"
                >
                    onClearClick Handler
                </Heading>

                <Typography variant="body1">
                    A Label can be removed using the onClearClick handler.
                </Typography>

                <Tag color="alert" onClearClick={onClearClick}>Alert</Tag>
                <Tag color="highlight" onClearClick={onClearClick}>Highlight</Tag>
                <Tag color="success" onClearClick={onClearClick}>Success</Tag>
                <Tag color="primary" onClearClick={onClearClick}>Primary</Tag>
                <Tag color="transparent" onClearClick={onClearClick}>Transparent</Tag>
                <Tag color="warning" onClearClick={onClearClick}>Warning</Tag>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {ON_CLEAR_CLICK_SAMPLE}
                </Highlighter>

                <ComponentVersionIdentifier
                    pathname={pathname}
                />
            </Main.Content>
        </Main>
    );
}

DocsTag.propTypes = propTypes;

export default DocsTag;
