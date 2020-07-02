/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanel.test.js
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import PersonPanelDetailsActionButton from '../personPanelDetailsActionButton';
import MockedTheme from '../../../testUtils/mockedTheme';

describe('<PersonPanel />', () => {
    const props = {
        className: null,
        id: 'block_name--element_name-modifier',
        label: 'Select',
        onClick: () => {},
        onKeyDownClick: () => {},
        onNoClick: () => {},
        onYesClick: () => {},
        outlined: false,
        prompt: false,
        promptId: false,
        title: null,
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

    // it('Should have expected `id` prop', () => {
    //     const wrapper = mount(
    //         <MockedTheme>
    //             <PersonPanelDetailsActionButton
    //                 {...props}
    //             />
    //         </MockedTheme>,
    //     );

    //     // const root = wrapper.find('button').first();

    //     // expect(root.prop('id')).toEqual(props.id);
    // });
});
