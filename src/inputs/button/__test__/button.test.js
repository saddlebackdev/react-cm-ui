import { mount, shallow } from 'enzyme';
import React from 'react';
import Button from '../button';
import MockedTheme from '../../../testUtils/mockedTheme';

describe('<Button />', () => {
    it('should render without problems', () => {
        const wrapper = shallow(
            <MockedTheme>
                <Button />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
    });
});
