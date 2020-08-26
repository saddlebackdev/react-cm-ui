/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/navigation/breadcrumbs/__test__/breadcrumbs.test.js
 */
import { shallow } from 'enzyme';
import React from 'react';
import Breadcrumbs from '../breadcrumbs';
import ROUTER from './breadcrumbsMockups';

const componentProps = {
    router: {
        ...ROUTER,
        push: jest.fn(),
        location: {
            pathname: '/my-section/sub-section/some-status/cool-stuff',
        },
    },
    showOnlyPreviousRoute: false,
    separatorIconType: 'chevron-left',
};

let wrapper;

describe('<Breadcrumbs />', () => {
    it('renders without crashing', () => {
        wrapper = shallow(<Breadcrumbs {...componentProps} />);
        expect(wrapper).toBeDefined();
    });

    it('renders all the breadcrumbs for a location pathname', () => {
        wrapper = shallow(<Breadcrumbs {...componentProps} />);
        const breadcrumbs = wrapper.find('li');
        const breadcrumbsLabels = wrapper.find('.navigation_breadcrumbs--breadcrumb_to');
        expect(breadcrumbs.length).toBe(5);
        expect(breadcrumbsLabels.at(0).prop('children')).toBe('Home');
        expect(breadcrumbsLabels.at(1).prop('children')).toBe('My Section');
        expect(breadcrumbsLabels.at(2).prop('children')).toBe('Sub Section');
        expect(breadcrumbsLabels.at(3).prop('children')).toBe('Some Status');
        expect(breadcrumbsLabels.at(4).prop('children')).toBe('Cool Stuff');
    });

    it('renders only a breadcrumb for the current and previous pathname section when showOnlyPrevious is true', () => {
        const testCaseProps = {
            ...componentProps,
            showOnlyPreviousRoute: true,
        };

        wrapper = shallow(<Breadcrumbs {...testCaseProps} />);
        const breadcrumbs = wrapper.find('li');
        expect(breadcrumbs.length).toBe(2);
        const breadcrumbsLabels = wrapper.find('.navigation_breadcrumbs--breadcrumb_to');
        expect(breadcrumbsLabels.at(0).prop('children')).toBe('Some Status');
        expect(breadcrumbsLabels.at(1).prop('children')).toBe('Cool Stuff');
    });

    it('renders a chevron-left icon as breadcrumb default icon', () => {
        wrapper = shallow(<Breadcrumbs {...componentProps} />);
        const icons = wrapper.find('Icon');
        expect(icons.length).toBe(4); // the last breadcrumb renders a different element as separator
        expect(icons.at(0).prop('type')).toBe('chevron-left');
        expect(icons.at(1).prop('type')).toBe('chevron-left');
        expect(icons.at(2).prop('type')).toBe('chevron-left');
        expect(icons.at(3).prop('type')).toBe('chevron-left');
    });

    it('renders the appropiate icon for each breadcrumb when separatorIconType is set to \'caret-right\'', () => {
        const testCaseProps = {
            ...componentProps,
            separatorIconType: 'caret-right',
        };
        wrapper = shallow(<Breadcrumbs {...testCaseProps} />);
        const icons = wrapper.find('Icon');
        expect(icons.length).toBe(4); // the last breadcrumb renders a different element as separator
        expect(icons.at(0).prop('type')).toBe('caret-right');
        expect(icons.at(1).prop('type')).toBe('caret-right');
        expect(icons.at(2).prop('type')).toBe('caret-right');
        expect(icons.at(3).prop('type')).toBe('caret-right');
    });

    it('renders a simple slash as separator for the last breadcrumb', () => {
        wrapper = shallow(<Breadcrumbs {...componentProps} />);
        const separators = wrapper.find('.navigation_breadcrumbs--breadcrumb_separator');
        expect(separators.at(4).prop('children')).toBe('/');
    });
});
