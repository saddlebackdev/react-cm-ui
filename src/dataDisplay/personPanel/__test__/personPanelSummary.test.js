/**
 * To run this test:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanelSummary.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
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
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render with the root classes', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
                classes={{
                    root: rootOverride,
                }}
            />,
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
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected `id` prop', () => {
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.prop('id')).toEqual(props.id);
    });

    it('Should render with isStudent class', () => {
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
                data={{
                    recordType: 'student',
                }}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(isStudent)-(\d+)/)).toEqual(true);
    });

    it('Should render with isExpanded class', () => {
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
                isExpanded
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(isExpanded)-(\d+)/)).toEqual(true);
    });

    it('Should render with isChild class', () => {
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
                data={{
                    recordType: 'child',
                }}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(isChild)-(\d+)/)).toEqual(true);
    });

    it('Should render with genderFemale class', () => {
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
                data={{
                    gender: 'f',
                }}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(genderFemale)-(\d+)/)).toEqual(true);
    });

    it('Should render with genderMale class', () => {
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
                data={{
                    gender: 'm',
                }}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(genderMale)-(\d+)/)).toEqual(true);
    });

    it('Should render avatar initials and name', () => {
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
                data={{
                    firstName: 'Jeffery',
                    lastName: 'Lebowski',
                }}
            />,
        );

        expect(wrapper.find('.ui.image').text()).toEqual('JL');
        expect(wrapper.find('h4').text()).toEqual(' Jeffery  Lebowski ');
    });

    it('Should call onClick when clicking PersonPanelSummary', () => {
        const wrapper = mountWithTheme(
            <PersonPanelSummary
                {...props}
            />,
        );

        wrapper.find('PersonPanelSummary').simulate('click');

        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});
