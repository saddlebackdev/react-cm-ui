import {
    get,
    snakeCase,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import Grid from '../../layout/grid';
import makeStyles from '../../styles/makeStyles';
import Typography from '../typography';

const DATE_FORMAT = 'MM-DD-YY';

const propTypes = {
    title: PropTypes.string.isRequired,
    milestonesDates: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            date: PropTypes.string,
        }),
    ),
};

const defaultProps = {
    milestonesDates: [],
};

const useStyles = makeStyles((theme) => ({
    dateGrid: {
        padding: '5px 0 0 0',
    },
    milestoneLabel: {
        fontWeight: get(theme, 'typography.fontWeightMedium'),
    },
    milestoneColumn: {
        fontSize: 16,
        whiteSpace: 'nowrap',
    },
    root: {},
    title: {
        fontWeight: `${get(theme, 'typography.fontWeightBold')} !important`,
        fontSize: '20px !important',
        paddingBottom: '10px !important',
    },
}));

function MilestonesPopoverContent(props) {
    const {
        title,
        milestonesDates,
    } = props;

    const classes = useStyles();

    const labelColumnClasses = ClassNames(classes.milestoneColumn, classes.milestoneLabel);

    const milestonesDatesJsx = milestonesDates.map((milestoneDate, index) => {
        const {
            date,
            label,
        } = milestoneDate;

        return (
            <Grid
                className={index >= 1 && classes.dateGrid}
                key={snakeCase(label)}
            >
                <Grid.Column
                    className={labelColumnClasses}
                    sm
                >
                    {label}
                </Grid.Column>

                <Grid.Column
                    sm="auto"
                >
                    {date && moment(date).format(DATE_FORMAT)}
                </Grid.Column>
            </Grid>
        );
    });

    return (
        <Grid
            className={classes.root}
        >
            <Grid.Column
                sm={12}
            >
                <Typography
                    className={classes.title}
                >
                    {title}
                </Typography>
            </Grid.Column>

            {milestonesDatesJsx}
        </Grid>
    );
}

MilestonesPopoverContent.propTypes = propTypes;
MilestonesPopoverContent.defaultProps = defaultProps;

export default MilestonesPopoverContent;
