/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personPanel/__test__/personPanelDetails.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import PersonPanelDetails from '../personPanelDetails';
import { ENTER_KEY_CODE } from '../../../global/constants';

describe('<PersonPanelDetails />', () => {
    const helloWorld = 'hello world';
    const bemName = 'block_name--element_name-modifier';
    const props = {
        children: (
            <div>{helloWorld}</div>
        ),
        className: bemName,
        id: bemName,
        data: {
            address: [
                {
                    address1: '1 Dodger Ln',
                    address2: '',
                    city: 'Venice',
                    country: 'United States of America',
                    countryAlpha2: 'US',
                    countryAlpha3: 'USA',
                    id: 32676,
                    isPrimary: true,
                    postalCode: '91210',
                    region: 'California',
                    regionCode: 'CA',
                },
                {
                    address1: '1 Bowling Circle',
                    address2: '',
                    city: 'Venice',
                    country: 'United States of America',
                    countryAlpha2: 'US',
                    countryAlpha3: 'USA',
                    id: 32676,
                    isPrimary: false,
                    postalCode: '91210',
                    region: 'California',
                    regionCode: 'CA',
                },
            ],
            allergies: null,
            birthDate: 854496000,
            campus: 'Los Angeles',
            churchEntities: [],
            congregationDate: '2000-12-01T12:00:00',
            deceasedDate: null,
            emails: [
                {
                    email: 'his.duderness@example.com',
                    id: 31580,
                    isPrimary: true,
                },
                {
                    email: 'el.duderino@example.com',
                    id: 31580,
                    isPrimary: false,
                },
            ],
            emergencyContactAddresses: [{
                address1: '1 Bowling Circle',
                address2: '',
                city: 'Venice',
                country: 'United States of America',
                countryAlpha2: 'US',
                countryAlpha3: 'USA',
                isPrimary: false,
                postalCode: '91210',
                region: 'California',
                regionCode: 'CA',
            }],
            emergencyContactEmails: [{
                isPrimary: true,
                value: 'im.shomer.shabbos@example.com',
            }],
            emergencyContactName: 'Walter Sobchak',
            emergencyContactPhones: [{
                isPrimary: true,
                value: '(626) 456-7751',
            }, {
                isPrimary: false,
                value: '(626) 456-8846',
            }],
            emergencyContactPreferMethod: 'phone',
            emergencyContactRelation: 'Friend',
            firstContactDate: '2001-12-01T12:00:00',
            gender: 'm',
            gradeLevel: 'none',
            hasAcceptedChrist: true,
            hasSignedMaturityCovenant: false,
            hasSignedMembershipAgreement: true,
            hasSignedMinistryCovenant: false,
            hasSignedMissionCovenant: false,
            hasTakenClass101: true,
            hasTakenClass201: false,
            hasTakenClass301: false,
            hasTakenClass401: false,
            isActiveInTrips: false,
            isBaptised: true,
            isDoNotContact: false,
            isInMinistry: false,
            isInSmallGroup: true,
            phones: [
                {
                    countryCode: 'us',
                    displayPhoneNumber: '(626) 456-7890',
                    extension: '',
                    id: 57739,
                    isPrimary: true,
                    type: 'cell',
                },
                {
                    countryCode: 'us',
                    displayPhoneNumber: '(626) 456-7891',
                    extension: '',
                    id: 57736,
                    isPrimary: false,
                    type: 'home',
                },
            ],
            preferredService: null,
            recordType: 'adult',
        },
        isExpanded: false,
        selectButtonProps: {
            className: 'block_name--select',
            id: bemName,
            onClick: jest.fn(),
            onKeyDown: jest.fn(),
            onPromptCancelClick: jest.fn(),
            onPromptConfirmClick: jest.fn(),
            prompt: false,
            promptId: bemName,
        },
        otherDataGroups: null,
        viewRecordButtonProps: {
            className: 'block_name--view_record',
            id: bemName,
            onClick: jest.fn(),
            onKeyDown: jest.fn(),
            onPromptCancelClick: jest.fn(),
            onPromptConfirmClick: jest.fn(),
            prompt: false,
            promptId: bemName,
        },
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetails
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render with the root classes', () => {
        const rootOverride = 'makeStyles-root-123';

        const wrapper = mountWithTheme(
            <PersonPanelDetails
                {...props}
                classes={{
                    root: rootOverride,
                }}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('person_panel--details')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(rootOverride)).toEqual(true);
    });

    it('Should render with the root className', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetails
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should have expected `id` prop', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetails
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.prop('id')).toEqual(props.id);
    });

    it('Should render with children', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetails
                {...props}
            />,
        );

        const root = wrapper.find('PersonPanelDetails');

        expect(root.contains(props.children)).toEqual(true);
    });

    it('Should render with isExpanded class', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetails
                {...props}
                isExpanded
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass(/(makeStyles)-(isExpanded)-(\d+)/)).toEqual(true);
    });

    it('Should render action buttons', () => {
        const wrapper = mountWithTheme(
            <PersonPanelDetails
                {...props}
            />,
        );

        const selectButton = wrapper.find('.block_name--select').first();

        selectButton.simulate('click');
        selectButton.props().onKeyDown({ keyCode: ENTER_KEY_CODE });

        expect(selectButton).toBeDefined();
        expect(props.selectButtonProps.onClick).toHaveBeenCalledTimes(1);
        expect(props.selectButtonProps.onKeyDown).toHaveBeenCalledTimes(1);

        const viewRecordButton = wrapper.find('.block_name--view_record').first();

        viewRecordButton.simulate('click');
        viewRecordButton.props().onKeyDown({ keyCode: ENTER_KEY_CODE });

        expect(viewRecordButton).toBeDefined();
        expect(props.viewRecordButtonProps.onClick).toHaveBeenCalledTimes(1);
        expect(props.viewRecordButtonProps.onKeyDown).toHaveBeenCalledTimes(1);
    });
});
