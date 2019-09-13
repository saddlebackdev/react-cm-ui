import { Checkbox, Icon, Page, TitleBar } from 'react-cm-ui';
import _ from 'lodash';
import Main from '../app/main.js';
import React from 'react';

const drawerSample = `import { Button, Drawer } from 'react-cm-ui';
import React from 'react';

export default class DrawerSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isBarDrawerOpen: false,
            isDrawerOpen: false,
            isFooDrawerOpen: false,
        };

        this._onDrawerToggle = this._onDrawerToggle.bind(this);
        this._onBarDrawerToggle = this._onBarDrawerToggle.bind(this);
        this._onFooDrawerToggle = this._onFooDrawerToggle.bind(this);
    }

    render() {
        const { isDrawerOpen } = this.state;

        return (
            <div>
                <Button onClick={this._onDrawerToggle}>Open The Drawer</Button>

                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={this._onDrawerToggle}
                >
                    <Button onClick={this._onDrawerToggle}>Close The Drawer</Button>
                    <Button onClick={this._onFooDrawerToggle}>Open Foo Drawer</Button>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut commodo pretium odio, quis tristique sem suscipit eget. Morbi sit amet nibh quis lorem sodales suscipit. Nam a convallis sem. Pellentesque convallis tellus ex, nec finibus lacus placerat eget. Sed nec placerat nisl. Nam facilisis dolor non ante sollicitudin sollicitudin. Aliquam magna sem, ullamcorper eget ipsum tincidunt, lobortis semper magna. Mauris cursus urna nec tellus convallis mollis ut eget sem.</p>

                    <Drawer
                        isOpen={isFooDrawerOpen}
                        onClose={this._onFooDrawerToggle}
                    >
                        <Button onClick={this._onFooDrawerToggle}>Close Foo Drawer</Button>
                        <Button onClick={this._onBarDrawerToggle}>Open Bar Drawer</Button>

                        <p>Foo Drawer</p>

                        <Drawer
                            isOpen={isBarDrawerOpen}
                            onClose={this._onBarDrawerToggle}
                        >
                            <Button onClick={this._onBarDrawerToggle}>Close Bar Drawer</Button>

                            <Link to={{ pathname: '/modules/modal' }}>Go To The Modal Page</Link><br /><br />

                            <p>Bar Drawer</p>
                        </Drawer>
                    </Drawer>
                </Drawer>
            </div>
        );
    }

    _onBarDrawerToggle() {
        const { isBarDrawerOpen } = this.state;

        this.setState({ isBarDrawerOpen: !isBarDrawerOpen });
    }

    _onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    _onFooDrawerToggle() {
        const { isFooDrawerOpen } = this.state;

        this.setState({ isFooDrawerOpen: !isFooDrawerOpen });
    }
}`;

