
import PropTypes from 'prop-types';
import React from 'react';
import {
    Card, Header, Icon, TitleBar,
} from 'react-cm-ui';

// Docs UI Components
import Block from '../../global/block';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const headersSample = `import React from 'react';

import Header from '../app/Elements/Header.react';

export default class HeadersSample extends React.Component {

    render() {
        return (
            <Header as="h1">Header 1</Header>
            <Header as="h2">Header 2</Header>
            <Header as="h3">Header 3</Header>
            <Header as="h4">Header 4</Header>
            <Header as="h5">Header 5</Header>
            <Header as="h6">Header 6</Header>
        );
    }

}`;

const contentHeadersSample = `import React from 'react';

import Header from '../app/Elements/Header.react';

export default class HeadersContentSample extends React.Component {

    render() {
        return (
            <Header size="xlarge">Header 1</Header>
            <Header size="large">Header 2</Header>
            <Header size="medium">Header 3</Header>
            <Header size="small">Header 4</Header>
            <Header size="xsmall">Header 5</Header>
            <Header size="xxsmall">Header 6</Header>
        );
    }

}`;

const subheadersSample = `import React from 'react';

import Header from '../app/Elements/Header.react';
import HeaderSubheader from '../app/Elements/HeaderSubheader.react';

export default class HeadersSubheadersSample extends React.Component {

    render() {
        return (
            <Header size="medium" sub={true}>
                The Best Header In The World
                <Header.Subheader>
                    Oh yeah? Well, I think I'm the best subheader in the world.
                </Header.Subheader>
            </Header>
        );
    }

}`;

const iconSample = `import React from 'react';

import Header from '../app/Elements/Header.react';
import HeaderSubheader from '../app/Elements/HeaderSubheader.react';
import Icon from '../app/Elements/Icon.react';

export default class HeadersColorsSample extends React.Component {

    render() {
        return (
            <Header size="xlarge" icon={true}>
                <Icon type="new-cards" />
                XLarge Icon Header
            </Header>

            <Header size="large" icon={true}>
                <Icon type="new-cards" />
                Large Icon Header
            </Header>

            <Header size="medium" icon={true}>
                <Icon type="new-cards" />
                Medium Icon Header
            </Header>

            <Header size="small" icon={true}>
                <Icon type="new-cards" />
                Small Icon Header
            </Header>

            <Header size="xsmall" icon={true}>
                <Icon type="new-cards" />
                XSmall Icon Header
            </Header>

            <Header size="xxsmall" icon={true}>
                <Icon type="new-cards" />
                XXSmall Icon Header
            </Header>
        );
    }

}`;

const iconAndSubheaderSample = `import React from 'react';

import Header from '../app/Elements/Header.react';
import HeaderSubheader from '../app/Elements/HeaderSubheader.react';
import Icon from '../app/Elements/Icon.react';

export default class HeadersColorsSample extends React.Component {

    render() {
        return (
            <Header size="xlarge" icon={true} sub={true}>
                <Icon type="new-cards" />
                XLarge Icon & Subheader Header
                <Header.Subheader>
                    A header can have an icon aligned to the left of the content.
                </Header.Subheader>
            </Header>

            <Header size="large" icon={true} sub={true}>
                <Icon type="new-cards" />
                Large Icon & Subheader Header
                <Header.Subheader>
                    A header can have an icon aligned to the left of the content.
                </Header.Subheader>
            </Header>

            <Header size="medium" icon={true} sub={true}>
                <Icon type="new-cards" />
                Medium Icon & Subheader Header
                <Header.Subheader>
                    A header can have an icon aligned to the left of the content.
                </Header.Subheader>
            </Header>

            <Header size="small" icon={true} sub={true}>
                <Icon type="new-cards" />
                Small Icon & Subheader Header
                <Header.Subheader>
                    A header can have an icon aligned to the left of the content.
                </Header.Subheader>
            </Header>

            <Header size="xsmall" icon={true} sub={true}>
                <Icon type="new-cards" />
                XSmall Icon & Subheader Header
                <Header.Subheader>
                    A header can have an icon aligned to the left of the content.
                </Header.Subheader>
            </Header>

            <Header size="xsmall" icon={true} sub={true}>
                <Icon type="new-cards" />
                XXSmall Icon & Subheader Header
                <Header.Subheader>
                    A header can have an icon aligned to the left of the content.
                </Header.Subheader>
            </Header>
        );
    }

}`;

