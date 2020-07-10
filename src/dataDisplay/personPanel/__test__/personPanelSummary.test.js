/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanelSummary.test.js
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import MockedTheme from '../../../testUtils/mockedTheme';
import PersonPanelSummary from '../personPanelSummary';

describe('<PersonPanelSummary />', () => {
    const bemName = 'block_name--element_name-modifier';

    const props = {
        classes: null,
        className: bemName,
        data: {},
        id: bemName,
        isExpanded: false,
        onClick: jest.fn(),
        tabIndex: -1,
    };

    it('Should render without problems', () => {
        const wrapper = shallow(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render with the root classes', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                    classes={{
                        root: rootOverride,
                    }}
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('person_panel--summary')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(genderUndefined)-(\d+)/)).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(isAdult)-(\d+)/)).toEqual(true);
        expect(root.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with the root className', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected `id` prop', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.prop('id')).toEqual(props.id);
    });

    it('Should render with isStudent class', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                    data={{
                        recordType: 'student',
                    }}
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(isStudent)-(\d+)/)).toEqual(true);
    });

    it('Should render with isExpanded class', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                    isExpanded
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(isExpanded)-(\d+)/)).toEqual(true);
    });

    it('Should render with isChild class', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                    data={{
                        recordType: 'child',
                    }}
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(isChild)-(\d+)/)).toEqual(true);
    });

    it('Should render with genderFemale class', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                    data={{
                        gender: 'f',
                    }}
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(genderFemale)-(\d+)/)).toEqual(true);
    });

    it('Should render with genderMale class', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                    data={{
                        gender: 'm',
                    }}
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(genderMale)-(\d+)/)).toEqual(true);
    });

    it('Should render avatar initials and name', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                    data={{
                        firstName: 'Jeffery',
                        lastName: 'Lebowski',
                    }}
                />
            </MockedTheme>,
        );

        expect(wrapper.find('.ui.image').text()).toEqual('JL');
        expect(wrapper.find('h4').text()).toEqual(' Jeffery  Lebowski ');
    });

    it('Should call onClick when clicking PersonPanelSummary', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanelSummary
                    {...props}
                />
            </MockedTheme>,
        );

        wrapper.find('PersonPanelSummary').simulate('click');

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});
