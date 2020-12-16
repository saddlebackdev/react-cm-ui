import {
    DataGrid,
} from 'react-cm-ui';
import {
    isEmpty,
    isEqual,
} from 'lodash';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import moment from 'moment-timezone';
import React, { useState } from 'react';

const useStyles = makeStyles(() => ({
    bleed: {
        margin: [[0, 0, '!important']],
    },
}));

function DataGridSortableRowsSample() {
    const [data, setData] = useState([
        {
            campus: 'Lake Forest',
            createdOn: 1259668810,
            id: 1,
            name: 'First Time Visitor',
        }, {
            campus: 'Lake Forest',
            createdOn: 1159668810,
            id: 2,
            name: 'Second Time Visitor',
        }, {
            campus: 'Anaheim',
            createdOn: 1152668810,
            id: 3,
            name: 'Class 101 Invite',
        },
    ]);

    const classes = useStyles();

    const onSortableChange = (sortedData) => {
        if (!isEmpty(data) && !isEqual(data, sortedData)) {
            setData(sortedData);
        }
    };

    return (
        <DataGrid
            classes={{
                bleed: classes.bleed,
            }}
            columns={[
                {
                    accessor: 'name',
                    header: 'Names',
                }, {
                    accessor: 'campus',
                    header: 'Campus',
                }, {
                    accessor: (d) => moment.unix(d.createdOn).utc().format('L'),
                    header: 'Created On',
                },
            ]}
            data={data}
            id="data_grid_sortable_rows_sample-id"
            sortable={[
                {
                    handle: true,
                    onChange: onSortableChange,
                },
            ]}
        />
    );
}

export default DataGridSortableRowsSample;
