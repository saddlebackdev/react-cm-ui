/**
 * To run this test from the church-management/client folder, execute the following command:
 * npx jest ./src/dataDisplay/personCoreMilestones/__test__/personCoreMilestones.test.js
 */
import { mount, shallow } from 'enzyme';
import React from 'react';
import MockedTheme from '../../../testUtils/mockedTheme';
import PersonCoreMilestones from '../personCoreMilestones'; // eslint-disable-line import/no-named-as-default

describe('<PersonCoreMilestones />', () => {
    const bemBlockName = 'person_core_milestones';
    const bemName = `${bemBlockName}--element_name-modifier`;
    const props = {
        className: bemName,
        congregationDate: '2000-12-01T12:00:00', // -
        firstContactDate: '2001-12-01T12:00:00', // -
        gender: 'm',
        hasAcceptedChrist: false, // -
        hasSignedMaturityCovenant: false, // -
        hasSignedMembershipAgreement: false, // -
        hasSignedMinistryCovenant: false, // -
        hasSignedMissionCovenant: false, // -
        hasTakenClass101: false, // - hasAttendedClass101
        hasTakenClass201: false, // - hasAttendedClass102
        hasTakenClass301: false, // - hasAttendedClass103
        hasTakenClass401: false, // - hasAttendedClass104
        iconSize: 16,
        id: bemName,
        inverse: false,
        isActiveInTrips: false,
        isBaptised: true, // -
        isInMinistry: false, // -
        isInSmallGroup: false, // -
        recordType: 'adult',
        removeAcceptedChristColumn: false,
        removeBaptismColumn: false,
        removeClassColumn: false,
        removeCongregationDateColumn: false,
        removeFirstContactDateColumn: false,
        removeInMinistryColumn: false,
        removeInTripsColumn: false,
        removeSmallGroupColumn: false,

        // also existing in client.store.coreMilestones.data
        /**
         * isPEACE
         * uniquePersonID
         */
    };

    it('Should render without problems', () => {
        const wrapper = shallow(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                />
            </MockedTheme>,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render with the root classes', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('person_core_milestones')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should render with the root classes', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                />
            </MockedTheme>,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('person_core_milestones')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should render with accepted Christ column', () => {
        let wrapper;
        let column;

        wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                />
            </MockedTheme>,
        );

        column = wrapper.find(`.${bemBlockName}--accepted_christ_column Icon`);

        expect(column.hasClass(/(makeStyles)-(icon)-(\d+)/)).toEqual(true);
        expect(column.hasClass(/(makeStyles)-(iconAcceptedChrist)-(\d+)/)).toEqual(true);
        expect(column.props().compact).toEqual(true);
        expect(column.props().inverse).toEqual(false);
        expect(column.props().size).toEqual(16);
        expect(column.props().title).toEqual('Has not accepted Christ');
        expect(column.props().type).toEqual('heart');

        wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    hasAcceptedChrist
                />
            </MockedTheme>,
        );

        column = wrapper.find(`.${bemBlockName}--accepted_christ_column Icon`);

        expect(column.hasClass(/(makeStyles)-(hasAcceptedChrist)-(\d+)/)).toEqual(true);
        expect(column.props().title).toEqual('Accepted Christ');
    });

    it('Should render with C.L.A.S.S. column', () => {
        let wrapper;
        let column;
        let iconBaseClass101;
        let iconBaseClass201;
        let iconBaseClass301;
        let iconBaseClass401;

        wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    hasSignedMaturityCovenant
                    hasSignedMembershipAgreement
                    hasSignedMinistryCovenant
                    hasSignedMissionCovenant
                    hasTakenClass101
                    hasTakenClass201
                    hasTakenClass301
                    hasTakenClass401
                />
            </MockedTheme>,
        );

        column = wrapper.find(`.${bemBlockName}--class_column`).first();

        expect(column.hasClass(/(makeStyles)-(column)-(\d+)/)).toEqual(true);
        expect(column.hasClass('person_core_milestones--class_column')).toEqual(true);

        iconBaseClass101 = column.find('.person_core_milestones--icon_base_class_101');

        expect(iconBaseClass101.exists()).toEqual(true);
        expect(iconBaseClass101.hasClass(/(makeStyles)-(iconBaseClass101)-(\d+)/)).toEqual(true);
        expect(iconBaseClass101.hasClass(/(makeStyles)-(genderMale)-(\d+)/)).toEqual(true);
        expect(iconBaseClass101.hasClass(/(makeStyles)-(isAdult)-(\d+)/)).toEqual(true);
        expect(iconBaseClass101.hasClass(/(makeStyles)-(hasTakenClass101)-(\d+)/)).toEqual(true);
        expect(iconBaseClass101.hasClass(/(makeStyles)-(hasSignedMembershipAgreement)-(\d+)/)).toEqual(true);

        iconBaseClass201 = column.find('.person_core_milestones--icon_base_class_201');

        expect(iconBaseClass201.exists()).toEqual(true);
        expect(iconBaseClass201.hasClass(/(makeStyles)-(iconBaseClass201)-(\d+)/)).toEqual(true);
        expect(iconBaseClass201.hasClass(/(makeStyles)-(genderMale)-(\d+)/)).toEqual(true);
        expect(iconBaseClass201.hasClass(/(makeStyles)-(isAdult)-(\d+)/)).toEqual(true);
        expect(iconBaseClass201.hasClass(/(makeStyles)-(hasTakenClass201)-(\d+)/)).toEqual(true);
        expect(iconBaseClass201.hasClass(/(makeStyles)-(hasSignedMaturityCovenant)-(\d+)/)).toEqual(true);

        iconBaseClass301 = column.find('.person_core_milestones--icon_base_class_301');

        expect(iconBaseClass301.exists()).toEqual(true);
        expect(iconBaseClass301.hasClass(/(makeStyles)-(iconBaseClass301)-(\d+)/)).toEqual(true);
        expect(iconBaseClass301.hasClass(/(makeStyles)-(genderMale)-(\d+)/)).toEqual(true);
        expect(iconBaseClass301.hasClass(/(makeStyles)-(isAdult)-(\d+)/)).toEqual(true);
        expect(iconBaseClass301.hasClass(/(makeStyles)-(hasTakenClass301)-(\d+)/)).toEqual(true);
        expect(iconBaseClass301.hasClass(/(makeStyles)-(hasSignedMinistryCovenant)-(\d+)/)).toEqual(true);

        iconBaseClass401 = column.find('.person_core_milestones--icon_base_class_401');

        expect(iconBaseClass401.exists()).toEqual(true);
        expect(iconBaseClass401.hasClass(/(makeStyles)-(iconBaseClass401)-(\d+)/)).toEqual(true);
        expect(iconBaseClass401.hasClass(/(makeStyles)-(genderMale)-(\d+)/)).toEqual(true);
        expect(iconBaseClass401.hasClass(/(makeStyles)-(isAdult)-(\d+)/)).toEqual(true);
        expect(iconBaseClass401.hasClass(/(makeStyles)-(hasTakenClass401)-(\d+)/)).toEqual(true);
        expect(iconBaseClass401.hasClass(/(makeStyles)-(hasSignedMissionCovenant)-(\d+)/)).toEqual(true);

        wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    gender="f"
                />
            </MockedTheme>,
        );

        column = wrapper.find(`.${bemBlockName}--class_column`).first();

        iconBaseClass101 = column.find('.person_core_milestones--icon_base_class_101');

        expect(iconBaseClass101.hasClass(/(makeStyles)-(genderFemale)-(\d+)/)).toEqual(true);

        iconBaseClass201 = column.find('.person_core_milestones--icon_base_class_201');

        expect(iconBaseClass201.hasClass(/(makeStyles)-(genderFemale)-(\d+)/)).toEqual(true);

        iconBaseClass301 = column.find('.person_core_milestones--icon_base_class_301');

        expect(iconBaseClass301.hasClass(/(makeStyles)-(genderFemale)-(\d+)/)).toEqual(true);

        iconBaseClass401 = column.find('.person_core_milestones--icon_base_class_401');

        expect(iconBaseClass401.hasClass(/(makeStyles)-(genderFemale)-(\d+)/)).toEqual(true);

        wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    gender={null}
                />
            </MockedTheme>,
        );

        column = wrapper.find(`.${bemBlockName}--class_column`).first();

        iconBaseClass101 = column.find('.person_core_milestones--icon_base_class_101');

        expect(iconBaseClass101.hasClass(/(makeStyles)-(genderUndefined)-(\d+)/)).toEqual(true);

        iconBaseClass201 = column.find('.person_core_milestones--icon_base_class_201');

        expect(iconBaseClass201.hasClass(/(makeStyles)-(genderUndefined)-(\d+)/)).toEqual(true);

        iconBaseClass301 = column.find('.person_core_milestones--icon_base_class_301');

        expect(iconBaseClass301.hasClass(/(makeStyles)-(genderUndefined)-(\d+)/)).toEqual(true);

        iconBaseClass401 = column.find('.person_core_milestones--icon_base_class_401');

        expect(iconBaseClass401.hasClass(/(makeStyles)-(genderUndefined)-(\d+)/)).toEqual(true);
    });

    it('Should render without accepted Christ column', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    removeAcceptedChristColumn
                />
            </MockedTheme>,
        );

        const column = wrapper.find(`.${bemBlockName}--accepted_christ_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without baptism column', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    removeBaptismColumn
                />
            </MockedTheme>,
        );

        const column = wrapper.find(`.${bemBlockName}--baptism_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without C.L.A.S.S column', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    removeClassColumn
                />
            </MockedTheme>,
        );

        const column = wrapper.find(`.${bemBlockName}--class_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without congregation date column', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    removeCongregationDateColumn
                />
            </MockedTheme>,
        );

        const column = wrapper.find(`.${bemBlockName}--congregation_date_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without first contact date column', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    removeFirstContactDateColumn
                />
            </MockedTheme>,
        );

        const column = wrapper.find(`.${bemBlockName}--first_contact_date_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without in ministry column', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    removeInMinistryColumn
                />
            </MockedTheme>,
        );

        const column = wrapper.find(`.${bemBlockName}--in_ministry_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without in trips column', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    removeInTripsColumn
                />
            </MockedTheme>,
        );

        const column = wrapper.find(`.${bemBlockName}--in_trips_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without small group column', () => {
        const wrapper = mount(
            <MockedTheme>
                <PersonCoreMilestones
                    {...props}
                    removeSmallGroupColumn
                />
            </MockedTheme>,
        );

        const column = wrapper.find(`.${bemBlockName}--small_group_column`);

        expect(column.exists()).toEqual(false);
    });
});
