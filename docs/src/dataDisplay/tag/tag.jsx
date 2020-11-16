import {
    Header,
    Tag,
    Typography,
} from 'react-cm-ui';
import { camelCase } from 'lodash';
import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
// import {
//     LABEL_SAMPLE,
//     COLOR_SAMPLE,
//     FLUID_SAMPLE,
//     INVERSE_SAMPLE,
//     ON_CLICK_SAMPLE,
//     ON_CLEAR_CLICK_SAMPLE,
// } from './examples/examples';
import Block from '../../global/block';
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
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

export const LABEL_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class InputSample extends React.Component {

    render() {
        return (
            <Tag>Label</Tag>
        );
    }

}`;

export const COLOR_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class ColorSample extends React.Component {

    render() {
        return (
            <div>
                <Tag color="alert">Alert</Tag>
                <Tag color="highlight">Highlight</Tag>
                <Tag color="success">Success</Tag>
                <Tag color="primary">Primary</Tag>
                <Tag color="transparent">Transparent</Tag>
                <Tag color="warning">Warning</Tag>
            </div>
        );
    }

}`;

export const FLUID_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class FluidSample extends React.Component {

    render() {
        return (
            <Tag fluid={true}>A Fluid Label</Tag>
        );
    }

}`;

export const INVERSE_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class InverseSample extends React.Component {

    render() {
        return (
            <div>
                <Tag color="alert" inverse={true}>Alert</Tag>
                <Tag color="highlight" inverse={true}>Highlight</Tag>
                <Tag color="success" inverse={true}>Success</Tag>
                <Tag color="primary" inverse={true}>Primary</Tag>
                <Tag color="transparent" inverse={true}>Transparent</Tag>
                <Tag color="warning" inverse={true}>Warning</Tag>
            </div>
        );
    }

}`;

export const ON_CLICK_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class OnClickSample extends React.Component {

    render() {
        return (
            <Tag onClick={this._onClick.bind(this)}>Click Me</Tag>
        );
    }

    _onClick() {
        console.log('Label has been clicked!');
    }

}`;

export const ON_CLEAR_CLICK_SAMPLE = `import { Tag } from 'react-cm-ui';
import React from 'react';

export default class OnClearClickSample extends React.Component {

    render() {
        return (
            <Tag color="alert" onClearClick={this._onClearClick.bind(this)}>Alert</Tag>
            <Tag color="highlight" onClearClick={this._onClearClick.bind(this)}>Highlight</Tag>
            <Tag color="success" onClearClick={this._onClearClick.bind(this)}>Success</Tag>
            <Tag color="primary" onClearClick={this._onClearClick.bind(this)}>Primary</Tag>
            <Tag color="transparent" onClearClick={this._onClearClick.bind(this)}>Transparent</Tag>
            <Tag color="warning" onClearClick={this._onClearClick.bind(this)}>Warning</Tag>
        );
    }

    _onClearClick() {
        console.log('Label removed.');
    }

}`;

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
        console.log('Label has been clicked!');
    }, []);

    const onClearClick = useCallback(() => {
        // eslint-disable-next-line no-console
        console.log('Label removed.');
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

                {/* Label */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Label
                    <Header.Subheader>
                        A standard label that can be attached to something, giving information about it.
                    </Header.Subheader>
                </Header>

                <Tag>Label</Tag>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {LABEL_SAMPLE}
                </Highlighter>

                {/* Color */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Color
                    <Header.Subheader>
                        Labels can have different colors.
                    </Header.Subheader>
                </Header>

                <Tag color="alert">Alert</Tag>
                <Tag color="highlight">Highlight</Tag>
                <Tag color="success">Success</Tag>
                <Tag color="primary">Primary</Tag>
                <Tag color="transparent">Transparent</Tag>
                <Tag color="warning">Warning</Tag>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {COLOR_SAMPLE}
                </Highlighter>

                {/* Fluid */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Fluid
                    <Header.Subheader>
                        A Label's container can take on the size of its parent container.
                    </Header.Subheader>
                </Header>

                <Tag fluid>A Fluid Label</Tag>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {FLUID_SAMPLE}
                </Highlighter>

                {/* Inverse */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Inverse
                    <Header.Subheader>
                        Labels can have different colors.
                    </Header.Subheader>
                </Header>

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

                {/* onClick */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    onClick Handler
                    <Header.Subheader>
                        A Label can be have a onClick handler.
                    </Header.Subheader>
                </Header>

                <Tag onClick={onClick}>Click Me</Tag>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {ON_CLICK_SAMPLE}
                </Highlighter>

                {/* onClearClick */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    onClearClick Handler
                    <Header.Subheader>
                        A Label can be removed using the onClearClick handler.
                    </Header.Subheader>
                </Header>

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
