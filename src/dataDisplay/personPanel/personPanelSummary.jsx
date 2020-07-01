import {
    Grid,
    Image,
    lowerCase,
    Typography,
} from 'react-cm-ui';
import {
    find,
    isEmpty,
    isNil,
    trimStart,
    includes,
} from 'lodash';
import ClassNames from 'classnames';
import moment from 'moment-timezone';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import {
    BEM_BLOCK_NAME,
    GENDER_PROP_TYPE,
    RECORD_TYPE_COLOR,
    RECORD_TYPE_PROP_TYPE,
} from './personPanelConstants';
import { ENTER_KEY_CODE, UI_CLASS_NAME } from '../../global/constants';
import PersonContactInfo from '../personContactInfo';
import makeStyles from '../../styles/makeStyles';

const propTypes = {
    /**
     * Override or extend the styles applied to PersonPanelSummary.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
        avatar: PropTypes.string,
        avatarColumn: PropTypes.string,
        contactInfoColumn: PropTypes.string,
        expanded: PropTypes.string,
        grid: PropTypes.string,
        gridRow: PropTypes.string,
        metaInfo: PropTypes.string,
        nameColumn: PropTypes.string,
        personIdColumn: PropTypes.string,
        personId: PropTypes.string,
    }),
    /**
     * The data that the PersonPanelSummary uses to build the UI.
     */
    data: PropTypes.shape({
        avatar: PropTypes.string,
        birthdate: PropTypes.number,
        campus: PropTypes.string,
        emails: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string,
                isPrimary: PropTypes.bool,
            }),
        ),
        emergencyContactEmail: PropTypes.string,
        emergencyContactPhone: PropTypes.string,
        emergencyContactPreferredMethod: PropTypes.string,
        emergencyContactRelationshipName: PropTypes.string,
        firstName: PropTypes.string,
        gender: GENDER_PROP_TYPE,
        gradeLevel: PropTypes.oneOf([
            'none',
            'preK',
            'kindergarten',
            'first',
            'second',
            'third',
            'fourth',
            'fifth',
            'sixth',
            'seventh',
            'eighth',
            'ninth',
            'tenth',
            'eleventh',
            'twelfth',
            null,
        ]),
        isDoNotContact: PropTypes.bool,
        isDoNotEmail: PropTypes.bool,
        isDoNotMail: PropTypes.bool,
        isDoNotPhone: PropTypes.bool,
        isDoNotText: PropTypes.bool,
        lastName: PropTypes.string,
        maritalStatus: PropTypes.string,
        nickName: PropTypes.string,
        personId: PropTypes.number,
        phones: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string,
                isPrimary: PropTypes.bool,
            }),
        ),
        preferredMethod: PropTypes.string,
        prefix: PropTypes.string,
        recordType: RECORD_TYPE_PROP_TYPE,
        suffix: PropTypes.string,
    }),
    /**
     * If `true`, expand PersonPanelSummary, otherwise collapse it.
     */
    isExpanded: PropTypes.bool,
    /**
     * Event handler when clicking on the PersonPanelSummary container.
     */
    onClick: PropTypes.func,
    /**
     * Indicates whether or not the PersonPanelSummary can be focused.
     */
    tabIndex: PropTypes.number,
};

const defaultProps = {
    classes: null,
    data: {},
    isExpanded: false,
    onClick: () => {},
    tabIndex: -1,
};

const ageText = ({ birthdate }) => {
    if (!isEmpty(birthdate)) {
        return '';
    }

    return `${moment().diff(birthdate, 'years')}yr`;
};

const birthdateText = ({ birthdate }) => {
    if (!isEmpty(birthdate)) {
        return '';
    }

    return moment.unix(birthdate).utc().format('MM/DD/YY');
};

const genderText = ({ gender }) => {
    switch (gender) {
        case 'f':
        case 'F':
            return 'Female';
        case 'm':
        case 'M':
            return 'Male';
        default:
            return '';
    }
};

