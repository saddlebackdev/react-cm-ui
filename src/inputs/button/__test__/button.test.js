import { mount, shallow } from 'enzyme';
import React from 'react';
import Button from '../button';
import MockedTheme from '../../../testUtils/mockedTheme';

describe('<Button />', () => {
    it('should render without problems', () => {
        const wrapper = shallow(
            <MockedTheme>
                <Button />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should be disable', () => {
        const wrapper = shallow(
            <MockedTheme>
                <Button disable id={'disableButton'} >children</Button>
            </MockedTheme>
        );

        const isDisabled = wrapper.html().includes('colorDisable')

        expect(isDisabled).toBe(true);
    })

    it('Should be a fluid button', () => {
        const wrapper = shallow(
            <MockedTheme>
                <Button fluid id={'fluidButton'} >children</Button>
            </MockedTheme>
        );

        const isDisabled = wrapper.html().includes('fluid')

        expect(isDisabled).toBe(true);
    })

    it('Should be pill button', () => {
        const wrapper = shallow(
            <MockedTheme>
                <Button pill id={'fluidButton'} >children</Button>
            </MockedTheme>
        );

        console.log(wrapper.html())
        const isPill = wrapper.html().includes('Button-pill')

        expect(isPill).toBe(true);
    })

    it('Should be outlined button', () => {
        const wrapper = shallow(
            <MockedTheme>
                <Button outline id={'fluidButton'} >children</Button>
            </MockedTheme>
        );

        const isOutlined = wrapper.html().includes('Button-outlined')

        expect(isOutlined).toBe(true);
    })

});
