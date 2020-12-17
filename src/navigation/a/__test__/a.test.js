/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/navigation/a/__test__/a.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import A from '../a';

describe('<A />', () => {
    const props = {
        id: 'some_block--some_element_name-some_modifier',
        onClick: jest.fn(),
    };

    const wrapper = mountWithTheme(<A {...props} />);
    const subjectUnderTest = wrapper.find('A');

    it('Should render without problems', () => {
        expect(wrapper.exists()).toBe(true);
    });

    it('Should have expected \'id\' prop', () => {
        expect(subjectUnderTest.prop('id')).toEqual(props.id);
    });

    it('Fires onClick()', () => {
        subjectUnderTest.simulate('click');
        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});
