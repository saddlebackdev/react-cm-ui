/**
 * To run this test:
 * npx jest ./src/dataDisplay/header/__test__/header.test.js
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

    describe('avatar', () => {
        it('default person: should show with person icon when \'src\' and \'name\' is undefined', () => {
            render(
                <Image
                    type="person"
                />,
            );

            expect(screen.queryByTestId('cmui-icon-person')).toBeInTheDocument();
            expect(screen.queryByText('This person has no image')).toBeInTheDocument();
        });

        it('default user: should show with user icon when \'src\' and \'name\' is undefined', () => {
            render(
                <Image
                    type="user"
                />,
            );

            expect(screen.queryByTestId('cmui-icon-user')).toBeInTheDocument();
            expect(screen.queryByText('This user has no image')).toBeInTheDocument();
        });
    });
});
