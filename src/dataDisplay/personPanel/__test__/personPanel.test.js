/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanel.test.js
 */
import { mount } from 'enzyme';
import React from 'react';
import PersonPanel from '../personPanel';
import PersonPanelDetails from '../personPanelDetails';
import MockedTheme from '../../../testUtils/mockedTheme';
import PersonPanelSummary from '../personPanelSummary';

describe('<PersonPanel />', () => {
    const minimalChildren = [
        <PersonPanelSummary
            key="summary"
        >
            Summary
        </PersonPanelSummary>,
        <PersonPanelDetails
            key="details"
        >
            Details
        </PersonPanelDetails>,
    ];

    const bemName = 'block_name--element_name-modifier';

    const props = {
        className: bemName,
        id: bemName,
        isExpanded: false,
        onChange: jest.fn(),
    };

    it('Should render without problems', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanel
                    {...props}
                >
                    {minimalChildren}
                </PersonPanel>
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render with the root classes', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mount(
            <MockedTheme>
                <PersonPanel
                    {...props}
                    classes={{
                        root: rootOverride,
                    }}
                >
                    {minimalChildren}
                </PersonPanel>
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('person_panel')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with the root className', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanel
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
                <PersonPanel
                    {...props}
                >
                    {minimalChildren}
                </PersonPanel>
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.prop('id')).toEqual(props.id);
    });

    it('Should expand when clicking PersonPanelSummary', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanel
                    {...props}
                    onChange={undefined}
                >
                    {minimalChildren}
                </PersonPanel>
            </MockedTheme>,
        );

        wrapper.find('PersonPanelSummary').simulate('click');

        const summary = wrapper.find(PersonPanelSummary);

        expect(summary.prop('isExpanded')).toEqual(true);
        expect(summary.find('div').first().hasClass(/(makeStyles)-(isExpanded)-(\d+)/)).toEqual(true);

        const details = wrapper.find(PersonPanelDetails);

        expect(details.prop('isExpanded')).toEqual(true);
        expect(details.find('div').first().hasClass(/(makeStyles)-(isExpanded)-(\d+)/)).toEqual(true);
    });

    it('Should call onChange when clicking PersonPanelSummary', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanel
                    {...props}
                >
                    {minimalChildren}
                </PersonPanel>
            </MockedTheme>,
        );

        wrapper.find('PersonPanelSummary').simulate('click');

        expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it('Should be controlled', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonPanel
                    {...props}
                    isExpanded
                >
                    {minimalChildren}
                </PersonPanel>
            </MockedTheme>,
        );

        const summary = wrapper.find(PersonPanelSummary);

        expect(summary.prop('isExpanded')).toEqual(true);
        expect(summary.find('div').first().hasClass(/(makeStyles)-(isExpanded)-(\d+)/)).toEqual(true);

        const details = wrapper.find(PersonPanelDetails);

        expect(details.prop('isExpanded')).toEqual(true);
        expect(details.find('div').first().hasClass(/(makeStyles)-(isExpanded)-(\d+)/)).toEqual(true);
    });
});
