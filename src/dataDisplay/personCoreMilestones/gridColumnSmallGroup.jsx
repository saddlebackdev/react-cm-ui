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
    IS_IN_SMALL_GROUP_PROP_TYPE,
    REMOVE_SMALL_GROUP_COLUMN_DEFAULT_PROP,
    REMOVE_SMALL_GROUP_COLUMN_PROP_TYPE,
} from './constants';
import Grid from '../../layout/grid';
import Icon from '../icon';
import makeStyles from '../../styles/makeStyles';
import MilestonePopoverContent from './milestonePopoverContent';
import Popover from '../popover';

const propTypes = {
    firstSmallGroupJoinDate: FIRST_MINISTRY_JOIN_DATE_PROP_TYPE,
    classes: PropTypes.shape({
        icon: PropTypes.string,
        root: PropTypes.string,
    }).isRequired,
    disablePopover: DISABLE_POPOVER_PROP_TYPE,
    isInSmallGroup: IS_IN_SMALL_GROUP_PROP_TYPE,
    iconSize: ICON_SIZE_PROP_TYPE,
    inverse: INVERSE_PROP_TYPE,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_PROP_TYPE,
    removeSmallGroupColumn: REMOVE_SMALL_GROUP_COLUMN_PROP_TYPE,
};

const defaultProps = {
    disablePopover: DISABLE_POPOVER_DEFAULT_PROP,
    firstSmallGroupJoinDate: null,
    isInSmallGroup: null,
    iconSize: ICON_SIZE_DEFAULT_PROP,
    inverse: INVERSE_DEFAULT_PROP,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_DEFAULT_PROP,
    removeSmallGroupColumn: REMOVE_SMALL_GROUP_COLUMN_DEFAULT_PROP,
};

const useStyles = makeStyles((theme) => ({
    root: {
        '& $isInSmallGroup': {
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
    isInSmallGroup: {
        '&.icon': {
            opacity: 1,
        },
    },
    isAdult: {},
    isChild: {},
    isStudent: {},
}));

function GridColumnSmallGroup(props) {
    const {
        disablePopover,
        firstSmallGroupJoinDate,
        iconSize,
        inverse,
        isFemale,
        isInSmallGroup,
        isMale,
        recordType,
        removeSmallGroupColumn,
    } = props;

    const classes = useStyles(props);

    if (removeSmallGroupColumn) {
        return null;
    }

    const smallGroupIcon = (
        <Icon
            className={ClassNames(
                classes.iconSmallGroup,
                classes.icon,
                {
                    [classes.genderFemale]: isFemale,
                    [classes.genderMale]: isMale,
                    [classes.genderUndefined]: !isFemale && !isMale,
                    [classes.isAdult]: recordType === 'adult',
                    [classes.isChild]: recordType === 'child',
                    [classes.isInSmallGroup]: isInSmallGroup,
                    [classes.isStudent]: recordType === 'student',
                },
            )}
            compact
            inverse={inverse}
            size={iconSize}
            title={!isInSmallGroup && 'Not active in Small Group'}
            type="users"
        />
    );

    const popoverNode = !disablePopover && isInSmallGroup && firstSmallGroupJoinDate ? (
        <Popover
            content={(
                <MilestonePopoverContent
                    title="Active in Small Groups"
                    milestonesDates={[
                        {
                            label: 'Since',
                            date: firstSmallGroupJoinDate,
                        },
                    ]}
                />
            )}
            mouseEvent="onMouseEnter"
        >
            {smallGroupIcon}
        </Popover>
    ) : null;

    return (
        <Grid.Column
            className={ClassNames(
                `${BEM_PERSON_CORE_MILESTONES}--small_group_column`,
                classes.root,
            )}
        >
            {popoverNode || smallGroupIcon}
        </Grid.Column>
    );
}

GridColumnSmallGroup.propTypes = propTypes;
GridColumnSmallGroup.defaultProps = defaultProps;

export default GridColumnSmallGroup;
