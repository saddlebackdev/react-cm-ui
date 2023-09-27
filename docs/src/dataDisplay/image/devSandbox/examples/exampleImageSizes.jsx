import React from 'react';
import {
    Image,
} from '@saddlebackchurch/react-cm-ui';
import sampleImage from '../../../../images/marty-mcfly.jpg';

export default function ExampleImageSizes() {
    return (
        <div>
            <Image src={sampleImage} size={100} />
            <br />
            <br />
            <Image type="user" size={44} name="Marty McFly" />
            <br />
            <br />
            <Image type="user" size={66} src={sampleImage} />
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
        </div>
    );
}
