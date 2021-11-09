/**
 * To run this test:
 * npx jest ./src/dataDisplay/header/__test__/header.test.js
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
