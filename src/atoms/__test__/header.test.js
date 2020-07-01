/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/atoms/__test__/header.test.js
 */
import { shallow } from 'enzyme';
import React from 'react';
import Header from '../header';

describe('<Header />', () => {
    const wrapper = shallow(<Header />);

    it('Should render without problems', () => {
        expect(wrapper).toBeDefined();
    });
});
