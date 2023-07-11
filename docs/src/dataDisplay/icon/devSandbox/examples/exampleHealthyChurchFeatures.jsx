import {
    Icon,
    Grid,
    Table,
} from '@saddlebackchurch/react-cm-ui'; // eslint-disable-line import/no-unresolved
import React from 'react';

function ExampleHealthyChurchFeatures() {
    return (
        <Grid>
            <Grid.Column sm={12} lg={6}>
                <Table basic>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="People" type="user" />
                            </Table.Cell>
                            <Table.Cell>
                                People
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Ministry" type="ministry" />
                            </Table.Cell>
                            <Table.Cell>
                                Ministry
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Serving Opportunities" type="serving-opportunity" />
                            </Table.Cell>
                            <Table.Cell>
                                Serving Opportunities
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Events" type="date" />
                            </Table.Cell>
                            <Table.Cell>
                                Events
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Check-In" type="scan-id" />
                            </Table.Cell>
                            <Table.Cell>
                                Check-In
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Communications" type="email" />
                            </Table.Cell>
                            <Table.Cell>
                                Communications
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Weekend" type="pulpit" />
                            </Table.Cell>
                            <Table.Cell>
                                Weekend (Service Companion Builder)
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Journey" type="journey" />
                            </Table.Cell>
                            <Table.Cell>
                                Journey
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Small Groups" type="people" />
                            </Table.Cell>
                            <Table.Cell>
                                Small Groups
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </Grid.Column>

            <Grid.Column sm={12} lg={6}>
                <Table basic>
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Trips" type="shape-experiences" />
                            </Table.Cell>
                            <Table.Cell>
                                Trips
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                {/* TODO/FIXME: `giving-saddleback` icon is not working */}
                                {/* <Icon size={32} title="Giving" type="giving-saddleback" /> */}
                                <Icon size={32} title="Giving" type="giving" />
                            </Table.Cell>
                            <Table.Cell>
                                Giving
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Data Capture" type="input" />
                            </Table.Cell>
                            <Table.Cell>
                                Data Capture
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Follow Ups" type="workflow" />
                            </Table.Cell>
                            <Table.Cell>
                                Follow Ups
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Metrics Capture" type="configuration-2" />
                            </Table.Cell>
                            <Table.Cell>
                                Metrics Capture
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Insights" type="insights" />
                            </Table.Cell>
                            <Table.Cell>
                                Insights
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Notifications" type="alert" />
                            </Table.Cell>
                            <Table.Cell>
                                Notifications
                            </Table.Cell>
                        </Table.Row>

                        <Table.Row>
                            <Table.Cell width={1}>
                                <Icon size={32} title="Customization & System Administration" type="settings" />
                            </Table.Cell>
                            <Table.Cell>
                                Customization & System Administration
                            </Table.Cell>
                        </Table.Row>

                    </Table.Body>
                </Table>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleHealthyChurchFeatures;
