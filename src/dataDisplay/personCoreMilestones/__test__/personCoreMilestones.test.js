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
        data: {
            acceptedChristDate: '2001-10-10T12:00:00',
            activeInMissionsDate: '2003-12-30T12:00:00',
            attendedClass101Date: '2001-10-10T12:00:00',
            attendedClass201Date: '2001-10-10T12:00:00',
            attendedClass301Date: '2001-10-10T12:00:00',
            attendedClass401Date: '2001-10-10T12:00:00',
            baptismDate: '2001-10-10T12:00:00',
            congregationDate: '2000-12-01T12:00:00',
            firstContactDate: '2001-12-01T12:00:00',
            firstMinistryJoinDate: '2002-11-20T12:00:00',
            firstSmallGroupJoinDate: '2001-10-10T12:00:00',
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
            isActiveInMissions: true,
            IsActiveInMissions: false,
            isBaptised: true,
            isInMinistry: false,
            isInSmallGroup: false,
            recordType: 'adult',
            signedMaturityCovenantDate: '2001-10-10T12:00:00',
            signedMinistryCovenantDate: '2001-10-10T12:00:00',
            signedMissionCovenantDate: '2001-10-10T12:00:00',
        },
        backgroundTransparent: true,
        className: bemName,
        iconColor: 'white',
        iconSize: 16,
        id: bemName,
        inverse: false,
        isMobile: true,
        removeAcceptedChristColumn: false,
        removeBaptismColumn: false,
        removeClassColumn: false,
        removeCongregationDateColumn: false,
        removeFirstContactDateColumn: false,
        removeInMinistryColumn: false,
        removeInTripsColumn: false,
        removeSmallGroupColumn: false,
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
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
            />,
        );

        const column = wrapper.find('GridColumnAcceptedChrist');

        expect(column.children()).toHaveLength(1);
    });

    it('Should render with C.L.A.S.S. column', () => {
        const wrapper = mountWithTheme(
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

        const column = wrapper.find('GridColumnClassBaseballDiamond');

        expect(column.children()).toHaveLength(1);
    });

    it('Should render without accepted Christ column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeAcceptedChristColumn
            />,
        );

        const column = wrapper.find('GridColumnAcceptedChrist');

        expect(column.props().acceptedChristDate).toEqual(props.data.acceptedChristDate);
        expect(column.props().hasAcceptedChrist).toEqual(props.data.hasAcceptedChrist);
        expect(column.props().removeAcceptedChristColumn).toEqual(true);
        expect(column.children()).toHaveLength(0);
    });

    it('Should render without baptism column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeBaptismColumn
            />,
        );

        const column = wrapper.find('GridColumnBaptised');

        expect(column.props().baptismDate).toEqual(props.data.baptismDate);
        expect(column.props().isBaptised).toEqual(props.data.isBaptised);
        expect(column.props().removeBaptismColumn).toEqual(true);
        expect(column.children()).toHaveLength(0);
    });

    it('Should render without C.L.A.S.S column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeClassColumn
            />,
        );

        const column = wrapper.find('GridColumnClassBaseballDiamond');

        expect(column.props().attendedClass101Date).toEqual(props.data.attendedClass101Date);
        expect(column.props().attendedClass20Date).toEqual(props.data.attendedClass20Date);
        expect(column.props().attendedClass301Date).toEqual(props.data.attendedClass301Date);
        expect(column.props().attendedClass401Date).toEqual(props.data.attendedClass401Date);
        expect(column.props().hasSignedMaturityCovenant)
            .toEqual(props.data.hasSignedMaturityCovenant);
        expect(column.props().hasSignedMembershipAgreement)
            .toEqual(props.data.hasSignedMaturityCovenant);
        expect(column.props().hasSignedMinistryCovenant)
            .toEqual(props.data.hasSignedMaturityCovenant);
        expect(column.props().hasSignedMissionCovenant)
            .toEqual(props.data.hasSignedMaturityCovenant);
        expect(column.props().hasTakenClass101).toEqual(props.data.hasSignedMaturityCovenant);
        expect(column.props().hasTakenClass201).toEqual(props.data.hasSignedMaturityCovenant);
        expect(column.props().hasTakenClass301).toEqual(props.data.hasSignedMaturityCovenant);
        expect(column.props().hasTakenClass401).toEqual(props.data.hasSignedMaturityCovenant);
        expect(column.props().signedMaturityCovenantDate)
            .toEqual(props.data.signedMaturityCovenantDate);
        expect(column.props().congregationDate)
            .toEqual(props.data.congregationDate);
        expect(column.props().signedMinistryCovenantDate)
            .toEqual(props.data.signedMinistryCovenantDate);
        expect(column.props().signedMissionCovenantDate)
            .toEqual(props.data.signedMissionCovenantDate);
        expect(column.props().removeClassColumn).toEqual(true);
        expect(column.children()).toHaveLength(0);
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

        const column = wrapper.find('GridColumnMinistry');

        expect(column.props().firstMinistryJoinDate).toEqual(props.data.firstMinistryJoinDate);
        expect(column.props().isInMinistry).toEqual(props.data.isInMinistry);
        expect(column.props().removeInMinistryColumn).toEqual(true);
        expect(column.children()).toHaveLength(0);
    });

    it('Should render without in trips column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeInTripsColumn
            />,
        );

        const column = wrapper.find('GridColumnMissions');

        expect(column.props().activeInMissionsDate).toEqual(props.data.activeInMissionsDate);
        expect(column.props().isActiveInMissions).toEqual(props.data.isActiveInMissions);
        expect(column.props().removeInTripsColumn).toEqual(true);
        expect(column.children()).toHaveLength(0);
    });

    it('Should render without small group column', () => {
        const wrapper = mountWithTheme(
            <PersonCoreMilestones
                {...props}
                removeSmallGroupColumn
            />,
        );

        const column = wrapper.find('GridColumnSmallGroup').first();

        expect(column.props().firstSmallGroupJoinDate).toEqual(props.data.firstSmallGroupJoinDate);
        expect(column.props().isInSmallGroup).toEqual(props.data.isInSmallGroup);
        expect(column.props().removeSmallGroupColumn).toEqual(true);
        expect(column.children()).toHaveLength(0);
    });
});
