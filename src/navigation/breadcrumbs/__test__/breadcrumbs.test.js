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
        expect(wrapper.length).toBe(1);
    });

    it('renders all the breadcrumbs for a location pathname', () => {
        wrapper = shallow(<Breadcrumbs {...componentProps} />);
        const breadcrumbs = wrapper.find('li');
        const breadcrumbsLabels = wrapper.find('.navigation_breadcrumbs--breadcrumb_to_typography');
        expect(breadcrumbs.length).toBe(5);
        expect(breadcrumbsLabels.at(0).prop('children')).toBe('Home');
        expect(breadcrumbsLabels.at(1).prop('children')).toBe('My Section');
        expect(breadcrumbsLabels.at(2).prop('children')).toBe('Very Long Sub Sectio...');
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
        const breadcrumbsLabels = wrapper.find('.navigation_breadcrumbs--breadcrumb_to_typography');
        expect(breadcrumbsLabels.at(0).prop('children')).toBe('Some Status');
        expect(breadcrumbsLabels.at(1).prop('children')).toBe('Cool Stuff');
    });

    it('renders a slash as breadcrumb default separator', () => {
        wrapper = shallow(<Breadcrumbs {...componentProps} />);
        const separators = wrapper.find('.navigation_breadcrumbs--breadcrumb_separator_typography');
        expect(separators.length).toBe(4);
        expect(separators.at(0).prop('children')).toBe('/');
        expect(separators.at(1).prop('children')).toBe('/');
        expect(separators.at(2).prop('children')).toBe('/');
        expect(separators.at(3).prop('children')).toBe('/');
    });

    it('renders the appropiate icon for each breadcrumb when separatorIconType is set to \'caret-right\'', () => {
        const testCaseProps = {
            ...componentProps,
            separatorString: '>',
        };
        wrapper = shallow(<Breadcrumbs {...testCaseProps} />);
        const separators = wrapper.find('.navigation_breadcrumbs--breadcrumb_separator_typography');
        expect(separators.length).toBe(4);
        expect(separators.at(0).prop('children')).toBe('>');
        expect(separators.at(1).prop('children')).toBe('>');
        expect(separators.at(2).prop('children')).toBe('>');
        expect(separators.at(3).prop('children')).toBe('>');
    });

    it('renders a chevron-left type icon as separator at the first breadcrumb beginning', () => {
        wrapper = shallow(<Breadcrumbs {...componentProps} />);
        const separators = wrapper.find('.navigation_breadcrumbs--breadcrumb_separator');
        const initialIcon = separators.at(0).prop('children');
        expect(initialIcon.props.type).toBe('chevron-left');
        expect(initialIcon.props.size).toBe('xsmall');
        expect(initialIcon.props.size).toBe('xsmall');
    });
});
