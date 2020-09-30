/**
 * To run this test from the root folder, execute the following command:
 * npx jest ./src/dataDisplay/personCoreMilestones/__test__/personCoreMilestones.test.js
 */
import React from 'react';
import mountWithTheme from '../../../testUtils/enzymeHelpers';
import PersonCoreMilestones from '../personCoreMilestones'; // eslint-disable-line import/no-named-as-default

describe('<PersonCoreMilestones />', () => {
    const bemBlockName = 'person_core_milestones';
    const bemName = `${bemBlockName}--element_name-modifier`;
    const props = {
        acceptedChristDate: '2001-10-10T12:00:00',
        activeInSmallGroupsDate: '2001-10-10T12:00:00',
        activeInMinistryDate: '2002-11-20T12:00:00',
        activeInMissionsDate: '2003-12-30T12:00:00',
        attendedClass101Date: '2001-10-10T12:00:00',
        attendedClass201Date: '2001-10-10T12:00:00',
        attendedClass301Date: '2001-10-10T12:00:00',
        attendedClass401Date: '2001-10-10T12:00:00',
        backgroundTransparent: true,
        baptismDate: '2001-10-10T12:00:00',
        className: bemName,
        congregationDate: '2000-12-01T12:00:00',
        firstContactDate: '2001-12-01T12:00:00',
        gender: 'm',
        hasAcceptedChrist: false,
        hasSignedMaturityCovenant: false,
        hasSignedMembershipAgreement: false,
        hasSignedMinistryCovenant: false,
        hasSignedMissionCovenant: false,
        hasTakenClass101: false,
        hasTakenClass201: false,
        hasTakenClass301: false,
        hasTakenClass401: false,
        iconColor: 'white',
        iconSize: 16,
        id: bemName,
        inverse: false,
        isActiveInMissions: true,
        isActiveInTrips: false,
        isBaptised: true,
        isInMinistry: false,
        isInSmallGroup: false,
        isMobile: true,
        recordType: 'adult',
        removeAcceptedChristColumn: false,
        removeBaptismColumn: false,
        removeClassColumn: false,
        removeCongregationDateColumn: false,
        removeFirstContactDateColumn: false,
        removeInMinistryColumn: false,
        removeInTripsColumn: false,
        removeSmallGroupColumn: false,
        signedMembershipAgreementDate: '2001-10-10T12:00:00',
        signedMaturityCovenantDate: '2001-10-10T12:00:00',
        signedMinistryCovenantDate: '2001-10-10T12:00:00',
        signedMissionCovenantDate: '2001-10-10T12:00:00',
    };

    it('Should render without problems', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
            />,
        );

        expect(wrapper).toBeDefined();
    });

    it('Should render with the root classes', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
            />,
        );

        const root = wrapper.find('div').first();

        expect(root.hasClass('cmui')).toEqual(true);
        expect(root.hasClass('person_core_milestones')).toEqual(true);
        expect(root.hasClass(/(makeStyles)-(root)-(\d+)/)).toEqual(true);
        expect(root.hasClass(props.className)).toEqual(true);
    });

    it('Should render with the root classes', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
            />,
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

        wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
            />,
        );

        column = wrapper.find(`.${bemBlockName}--accepted_christ_column Icon`);

        expect(column.hasClass(/(makeStyles)-(icon)-(\d+)/)).toEqual(true);
        expect(column.hasClass(/(makeStyles)-(iconAcceptedChrist)-(\d+)/)).toEqual(true);
        expect(column.props().compact).toEqual(true);
        expect(column.props().inverse).toEqual(false);
        expect(column.props().size).toEqual(16);
        expect(column.props().type).toEqual('heart');

        wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                hasAcceptedChrist
            />,
        );

        column = wrapper.find(`.${bemBlockName}--accepted_christ_column Icon`);

        expect(column.hasClass(/(makeStyles)-(hasAcceptedChrist)-(\d+)/)).toEqual(true);
    });

    it('Should render with C.L.A.S.S. column', () => {
        let wrapper;
        let column;
        let iconBaseClass101;
        let iconBaseClass201;
        let iconBaseClass301;
        let iconBaseClass401;

        wrapper = mountWithTheme(
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
            />,
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

        wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                gender="f"
            />,
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

        wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                gender={null}
            />,
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
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeAcceptedChristColumn
            />,
        );

        const column = wrapper.find(`.${bemBlockName}--accepted_christ_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without baptism column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeBaptismColumn
            />,
        );

        const column = wrapper.find(`.${bemBlockName}--baptism_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without C.L.A.S.S column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeClassColumn
            />,
        );

        const column = wrapper.find(`.${bemBlockName}--class_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without congregation date column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeCongregationDateColumn
            />,
        );

        const column = wrapper.find(`.${bemBlockName}--congregation_date_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without first contact date column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeFirstContactDateColumn
            />,
        );

        const column = wrapper.find(`.${bemBlockName}--first_contact_date_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without in ministry column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeInMinistryColumn
            />,
        );

        const column = wrapper.find(`.${bemBlockName}--in_ministry_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without in trips column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeInTripsColumn
            />,
        );

        const column = wrapper.find(`.${bemBlockName}--in_trips_column`);

        expect(column.exists()).toEqual(false);
    });

    it('Should render without small group column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeSmallGroupColumn
            />,
        );

        const column = wrapper.find(`.${bemBlockName}--small_group_column`);

        expect(column.exists()).toEqual(false);
    });
});
