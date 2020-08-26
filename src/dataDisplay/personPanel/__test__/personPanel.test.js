/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanel.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import PersonPanel from '../personPanel';
import PersonPanelDetails from '../personPanelDetails';
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
        const wrapper = mountWithTheme(
            <PersonPanel
                {...props}
            >
                {minimalChildren}
            </PersonPanel>,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render with the root classes', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <PersonPanel
                {...props}
                classes={{
                    root: rootOverride,
                }}
            >
                {minimalChildren}
            </PersonPanel>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('person_panel')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with the root className', () => {
        const wrapper = mountWithTheme(
            <PersonPanel
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected `id` prop', () => {
        const wrapper = mountWithTheme(
            <PersonPanel
                {...props}
            >
                {minimalChildren}
            </PersonPanel>,
        );

        const root = wrapper.find('div').first();

        expect(root.prop('id')).toEqual(props.id);
    });

    it('Should expand when clicking PersonPanelSummary', () => {
        const wrapper = mountWithTheme(
            <PersonPanel
                {...props}
                onChange={undefined}
            >
                {minimalChildren}
            </PersonPanel>,
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
        const wrapper = mountWithTheme(
            <PersonPanel
                {...props}
            >
                {minimalChildren}
            </PersonPanel>,
        );

        wrapper.find('PersonPanelSummary').simulate('click');

        expect(props.onChange).toHaveBeenCalledTimes(1);
    });

    it('Should be controlled', () => {
        const wrapper = mountWithTheme(
            <PersonPanel
                {...props}
                isExpanded
            >
                {minimalChildren}
            </PersonPanel>,
        );

        const summary = wrapper.find(PersonPanelSummary);

        expect(summary.prop('isExpanded')).toEqual(true);
        expect(summary.find('div').first().hasClass(/(makeStyles)-(isExpanded)-(\d+)/)).toEqual(true);

        const details = wrapper.find(PersonPanelDetails);

        expect(details.prop('isExpanded')).toEqual(true);
        expect(details.find('div').first().hasClass(/(makeStyles)-(isExpanded)-(\d+)/)).toEqual(true);
    });
});
