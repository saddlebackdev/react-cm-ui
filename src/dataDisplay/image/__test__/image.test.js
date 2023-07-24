/**
 * To run this test:
 * npx jest ./src/dataDisplay/image/__test__/image.test.js
 */

import React from 'react';
import {
    render,
    screen,
} from '../../../testUtils';
import Image from '../image';

describe('<Image />', () => {
    const props = {
        src: '/images/marty-mcfly.jpg',
    };

    it('Should render without problems', () => {
        render(
            <Image
                {...props}
            />,
        );

        expect(screen.queryByTestId('cmui-image')).toBeInTheDocument();
    });

    describe('Avatars', () => {
        it('default person: should show with person icon when \'src\' and \'name\' are undefined', () => {
            render(
                <Image
                    type="person"
                />,
            );

            expect(screen.queryByTestId('cmui-icon-person')).toBeInTheDocument();
            expect(screen.queryByText('This person has no image')).toBeInTheDocument();
        });

        it('default user: should show with user icon when \'src\' and \'name\' are undefined', () => {
            render(
                <Image
                    type="user"
                />,
            );

            expect(screen.queryByTestId('cmui-icon-user')).toBeInTheDocument();
            expect(screen.queryByText('This user has no image')).toBeInTheDocument();
        });
    });

    describe('CSS background image', () => {
        it('adds CSS background image by default', () => {
            const imageProps = {
                ...props,
                alt: 'Marty McFly',
            };

            render(
                <Image
                    {...imageProps}
                />,
            );

            const image = screen.getByAltText(imageProps.alt);
            expect(image).toBeInTheDocument();
            const styles = image.getAttribute('style');
            expect(styles).toContain(`background-image: url(${props.src});`);
        });

        it('does not add CSS background image if \'suppressBackgroundImage\' prop is set to \'true\'', () => {
            const imageProps = {
                ...props,
                alt: 'Marty McFly',
                suppressBackgroundImage: true,
            };

            render(
                <Image
                    {...imageProps}
                />,
            );

            const image = screen.getByAltText(imageProps.alt);
            expect(image).toBeInTheDocument();
            const styles = image.getAttribute('style');
            expect(styles).toBeNull();
        });
    });
});
