import { map } from 'lodash';
import {
    Grid,
    Header,
    Icon,
    TimeFromNow,
} from 'react-cm-ui';
// import { connect } from 'react-redux';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import MomentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import React from 'react';
import useTheme from '../styles/useTheme';
import useMediaQuery from '../utils/useMediaQuery';
// import { personDefaultProps, personPropTypes } from './personPropTypes.js';
// import hcDateUtils from '../../../shared/dateUtils.js';

const propTypes = {
    backgroundColorAlpha: PropTypes.number,
    className: PropTypes.string,
    columnProps: PropTypes.shape({
        1: PropTypes.shape({
            remove: PropTypes.bool,
            style: PropTypes.shape({}),
        }),
        2: PropTypes.shape({
            remove: PropTypes.bool,
            style: PropTypes.shape({}),
        }),
        3: PropTypes.shape({
            remove: PropTypes.bool,
            style: PropTypes.shape({}),
        }),
        4: PropTypes.shape({
            remove: PropTypes.bool,
            style: PropTypes.shape({}),
        }),
        5: PropTypes.shape({
            remove: PropTypes.bool,
            style: PropTypes.shape({}),
        }),
        6: PropTypes.shape({
            remove: PropTypes.bool,
            style: PropTypes.shape({}),
        }),
        7: PropTypes.shape({
            remove: PropTypes.bool,
            className: PropTypes.string,
            style: PropTypes.shape({}),
        }),
        8: PropTypes.shape({
            remove: PropTypes.bool,
            className: PropTypes.string,
            style: PropTypes.shape({}),
        }),
    }),
    congregationDate: PropTypes.oneOfType([
        MomentPropTypes.momentObj,
        MomentPropTypes.momentString,
        PropTypes.string,
    ]),
    firstContactDate: PropTypes.oneOfType([
        MomentPropTypes.momentObj,
        MomentPropTypes.momentString,
        PropTypes.string,
    ]),
    hasAcceptedChrist: PropTypes.bool,
    hasAttendedClass101: PropTypes.bool,
    hasAttendedClass201: PropTypes.bool,
    hasAttendedClass301: PropTypes.bool,
    hasAttendedClass401: PropTypes.bool,
    hasSignedMaturityCovenant: PropTypes.bool,
    hasSignedMembershipAgreement: PropTypes.bool,
    hasSignedMinistryCovenant: PropTypes.bool,
    hasSignedMissionCovenant: PropTypes.bool,
    isBaptised: PropTypes.bool,
    isInMinistry: PropTypes.bool,
    isInSmallGroup: PropTypes.bool,
    isPEACE: PropTypes.bool,
    recordType: PropTypes.oneOf(['adult', 'child', 'student']).isRequired,
    // iconSize: PropTypes.number,
    // inverse: PropTypes.bool,
    // isMobile: PropTypes.bool,
    // style: PropTypes.shape({}),
};

const defaultProps = {
    backgroundColorAlpha: undefined,
    className: undefined,
    columnProps: {},
    congregationDate: '',
    firstContactDate: '',
    hasAcceptedChrist: false,
    hasAttendedClass101: false,
    hasAttendedClass201: false,
    hasAttendedClass301: false,
    hasAttendedClass401: false,
    hasSignedMembershipAgreement: false,
    hasSignedMaturityCovenant: false,
    hasSignedMinistryCovenant: false,
    hasSignedMissionCovenant: false,
    isBaptised: false,
    isInMinistry: false,
    isInSmallGroup: false,
    isPEACE: false,
    iconSize: undefined,
    inverse: false,
    isMobile: true,
    style: {},
};

