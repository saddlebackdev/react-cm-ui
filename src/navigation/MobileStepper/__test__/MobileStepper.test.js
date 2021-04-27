/**
 * To run this test:
 * npx jest ./src/navigation/mobileStepper/__test__/MobileStepper.test.js
 */
import React from 'react';
import { shallow } from 'enzyme';
import MobileStepper from '../MobileStepper';

describe('<MobileStepper />', () => {
    let wrapper;

    const props = {
        activeStep: 0,
        backStepAction: console.log('Back'),
        backStepLabel: 'Back',
        id: 'navigation_mobile_stepper',
        lastStepAction: console.log('Got it!'),
        lastStepLabel: 'Got it!',
        nextStepAction: console.log('Next'),
        nextStepLabel: 'Next',
        steps: 4,
    };

    beforeEach(() => {
        wrapper = shallow(<MobileStepper {...props} />);
    });

    it('Should render without problems', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(`#${props.id}`).length).toBe(1);
    });

    it('Should have an ID', () => {
        expect(wrapper.find(`#${props.id}`).length).toBe(1);
    });

    it('Should render next step and hide back step', () => {
        expect(wrapper.find(`#${props.id}--button_back`).length).toBe(0);
        expect(wrapper.find(`#${props.id}--button_next`).length).toBe(1);
    });

    it('Should render "Back Action Button"', () => {
        wrapper.setProps({ activeStep: 1 });
        expect(wrapper.find(`#${props.id}--button_back`).length).toBe(1);
    });
});
