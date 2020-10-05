/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/filtersRail/__test__/filtersRail.test.js
 */

import React from 'react';
import mountWithTheme, { createMatchMedia } from '../../../testUtils/enzymeHelpers';
import FiltersRail from '../filtersRail';

describe('<FiltersRail />', () => {
    const bemName = 'some_block--some_element_name-some_modifier';

    const props = {
        className: bemName,
        id: bemName,
        rows: [
            {
                collapsible: true,
                heading: 'Category',
                components: [
                    {
                        props: {
                            checked: false,
                            count: 10,
                            label: 'Label 1',
                            onChange: jest.fn(),
                        },
                        type: 'checkbox',
                    },
                ],
            },
        ],
        isOpen: true,
    };

    it('Can render without problems', () => {
        const wrapper = mountWithTheme(
            <FiltersRail />,
        );

        expect(wrapper).toBeDefined();
        expect(wrapper.exists()).toBe(true);
    });

    it('Should not render if breakpoint is below md.', () => {
        window.matchMedia = createMatchMedia(375);

        const wrapper = mountWithTheme(
            <FiltersRail />,
        );

        expect(wrapper.find('FiltersRail').find('div').first().exists()).toBe(false);

        window.matchMedia = createMatchMedia(window.innerWidth);
    });

    it('Should have expected \'children\'', () => {
        const text = 'hello world';

        const wrapper = mountWithTheme(
            <FiltersRail>
                <div className="foo">
                    {text}
                </div>
            </FiltersRail>,
        );

        expect(wrapper.find('.foo').exists()).toEqual(true);
        expect(wrapper.find('.foo').text()).toEqual(text);
    });

    it('Should render with the root classes override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <FiltersRail
                {...props}
                classes={{
                    root: rootOverride,
                }}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with proper classNames', () => {
        const wrapper = mountWithTheme(
            <FiltersRail
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('filters_rail')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <FiltersRail
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Should set height of filters rail', () => {
        /**
         * TODO: Create test for the useEffect method that sets the
         * height of the filters rail.
         */
    });
});
