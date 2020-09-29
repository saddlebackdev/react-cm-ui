import ClassNames from 'classnames';
import { get } from 'lodash';
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
    root: {
        paddingBottom: '5px !important',
    },
    label: {
        fontWeight: get(theme, 'typography.fontWeightMedium'),
    },
    milestoneColumn: {
        padding: '0 15px 5px 15px',
        whiteSpace: 'nowrap',
    },
    title: {
        fontWeight: `${get(theme, 'typography.fontWeightBold')} !important`,
        fontSize: '16px !important',
    },
    titleContainer: {
        padding: '10px 15px',
    },
}));

function MilestonesPopoverContent(props) {
    const {
        title,
        milestonesDates,
    } = props;

    const classes = useStyles();
    const columnLabelClasses = ClassNames(classes.milestoneColumn, classes.label);

    const milestonesDatesJsx = milestonesDates.map((milestoneDate) => {
        const {
            date,
            label,
        } = milestoneDate;

        return (
            <Grid.Row columns={2}>
                <Grid.Column
                    className={columnLabelClasses}
                >
                    {label}
                </Grid.Column>
                <Grid.Column
                    className={classes.milestoneColumn}
                    textAlign="right"
                >
                    {date && moment(date).format(DATE_FORMAT)}
                </Grid.Column>
            </Grid.Row>
        );
    });

    return (
        <Grid className={classes.root}>
            <Grid.Row columns={1}>
                <Grid.Column
                    className={classes.titleContainer}
                >
                    <Typography
                        className={classes.title}
                    >
                        {title}
                    </Typography>
                </Grid.Column>
            </Grid.Row>
            {milestonesDatesJsx}
        </Grid>
    );
}

MilestonesPopoverContent.propTypes = propTypes;
MilestonesPopoverContent.defaultProps = defaultProps;

export default MilestonesPopoverContent;
