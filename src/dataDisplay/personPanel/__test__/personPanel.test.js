/**
 * To Run this test, from the React CM UI root folder, execute the following command:
 * npx jest ./src/atoms/__test__/a.test.js
 */
import { describe, expect, it } from '@jest/globals';
import { shallow } from 'enzyme';
import React from 'react';
import PersonPanel from '../personPanel';

describe('<PersonPanel />', () => {
    const props = {
        id: 'some_block--some_element_name-some_modifier',
        onClick: jest.fn(),
    };

    // eslint-disable-next-line react/jsx-props-no-spreading
    const wrapper = shallow(<A {...props} />);

    it('Should render without problems', () => {
        expect(wrapper).toBeDefined();
    });

    it('Should have expected \'id\' prop', () => {
        expect(wrapper.prop('id')).toEqual(props.id);
    });

    it('Fires onClick()', () => {
        wrapper.simulate('click');
        expect(props.onClick).toHaveBeenCalledTimes(1);
    });
});