const colorsSample = `import React from 'react';

import Header from '../app/Elements/Header.react';

export default class HeadersColorsSample extends React.Component {

    render() {
        return (
            <Header color="static" size="small">Static</Header>
            <Header color="text" size="small">Text</Header>
        );
    }

}`;

const colorsInvertedSample = `import React from 'react';

import Header from '../app/Elements/Header.react';

export default class HeadersColorsInvertedSample extends React.Component {

    render() {
        return (
            <Header color="static" inverse={true} size="small">Static</Header>
            <Header color="text" inverse={true} size="small">Text</Header>
        );
    }

}`;

const weightSample = `import React from 'react';

import Header from '../app/Elements/Header.react';

export default class WeightSample extends React.Component {

    render() {
        return (
            <Header size="medium" weight="bold">Bold</Header>
            <Header size="medium" weight="normal">Normal</Header>
            <Header size="medium" weight="semibold">SemiBold</Header>
        );
    }

}`;

export default class ElementsHeader extends React.Component {
    render() {
        const props = [
            {
                name: 'as',
                type: 'enum',
                default: '',
                description: 'An element type to render as (string or function).',
                allowedTypes: 'h1, h2, h3, h4, h5, h6',
            }, {
                name: 'children',
                type: 'node',
                default: '',
                description: 'Primary content.',
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'color',
                type: 'enum',
                default: '',
                description: 'Color of the header.',
                allowedTypes: 'inverse, static, text',
            }, {
                name: 'icon',
                type: 'bool',
                default: 'false',
                description: 'Headers may be formatted with an icon to floated to the left.',
                allowedTypes: '',
            }, {
                name: 'inverse',
                type: 'bool',
                default: 'false',
                description: 'Headers can be formatted to appear on dark backgrounds better.',
                allowedTypes: '',
            }, {
                name: 'size',
                type: 'enum',
                default: '',
                description: 'Content headings are sized with em and are based on the font-size of their container.',
                allowedTypes: 'large, medium, small, xlarge, xsmall, xxsmall',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Header\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'sub',
                type: 'bool',
                default: 'false',
                description: 'Headers may be formatted with a subheader',
                allowedTypes: '',
            }, {
                name: 'weight',
                type: 'enum',
                default: 'false',
                description: 'Headers may be formatted to have lighter or bolder weights',
                allowedTypes: 'bold, normal, semibold',
            },
        ];

        return (
            <Main page="headers">
                <TitleBar title="Header" />

                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Page Headers */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Page Headers
                        <Header.Subheader>
                            Headers may be oriented to give the hierarchy of a section in the context of the page.
                        </Header.Subheader>
                    </Header>

                    <p className="font-size-xsmall color-static">
                        <span className="font-weight-semibold">Note:</span>
                        {' '}
                        Page headings are sized using
                        {' '}
                        <code>rem</code>
                        {' '}
                        and are not affected by surrounding content size.
                    </p>

                    <Header as="h1">Header 1</Header>
                    <Header as="h2">Header 2</Header>
                    <Header as="h3">Header 3</Header>
                    <Header as="h4">Header 4</Header>
                    <Header as="h5">Header 5</Header>
                    <Header as="h6">Header 6</Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {headersSample}
                    </Highlighter>

                    {/* Content Headers */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Content Headers
                        <Header.Subheader>
                            Headers may be oriented to give the importance of a section.
                        </Header.Subheader>
                    </Header>

                    <p className="font-size-xsmall color-static">
                        <span className="font-weight-semibold">Note:</span>
                        {' '}
                        Content headings are sized with
                        {' '}
                        <code>em</code>
                        {' '}
                        and are based on the
                        {' '}
                        <code>font-size</code>
                        {' '}
                        of their container.
                    </p>

                    <Header size="xlarge">XLarge Header</Header>
                    <Header size="large">Large Header</Header>
                    <Header size="medium">Medium Header</Header>
                    <Header size="small">Small Header</Header>
                    <Header size="xsmall">XSmall Header</Header>
                    <Header size="xxsmall">XXSmall Header</Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {contentHeadersSample}
                    </Highlighter>

                    {/* Subheader */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Subheader
                        <Header.Subheader>
                            Headers may be formatted to label smaller or de-emphasized content.
                        </Header.Subheader>
                    </Header>

                    <Header size="medium" style={{ marginTop: '33px' }} sub>
                        The Best Header In The World
                        <Header.Subheader>
                            Oh yeah? Well, I think I'm the best subheader in the world.
                        </Header.Subheader>
                    </Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {subheadersSample}
                    </Highlighter>

                    {/* Icon */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Icon
                        <Header.Subheader>
                            A header can have an icon aligned to the left of the content.
                        </Header.Subheader>
                    </Header>

                    <Header size="xlarge" icon>
                        <Icon type="check" />
                        XLarge Icon Header
                    </Header>

                    <Header size="large" icon>
                        <Icon type="check" />
                        Large Icon Header
                    </Header>

                    <Header size="medium" icon>
                        <Icon type="check" />
                        Medium Icon Header
                    </Header>

                    <Header size="small" icon>
                        <Icon type="check" />
                        Small Icon Header
                    </Header>

                    <Header size="xsmall" icon>
                        <Icon type="check" />
                        XSmall Icon Header
                    </Header>

                    <Header size="xxsmall" icon>
                        <Icon type="check" />
                        XXSmall Icon Header
                    </Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {iconSample}
                    </Highlighter>

                    {/* Icon & Subheader */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Icon & Subheader
                        <Header.Subheader>
                            A header can have an icon aligned to the left of the content.
                        </Header.Subheader>
                    </Header>

                    <Header size="xlarge" icon sub>
                        <Icon type="check" />
                        XLarge Icon & Subheader Header
                        <Header.Subheader>
                            A header can have an icon aligned to the left of the content.
                        </Header.Subheader>
                    </Header>

                    <Header size="large" icon sub>
                        <Icon type="check" />
                        Large Icon & Subheader Header
                        <Header.Subheader>
                            A header can have an icon aligned to the left of the content.
                        </Header.Subheader>
                    </Header>

                    <Header size="medium" icon sub>
                        <Icon type="check" />
                        Medium Icon & Subheader Header
                        <Header.Subheader>
                            A header can have an icon aligned to the left of the content.
                        </Header.Subheader>
                    </Header>

                    <Header size="small" icon sub>
                        <Icon type="check" />
                        Small Icon & Subheader Header
                        <Header.Subheader>
                            A header can have an icon aligned to the left of the content.
                        </Header.Subheader>
                    </Header>

                    <Header size="xsmall" icon sub>
                        <Icon type="check" />
                        XSmall Icon & Subheader Header
                        <Header.Subheader>
                            A header can have an icon aligned to the left of the content.
                        </Header.Subheader>
                    </Header>

                    <Header size="xsmall" icon sub>
                        <Icon type="check" />
                        XXSmall Icon & Subheader Header
                        <Header.Subheader>
                            A header can have an icon aligned to the left of the content.
                        </Header.Subheader>
                    </Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {iconAndSubheaderSample}
                    </Highlighter>

                    {/* Colors */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Colors
                        <Header.Subheader>
                            A header can be formatted with different colors.
                        </Header.Subheader>
                    </Header>

                    <Header color="static" size="small">Static</Header>
                    <Header color="text" size="small">Text</Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {colorsSample}
                    </Highlighter>

                    {/* Colors Inverted */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Colors Inverted
                        <Header.Subheader>
                            A header's color can be inverted.
                        </Header.Subheader>
                    </Header>

                    <Block inverse style={{ marginTop: '33px' }}>
                        <Header color="static" inverse size="small">Static</Header>
                        <Header color="text" inverse size="small">Text</Header>
                    </Block>

                    <Highlighter customStyle={{ marginTop: '44px' }}>
                        {colorsInvertedSample}
                    </Highlighter>

                    {/* Weight */}
                    <Header size="large" style={{ marginTop: '55px' }} sub>
                        Weight
                        <Header.Subheader>
                            A header's weight can be changed.
                        </Header.Subheader>
                    </Header>

                    <Header size="medium" weight="bold">Bold</Header>
                    <Header size="medium" weight="normal">Normal</Header>
                    <Header size="medium" weight="semibold">SemiBold</Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {weightSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}
