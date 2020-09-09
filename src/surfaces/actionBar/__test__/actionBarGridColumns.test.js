/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarActionsButtonDrawerOption.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import ActionBarGridColumns from '../actionBarGridColumns';

describe('<ActionBarGridColumns >', () => {
    const actionButtonClass = 'actionsButtonColumn';
    const buttonClass = 'buttonColumn';
    const dropdownButtonClass = 'dropdownButtonColumn';
    const iconBackClass = 'iconBackColumn';
    const iconFilterClass = 'iconFilterColumn';
    const iconGridClass = 'iconGridColumn';
    const iconSearchClass = 'iconSearchColumn';
    const iconSettingsClass = 'iconSettingsColumn';
    const iconTableClass = 'iconTableColumn';
    const searchClass = 'searchColumn';
    const jsxClass = 'actionsButtonColumn';

    const props = {
        onMobileSearchIconToggle: jest.fn(),
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <ActionBarGridColumns
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render proper columns', () => {

        const wrapper = mountWithTheme(
            <ActionBarGridColumns
                {...props}
                columns={[
                    {
                        actionsButton: {
                            className: actionButtonClass,
                            header: 'Actions',
                            options: [{
                                label: 'Foo',
                            }],
                        },
                    },
                    {
                        button: {
                            className: buttonClass,
                            iconType: 'plus',
                            label: 'Foo',
                        },
                    },
                    {
                        dropdownButton: {
                            className: dropdownButtonClass,
                            options: [
                                {
                                    label: 'Foo',
                                },
                            ],
                        },
                    },
                    {
                        iconBack: {
                            className: iconBackClass,
                        },
                    },
                    {
                        iconFilter: {
                            className: iconFilterClass,
                        },
                    },
                    {
                        iconGrid: {
                            className: iconGridClass,
                        },
                    },
                    {
                        iconSearch: {
                            className: iconSearchClass,
                        },
                    },
                    {
                        iconSettings: {
                            className: iconSettingsClass,
                        },
                    },
                    {
                        iconTable: {
                            className: iconTableClass,
                        },
                    },
                    {
                        search: {
                            className: searchClass,
                            onChange: () => {},
                            onClearClick: () => {},
                            onKeyDown: () => {},
                            onSearchClick: () => {},
                            onSearchKeyDown: () => {},
                        },
                    },
                    {
                        jsx: <div className={jsxClass} />,
                    },
                ]}
                isMobileSearch
                isMobileSearchVisible
            />,
        );

        expect(wrapper.find(`.${actionButtonClass}`).exists()).toEqual(true);
        expect(wrapper.find(`.${buttonClass}`).exists()).toEqual(true);
        expect(wrapper.find(`.${dropdownButtonClass}`).exists()).toEqual(true);
        expect(wrapper.find(`.${iconBackClass}`).exists()).toEqual(true);
        expect(wrapper.find(`.${iconFilterClass}`).exists()).toEqual(true);
        expect(wrapper.find(`.${iconGridClass}`).exists()).toEqual(true);
        expect(wrapper.find(`.${iconSearchClass}`).exists()).toEqual(true);
        expect(wrapper.find(`.${iconSettingsClass}`).exists()).toEqual(true);
        expect(wrapper.find(`.${iconTableClass}`).exists()).toEqual(true);
        expect(wrapper.find('ActionBarSearch').exists()).toEqual(true);
        expect(wrapper.find(`.${jsxClass}`).exists()).toEqual(true);
    });

    it('Should foo', () => {
        const wrapper = mountWithTheme(
            <ActionBarGridColumns
                {...props}
                columns={[
                    {
                        iconBack: {
                            className: iconBackClass,
                            selected: true,
                        },
                    },
                    {
                        iconFilter: {
                            className: iconFilterClass,
                            selected: true,
                        },
                    },
                    {
                        iconGrid: {
                            className: iconGridClass,
                            selected: true,
                        },
                    },
                    {
                        iconSearch: {
                            className: iconSearchClass,
                        },
                    },
                    {
                        iconSettings: {
                            className: iconSettingsClass,
                            selected: true,
                        },
                    },
                    {
                        iconTable: {
                            className: iconTableClass,
                            selected: true,
                        },
                    },
                ]}
                isMobileSearchVisible
            />,
        );

        expect(wrapper.find(`.${iconBackClass}`).first().prop('color')).toEqual('highlight');
        expect(wrapper.find(`.${iconFilterClass}`).first().prop('color')).toEqual('highlight');
        expect(wrapper.find(`.${iconGridClass}`).first().prop('color')).toEqual('highlight');
        expect(wrapper.find(`.${iconSearchClass}`).first().prop('color')).toEqual('highlight');
        expect(wrapper.find(`.${iconSettingsClass}`).first().prop('color')).toEqual('highlight');
        expect(wrapper.find(`.${iconTableClass}`).first().prop('color')).toEqual('highlight');
    });
});