class ModulesPage extends React.Component {
    render() {
        const members = [
            {
                id: 7,
                ministryId: 1419,
                ministryName: null,
                churchEntityId: 1,
                churchEntityName: null,
                personId: 1792385,
                dateAdded: 1568199227,
                sourceId: 1,
                source: 'In Person',
                status: 'Active',
                statusName: 'Active',
                statusChanged: 1568199227,
                daysInStatus: 1,
                isMember: true,
                becameMember: 1568199227,
                daysAsMember: 1,
                groupDateAdded: -62135596800,
                person: {
                    id: 1792385,
                    profilePictureUrl: null,
                    churchEntityKnown: false,
                    churchEntityId: null,
                    churchEntityName: null,
                    firstName: 'Yuna',
                    lastName: 'Lee',
                    prefix: 'Mr.',
                    middleName: null,
                    suffix: null,
                    nickName: null,
                    gender: 'M',
                    maritalStatusId: 0,
                    maritalStatus: 'Single',
                    membershipStatusId: 1,
                    membershipStatus: 'Non-Member',
                    disengagementReason: null,
                    birthDate: 404697600,
                    deceasedDate: null,
                    allergies: null,
                    gradeLevel: 'None',
                    address1: null,
                    address2: null,
                    city: null,
                    region: null,
                    postalCode: null,
                    country: null,
                    email: null,
                    homePhone: null,
                    cellPhone: null,
                    workPhone: null,
                    departmentId: null,
                    departmentName: null,
                    departmentChurchEntityId: null,
                    departmentChurchEntityName: null,
                    preferredServiceEventId: null,
                    modifiedDate: 1566199569,
                    milestones: [],
                    addresses: null,
                    emails: null,
                    phones: null,
                    occupations: null,
                    firstContact: null,
                },
                contactPreferences: {
                    id: 0,
                    personId: 1792385,
                    preferredMethod: 'none',
                    doNotMail: false,
                    doNotPhone: false,
                    doNotText: false,
                    doNotEmail: false,
                    doNotContact: false,
                },
                leadershipPositions: [],
                groups: [],
                roles: [],
                eligibility: {
                    isEligible: true,
                    notEligible: [],
                    missingMilestones: null,
                    minAge: null,
                    maxAge: null,
                    gender: null,
                },
                hasPublicContacts: false,
                isServingOpportunityVolunteer: null,
            },
            {
                id: 1,
                ministryId: 1419,
                ministryName: null,
                churchEntityId: 1,
                churchEntityName: null,
                personId: 5100003,
                dateAdded: 1566222681,
                sourceId: 1,
                source: 'In Person',
                status: 'Active',
                statusName: 'Active',
                statusChanged: 1566222681,
                daysInStatus: 23,
                isMember: true,
                becameMember: 1566222681,
                daysAsMember: 23,
                groupDateAdded: -62135596800,
                person: {
                    id: 5100003,
                    profilePictureUrl: null,
                    churchEntityKnown: true,
                    churchEntityId: null,
                    churchEntityName: null,
                    firstName: 'Ilya',
                    lastName: 'Radinsky very very long description and some notes',
                    prefix: 'Mr.',
                    middleName: null,
                    suffix: null,
                    nickName: null,
                    gender: 'M',
                    maritalStatusId: null,
                    maritalStatus: null,
                    membershipStatusId: 1,
                    membershipStatus: 'Non-Member',
                    disengagementReason: null,
                    birthDate: null,
                    deceasedDate: null,
                    allergies: null,
                    gradeLevel: 'None',
                    address1: null,
                    address2: null,
                    city: null,
                    region: null,
                    postalCode: null,
                    country: null,
                    email: null,
                    homePhone: null,
                    cellPhone: null,
                    workPhone: null,
                    departmentId: null,
                    departmentName: null,
                    departmentChurchEntityId: null,
                    departmentChurchEntityName: null,
                    preferredServiceEventId: null,
                    modifiedDate: 1567581654,
                    milestones: [],
                    addresses: null,
                    emails: null,
                    phones: null,
                    occupations: null,
                    firstContact: null,
                },
                contactPreferences: {
                    id: 0,
                    personId: 5100003,
                    preferredMethod: 'none',
                    doNotMail: false,
                    doNotPhone: false,
                    doNotText: false,
                    doNotEmail: false,
                    doNotContact: false,
                },
                leadershipPositions: [],
                groups: [],
                roles: [],
                eligibility: {
                    isEligible: true,
                    notEligible: [],
                    missingMilestones: null,
                    minAge: null,
                    maxAge: null,
                    gender: null,
                },
                hasPublicContacts: false,
                isServingOpportunityVolunteer: null,
            },
        ];

        const columns = [
            //<div key="ministry-mm-header-0" onClick={stopPropagation}>
            //    <Checkbox
            //        checked={areAllSelected}
            //        className="float-left"
            //        id={'bulk-action-select-all'}
            //        key={'bulk-action-select-all'}
            //        onChange={onSelectAllMembers}
            //    />
            //</div>,
            {
                accessor: member => {
                    const isSelected =
                        _.indexOf([], member.id) >= 0;
                    return (
                        <div className="bulk-space" onClick={() => {}}>
                            <Checkbox
                                checked={isSelected}
                                className="nothing"
                                id={`ui-checkbox--bulk_action_select_${member.id}`}
                                onChange={() => {}}
                            />
                        </div>
                    );
                },
                header: 'x',
            },
            {
                accessor: member =>
                    `${member.person.firstName} ${member.person.lastName}`,
                header: 'Name',
            },
            {
                accessor: member =>
                    member.person.gender === 'M' ? 'Male' : 'Female',
                header: 'Gender',
            },
            {
                accessor: member => member.churchEntityName,
                header: 'Campus',
            },
        ];

        columns.push({
            accessor: member => {
                const roles = [
                    ..._.map(member.leadershipPositions, lp => _.startCase(lp)),
                    ..._.map(member.roles, r => r.name),
                ];
                return _.join(roles, ', ');
            },
            header: 'Roles',
        });
        columns.push({
            accessor: member => _.startCase(member.status),
            header: 'Status',
        });
        columns.push({
            accessor: member => `${member.daysAsMember} Days`,
            header: 'Membership',
        });
        columns.push({
            accessor: member =>
                `${Math.round((member.minutesServed || 0) / 60)} Hours`,
            header: 'Served',
        });
        columns.push({
            accessor: member => '',
            header: 'Last',
        });
        columns.push({
            accessor: member => {
                const isEligible = member.eligibility ?
                    member.eligibility.isEligible :
                    true;
                return (
                    <>
                        {isEligible ? null : (
                            <Icon color="warning" type="exclamation" />
                        )}
                        <Icon compact size="xxsmall" type="chevron-wl-right" />
                    </>
                );
            },
            header: null,
        });

        return (
            <Main page="headers">
                <TitleBar title="Page" />
                <Page.Table columns={columns} data={members} stickyColumns={2}/>
            </Main>
        );
    }
}

export default ModulesPage;
