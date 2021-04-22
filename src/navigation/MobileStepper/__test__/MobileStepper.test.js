/**
 * To run this test:
 * npx jest ./src/navigation/mobileStepper/__test__/MobileStepper.test
 */
import React from 'react';
import { shallow } from 'enzyme';
import MobileStepper from '../MobileStepper';

describe('<MobileStepper />', () => {
    let wrapper;

    const props = {
        buttons: {
            back: {
                label: 'Back',
                onClick: jest.fn(),
            },
            last: {
                label: 'Got it!',
                onClick: jest.fn(),
            },
            next: {
                label: 'Next',
                onClick: jest.fn(),
            },
        },
        id: 'navigation_mobile_stepper--some_element_name-some_modifier',
        steps: 6,
        style: {},
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

    it('Should render "Next Action Button", simulate click and add 1 step', () => {
        wrapper.find(`#${props.id}--button_next`).simulate('click');

        expect(wrapper.find(`#${props.id}--button_back`).length).toBe(1);
    });

    it('Should render simulate click and reduce 1 step', () => {
        wrapper.find(`#${props.id}--button_next`).simulate('click');

        expect(wrapper.find(`#${props.id}--button_back`).length).toBe(1);

        wrapper.find(`#${props.id}--button_back`).simulate('click');

        expect(wrapper.find(`#${props.id}--button_back`).length).toBe(0);
        expect(wrapper.find(`#${props.id}--button_next`).length).toBe(1);
    });

    it('Should not render "Next Action Button" if is the last step and will be render "Last Action Button"', () => {
        wrapper.setProps({ steps: 2 });
        wrapper.find(`#${props.id}--button_next`).simulate('click');

        expect(wrapper.find(`#${props.id}--button_back`).length).toBe(1);
        expect(wrapper.find(`#${props.id}--button_last`).length).toBe(1);
    });

    it('Should render "Custom Labels" on action Buttons', () => {
        const labels = {
            buttons: {
                back: {
                    label: 'Go Back',
                },
                last: {
                    label: 'You Got it!',
                },
                next: {
                    label: 'Go Next',
                },
            },
        };

        wrapper.setProps({ ...labels });
        wrapper.setProps({ steps: 2 });

        expect(wrapper.text().includes(labels.buttons.next.label)).toBe(true);

        wrapper.find(`#${props.id}--button_next`).simulate('click');

        expect(wrapper.text().includes(labels.buttons.back.label)).toBe(true);
        expect(wrapper.text().includes(labels.buttons.last.label)).toBe(true);
    });
});
