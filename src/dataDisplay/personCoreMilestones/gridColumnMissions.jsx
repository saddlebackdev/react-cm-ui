import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import {
    RECORD_TYPE_COLOR,
    RECORD_TYPE_DEFAULT_PROP,
    RECORD_TYPE_PROP_TYPE,
} from '../personPanel/personPanelConstants';
import {
    BEM_PERSON_CORE_MILESTONES,
} from '../../global/constants';
import {
    ACTIVE_IN_MISSIONS_DATE_PROP_TYPE,
    DISABLE_POPOVER_DEFAULT_PROP,
    DISABLE_POPOVER_PROP_TYPE,
    ICON_SIZE_DEFAULT_PROP,
    ICON_SIZE_PROP_TYPE,
    INVERSE_DEFAULT_PROP,
    INVERSE_PROP_TYPE,
    IS_ACTIVE_IN_MISSIONS_PROP_TYPE,
    REMOVE_IN_TRIPS_COLUMN_DEFAULT_PROP,
    REMOVE_IN_TRIPS_COLUMN_PROP_TYPE,
} from './constants';
import Grid from '../../layout/grid';
import Icon from '../icon';
import makeStyles from '../../styles/makeStyles';
import MilestonePopoverContent from './milestonePopoverContent';
import Popover from '../popover';

const propTypes = {
    activeInMissionsDate: ACTIVE_IN_MISSIONS_DATE_PROP_TYPE,
    classes: PropTypes.shape({
        icon: PropTypes.string,
        root: PropTypes.string,
    }).isRequired,
    disablePopover: DISABLE_POPOVER_PROP_TYPE,
    iconSize: ICON_SIZE_PROP_TYPE,
    inverse: INVERSE_PROP_TYPE,
    isActiveInMissions: IS_ACTIVE_IN_MISSIONS_PROP_TYPE,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_PROP_TYPE,
    removeInTripsColumn: REMOVE_IN_TRIPS_COLUMN_PROP_TYPE,
};

const defaultProps = {
    activeInMissionsDate: null,
    disablePopover: DISABLE_POPOVER_DEFAULT_PROP,
    iconSize: ICON_SIZE_DEFAULT_PROP,
    inverse: INVERSE_DEFAULT_PROP,
    isActiveInMissions: null,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_DEFAULT_PROP,
    removeInTripsColumn: REMOVE_IN_TRIPS_COLUMN_DEFAULT_PROP,
};

const useStyles = makeStyles((theme) => ({
    root: {
        '& $isActiveInMissions': {
            '&$isAdult': {
                '&$genderFemale .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })}`,
                },
                '&$genderMale .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })}`,
                },
                '&$genderUndefined .icon-use-path': {
                    fill: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })}`,
                },
            },
            '&$isChild .icon-use-path': {
                fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })} !important`,
            },
            '&$isStudent .icon-use-path': {
                fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })} !important`,
            },
        },
    },
    genderFemale: {},
    genderMale: {},
    genderUndefined: {},
    icon: {},
    isActiveInMissions: {},
    isAdult: {},
    isChild: {},
    isStudent: {},
}));

function GridColumnMissions(props) {
    const {
        activeInMissionsDate,
        disablePopover,
        iconSize,
        inverse,
        isFemale,
        isActiveInMissions,
        isMale,
        recordType,
        removeInTripsColumn,
    } = props;

    const classes = useStyles(props);

    if (removeInTripsColumn) {
        return null;
    }

    const missionsIcon = (
        <Icon
            className={ClassNames(
                classes.iconInTrips,
                classes.icon,
                {
                    [classes.genderFemale]: isFemale,
                    [classes.genderMale]: isMale,
                    [classes.genderUndefined]: !isFemale && !isMale,
                    [classes.isActiveInMissions]: isActiveInMissions,
                    [classes.isAdult]: recordType === 'adult',
                    [classes.isChild]: recordType === 'child',
                    [classes.isStudent]: recordType === 'student',
                },
            )}
            compact
            inverse={inverse}
            size={iconSize}
            title={!isActiveInMissions && 'Not active in Missions'}
            type="shoe-prints"
        />
    );

    const popoverNode = !disablePopover && isActiveInMissions && activeInMissionsDate ? (
        <Popover
            content={(
                <MilestonePopoverContent
                    title="Active in Missions"
                    milestonesDates={[
                        {
                            label: 'Since',
                            date: activeInMissionsDate,
                        },
                    ]}
                />
            )}
            mouseEvent="onMouseEnter"
        >
            {missionsIcon}
        </Popover>
    ) : null;

    return (
        <Grid.Column
            className={ClassNames(
                `${BEM_PERSON_CORE_MILESTONES}--in_missions_column`,
                classes.root,
            )}
        >
            {popoverNode || missionsIcon}
        </Grid.Column>
    );
}

GridColumnMissions.propTypes = propTypes;
GridColumnMissions.defaultProps = defaultProps;

export default GridColumnMissions;
