import { shallow } from 'enzyme';
import React from 'react';
import A from '../a';

describe('<A />', () => {
    const wrapper = shallow(<A />);

    it('Should render without problems', () => {
        expect(wrapper).toBeDefined();
    });
});
