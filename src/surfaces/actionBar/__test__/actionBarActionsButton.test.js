/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarActionsButton.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import ActionBarActionsButton from '../actionBarActionsButton';

const MD_ACTION_BAR_HEIGHT = 70;
const MD_BREAKPOINT = 768;
const SM_BREAKPOINT = 375;
const SM_SEARCH_CLOSED_HEIGHT = 50;
const SM_SEARCH_OPEN_HEIGHT = 105;

describe('<ActionBarActionsButton />', () => {
    const bemName = 'some_block--some_element_name-some_modifier';

    const props = {
        actionBarNode: {},
        className: bemName,
        id: bemName,
        header: 'Actions',
        options: [
            {
                iconType: 'envelope',
                label: 'Email',
                onClick: () => {},
            }, {
                iconType: 'chevron-down',
                label: 'Actions',
                options: [
                    {
                        label: 'Option 01',
                    }, {
                        label: 'Option 02',
                    }, {
                        label: 'Option 03',
                    },
                ],
            },
        ],
    };

    let wrapper;

    beforeAll(() => {
        wrapper = mountWithTheme(
            <ActionBarActionsButton
                {...props}
            />,
        );

        wrapper.find('ActionBarActionsButton').setState({
            actionBarBottomPosY: SM_SEARCH_CLOSED_HEIGHT,
        });
    });

    it('Should render without problems', () => {
        expect(wrapper).toBeDefined();
    });

    // className
    it('Should render className', () => {
        const drawerNode = wrapper.find('Drawer');

        expect(drawerNode.hasClass(bemName)).toEqual(true);
    });

    // drawerContainer
    it('Should pass drawerContainer node to Drawer', () => {
        wrapper.setProps({
            drawerContainer: <div />,
        });

        const drawerNode = wrapper.find('Drawer');

        expect(drawerNode.prop('container')).not.toEqual(null);

        wrapper.setProps({
            drawerContainer: null,
        });
    });

    // iconBackgroundColor
    it('Should render correct button color', () => {
        const color = 'primary';

        wrapper.setProps({
            iconBackgroundColor: color,
        });

        expect(wrapper.find('Button').prop('color')).toEqual(color);

        wrapper.setProps({
            iconBackgroundColor: null,
        });
    });

    // iconType
    it('Should render correct button icon', () => {
        const iconType = 'plus';

        wrapper.setProps({
            iconType,
        });

        expect(wrapper.find('Icon').prop('type')).toEqual(iconType);

        wrapper.setProps({
            iconType: 'ellipsis-h',
        });
    });

    // id
    it('Should render correct button id', () => {
        expect(wrapper.find('Button').prop('id')).toEqual(props.id);
    });

    // isMobileSearchVisible
    it('Should render drawer positioning', () => {
        wrapper.setProps({
            actionBarNode: null,
        });

        wrapper.find('ActionBarActionsButton').setState({
            actionBarBottomPosY: null,
        });

        expect(wrapper.find('Drawer')).toEqual({});

        const closestSMMock = jest.fn(() => ({
            offsetWidth: SM_BREAKPOINT,
        }));

        const getBoundingClientRectMock = jest.fn(() => ({
            y: 0,
        }));

        wrapper.setProps({
            actionBarNode: {
                closest: closestSMMock,
                getBoundingClientRect: getBoundingClientRectMock,
            },
            isMobileSearchVisible: true,
        });

        wrapper.update();

        expect(closestSMMock).toHaveBeenCalledTimes(1);
        expect(getBoundingClientRectMock).toHaveBeenCalledTimes(1);
        expect(wrapper.find('Drawer').prop('positionYOffset')).toEqual(SM_SEARCH_OPEN_HEIGHT);

        wrapper.setProps({
            isMobileSearchVisible: false,
        });

        wrapper.update();

        expect(closestSMMock).toHaveBeenCalledTimes(2);
        expect(getBoundingClientRectMock).toHaveBeenCalledTimes(2);
        expect(wrapper.find('Drawer').prop('positionYOffset')).toEqual(SM_SEARCH_CLOSED_HEIGHT);

        const closestMDMock = jest.fn(() => ({
            offsetWidth: MD_BREAKPOINT,
        }));

        wrapper.setProps({
            actionBarNode: {
                closest: closestMDMock,
                getBoundingClientRect: getBoundingClientRectMock,
            },
            isMobileSearchVisible: true,
        });

        wrapper.update();

        expect(closestMDMock).toHaveBeenCalledTimes(1);
        expect(getBoundingClientRectMock).toHaveBeenCalledTimes(3);
        expect(wrapper.find('Drawer').prop('positionYOffset')).toEqual(MD_ACTION_BAR_HEIGHT);
    });
});
