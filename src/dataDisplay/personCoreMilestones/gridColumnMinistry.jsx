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
    DISABLE_POPOVER_DEFAULT_PROP,
    DISABLE_POPOVER_PROP_TYPE,
    FIRST_MINISTRY_JOIN_DATE_PROP_TYPE,
    ICON_SIZE_DEFAULT_PROP,
    ICON_SIZE_PROP_TYPE,
    INVERSE_DEFAULT_PROP,
    INVERSE_PROP_TYPE,
    IS_IN_MINISTRY_PROP_TYPE,
    REMOVE_IN_MINISTRY_COLUMN_DEFAULT_PROP,
    REMOVE_IN_MINISTRY_COLUMN_PROP_TYPE,
} from './constants';
import Grid from '../../layout/grid';
import Icon from '../icon';
import makeStyles from '../../styles/makeStyles';
import MilestonePopoverContent from './milestonePopoverContent';
import Popover from '../popover';

const propTypes = {
    firstMinistryJoinDate: FIRST_MINISTRY_JOIN_DATE_PROP_TYPE,
    classes: PropTypes.shape({
        icon: PropTypes.string,
        root: PropTypes.string,
    }).isRequired,
    disablePopover: DISABLE_POPOVER_PROP_TYPE,
    isInMinistry: IS_IN_MINISTRY_PROP_TYPE,
    iconSize: ICON_SIZE_PROP_TYPE,
    inverse: INVERSE_PROP_TYPE,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_PROP_TYPE,
    removeInMinistryColumn: REMOVE_IN_MINISTRY_COLUMN_PROP_TYPE,
};

const defaultProps = {
    disablePopover: DISABLE_POPOVER_DEFAULT_PROP,
    firstMinistryJoinDate: null,
    isInMinistry: null,
    iconSize: ICON_SIZE_DEFAULT_PROP,
    inverse: INVERSE_DEFAULT_PROP,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_DEFAULT_PROP,
    removeInMinistryColumn: REMOVE_IN_MINISTRY_COLUMN_DEFAULT_PROP,
};

const useStyles = makeStyles((theme) => ({
    root: {
        '& $isInMinistry': {
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
                fill: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })}  !important`,
            },
            '&$isStudent .icon-use-path': {
                fill: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })}  !important`,
            },
        },
    },
    genderFemale: {},
    genderMale: {},
    genderUndefined: {},
    icon: {},
    isInMinistry: {
        '&.icon': {
            opacity: 1,
        },
    },
    isAdult: {},
    isChild: {},
    isStudent: {},
}));

function GridColumnMinistry(props) {
    const {
        firstMinistryJoinDate,
        disablePopover,
        iconSize,
        inverse,
        isFemale,
        isInMinistry,
        isMale,
        recordType,
        removeInMinistryColumn,
    } = props;

    const classes = useStyles(props);

    if (removeInMinistryColumn) {
        return null;
    }

    const ministryIcon = (
        <Icon
            className={ClassNames(
                classes.iconInMinistry,
                classes.icon,
                {
                    [classes.genderFemale]: isFemale,
                    [classes.genderMale]: isMale,
                    [classes.genderUndefined]: !isFemale && !isMale,
                    [classes.isAdult]: recordType === 'adult',
                    [classes.isChild]: recordType === 'child',
                    [classes.isInMinistry]: isInMinistry,
                    [classes.isStudent]: recordType === 'student',
                },
            )}
            compact
            inverse={inverse}
            size={iconSize}
            title={!isInMinistry && 'Not active in Ministry'}
            type="serving-opportunity"
        />
    );

    const popoverNode = !disablePopover && isInMinistry && firstMinistryJoinDate ? (
        <Popover
            content={(
                <MilestonePopoverContent
                    title="Active in Ministry"
                    milestonesDates={[
                        {
                            label: 'Since',
                            date: firstMinistryJoinDate,
                        },
                    ]}
                />
            )}
            mouseEvent="onMouseEnter"
        >
            {ministryIcon}
        </Popover>
    ) : null;

    return (
        <Grid.Column
            className={ClassNames(
                `${BEM_PERSON_CORE_MILESTONES}--in_ministry_column`,
                classes.root,
            )}
        >
            {popoverNode || ministryIcon}
        </Grid.Column>
    );
}

GridColumnMinistry.propTypes = propTypes;
GridColumnMinistry.defaultProps = defaultProps;

export default GridColumnMinistry;
