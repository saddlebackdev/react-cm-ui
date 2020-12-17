/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/headerDeprecated/__test__/headerDeprecated.test.js
 */
import { shallow } from 'enzyme';
import React from 'react';
import HeaderDeprecated from '../headerDeprecated';

describe('<Header />', () => {
    const wrapper = shallow(<HeaderDeprecated />);

    it('Should render without problems', () => {
        expect(wrapper).toBeDefined();
    });
});