const gradeLevelText = ({ gradeLevel }) => {
    switch (gradeLevel) {
        case 'PreK':
            return 'PK';
        case 'Kindergarten':
            return 'K';
        case 'First':
            return '1';
        case 'Second':
            return '2';
        case 'Third':
            return '3';
        case 'Fourth':
            return '4';
        case 'Fifth':
            return '5';
        case 'Sixth':
            return '6';
        case 'Seventh':
            return '7';
        case 'Eighth':
            return '8';
        case 'Ninth':
            return '9';
        case 'Tenth':
            return '10';
        case 'Eleventh':
            return '11';
        case 'Twelfth':
            return '12';
        default:
            return gradeLevel;
    }
};

const BEM_CLASS_NAME = `${BEM_BLOCK_NAME}--summary`;

const useStyles = makeStyles((theme) => {
    const {
        palette,
        shape: {
            borderRadius,
        },
    } = theme;
    const transitionDuration = '200ms';
    const colorTransition = `color ${transitionDuration} ease-out`;

    return {
        root: {
            alignItems: 'center',
            backgroundColor: palette.background.light,
            borderRadius: borderRadius.main,
            color: palette.text.primary,
            cursor: 'pointer',
            display: 'flex',
            flexGrow: 1,
            minHeight: 70,
            outline: 'none',
            position: 'relative',
            transition: colorTransition,
            userSelect: 'none',
            width: '100%',
            '&::before, &::after': {
                bottom: 0,
                content: '""',
                left: 0,
                position: 'absolute',
                top: 0,
                transition: `opacity ${transitionDuration} ease-in-out`,
                zIndex: 1,
            },
            '&::before': {
                borderRadius: `${borderRadius.main}px 0 0 ${borderRadius.main}px`,
                opacity: 1,
                width: '5px',
                transition: `width ${transitionDuration} ease-in-out`,
            },
            [`& a.${UI_CLASS_NAME}`]: {
                transition: colorTransition,
            },
            '&$isAdult': {
                '&$genderFemale::before': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ gender: 'f', recordType: 'adult', theme })} !important`,
                },
                '&$genderMale::before': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ gender: 'm', recordType: 'adult', theme })} !important`,
                },
                '&$genderUndefined::before': {
                    backgroundColor: `${RECORD_TYPE_COLOR({ recordType: 'adult', theme })} !important`,
                },
            },
            '&$isChild::before': {
                backgroundColor: `${RECORD_TYPE_COLOR({ recordType: 'child', theme })} !important`,
            },
            '&$isStudent::before': {
                backgroundColor: `${RECORD_TYPE_COLOR({ recordType: 'student', theme })} !important`,
            },
            '&$isExpanded': {
                color: palette.text.contrastText,
                borderRadius: `${borderRadius.main}px ${borderRadius.main}px 0 0`,
                '&::before': {
                    borderRadius: `${borderRadius.main}px ${borderRadius.main}px 0 0`,
                    width: '100%',
                },
                [`& a.${UI_CLASS_NAME}`]: {
                    color: palette.text.contrastText,
                },
                '&$isAdult': {
                    '&$genderFemale::before': {
                        backgroundImage: `${RECORD_TYPE_COLOR({
                            gender: 'f',
                            isGradient: true,
                            recordType: 'adult',
                            theme,
                        })} !important`,
                    },
                    '&$genderMale::before': {
                        backgroundImage: `${RECORD_TYPE_COLOR({
                            gender: 'm',
                            isGradient: true,
                            recordType: 'adult',
                            theme,
                        })} !important`,
                    },
                    '&$genderUndefined::before': {
                        backgroundImage: `${RECORD_TYPE_COLOR({ isGradient: true, recordType: 'adult', theme })} !important`,
                    },
                },
                '&$isChild::before': {
                    backgroundImage: `${RECORD_TYPE_COLOR({ isGradient: true, recordType: 'child', theme })} !important`,
                },
                '&$isStudent::before': {
                    backgroundImage: `${RECORD_TYPE_COLOR({ isGradient: true, recordType: 'student', theme })} !important`,
                },
            },
        },
        avatar: {
            boxShadow: `inset 0 0 0 1px ${palette.border.primary} !important`,
        },
        avatarColumn: {
            maxWidth: 55,
            minWidth: 55,
            paddingRight: 0,
            width: 'auto !important',
        },
        contactInfoColumn: {
            display: 'none',
            width: 'auto !important',
            '&$hasContactInfo': {
                marginLeft: 'auto',
            },
            [theme.breakpoints.up(900)]: {
                display: 'block',
            },
        },
        isExpanded: {},
        hasContactInfo: {},
        grid: {
            margin: '0 !important',
            position: 'relative',
            width: '100%',
            zIndex: 2,
        },
        gridRow: {
            alignItems: 'center !important',
            flexWrap: 'nowrap !important',
            margin: '-11px 0 !important',
        },
        metaInfo: {},
        nameColumn: {
            marginRight: 'auto',
            width: 'auto !important',
        },
        noContactInfo: {},
        personIdColumn: {
            width: 'auto !important',
            wordWrap: 'nowrap',
            '&$noContactInfo': {
                marginLeft: 'auto',
            },
        },
        personId: {
            color: (props) => (
                props.isExpanded ?
                    palette.text.contrastText :
                    palette.text.secondary
            ),
            transitionDelay: (props) => (
                props.isExpanded ?
                    '100ms' :
                    null
            ),
        },
        genderFemale: {},
        genderMale: {},
        genderUndefined: {},
        isAdult: {},
        isChild: {},
        isStudent: {},
    };
});

