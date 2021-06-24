/**
 * To run this test:
 * npx jest ./src/feedback/snackbar/__test__/snackbar.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import Snackbar from '../snackbar';

describe('<Snackbar />', () => {
    const props = {};

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <Snackbar
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });
});
