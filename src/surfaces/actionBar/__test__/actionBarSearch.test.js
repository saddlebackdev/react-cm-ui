/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/surfaces/actionBar/__test__/actionBarSearch.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import ActionBarSearch from '../actionBarSearch';

const ENTER_KEY_CODE = 13;
const PREVENT_DEFAULT_MOCK = jest.fn();
const SEARCH_ICON_CONTAINER_CLASS_NAME = '.action_bar--search_magnifying_glass_icon_container';
const SERACH_CLEAR_CONTAINER_CLASS_NAME = '.action_bar--search_clear_button_container';

describe('<ActionBarSearch />', () => {
    const bemName = 'some_block--some_element_name-some_modifier';

    const props = {
        className: bemName,
        id: bemName,
        onChange: jest.fn(),
        onClearClick: jest.fn(),
        onKeyDown: jest.fn(),
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
    });

    // classes
    it('Should render with the root classes override', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
                classes={{
                    root: rootOverride,
                }}
            />,
        );

        const root = wrapper.find('ActionBarSearch').find('div').first();

        expect(root.hasClass(rootOverride)).toEqual(true);
    });

    // id
    it('Should have expected \'id\' prop', () => {
        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
            />,
        );

        expect(wrapper.prop('id')).toEqual(props.id);
    });

    // isMobileSearch
    it('Should render proper classNames and search icon for the `sm` breakpoint', () => {
        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
                isMobileSearch
            />,
        );

        const root = wrapper.find('ActionBarSearch').find('div').first();

        expect(root.hasClass('action_bar--search-mobile')).toEqual(true);
        expect(root.find(SEARCH_ICON_CONTAINER_CLASS_NAME)).toEqual({});

        const searchClearButtonContainerNode =
            root.find(SERACH_CLEAR_CONTAINER_CLASS_NAME);

        expect(searchClearButtonContainerNode).toBeDefined();
        expect(
            searchClearButtonContainerNode.hasClass(/(ActionBarSearch)-(isSmBreakpoint)-(\d+)/),
        ).toEqual(true);
    });

    // isMobileSearchVisible
    it('Should show mobile search input', () => {
        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
                isMobileSearch
                isMobileSearchVisible
            />,
        );

        const root = wrapper.find('ActionBarSearch').find('div').first();

        expect(root.hasClass('action_bar--search-mobile-show')).toEqual(true);
    });

    // onChange
    it('Should call onChange and update the proper input elements', () => {
        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
            />,
        );

        const onInputChangeMock = jest.spyOn(
            wrapper.find('ActionBarSearch').instance(),
            'onInputChange',
        );

        const inputValueMock = 'test 123';

        wrapper.find('ActionBarSearch').instance().onInputChange(inputValueMock);
        wrapper.setProps({ value: inputValueMock });

        expect(onInputChangeMock).toHaveBeenCalledTimes(1);
        expect(props.onChange).toHaveBeenCalledTimes(1);
        expect(wrapper.find('input').prop('value')).toEqual(inputValueMock);
        expect(
            wrapper.find(SERACH_CLEAR_CONTAINER_CLASS_NAME).find('Icon').prop('color'),
        ).toEqual('primary');
    });

    // onClearClick
    it('Should call onClearClick and clear the input\'s value', () => {
        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
                value="test 123"
            />,
        );

        wrapper.find(SERACH_CLEAR_CONTAINER_CLASS_NAME).find('Icon').prop('onClick')();

        expect(props.onClearClick).toHaveBeenCalledTimes(1);

        props.onClearClick.mockReset();
    });

    it('Should call onClearKeyDown and clear the input\'s value', () => {
        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
                value="test 123"
            />,
        );

        const backspaceKeyCode = 8;

        wrapper.find(SERACH_CLEAR_CONTAINER_CLASS_NAME).find('Icon').prop('onKeyDown')(
            {
                keyCode: backspaceKeyCode,
            },
        );

        expect(props.onClearClick).toHaveBeenCalledTimes(0);

        wrapper.find(SERACH_CLEAR_CONTAINER_CLASS_NAME).find('Icon').prop('onKeyDown')(
            {
                keyCode: ENTER_KEY_CODE,
            },
        );

        expect(props.onClearClick).toHaveBeenCalledTimes(1);
    });

    // onKeyDown
    it('Should call onKeyDown and update the input\'s value', () => {
        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
                value="test 123"
            />,
        );

        const aKeyCode = 65;

        wrapper.find('Input').prop('onKeyDown')({
            keyCode: aKeyCode,
        });

        expect(props.onKeyDown).toHaveBeenCalledTimes(0);

        wrapper.find('Input').prop('onKeyDown')({
            keyCode: ENTER_KEY_CODE,
            preventDefault: PREVENT_DEFAULT_MOCK,
        });

        expect(props.onKeyDown).toHaveBeenCalledTimes(1);
        expect(PREVENT_DEFAULT_MOCK).toHaveBeenCalledTimes(1);
    });

    // onSearchClick
    it('Should call onSearchClick', () => {
        const onSearchClickMock = jest.fn();

        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
                onSearchClick={onSearchClickMock}
            />,
        );

        wrapper.find(SEARCH_ICON_CONTAINER_CLASS_NAME).find('Icon').prop('onClick')({
            value: 'test 123',
        });

        expect(onSearchClickMock).toHaveBeenCalledTimes(1);
    });

    // onSearchKeyDown
    it('Should call onSearchKeyDown', () => {
        const onSearchKeyDownMock = jest.fn();

        const wrapper = mountWithTheme(
            <ActionBarSearch
                {...props}
                onSearchKeyDown={onSearchKeyDownMock}
            />,
        );

        const bKeyCode = 66;

        wrapper.find(SEARCH_ICON_CONTAINER_CLASS_NAME).find('Icon').prop('onKeyDown')({
            keyCode: bKeyCode,
        });

        expect(onSearchKeyDownMock).toHaveBeenCalledTimes(0);

        wrapper.find(SEARCH_ICON_CONTAINER_CLASS_NAME).find('Icon').prop('onKeyDown')({
            keyCode: ENTER_KEY_CODE,
            preventDefault: PREVENT_DEFAULT_MOCK,
        });

        expect(onSearchKeyDownMock).toHaveBeenCalledTimes(1);
    });
});