export function PersonCoreMilestones(props) {
    const {
        backgroundColorAlpha,
        className,
        columnProps,
        congregationDate: congregationDateAndTime,
        firstContactDate: firstContactDateAndTime,
        hasAcceptedChrist,
        hasAttendedClass101,
        hasAttendedClass201,
        hasAttendedClass301,
        hasAttendedClass401,
        hasSignedMembershipAgreement,
        hasSignedMaturityCovenant,
        hasSignedMinistryCovenant,
        hasSignedMissionCovenant,
        isBaptised,
        isInMinistry,
        isInSmallGroup,
        isPEACE,
        inverse,
        recordType,
        style,
    } = props;
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.only('sm'));
    const isAdult = recordType === 'adult';
    const blockClassName = 'person_core_milestones';
    const containerClasses = ClassNames(blockClassName, className, {
        [`${blockClassName}-inverse`]: inverse,
    });
    const class101Classes = ClassNames(`${blockClassName}--class_101`, {
        [`${blockClassName}--class_101-has_attended`]: hasAttendedClass101,
        [`${blockClassName}--class_101-has_signed`]: hasSignedMembershipAgreement,
    });
    const class201Classes = ClassNames(`${blockClassName}--class_201`, {
        [`${blockClassName}--class_201-has_attended`]: hasAttendedClass201,
        [`${blockClassName}--class_201-has_signed`]: hasSignedMaturityCovenant,
    });
    const class301Classes = ClassNames(`${blockClassName}--class_301`, {
        [`${blockClassName}--class_301-has_attended`]: hasAttendedClass301,
        [`${blockClassName}--class_301-has_signed`]: hasSignedMinistryCovenant,
    });
    const class401Classes = ClassNames(`${blockClassName}--class_401`, {
        [`${blockClassName}--class_401-has_attended`]: hasAttendedClass401,
        [`${blockClassName}--class_401-has_signed`]: hasSignedMissionCovenant,
    });
    const horizontalColumnPadding = 5.5;
    const iconColumnPadding = `0 ${horizontalColumnPadding}px`;
    const backgroundColor = inverse ? '255, 255, 255' : '0, 0, 0';
    const styleBackgroundColor = backgroundColorAlpha ?
        `rgba(${backgroundColor}, ${backgroundColorAlpha})` :
        null;

    let { iconSize } = props;

    if (!isMobile) {
        iconSize = iconSize || 24;
    } else {
        iconSize = iconSize || 16;
    }

    const iconClassSize = 24;
    const iconColumnWidth = `${iconSize + (horizontalColumnPadding * 2)}px`;
    const iconStyle = {
        height: iconSize,
        padding: iconColumnPadding,
        width: iconColumnWidth,
    };
    const defaultColumnProps = [
        {
            remove: false,
            style: iconStyle,
        }, {
            remove: false,
            style: iconStyle,
        }, {
            remove: false,
            style: iconStyle,
        }, {
            remove: false,
            style: iconStyle,
        }, {
            remove: false,
            style: iconStyle,
        }, {
            remove: false,
            style: iconStyle,
        }, {
            className: `${blockClassName}--at_saddleback`,
            remove: false,
            style: {
                paddingLeft: 5.5,
                width: 'auto',
            },
        }, {
            className: `${blockClassName}--member_for`,
            remove: false,
            style: {
                flexGrow: 1,
                paddingRight: 5.5,
                textAlign: 'left',
                width: 'auto',
            },
        },
    ];
    const mergedColumnProps = map(defaultColumnProps, (column, index) => {
        if (index === 0 && columnProps['1']) {
            return {
                ...defaultColumnProps[index],
                ...columnProps['1'],
                style: {
                    ...defaultColumnProps.style,
                    ...columnProps['1'].style,
                },
            };
        }

        if (index === 1 && columnProps['2']) {
            return {
                ...defaultColumnProps[index],
                ...columnProps['2'],
                style: {
                    ...defaultColumnProps.style,
                    ...columnProps['2'].style,
                },
            };
        }

        if (index === 2 && columnProps['3']) {
            return {
                ...defaultColumnProps[index],
                ...columnProps['3'],
                style: {
                    ...defaultColumnProps.style,
                    ...columnProps['3'].style,
                },
            };
        }

        if (index === 3 && columnProps['4']) {
            return {
                ...defaultColumnProps[index],
                ...columnProps['4'],
                style: {
                    ...defaultColumnProps.style,
                    ...columnProps['4'].style,
                },
            };
        }

        if (index === 4 && columnProps['5']) {
            return {
                ...defaultColumnProps[index],
                ...columnProps['5'],
                style: {
                    ...defaultColumnProps.style,
                    ...columnProps['5'].style,
                },
            };
        }

        if (index === 5 && columnProps['6']) {
            return {
                ...defaultColumnProps[index],
                ...columnProps['6'],
                style: {
                    ...defaultColumnProps.style,
                    ...columnProps['6'].style,
                },
            };
        }

        if (index === 6 && columnProps['7']) {
            return {
                ...defaultColumnProps[index],
                ...columnProps['7'],
                className: ClassNames(
                    `${blockClassName}--at_saddleback`,
                    columnProps['7'].className,
                ),
                style: {
                    paddingLeft: 5.5,
                    width: 'auto',
                    ...columnProps['7'].style,
                },
            };
        }

        if (index === 7 && columnProps['8']) {
            return {
                ...defaultColumnProps[index],
                ...columnProps['8'],
                className: ClassNames(
                    `${blockClassName}--member_for`,
                    columnProps['8'].className,
                ),
                style: {
                    flexGrow: 1,
                    paddingRight: 5.5,
                    textAlign: 'left',
                    width: 'auto',
                    ...columnProps['8'].style,
                },
            };
        }

        return {
            ...defaultColumnProps[index],
        };
    });

    let class101Title;
    let class201Title;
    let class301Title;
    let class401Title;

    if (hasAttendedClass101) {
        class101Title = 'Taken CLASS 101';

        if (hasSignedMembershipAgreement) {
            class101Title += ' and Signed Membership Covenant';
        } else {
            class101Title += ' and has not Signed Membership Covenant';
        }
    } else {
        class101Title = 'Has not taken CLASS 101';

        if (hasSignedMembershipAgreement) {
            class101Title += ', but has signed Membership Covenant';
        }
    }

    if (hasAttendedClass201) {
        class201Title = 'Taken CLASS 201';

        if (hasSignedMaturityCovenant) {
            class201Title += ' and Signed Maturity Covenant';
        } else {
            class201Title += ' and has not Signed Maturity Covenant';
        }
    } else {
        class201Title = 'Has not taken CLASS 201';

        if (hasSignedMaturityCovenant) {
            class201Title += ', but has signed Maturity Agreement';
        }
    }

    if (hasAttendedClass301) {
        class301Title = 'Taken CLASS 301';

        if (hasSignedMinistryCovenant) {
            class301Title += ' and Signed Ministry Covenant';
        } else {
            class301Title += ' and has not Signed Ministry Covenant';
        }
    } else {
        class301Title = 'Has not taken CLASS 301';

        if (hasSignedMaturityCovenant) {
            class301Title += ', but has signed Ministry Covenant';
        }
    }

    if (hasAttendedClass401) {
        class401Title = 'Taken CLASS 401';

        if (hasSignedMissionCovenant) {
            class401Title += ' and Signed Mission Covenant';
        } else {
            class401Title += ' and has not Signed Mission Covenant';
        }
    } else {
        class401Title = 'Has not taken CLASS 401';

        if (hasSignedMaturityCovenant) {
            class401Title += ', but has signed Mission Covenant';
        }
    }

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
    // const userTimeZone = hcDateUtils.getPreferredTimeZone();
    const userTimeZone = '';
    let newFirstContactDate;
    let newCongregationDate;

    if (firstContactDateAndTime) {
        newFirstContactDate = moment.utc(firstContactDateAndTime).tz(userTimeZone);
    }

    if (congregationDateAndTime) {
        newCongregationDate = moment.utc(congregationDateAndTime).tz(userTimeZone);
    }

    return (
        <div
            className={containerClasses}
            style={{
                ...style,
                backgroundColor: styleBackgroundColor,
            }}
        >
            <Grid
                style={{
                    margin: `0 -${horizontalColumnPadding}px`,
                }}
                verticalAlign="middle"
            >
                <Grid.Row>
                    {!mergedColumnProps[0].remove && (
                        <Grid.Column
                            {...mergedColumnProps[0]}
                        >
                            <Icon
                                compact
                                inverse={inverse}
                                size={iconSize}
                                style={{
                                    opacity: hasAcceptedChrist ? 1 : 0.25,
                                }}
                                title={hasAcceptedChrist ? 'Accepted Christ' : 'Has not accepted Christ'}
                                type="heart"
                            />
                        </Grid.Column>
                    )}

                    {!mergedColumnProps[1].remove && (
                        <Grid.Column
                            {...mergedColumnProps[1]}
                        >
                            <Icon
                                compact
                                inverse={inverse}
                                size={iconSize}
                                style={{
                                    opacity: isBaptised ? 1 : 0.25,
                                }}
                                title={isBaptised ? 'Baptized' : 'Not Baptized'}
                                type="droplet"
                            />
                        </Grid.Column>
                    )}

                    {!mergedColumnProps[2].remove && isAdult && (
                        <Grid.Column
                            {...mergedColumnProps[2]}
                        >
                            <div
                                className={`${blockClassName}--classes`}
                                style={{
                                    height: iconClassSize,
                                    transform: `scale(${isMobile ? 16 / 24 : 1})`,
                                    transformOrigin: '0 3px',
                                    width: iconClassSize,
                                }}
                            >
                                <div
                                    className={`${blockClassName}--classes_rotate`}
                                    style={{
                                        height: iconClassSize,
                                        width: iconClassSize,
                                    }}
                                >
                                    <div
                                        className={class101Classes}
                                        title={class101Title}
                                    />

                                    <div
                                        className={class201Classes}
                                        title={class201Title}
                                    />

                                    <div
                                        className={class301Classes}
                                        title={class301Title}
                                    />

                                    <div
                                        className={class401Classes}
                                        title={class401Title}
                                    />

                                </div>
                            </div>
                        </Grid.Column>
                    )}

                    {!mergedColumnProps[3].remove && (
                        <Grid.Column
                            {...mergedColumnProps[3]}
                        >
                            <Icon
                                compact
                                inverse={inverse}
                                size={iconSize}
                                style={{
                                    opacity: isInSmallGroup ? 1 : 0.25,
                                }}
                                title={isInSmallGroup ? 'Active in Small Group' : 'Not active in Small Group'}
                                type="users"
                            />
                        </Grid.Column>
                    )}

                    {!mergedColumnProps[4].remove && (
                        <Grid.Column
                            {...mergedColumnProps[4]}
                        >
                            <Icon
                                compact
                                inverse={inverse}
                                size={iconSize}
                                style={{
                                    opacity: isInMinistry ? 1 : 0.25,
                                }}
                                title={isInMinistry ? 'Active in Ministry' : 'Not active in Ministry'}
                                type="serving-opportunity"
                            />
                        </Grid.Column>
                    )}

                    {!mergedColumnProps[5].remove && (
                        <Grid.Column
                            {...mergedColumnProps[5]}
                        >
                            <Icon
                                compact
                                inverse={inverse}
                                size={iconSize}
                                style={{
                                    opacity: isPEACE ? 1 : 0.25,
                                }}
                                title={isPEACE ? 'Active in Trips' : 'Not active in Trips'}
                                type="shoe-prints"
                            />
                        </Grid.Column>
                    )}

                    {newFirstContactDate && isAdult && !mergedColumnProps[6].remove && (
                        <Grid.Column
                            {...mergedColumnProps[6]}
                        >
                            <Header
                                className={`${blockClassName}--at_saddleback_header`}
                                size={!isMobile ? 'xxsmall' : 'xsmall'}
                                weight="normal"
                                style={{ margin: 0 }}
                            >
                                At Saddleback
                            </Header>

                            <span
                                className={`${blockClassName}--at_saddleback_date font-size-xsmall font-weight-bold`}
                            >
                                <TimeFromNow
                                    date={newFirstContactDate}
                                    relativeTime={relativeTime}
                                    relativeTimeThreshold={relativeTimeThreshold}
                                    relativeTimeRounding={relativeTimeRounding}
                                />
                            </span>
                        </Grid.Column>
                    )}

                    {newCongregationDate && isAdult && !mergedColumnProps[7].remove && (
                        <Grid.Column
                            {...mergedColumnProps[7]}
                        >
                            <Header
                                className={`${blockClassName}--member_for_header`}
                                size={!isMobile ? 'xxsmall' : 'xsmall'}
                                weight="normal"
                                style={{ margin: 0 }}
                            >
                                Member For
                            </Header>

                            <span
                                className={`${blockClassName}--member_for_date font-size-xsmall font-weight-bold`}
                            >
                                <TimeFromNow
                                    date={newCongregationDate}
                                    relativeTime={relativeTime}
                                    relativeTimeThreshold={relativeTimeThreshold}
                                    relativeTimeRounding={relativeTimeRounding}
                                />
                            </span>
                        </Grid.Column>
                    )}
                </Grid.Row>
            </Grid>
        </div>
    );
}

PersonCoreMilestones.propTypes = propTypes;
PersonCoreMilestones.defaultProps = defaultProps;

export default PersonCoreMilestones;
