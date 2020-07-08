/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanelDetailsActionButton.test.js
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import PersonPanelDetailsActionButton from '../personPanelDetailsActionButton';
import MockedTheme from '../../../testUtils/mockedTheme';
import { ENTER_KEY_CODE } from '../../../global/constants';

describe('<personPanelDetailsActionButton />', () => {
    const props = {
        className: 'block_name--element_name-modifier',
        id: 'block_name--element_name-modifier',
        label: 'Select',
        onClick: jest.fn(),
        onKeyDown: jest.fn(),
        onNoClick: jest.fn(),
        onYesClick: jest.fn(),
        outlined: false,
        prompt: false,
        promptId: 'block_name--element_name-modifier',
        title: 'Example Title',
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

    it('Should render with the button classes', () => {
        let wrapper;
        let root;

        wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                />
            </MockedTheme>,
        );

        root = wrapper.find('button');

        expect(root.hasClass('person_panel--details_action_button')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(button)-(\d+)/)).toEqual(true);
        expect(root.hasClass(props.className)).toEqual(true);

        wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                    outlined
                />
            </MockedTheme>,
        );

        root = wrapper.find('button');

        expect(root.hasClass(/(Button)-(outlined)-(\d+)/)).toEqual(true);
    });

    it('Should render with the prompt classes', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                    prompt
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(prompt)-(\d+)/)).toEqual(true);
    });

    it('Should have expected `id` prop', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                    prompt
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.prop('id')).toEqual(props.id);
        expect(root.find('button').prop('id')).toEqual(props.id);
    });

    it('Should render with label', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                    prompt
                />
            </MockedTheme>,
        );

        const buttonInnerContainer = wrapper.find('.button-inner-container');

        expect(buttonInnerContainer.text()).toEqual(props.label);
    });

    it('Should render with title', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                    prompt
                />
            </MockedTheme>,
        );

        const button = wrapper.find('button');

        expect(button.prop('title')).toEqual(props.title);
    });

    it('Should call onClick when clicking PersonPanelDetailsActionButton', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                />
            </MockedTheme>,
        );

        wrapper.find('PersonPanelDetailsActionButton').simulate('click');

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });

    it('Should call onKeyDown when pressing enter key down on PersonPanelDetailsActionButton', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                />
            </MockedTheme>,
        );

        wrapper.find('PersonPanelDetailsActionButton').props().onKeyDown({ keyCode: ENTER_KEY_CODE });

        expect(props.onKeyDown).toHaveBeenCalledTimes(1);
    });

    it('Should call onNoClick when clicking No', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                    prompt
                />
            </MockedTheme>,
        );

        wrapper.find('.prompt-no-btn').simulate('click');

        expect(props.onNoClick).toHaveBeenCalledTimes(1);
    });

    it('Should call onYesClick when clicking No', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelDetailsActionButton
                    {...props}
                    prompt
                />
            </MockedTheme>,
        );

        wrapper.find('.prompt-yes-btn').simulate('click');

        expect(props.onYesClick).toHaveBeenCalledTimes(1);
    });
});
