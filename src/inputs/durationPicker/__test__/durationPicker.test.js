/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/inputs/durationPicker/__test__/durationPicker.test.js
 */
import { mount } from 'enzyme';
import React from 'react';
import { BEM_BLOCK_NAME } from '../constants';
import DurationPicker from '../durationPicker';
import MockedTheme from '../../../testUtils/mockedTheme';

describe('<DurationPicker />', () => {
    it('Can render without problems (all default props)', () => {
        const wrapper = mount(
            <MockedTheme>
                <DurationPicker />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--days_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${BEM_BLOCK_NAME}--hours_dropdown`).exists()).toBe(true);
    });

    it('Can render without problems (controlled component + id and label props)', () => {
        const rootElementId = 'some_block--duration_picker';

        const props = {
            id: rootElementId,
            label: 'Pick a duration!',
            onChange: jest.fn(),
            value: null,
        };

        const wrapper = mount(
            <MockedTheme>
                <DurationPicker {...props} />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find(`#${rootElementId}--days_dropdown`).exists()).toBe(true);
        expect(wrapper.find(`#${rootElementId}--hours_dropdown`).exists()).toBe(true);
    });
});