function PersonPanelSummary(props) {
    const [metaInfoText, setMetaInfoText] = useState('');
    const [renderContactInfo, setRenderContactInfo] = useState(null);
    const classes = useStyles(props);
    const {
        data,
        isExpanded,
        onClick: onClickProp,
        tabIndex,
    } = props;
    const {
        avatar,
        birthdate,
        campus,
        emails,
        emergencyContactEmail,
        emergencyContactPhone,
        emergencyContactPreferredMethod,
        emergencyContactRelationshipName,
        firstName,
        gender,
        gradeLevel,
        isDoNotContact,
        isDoNotEmail,
        isDoNotMail,
        isDoNotPhone,
        isDoNotText,
        lastName,
        maritalStatus,
        nickName,
        personId,
        phones,
        prefix,
        preferredMethod,
        recordType,
        suffix,
    } = data;
    const primaryPhone = find(phones, 'isPrimary');
    const primaryEmail = find(emails, 'isPrimary');
    const phone = (primaryPhone && primaryPhone.value) || 'N/A';
    const email = (primaryEmail && primaryEmail.value) || 'N/A';
    const isAdult = isNil(recordType) || recordType === 'adult';
    const isChild = recordType === 'child';
    const isStudent = recordType === 'student';

    useEffect(() => {
        let text = '';

        if (gender) {
            text += genderText({ gender });
        }

        if (isAdult && maritalStatus) {
            text += ` | ${maritalStatus}`;
        }

        if ((isChild || isStudent) && birthdate) {
            text += ` | ${ageText({ birthdate })} ${birthdateText({ birthdate })}`;
        }

        if ((isChild || isStudent) && gradeLevel) {
            text += ` | gr ${gradeLevelText({ gradeLevel })}`;
        }

        if (campus) {
            text += ` | ${campus}`;
        }

        text = trimStart(text, '| ');

        setMetaInfoText(text);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        birthdate,
        campus,
        gender,
        gradeLevel,
        maritalStatus,
        recordType,
    ]);

    useEffect(() => {
        setRenderContactInfo(
            <PersonContactInfo
                emergencyContactEmail={emergencyContactEmail}
                emergencyContactPhone={emergencyContactPhone}
                emergencyContactPreferredMethod={emergencyContactPreferredMethod}
                emergencyContactRelationshipName={emergencyContactRelationshipName}
                isDoNotContact={isDoNotContact}
                isDoNotEmail={isDoNotEmail}
                isDoNotMail={isDoNotMail}
                isDoNotPhone={isDoNotPhone}
                isDoNotText={isDoNotText}
                isExpanded={isExpanded}
                preferredMethod={preferredMethod}
                email={email}
                phone={phone}
                recordType={recordType}
            />,
        );
    }, [
        email,
        emergencyContactEmail,
        emergencyContactPhone,
        emergencyContactPreferredMethod,
        emergencyContactRelationshipName,
        isDoNotContact,
        isDoNotEmail,
        isDoNotMail,
        isDoNotPhone,
        isDoNotText,
        isExpanded,
        phone,
        preferredMethod,
        recordType,
    ]);

    const onClick = (event) => {
        onClickProp(event);
    };

    const onKeyDown = (event) => {
        if (event.keyCode === ENTER_KEY_CODE) {
            onClickProp(event);
        }
    };

    const rootClasses = ClassNames(
        classes.root,
        UI_CLASS_NAME,
        [`${BEM_CLASS_NAME}`],
        {
            [classes.isExpanded]: isExpanded,
            [classes.genderFemale]: includes(['f', 'F'], gender),
            [classes.genderMale]: includes(['m', 'M'], gender),
            [classes.genderUndefined]: !includes(['f', 'F', 'm', 'M'], gender),
            [classes.isAdult]: isAdult,
            [classes.isChild]: isChild,
            [classes.isStudent]: isStudent,
        },
    );
    const metaInfoClasses = ClassNames(classes.metaInfo);
    const contactInfoColumnClasses = ClassNames(
        classes.contactInfoColumn,
        {
            [classes.hasContactInfo]: !!renderContactInfo,
        },
    );
    const personIdColumnClasses = ClassNames(
        classes.personIdColumn,
        {
            [classes.noContactInfo]: !renderContactInfo,
        },
    );

    return (
        <div
            className={rootClasses}
            onClick={onClick}
            onKeyDown={onKeyDown}
            tabIndex={tabIndex}
            role="button"
        >
            <Grid className={classes.grid}>
                <Grid.Row
                    className={classes.gridRow}
                >
                    <Grid.Column
                        className={classes.avatarColumn}
                    >
                        <Image
                            className={classes.avatar}
                            name={firstName && lastName ? `${firstName} ${lastName}` : null}
                            size={44}
                            src={avatar}
                            type="person"
                        />
                    </Grid.Column>

                    <Grid.Column
                        className={classes.nameColumn}
                    >
                        <Typography
                            component="h4"
                            variant="h4"
                        >
                            {`${prefix || ''} ${firstName} ${(nickName && `(${nickName})`) || ''} ${lastName} ${suffix || ''}`}
                        </Typography>

                        <Typography
                            className={metaInfoClasses}
                            color={isExpanded ? 'inherit' : 'textSecondary'}
                            variant="caption"
                        >
                            {metaInfoText}
                        </Typography>
                    </Grid.Column>

                    {renderContactInfo && (
                        <Grid.Column
                            className={contactInfoColumnClasses}
                            textAlign="right"
                        >
                            {renderContactInfo}
                        </Grid.Column>
                    )}

                    <Grid.Column
                        className={personIdColumnClasses}
                        textAlign="right"
                    >
                        <Typography
                            className={classes.personId}
                            variant="caption"
                        >
                            {`Id: ${personId}`}
                        </Typography>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}

PersonPanelSummary.propTypes = propTypes;
PersonPanelSummary.defaultProps = defaultProps;

export default PersonPanelSummary;
