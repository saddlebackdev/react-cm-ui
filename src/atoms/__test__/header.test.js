/**
 * To Run this test, from the React CM UI root folder, execute the following command:
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
