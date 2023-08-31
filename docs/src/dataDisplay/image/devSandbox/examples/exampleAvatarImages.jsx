import React from 'react';
import {
    Image,
} from '@saddlebackchurch/react-cm-ui';
import sampleImage from '../../../../images/marty-mcfly.jpg';

export default function ExampleAvatarImages() {
    return (
        <div>
            <Image type="person" />
            <br />
            <br />
            <Image type="user" />
            <br />
            <br />
            <Image type="person" src={sampleImage} />
            <br />
            <br />
            <Image type="user" src={sampleImage} />
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
            <Image type="person" name="Marty McFly" src={sampleImage} />
            <br />
            <br />
            <Image type="user" name="Marty McFly" src={sampleImage} />
        </div>
    );
}
