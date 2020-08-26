/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanel.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import PersonContactInfo from '../personContactInfo';

describe('<PersonContactInfo />', () => {
    const props = {
        id: 'block_name--element_name-modifier',
        email: 'test.email@example.com',
        emergencyContactEmail: 'relationship.test@example.com',
        emergencyContactPhone: '(949) 456-6789',
        emergencyContactPreferredMethod: 'none',
        emergencyContactRelationshipName: 'Friend',
        isDoNotContact: false,
        isDoNotEmail: false,
        isDoNotMail: false,
        isDoNotPhone: false,
        isDoNotText: false,
        phone: '(949) 456-7890',
        preferredMethod: 'email',
        recordType: 'adult',
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render with the root classes', () => {
        const wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('person_contact_info')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
    });

    it('Should have expected `id` prop', () => {
        const wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.prop('id')).toEqual(props.id);
    });

    it('Should expect email contact text.', () => {
        let wrapper;

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
            />,
        );

        expect(wrapper.find('h5').text()).toEqual('(Prefers Email)');
        expect(wrapper.find('a').text()).toEqual(props.email);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                emergencyContactPreferredMethod="email"
                recordType="child"
            />,
        );

        expect(wrapper.find('h5').text()).toEqual('(Friend\'s Email)');
        expect(wrapper.find('a').text()).toEqual(props.emergencyContactEmail);
    });

    it('Should expect phone contact text.', () => {
        let wrapper;

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                preferredMethod="phone"
            />,
        );

        expect(wrapper.find('h5').text()).toEqual('(Prefers Phone)');
        expect(wrapper.find('a').text()).toEqual(props.phone);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                emergencyContactPreferredMethod="phone"
                recordType="child"
            />,
        );

        expect(wrapper.find('h5').text()).toEqual('(Friend\'s Phone)');
        expect(wrapper.find('a').text()).toEqual(props.emergencyContactPhone);
    });

    it('Should expect text message contact text.', () => {
        let wrapper;

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                preferredMethod="text-message"
            />,
        );

        expect(wrapper.find('h5').text()).toEqual('(Prefers Text)');
        expect(wrapper.find('p').text()).toEqual(props.phone);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                emergencyContactPreferredMethod="text-message"
                recordType="child"
            />,
        );

        expect(wrapper.find('h5').text()).toEqual('(Friend\'s Text)');
        expect(wrapper.find('p').text()).toEqual(props.emergencyContactPhone);
    });

    it('Should expect do not contact message.', () => {
        const wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                isDoNotContact
            />,
        );

        expect(wrapper.find('h5').text()).toEqual('(Do Not Contact This Individual)');
    });

    it('Should expect do contact by types message.', () => {
        const wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                isDoNotMail
                isDoNotPhone
                isDoNotText
            />,
        );

        expect(wrapper.find('h5').text()).toEqual('(Prefers Email, DNC via Mail, Phone, Text)');
        expect(wrapper.find('p').text()).toEqual(props.email);
    });

    it('Should not return root div.', () => {
        let wrapper;

        /**
         * Adult
         */
        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                preferredMethod={null}
            />,
        );

        expect(wrapper.find('div')).toHaveLength(0);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                preferredMethod="mail"
            />,
        );

        expect(wrapper.find('div')).toHaveLength(0);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                preferredMethod="none"
            />,
        );

        expect(wrapper.find('div')).toHaveLength(0);

        /**
         * Child
         */
        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                recordType="child"
            />,
        );

        expect(wrapper.find('div')).toHaveLength(0);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                emergencyContactPreferredMethod="email"
                emergencyContactRelationshipName={null}
                recordType="child"
            />,
        );

        expect(wrapper.find('div')).toHaveLength(0);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                emergencyContactPreferredMethod="mail"
                recordType="child"
            />,
        );

        expect(wrapper.find('div')).toHaveLength(0);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                emergencyContactPreferredMethod="none"
                recordType="child"
            />,
        );

        expect(wrapper.find('div')).toHaveLength(0);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                emergencyContactPreferredMethod="phone"
                emergencyContactRelationshipName={null}
                recordType="child"
            />,
        );

        expect(wrapper.find('div')).toHaveLength(0);

        wrapper = mountWithTheme(
            <PersonContactInfo
                {...props}
                emergencyContactPreferredMethod="text-message"
                emergencyContactRelationshipName={null}
                recordType="child"
            />,
        );

        expect(wrapper.find('div')).toHaveLength(0);
    });
});
