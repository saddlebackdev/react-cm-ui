import ClassNames from 'classnames';
import moment from 'moment-timezone';
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
    ACCEPTED_CHRIST_DATE_PROP_TYPE,
    DISABLE_POPOVER_DEFAULT_PROP,
    DISABLE_POPOVER_PROP_TYPE,
    HAS_ACCEPTED_CHRIST_PROP_TYPE,
    ICON_SIZE_DEFAULT_PROP,
    ICON_SIZE_PROP_TYPE,
    INVERSE_DEFAULT_PROP,
    INVERSE_PROP_TYPE,
    REMOVE_ACCEPTED_CHRIST_COLUMN_DEFAULT_PROP,
    REMOVE_ACCEPTED_CHRIST_COLUMN_PROP_TYPE,
} from './constants';
import Grid from '../../layout/grid';
import Icon from '../icon';
import makeStyles from '../../styles/makeStyles';
import MilestonePopoverContent from './milestonePopoverContent';
import Popover from '../popover';

const propTypes = {
    acceptedChristDate: ACCEPTED_CHRIST_DATE_PROP_TYPE,
    classes: PropTypes.shape({
        icon: PropTypes.string,
        root: PropTypes.string,
    }).isRequired,
    disablePopover: DISABLE_POPOVER_PROP_TYPE,
    hasAcceptedChrist: HAS_ACCEPTED_CHRIST_PROP_TYPE,
    iconSize: ICON_SIZE_PROP_TYPE,
    inverse: INVERSE_PROP_TYPE,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_PROP_TYPE,
    removeAcceptedChristColumn: REMOVE_ACCEPTED_CHRIST_COLUMN_PROP_TYPE,
};

const defaultProps = {
    acceptedChristDate: null,
    disablePopover: DISABLE_POPOVER_DEFAULT_PROP,
    hasAcceptedChrist: null,
    iconSize: ICON_SIZE_DEFAULT_PROP,
    inverse: INVERSE_DEFAULT_PROP,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_DEFAULT_PROP,
    removeAcceptedChristColumn: REMOVE_ACCEPTED_CHRIST_COLUMN_DEFAULT_PROP,
};

const useStyles = makeStyles((theme) => ({
    root: {
        '& $hasAcceptedChrist': {
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
    hasAcceptedChrist: {
        '&.icon': {
            opacity: 1,
        },
    },
    icon: {},
    isAdult: {},
    isChild: {},
    isStudent: {},
}));

function GridColumnAcceptedChrist(props) {
    const {
        acceptedChristDate,
        disablePopover,
        hasAcceptedChrist,
        iconSize,
        inverse,
        isFemale,
        isMale,
        recordType,
        removeAcceptedChristColumn,
    } = props;

    const classes = useStyles(props);

    if (removeAcceptedChristColumn) {
        return null;
    }

    const acceptedChristIcon = (
        <Icon
            className={ClassNames(
                classes.icon,
                {
                    [classes.genderFemale]: isFemale,
                    [classes.genderMale]: isMale,
                    [classes.genderUndefined]: !isFemale && !isMale,
                    [classes.hasAcceptedChrist]: hasAcceptedChrist,
                    [classes.isAdult]: !recordType || recordType === 'adult',
                    [classes.isChild]: recordType === 'child',
                    [classes.isStudent]: recordType === 'student',
                },
            )}
            compact
            inverse={inverse}
            size={iconSize}
            title={hasAcceptedChrist ? false : 'Has not accepted Christ'}
            type="heart"
        />
    );

    const popoverNode = !disablePopover && hasAcceptedChrist && acceptedChristDate ? (
        <Popover
            content={(
                <MilestonePopoverContent
                    title="Accepted Christ"
                    milestonesDates={[
                        {
                            label: 'On',
                            date: moment(acceptedChristDate).format(),
                        },
                    ]}
                />
            )}
            mouseEvent="onMouseEnter"
        >
            {acceptedChristIcon}
        </Popover>
    ) : null;

    return (
        <Grid.Column
            className={ClassNames(
                `${BEM_PERSON_CORE_MILESTONES}--accepted_christ_column`,
                classes.root,
            )}
        >
            {popoverNode || acceptedChristIcon}
        </Grid.Column>
    );
}

GridColumnAcceptedChrist.propTypes = propTypes;
GridColumnAcceptedChrist.defaultProps = defaultProps;

export default GridColumnAcceptedChrist;
