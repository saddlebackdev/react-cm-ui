import {
    Table,
    Image,
    Typography,
    PersonCoreMilestones,
    Icon,
} from 'react-cm-ui';
import React from 'react';
import personsData from './exampleData';

function TableSampleSmall() {
    return (
        <Table
            basic
            className="table-font-size-xsmall"
            stickyColumnCount={3}
        >
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell style={{ width: '5%' }}>Pic</Table.HeaderCell>
                    <Table.HeaderCell style={{ width: '5%' }}>First</Table.HeaderCell>
                    <Table.HeaderCell style={{ width: '5%' }}>Last</Table.HeaderCell>
                    <Table.HeaderCell>Milestones</Table.HeaderCell>
                    <Table.HeaderCell style={{ width: '11%', whiteSpace: 'no-wrap' }}>Campus</Table.HeaderCell>
                    <Table.HeaderCell style={{ width: '10%', whiteSpace: 'no-wrap' }}>My Notes</Table.HeaderCell>
                    <Table.HeaderCell style={{ width: '15%', whiteSpace: 'no-wrap' }}>Preferred Contact</Table.HeaderCell>
                    <Table.HeaderCell style={{ width: '1%', whiteSpace: 'nowrap' }} />
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {personsData.map((person) => (
                    <Table.Row>
                        <Table.Cell>
                            <Image type="person" name={`${person.firstName} ${person.lastName}`} size={35} src={person.imgSrc} />
                        </Table.Cell>

                        <Table.Cell>
                            <Typography component="h4" variant="h4">
                                {person.firstName}
                            </Typography>
                        </Table.Cell>

                        <Table.Cell>
                            <Typography component="h4" variant="h4">
                                {person.lastName}
                            </Typography>
                        </Table.Cell>

                        <Table.Cell textAlign="right">
                            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                            <PersonCoreMilestones {...person.milestonesInfo} />
                        </Table.Cell>

                        <Table.Cell>
                            <Typography variant="body1">
                                {person.campus}
                            </Typography>
                        </Table.Cell>

                        <Table.Cell>
                            {person.notes > 0 && (
                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                >
                                    <Icon type="text-lines" color="warning" />
                                    {person.notes}
                                </Typography>
                            )}
                        </Table.Cell>

                        <Table.Cell>
                            <Typography variant="body1">
                                {person.preferredContact}
                            </Typography>
                        </Table.Cell>

                        <Table.Cell>
                            <Icon type="chevron-right" size="xxsmall" />
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    );
}

export default TableSampleSmall;
