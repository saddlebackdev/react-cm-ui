'use strict';

import 'images/marty-mcfly.jpg';

import PropTypes from 'prop-types';
import React from 'react';
import { Card, Header, Image, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Block from 'components/UI/Block.react';
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

const imageSample = `import React from 'react';

import Loader from 'components/UI/Elements/Loader.react';

export default class ImageSample extends React.Component {

    render() {
        return (
            <Image src="/_/docs/src/images/marty-mcfly.jpg" />
        );
    }

}`;

const avatarSample = `import React from 'react';

import Loader from 'components/UI/Elements/Loader.react';

export default class AvatarSample extends React.Component {

    render() {
        return (
            <div>
                <Image avatar /><br /><br />
                <Image avatar src="/_/docs/src/images/marty-mcfly.jpg" />
            </div>
        );
    }

}`;

export default class ElementsImage extends React.Component {

    render() {

        const props = [
            {
                name: 'as',
                type: 'enum',
                default: 'img',
                description: 'An element type to render as.',
                allowedTypes: 'div, img'
            }, {
                name: 'avatar',
                type: 'bool',
                default: '',
                description: 'An Image can be shown as a circular avatar.',
                allowedTypes: ''
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'size',
                type: 'enum',
                default: '',
                description: 'Size of Image.',
                allowedTypes: 'xlarge, large, medium, small, xsmall, xxsmall'
            }, {
                name: 'src',
                type: 'string',
                default: '',
                description: 'Path to image file.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Image or Image\'s container.',
                allowedTypes: ''
            }
        ];

        return (
            <Main page="headers">
                <TitleBar title="Image" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Image */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Image
                    <Header.Subheader>
                        An image.
                    </Header.Subheader>
                </Header>

                <Image src="/_/docs/src/images/marty-mcfly.jpg" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {imageSample}
                </Highlighter>

                {/* Avatar */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Avatar
                    <Header.Subheader>
                        An image can be an avatar.
                    </Header.Subheader>
                </Header>

                <Image avatar /><br /><br />
                <Image avatar src="/_/docs/src/images/marty-mcfly.jpg" />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {avatarSample}
                </Highlighter>
            </Main>
        );
    }

}
