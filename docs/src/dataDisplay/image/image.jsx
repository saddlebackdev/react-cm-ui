import 'images/marty-mcfly.jpg';

import {
    Card,
    Typography,
    Image,
} from 'react-cm-ui';
import React from 'react';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const imageSample = `import React from 'react';
import { Image } from 'react-cm-ui';

export default class ImageSample extends React.Component {

    render() {
        return (
            <Image src="images/marty-mcfly.jpg" />
        );
    }

}`;

const avatarSample = `import React from 'react';
import { Image } from 'react-cm-ui';

export default class AvatarSample extends React.Component {

    render() {
        const MARTY_MCFLY_IMAGE_SRC = 'images/marty-mcfly.jpg';

        return (
            <div>
                <Image type="person" /><br /><br />
                <Image type="user" /><br /><br />
                <Image type="person" src={MARTY_MCFLY_IMAGE_SRC} /><br /><br />
                <Image type="user" src={MARTY_MCFLY_IMAGE_SRC} /><br /><br />
                <Image type="person" name="Marty McFly" /><br /><br />
                <Image type="user" name="Marty McFly" /><br /><br />
                {/*
                    Test Name AND Image Source
                    Shouldn't render image AND initials ... only image :-)
                */}
                <Image type="person" name="Marty McFly" src={MARTY_MCFLY_IMAGE_SRC} /><br /><br />
                <Image type="user" name="Marty McFly" src={MARTY_MCFLY_IMAGE_SRC} />
            </div>
        );
    }
}`;

const sizeSample = `import React from 'react';
import { Image } from 'react-cm-ui';

export default class SizeSample extends React.Component {

    render() {
        const MARTY_MCFLY_IMAGE_SRC = '/images/marty-mcfly.jpg';

        return (
            <div>
                <Image src={MARTY_MCFLY_IMAGE_SRC} size={100} /><br /><br />
                <Image type="user" size={44} name="Marty McFly" /><br /><br />
                <Image type="user" size={66} src={MARTY_MCFLY_IMAGE_SRC} /><br /><br />
                <Image type="user" size={22} /><br /><br />
                <Image type="user" size={44} /><br /><br />
                <Image type="user" size={66} /><br /><br />
                <Image type="user" size={88} />
            </div>
        );
    }
}`;

const props = [
    {
        name: 'as',
        type: 'enum',
        default: 'img',
        description: 'An element type to render as.',
        allowedTypes: 'div, img',
    }, {
        name: 'border',
        type: 'number',
        default: '',
        description: 'Determines width of border, If set to true border width is set to 1. Also, setting it to number would set same border width',
        allowedTypes: 'bool, number',
    }, {
        name: 'borderInverse',
        type: 'bool',
        default: '',
        description: 'If set to true, border color set to white',
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
    }, {
        name: 'type',
        type: 'enum',
        default: '',
        description: 'An Image can be shown as a circular & square avatar',
        allowedTypes: 'person, user',
    },
];

const MARTY_MCFLY_IMAGE_SRC = '/images/marty-mcfly.jpg';

export default function ElementsImage() {
    return (
        <Main page="headers">
            <Main.Content>
                <Card>
                    <Typography size="large">Props</Typography>

                    <TableProps props={props} />
                </Card>

                {/* Image */}
                <Heading variant="h2">
                    Image
                </Heading>

                <Typography variant="body1">
                    An image.
                </Typography>

                <Image src={MARTY_MCFLY_IMAGE_SRC} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {imageSample}
                </Highlighter>

                {/* Avatar */}
                <Heading variant="h2">
                    Avatar
                </Heading>

                <Typography variant="body1">
                    An image can be an avatar.
                </Typography>

                <Image type="person" />
                <br />
                <br />
                <Image type="user" />
                <br />
                <br />
                <Image type="person" src={MARTY_MCFLY_IMAGE_SRC} />
                <br />
                <br />
                <Image type="user" src={MARTY_MCFLY_IMAGE_SRC} />
                <br />
                <br />
                <Image type="person" name="Marty McFly" />
                <br />
                <br />
                <Image type="user" name="Marty McFly" />
                <br />
                <br />
                {/*
                    Test Name AND Image Source
                    Shouldn't render image AND initials ... only image :-)
                */}
                <Image type="person" name="Marty McFly" src={MARTY_MCFLY_IMAGE_SRC} />
                <br />
                <br />
                <Image type="user" name="Marty McFly" src={MARTY_MCFLY_IMAGE_SRC} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {avatarSample}
                </Highlighter>

                {/* Size */}
                <Heading variant="h2">
                    Size
                </Heading>

                <Typography variant="body1">
                    Passing a size (number) will contrain the image by its width.
                </Typography>

                <Image src={MARTY_MCFLY_IMAGE_SRC} size={100} />
                <br />
                <br />
                <Image type="user" size={44} name="Marty McFly" />
                <br />
                <br />
                <Image type="user" size={66} src={MARTY_MCFLY_IMAGE_SRC} />
                <br />
                <br />
                <Image type="user" size={22} />
                <br />
                <br />
                <Image type="user" size={44} />
                <br />
                <br />
                <Image type="user" size={66} />
                <br />
                <br />
                <Image type="user" size={88} />

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {sizeSample}
                </Highlighter>
            </Main.Content>
        </Main>
    );
}
