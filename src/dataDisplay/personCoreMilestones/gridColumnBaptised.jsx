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
    BAPTISM_DATE_PROP_TYPE,
    DISABLE_POPOVER_DEFAULT_PROP,
    DISABLE_POPOVER_PROP_TYPE,
    ICON_SIZE_DEFAULT_PROP,
    ICON_SIZE_PROP_TYPE,
    INVERSE_DEFAULT_PROP,
    INVERSE_PROP_TYPE,
    IS_BAPTISED_PROP_TYPE,
    REMOVE_BAPTISM_COLUMN_DEFAULT_PROP,
    REMOVE_BAPTISM_COLUMN_PROP_TYPE,
} from './constants';
import Grid from '../../layout/grid';
import Icon from '../icon';
import makeStyles from '../../styles/makeStyles';
import MilestonePopoverContent from './milestonePopoverContent';
import Popover from '../popover';

const propTypes = {
    baptismDate: BAPTISM_DATE_PROP_TYPE,
    classes: PropTypes.shape({
        icon: PropTypes.string,
        root: PropTypes.string,
    }).isRequired,
    disablePopover: DISABLE_POPOVER_PROP_TYPE,
    isBaptised: IS_BAPTISED_PROP_TYPE,
    iconSize: ICON_SIZE_PROP_TYPE,
    inverse: INVERSE_PROP_TYPE,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_PROP_TYPE,
    removeBaptismColumn: REMOVE_BAPTISM_COLUMN_PROP_TYPE,
};

const defaultProps = {
    baptismDate: null,
    disablePopover: DISABLE_POPOVER_DEFAULT_PROP,
    isBaptised: null,
    iconSize: ICON_SIZE_DEFAULT_PROP,
    inverse: INVERSE_DEFAULT_PROP,
    isFemale: PropTypes.bool,
    isMale: PropTypes.bool,
    recordType: RECORD_TYPE_DEFAULT_PROP,
    removeBaptismColumn: REMOVE_BAPTISM_COLUMN_DEFAULT_PROP,
};

const useStyles = makeStyles((theme) => ({
    root: {
        '& $isBaptised': {
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
    isBaptised: {},
    isAdult: {},
    isChild: {},
    isStudent: {},
}));

function GridColumnBaptised(props) {
    const {
        baptismDate,
        disablePopover,
        isBaptised,
        iconSize,
        inverse,
        isFemale,
        isMale,
        recordType,
        removeBaptismColumn,
    } = props;

    const classes = useStyles(props);

    if (removeBaptismColumn) {
        return null;
    }

    const baptisedIcon = (
        <Icon
            className={ClassNames(
                classes.icon,
                {
                    [classes.genderFemale]: isFemale,
                    [classes.genderMale]: isMale,
                    [classes.genderUndefined]: !isFemale && !isMale,
                    [classes.isBaptised]: isBaptised,
                    [classes.isAdult]: recordType === 'adult',
                    [classes.isChild]: recordType === 'child',
                    [classes.isStudent]: recordType === 'student',
                },
            )}
            compact
            inverse={inverse}
            size={iconSize}
            title={isBaptised ? false : 'Has not accepted Christ'}
            type="droplet"
        />
    );

    const popoverNode = !disablePopover && isBaptised && baptismDate ? (
        <Popover
            content={(
                <MilestonePopoverContent
                    title="Baptized"
                    milestonesDates={[
                        {
                            label: 'On',
                            date: baptismDate,
                        },
                    ]}
                />
            )}
            mouseEvent="onMouseEnter"
        >
            {baptisedIcon}
        </Popover>
    ) : null;

    return (
        <Grid.Column
            className={ClassNames(
                `${BEM_PERSON_CORE_MILESTONES}--baptism_column`,
                classes.root,
            )}
        >
            {popoverNode || baptisedIcon}
        </Grid.Column>
    );
}

GridColumnBaptised.propTypes = propTypes;
GridColumnBaptised.defaultProps = defaultProps;

export default GridColumnBaptised;
