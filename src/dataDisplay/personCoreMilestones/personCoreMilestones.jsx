import {
    includes,
    isEmpty,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React from 'react';
import {
    GENDER_PROP_TYPE,
    RECORD_TYPE_COLOR,
    RECORD_TYPE_PROP_TYPE,
} from '../personPanel/personPanelConstants';
import {
    BEM_PERSON_CORE_MILESTONES,
    PERSON_CORE_MILESTONES_CLASSES,
} from '../../global/constants';
import {
    ACCEPTED_CHRIST_DATE_PROP_TYPE,
    ACTIVE_IN_MISSIONS_DATE_PROP_TYPE,
    ATTENDED_CLASS101_DATE_PROP_TYPE,
    ATTENDED_CLASS201_DATE_PROP_TYPE,
    ATTENDED_CLASS301_DATE_PROP_TYPE,
    ATTENDED_CLASS401_DATE_PROP_TYPE,
    BAPTISM_DATE_PROP_TYPE,
    CONGREGATION_DATE_PROP_TYPE,
    DISABLE_POPOVER_DEFAULT_PROP,
    DISABLE_POPOVER_PROP_TYPE,
    FIRST_CONTACT_DATE_PROP_TYPE,
    FIRST_MINISTRY_JOIN_DATE_PROP_TYPE,
    FIRST_SMALL_GROUP_JOIN_DATE_PROP_TYPE,
    HAS_ACCEPTED_CHRIST_PROP_TYPE,
    HAS_SIGNED_MATURITY_COVENANT_PROP_TYPE,
    HAS_SIGNED_MEMBERSHIP_AGREEMENT_PROP_TYPE,
    HAS_SIGNED_MINISTRY_COVENANT_PROP_TYPE,
    HAS_SIGNED_MISSION_COVENANT_PROP_TYPE,
    HAS_TAKEN_CLASS101_PROP_TYPE,
    HAS_TAKEN_CLASS201_PROP_TYPE,
    HAS_TAKEN_CLASS301_PROP_TYPE,
    HAS_TAKEN_CLASS401_PROP_TYPE,
    ICON_COLOR_DEFAULT_PROP,
    ICON_COLOR_PROP_TYPE,
    ICON_SIZE_DEFAULT_PROP,
    ICON_SIZE_PROP_TYPE,
    INVERSE_DEFAULT_PROP,
    INVERSE_PROP_TYPE,
    IS_ACTIVE_IN_MISSIONS_PROP_TYPE,
    IS_BAPTISED_PROP_TYPE,
    IS_IN_MINISTRY_PROP_TYPE,
    IS_IN_SMALL_GROUP_PROP_TYPE,
    REMOVE_ACCEPTED_CHRIST_COLUMN_DEFAULT_PROP,
    REMOVE_ACCEPTED_CHRIST_COLUMN_PROP_TYPE,
    REMOVE_BAPTISM_COLUMN_DEFAULT_PROP,
    REMOVE_BAPTISM_COLUMN_PROP_TYPE,
    REMOVE_CLASS_COLUMN_DEFAULT_PROP,
    REMOVE_CLASS_COLUMN_PROP_TYPE,
    REMOVE_CONGREGATION_DATE_COLUMN_DEFAULT_PROP,
    REMOVE_CONGREGATION_DATE_COLUMN_PROP_TYPE,
    REMOVE_FIRST_CONTACT_DATE_COLUMN_DEFAULT_PROP,
    REMOVE_FIRST_CONTACT_DATE_COLUMN_PROP_TYPE,
    REMOVE_IN_MINISTRY_COLUMN_DEFAULT_PROP,
    REMOVE_IN_MINISTRY_COLUMN_PROP_TYPE,
    REMOVE_IN_TRIPS_COLUMN_DEFAULT_PROP,
    REMOVE_IN_TRIPS_COLUMN_PROP_TYPE,
    REMOVE_SMALL_GROUP_COLUMN_DEFAULT_PROP,
    REMOVE_SMALL_GROUP_COLUMN_PROP_TYPE,
    SIGNED_MATURITY_COVENANT_DATE_PROP_TYPE,
    SIGNED_MINISTRY_COVENANT_DATE_PROP_TYPE,
    SIGNED_MISSION_COVENANT_DATE_PROP_TYPE,
} from './constants';
import { getIconSize } from './utils';
import dateUtils from '../../utils/dateUtils';
import Grid from '../../layout/grid';
import GridColumnAcceptedChrist from './gridColumnAcceptedChrist';
import GridColumnBaptised from './gridColumnBaptised';
import GridColumnClassBaseballDiamond from './gridColumnClassBaseballDiamond';
import GridColumnMinistry from './gridColumnMinistry';
import GridColumnSmallGroup from './gridColumnSmallGroup';
import GridColumnMissions from './gridColumnMissions';
import makeStyles from '../../styles/makeStyles';
import TimeFromNow from '../timeFromNow';
import Typography from '../typography';

const propTypes = {
    data: PropTypes.shape({
        acceptedChristDate: ACCEPTED_CHRIST_DATE_PROP_TYPE,
        activeInMissionsDate: ACTIVE_IN_MISSIONS_DATE_PROP_TYPE,
        attendedClass101Date: ATTENDED_CLASS101_DATE_PROP_TYPE,
        attendedClass201Date: ATTENDED_CLASS201_DATE_PROP_TYPE,
        attendedClass301Date: ATTENDED_CLASS301_DATE_PROP_TYPE,
        attendedClass401Date: ATTENDED_CLASS401_DATE_PROP_TYPE,
        baptismDate: BAPTISM_DATE_PROP_TYPE,
        congregationDate: CONGREGATION_DATE_PROP_TYPE,
        firstContactDate: FIRST_CONTACT_DATE_PROP_TYPE,
        firstMinistryJoinDate: FIRST_MINISTRY_JOIN_DATE_PROP_TYPE,
        firstSmallGroupJoinDate: FIRST_SMALL_GROUP_JOIN_DATE_PROP_TYPE,
        gender: GENDER_PROP_TYPE,
        hasAcceptedChrist: HAS_ACCEPTED_CHRIST_PROP_TYPE,
        hasSignedMaturityCovenant: HAS_SIGNED_MATURITY_COVENANT_PROP_TYPE,
        hasSignedMembershipAgreement: HAS_SIGNED_MEMBERSHIP_AGREEMENT_PROP_TYPE,
        hasSignedMinistryCovenant: HAS_SIGNED_MINISTRY_COVENANT_PROP_TYPE,
        hasSignedMissionCovenant: HAS_SIGNED_MISSION_COVENANT_PROP_TYPE,
        hasTakenClass101: HAS_TAKEN_CLASS101_PROP_TYPE,
        hasTakenClass201: HAS_TAKEN_CLASS201_PROP_TYPE,
        hasTakenClass301: HAS_TAKEN_CLASS301_PROP_TYPE,
        hasTakenClass401: HAS_TAKEN_CLASS401_PROP_TYPE,
        isActiveInMissions: IS_ACTIVE_IN_MISSIONS_PROP_TYPE,
        isBaptised: IS_BAPTISED_PROP_TYPE,
        isInMinistry: IS_IN_MINISTRY_PROP_TYPE,
        isInSmallGroup: IS_IN_SMALL_GROUP_PROP_TYPE,
        recordType: RECORD_TYPE_PROP_TYPE,
        signedMaturityCovenantDate: SIGNED_MATURITY_COVENANT_DATE_PROP_TYPE,
        signedMinistryCovenantDate: SIGNED_MINISTRY_COVENANT_DATE_PROP_TYPE,
        signedMissionCovenantDate: SIGNED_MISSION_COVENANT_DATE_PROP_TYPE,
    }),
    className: PropTypes.string,
    disablePopover: DISABLE_POPOVER_PROP_TYPE,
    iconColor: ICON_COLOR_PROP_TYPE,
    iconSize: ICON_SIZE_PROP_TYPE,
    id: PropTypes.string,
    inverse: INVERSE_PROP_TYPE,
    isMobile: PropTypes.bool,
    // eslint-disable-next-line react/no-unused-prop-types
    parentConsumer: PropTypes.string,
    removeAcceptedChristColumn: REMOVE_ACCEPTED_CHRIST_COLUMN_PROP_TYPE,
    removeBaptismColumn: REMOVE_BAPTISM_COLUMN_PROP_TYPE,
    removeClassColumn: REMOVE_CLASS_COLUMN_PROP_TYPE,
    removeCongregationDateColumn: REMOVE_CONGREGATION_DATE_COLUMN_PROP_TYPE,
    removeFirstContactDateColumn: REMOVE_FIRST_CONTACT_DATE_COLUMN_PROP_TYPE,
    removeInMinistryColumn: REMOVE_IN_MINISTRY_COLUMN_PROP_TYPE,
    removeInTripsColumn: REMOVE_IN_TRIPS_COLUMN_PROP_TYPE,
    removeSmallGroupColumn: REMOVE_SMALL_GROUP_COLUMN_PROP_TYPE,
};

const defaultProps = {
    data: null,
    className: undefined,
    disablePopover: DISABLE_POPOVER_DEFAULT_PROP,
    iconColor: ICON_COLOR_DEFAULT_PROP,
    iconSize: ICON_SIZE_DEFAULT_PROP,
    id: null,
    inverse: INVERSE_DEFAULT_PROP,
    isMobile: false,
    parentConsumer: undefined,
    removeAcceptedChristColumn: REMOVE_ACCEPTED_CHRIST_COLUMN_DEFAULT_PROP,
    removeBaptismColumn: REMOVE_BAPTISM_COLUMN_DEFAULT_PROP,
    removeClassColumn: REMOVE_CLASS_COLUMN_DEFAULT_PROP,
    removeCongregationDateColumn: REMOVE_CONGREGATION_DATE_COLUMN_DEFAULT_PROP,
    removeFirstContactDateColumn: REMOVE_FIRST_CONTACT_DATE_COLUMN_DEFAULT_PROP,
    removeInMinistryColumn: REMOVE_IN_MINISTRY_COLUMN_DEFAULT_PROP,
    removeInTripsColumn: REMOVE_IN_TRIPS_COLUMN_DEFAULT_PROP,
    removeSmallGroupColumn: REMOVE_SMALL_GROUP_COLUMN_DEFAULT_PROP,
};

const useStyles = makeStyles((theme) => {
    const {
        palette,
    } = theme;

    const columnHorizontalPadding = 5.5;

    return {
        root: {
            backgroundColor: ({ backgroundTransparent, isMobile }) => {
                let backgroundColorValue;

                if (backgroundTransparent && !isMobile) {
                    backgroundColorValue = 'transparent';
                } else if (backgroundTransparent && isMobile) {
                    backgroundColorValue = 'rgb(255, 255, 255, 0.16)';
                } if (!backgroundTransparent) {
                    backgroundColorValue = palette.background.primary;
                }

                return backgroundColorValue;
            },
        },
        column: {
            height: (props) => getIconSize({ isMobile: props.isMobile, iconSize: props.iconSize }),
            padding: `0 ${columnHorizontalPadding}px`,
            width: (props) => `${getIconSize({ isMobile: props.isMobile, iconSize: props.iconSize }) + (columnHorizontalPadding * 2)}px !important`,
        },
        congregationDateColummn: {
            padding: `0 ${columnHorizontalPadding}px`,
            width: 'auto !important',
        },
        congregationDateLabelTypography: {
            color: ({ backgroundTransparent }) => (backgroundTransparent ?
                palette.text.contrastText :
                palette.text.secondary
            ),
        },
        congregationDateTypography: {
            color: ({ backgroundTransparent }) => backgroundTransparent &&
                palette.text.contrastText,
        },
        firstContactDateColumn: ({ parentConsumer, isMobile }) => {
            if (parentConsumer === 'personRecord') {
                return {
                    padding: isMobile ?
                        '0px 5px 0px 15px !important' :
                        '10px 15px 10px 5px !important',
                    width: 'auto !important',
                };
            }

            return {
                flexGrow: 1,
                padding: `0 ${columnHorizontalPadding}px`,
                textAlign: 'right',
                width: 'auto !important',
            };
        },
        firstContactDateLabelTypography: {
            color: ({ backgroundTransparent }) => (backgroundTransparent ?
                palette.text.contrastText :
                palette.text.secondary
            ),
        },
        firstContactDateTypography: {
            color: ({ backgroundTransparent }) => backgroundTransparent &&
                palette.text.contrastText,
        },
        dateContainers: {
            display: 'inline-block',
            textAlign: 'left',
        },
        genderFemale: {},
        genderMale: {},
        genderUndefined: {},
        grid: {
            margin: `0 -${columnHorizontalPadding}px !important`,
            width: 'auto',
        },
        icon: ({ iconColor }) => ({
            opacity: iconColor ? 0.25 : 1,
            display: 'flex !important',
            '&.ui.icon .icon-use-path': {
                fill: iconColor ? `${iconColor} !important` : palette.static.main,
            },
        }),
        inverse: {},
        isAdult: {},
        isChild: {},
        isStudent: {},
    };
});

function PersonCoreMilestones(props) {
    const {
        data,
        className,
        disablePopover,
        iconColor,
        iconSize: iconSizeProp,
        id,
        inverse,
        isMobile,
        removeAcceptedChristColumn,
        removeBaptismColumn,
        removeClassColumn,
        removeCongregationDateColumn,
        removeFirstContactDateColumn,
        removeInMinistryColumn,
        removeInTripsColumn,
        removeSmallGroupColumn,
    } = props;

    const {
        acceptedChristDate,
        activeInMissionsDate,
        attendedClass101Date,
        attendedClass201Date,
        attendedClass301Date,
        attendedClass401Date,
        baptismDate,
        congregationDate: congregationDateProp,
        firstContactDate: firstContactDateProp,
        firstMinistryJoinDate,
        firstSmallGroupJoinDate,
        gender,
        hasAcceptedChrist,
        hasTakenClass101,
        hasTakenClass201,
        hasTakenClass301,
        hasTakenClass401,
        hasSignedMembershipAgreement,
        hasSignedMaturityCovenant,
        hasSignedMinistryCovenant,
        hasSignedMissionCovenant,
        isActiveInMissions,
        isBaptised,
        isInMinistry,
        isInSmallGroup,
        recordType,
        signedMaturityCovenantDate,
        signedMinistryCovenantDate,
        signedMissionCovenantDate,
    } = data;

    const classes = useStyles(props);

    if (isEmpty(data)) {
        return null;
    }

    const isAdult = recordType === 'adult';
    const isFemale = includes(['f', 'F'], gender);
    const isMale = includes(['m', 'M'], gender);

    const rootClasses = ClassNames(
        PERSON_CORE_MILESTONES_CLASSES,
        classes.root,
        className,
        {
            [classes.genderFemale]: isFemale,
            [classes.genderMale]: isMale,
            [classes.genderUndefined]: !isFemale && !isMale,
            [classes.inverse]: inverse,
            [classes.isAdult]: recordType === 'adult',
            [classes.isChild]: recordType === 'child',
            [classes.isStudent]: recordType === 'student',
        },
    );

    const iconSize = getIconSize({ isMobile, iconSize: iconSizeProp });

    const relativeTime = {
        s: '1 day',
        ss: '1 day',
        m: '1 day',
        mm: '1 day',
        h: '1 day',
        hh: '1 day',
        d: '1 day',
        dd: '%d days',
        M: '1 month',
        MM: '%d months',
        y: '1 year',
        yy: '%d years',
    };

    const relativeTimeThreshold = {
        s: 60,
        m: 60,
        h: 24,
        d: 31,
        M: 12,
    };

    const relativeTimeRounding = Math.floor;
    const userTimeZone = dateUtils.getDetectedTimeZone();
    let atSaddlebackDate;
    let memberForDate;

    if (firstContactDateProp) {
        atSaddlebackDate = moment.utc(firstContactDateProp).tz(userTimeZone);
    }

    if (congregationDateProp) {
        memberForDate = moment.utc(congregationDateProp).tz(userTimeZone);
    }

    return (
        <div
            className={rootClasses}
            id={id}
        >
            <Grid
                alignItems="center"
                className={classes.grid}
                spacing={0}
            >
                <GridColumnAcceptedChrist
                    acceptedChristDate={acceptedChristDate}
                    classes={{
                        root: classes.column,
                        icon: classes.icon,
                    }}
                    disablePopover={disablePopover}
                    hasAcceptedChrist={hasAcceptedChrist}
                    iconSize={iconSize}
                    inverse={inverse}
                    isFemale={isFemale}
                    isMale={isMale}
                    recordType={recordType}
                    removeAcceptedChristColumn={removeAcceptedChristColumn}
                />

                <GridColumnBaptised
                    baptismDate={baptismDate}
                    classes={{
                        root: classes.column,
                        icon: classes.icon,
                    }}
                    disablePopover={disablePopover}
                    isBaptised={isBaptised}
                    iconSize={iconSize}
                    inverse={inverse}
                    isFemale={isFemale}
                    isMale={isMale}
                    recordType={recordType}
                    removeBaptismColumn={removeBaptismColumn}
                />

                <GridColumnClassBaseballDiamond
                    attendedClass101Date={attendedClass101Date}
                    attendedClass201Date={attendedClass201Date}
                    attendedClass301Date={attendedClass301Date}
                    attendedClass401Date={attendedClass401Date}
                    classes={{
                        root: classes.column,
                    }}
                    congregationDate={congregationDateProp}
                    disablePopover={disablePopover}
                    hasSignedMaturityCovenant={hasSignedMaturityCovenant}
                    hasSignedMembershipAgreement={hasSignedMembershipAgreement}
                    hasSignedMinistryCovenant={hasSignedMinistryCovenant}
                    hasSignedMissionCovenant={hasSignedMissionCovenant}
                    hasTakenClass101={hasTakenClass101}
                    hasTakenClass201={hasTakenClass201}
                    hasTakenClass301={hasTakenClass301}
                    hasTakenClass401={hasTakenClass401}
                    iconColor={iconColor}
                    iconSize={iconSize}
                    inverse={inverse}
                    isAdult={isAdult}
                    isFemale={isFemale}
                    isMale={isMale}
                    recordType={recordType}
                    removeClassColumn={removeClassColumn}
                    signedMaturityCovenantDate={signedMaturityCovenantDate}
                    signedMinistryCovenantDate={signedMinistryCovenantDate}
                    signedMissionCovenantDate={signedMissionCovenantDate}
                />

                <GridColumnSmallGroup
                    classes={{
                        root: classes.column,
                        icon: classes.icon,
                    }}
                    disablePopover={disablePopover}
                    firstSmallGroupJoinDate={firstSmallGroupJoinDate}
                    iconSize={iconSize}
                    inverse={inverse}
                    isFemale={isFemale}
                    isInSmallGroup={isInSmallGroup}
                    isMale={isMale}
                    recordType={recordType}
                    removeSmallGroupColumn={removeSmallGroupColumn}
                />

                <GridColumnMinistry
                    classes={{
                        root: classes.column,
                        icon: classes.icon,
                    }}
                    disablePopover={disablePopover}
                    firstMinistryJoinDate={firstMinistryJoinDate}
                    iconSize={iconSize}
                    inverse={inverse}
                    isFemale={isFemale}
                    isInMinistry={isInMinistry}
                    isMale={isMale}
                    recordType={recordType}
                    removeInMinistryColumn={removeInMinistryColumn}
                />

                <GridColumnMissions
                    activeInMissionsDate={activeInMissionsDate}
                    classes={{
                        root: classes.column,
                        icon: classes.icon,
                    }}
                    disablePopover={disablePopover}
                    iconSize={iconSize}
                    inverse={inverse}
                    isActiveInMissions={isActiveInMissions}
                    isFemale={isFemale}
                    isMale={isMale}
                    recordType={recordType}
                    removeInTripsColumn={removeInTripsColumn}
                />

                {atSaddlebackDate && !removeFirstContactDateColumn && isAdult && (
                    <Grid.Column
                        className={ClassNames(
                            `${BEM_PERSON_CORE_MILESTONES}--first_contact_date_column`,
                            classes.firstContactDateColumn,
                        )}
                    >
                        <Typography
                            className={classes.firstContactDateLabelTypography}
                            variant="h6"
                        >
                            At Saddleback
                        </Typography>

                        <span
                            className={`${BEM_PERSON_CORE_MILESTONES}--at_saddleback_date font-size-xsmall font-weight-bold`}
                        >
                            <TimeFromNow
                                className={classes.firstContactDateTypography}
                                date={atSaddlebackDate}
                                relativeTime={relativeTime}
                                relativeTimeThreshold={relativeTimeThreshold}
                                relativeTimeRounding={relativeTimeRounding}
                            />
                        </span>
                    </Grid.Column>
                )}

                {memberForDate && !removeCongregationDateColumn && isAdult && (
                    <Grid.Column
                        className={ClassNames(
                            `${BEM_PERSON_CORE_MILESTONES}--congregation_date_column`,
                            classes.congregationDateColummn,
                        )}
                    >
                        <Typography
                            className={classes.congregationDateLabelTypography}
                            variant="h6"
                        >
                            Member For
                        </Typography>

                        <span
                            className={`${BEM_PERSON_CORE_MILESTONES}--member_for_date font-size-xsmall font-weight-bold`}
                        >
                            <TimeFromNow
                                className={classes.congregationDateTypography}
                                date={memberForDate}
                                relativeTime={relativeTime}
                                relativeTimeThreshold={relativeTimeThreshold}
                                relativeTimeRounding={relativeTimeRounding}
                            />
                        </span>
                    </Grid.Column>
                )}
            </Grid>
        </div>
    );
}

PersonCoreMilestones.propTypes = propTypes;
PersonCoreMilestones.defaultProps = defaultProps;

export default PersonCoreMilestones;
