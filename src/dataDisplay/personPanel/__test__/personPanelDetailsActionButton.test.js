/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanel.test.js
 */
import { describe, expect, it } from '@jest/globals';
import { mount, shallow } from 'enzyme';
import React from 'react';
import PersonPanelDetailsActionButton from '../personPanelDetailsActionButton';
import MockedTheme from '../../../testUtils/mockedTheme';

describe('<PersonPanel />', () => {
    const props = {
        id: 'block_name--element_name-modifier',
    };

    it('Should render without problems', () => {
        const wrapper = shallow(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should have expected `id` prop', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                />
            </MockedTheme>,
        );

        const root = wrapper.find(Button).first();

        expect(root.prop('id')).toEqual(props.id);
    });
});
