'use strict';

import 'images/marty-mcfly.jpg';

import { Card, Header, Image, TitleBar } from 'react-cm-ui';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import React from 'react';
import TableProps from '../app/tableProps.js';

const imageSample = `import React from 'react';
import { Image } from 'react-cm-ui';

export default class ImageSample extends React.Component {

    render() {
        return (
            <Image src="/images/marty-mcfly.jpg" />
        );
    }

}`;

const avatarSample = `import React from 'react';
import { Image } from 'react-cm-ui';

export default class AvatarSample extends React.Component {

    render() {
        return (
            <div>
                <Image avatar /><br /><br />
                <Image avatar src="/images/marty-mcfly.jpg" /><br /><br />
                <Image avatar name="Marty McFly" /><br /><br />

                {/* If you pass both name AND image src it won't render the image AND the initials ... only the image! :-) */}
                <Image avatar name="Marty McFly" src="/images/marty-mcfly.jpg" />
            </div>
        );
    }
}`;

const sizeSample = `import React from 'react';
import { Image } from 'react-cm-ui';

export default class SizeSample extends React.Component {

    render() {
        return (
            <div>
                <Image src="/images/marty-mcfly.jpg" size={100} /><br /><br />
                <Image avatar size={44} name="Marty McFly" /><br /><br />
                <Image avatar size={66} src="/images/marty-mcfly.jpg" /><br /><br />
                <Image avatar size={22} /><br /><br />
                <Image avatar size={44} /><br /><br />
                <Image avatar size={66} /><br /><br />
                <Image avatar size={88} />
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
                allowedTypes: 'div, img',
            }, {
                name: 'avatar',
                type: 'bool',
                default: '',
                description: 'An Image can be shown as a circular avatar.',
                allowedTypes: '',
            }, {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'size',
                type: 'number',
                default: '',
                description: 'Size of Image.',
                allowedTypes: '',
            }, {
                name: 'src',
                type: 'string',
                default: '',
                description: 'Path to image file.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Image or Image\'s container.',
                allowedTypes: '',
            },
        ];

        const martyMcFlyImageSrc = window.location.host.indexOf('localhost') > -1 ?
            '/_/docs/src/images/marty-mcfly.jpg' :
            '/images/marty-mcfly.jpg';

        return (
            <Main page="headers">
                <TitleBar title="Image" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Image */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Image
                    <Header.Subheader>
                        An image.
                    </Header.Subheader>
                </Header>

                <Image src={martyMcFlyImageSrc} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {imageSample}
                </Highlighter>

                {/* Avatar */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Avatar
                    <Header.Subheader>
                        An image can be an avatar.
                    </Header.Subheader>
                </Header>

                <Image avatar /><br /><br />
                <Image avatar src={martyMcFlyImageSrc} /><br /><br />
                <Image avatar name="Marty McFly" /><br /><br />
                {/* Test Name AND Image Source -- shouldn't render image AND initials ... only image :-) */}
                <Image avatar name="Marty McFly" src={martyMcFlyImageSrc} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {avatarSample}
                </Highlighter>

                {/* Size */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Size
                    <Header.Subheader>
                        Passing a size (number) will contrain the image by its width.
                    </Header.Subheader>
                </Header>

                <Image src={martyMcFlyImageSrc} size={100} /><br /><br />
                <Image avatar size={44} name="Marty McFly" /><br /><br />
                <Image avatar size={66} src={martyMcFlyImageSrc} /><br /><br />
                <Image avatar size={22} /><br /><br />
                <Image avatar size={44} /><br /><br />
                <Image avatar size={66} /><br /><br />
                <Image avatar size={88} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {sizeSample}
                </Highlighter>
            </Main>
        );
    }
}
