/**
 * To run this test:
 * npx jest ./src/navigation/mobileStepper/__test__/mobileStepper.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import MobileStepper from '../mobileStepper';

describe('<MobileStepper />', () => {
    const props = {
        steps: 0,
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <MobileStepper
                {...props}
            />,
        );

        expect(wrapper.exists()).toBe(true);
    });
});
