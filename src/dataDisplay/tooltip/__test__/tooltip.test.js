/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/tooltip/__test__/tooltip.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import Icon from '../../icon';
import Tooltip from '../tooltip';

describe('<Tooltip />', () => {
    const bemName = 'some_block--some_element_name-some_modifier';

    const props = {
        className: bemName,
        id: bemName,
        title: 'Cool Whip',
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <Tooltip
                {...props}
            >
                <Icon
                    type="expand"
                />
            </Tooltip>,
        );

        expect(wrapper.exists()).toBe(true);
    });
});
