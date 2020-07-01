import {
    Typography,
} from 'react-cm-ui';
import {
    isEmpty,
    trimEnd,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import TelephoneLink from './telephoneLink';
import EmailLink from './emailLink';
import makeStyles from '../styles/makeStyles';

const propTypes = {
    email: PropTypes.string,
    emergencyContactEmail: PropTypes.string,
    emergencyContactPhone: PropTypes.string,
    emergencyContactPreferredMethod: PropTypes.string,
    emergencyContactRelationshipName: PropTypes.string,
    isCompact: PropTypes.bool,
    isDoNotContact: PropTypes.bool,
    isDoNotEmail: PropTypes.bool,
    isDoNotMail: PropTypes.bool,
    isDoNotPhone: PropTypes.bool,
    isDoNotText: PropTypes.bool,
    /**
     * `isExpanded` prop is required by `makeStyles()` but not used directly by the component.
     */
    isExpanded: PropTypes.bool, // eslint-disable-line react/no-unused-prop-types
    phone: PropTypes.string,
    preferredMethod: PropTypes.string,
    recordType: PropTypes.oneOf([
        'adult',
        'child',
        'student',
    ]),
};

const defaultProps = {
    emergencyContactEmail: null,
    emergencyContactPhone: null,
    emergencyContactPreferredMethod: null,
    emergencyContactRelationshipName: null,
    email: null,
    isCompact: false,
    isDoNotContact: false,
    isDoNotEmail: false,
    isDoNotMail: false,
    isDoNotPhone: false,
    isDoNotText: false,
    isExpanded: false,
    phone: null,
    preferredMethod: null,
    recordType: 'adult',
};

const useStyles = makeStyles((theme) => {
    const {
        palette,
    } = theme;
    const transitionDuration = '200ms';
    const colorTransition = `color ${transitionDuration} ease-out`;

    return {
        contactText: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '250px !important',
        },
        preferredContactMethod: {
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
            '&$compact': {
                display: 'none',
            },
        },
        preferredContactInfo: {
            fontWeight: theme.typography.fontWeightBold,
            '& .ui.a': {
                color: (props) => (
                    props.isExpanded ?
                        palette.text.contrastText :
                        palette.text.link
                ),
                transition: colorTransition,
                transitionDelay: (props) => (
                    props.isExpanded ?
                        '50ms' :
                        null
                ),
            },
        },
        compact: {},
    };
});

function PersonPanelSummaryContactText(props) {
    const {
        emergencyContactEmail,
        emergencyContactPhone,
        emergencyContactPreferredMethod,
        emergencyContactRelationshipName,
        isCompact,
        isDoNotContact,
        isDoNotEmail,
        isDoNotMail,
        isDoNotPhone,
        isDoNotText,
        preferredMethod: preferredMethodProp,
        email: emailProp,
        phone: phoneProp,
        recordType,
    } = props;

    const classes = useStyles(props);

    const isChild = recordType === 'child';

    const renderEmail = () => {
        let email = emailProp;

        if (isChild && emergencyContactEmail) {
            email = emergencyContactEmail;
        }

        if (isEmpty(email)) {
            return null;
        }

        if (email === 'N/A') {
            return email;
        }

        return (
            <EmailLink
                email={email}
            />
        );
    };

    const renderPhone = () => {
        let phone = phoneProp;

        if (isChild && emergencyContactPhone) {
            phone = emergencyContactPhone;
        }

        if (isEmpty(phone)) {
            return null;
        }

        if (phone === 'N/A') {
            return phone;
        }

        return (
            <TelephoneLink
                number={phone}
            />
        );
    };

    let contactMethodText = '';
    let preferredContactInfoText = '';
    let preferredMethod = preferredMethodProp;

    if (isChild && emergencyContactPreferredMethod) {
        preferredMethod = emergencyContactPreferredMethod;
    }

    if (isDoNotContact) {
        contactMethodText = 'Do Not Contact This Individual';
    } else {
        switch (preferredMethod) {
            case 'email':
                if (isChild && emergencyContactEmail && emergencyContactRelationshipName) {
                    contactMethodText = `${emergencyContactRelationshipName}'s Email`;
                } else {
                    contactMethodText = 'Prefers Email';
                }

                if (renderEmail()) {
                    preferredContactInfoText = renderEmail();
                }

                break;
            case 'phone':
                if (isChild && emergencyContactPhone && emergencyContactRelationshipName) {
                    contactMethodText = `${emergencyContactRelationshipName}'s Phone`;
                } else {
                    contactMethodText = 'Prefers Phone';
                }

                if (renderPhone()) {
                    preferredContactInfoText = renderPhone();
                }

                break;
            case 'text-message':
                // eslint-disable-next-line no-case-declarations
                let textNumber = phoneProp;

                if (isChild && emergencyContactPhone) {
                    textNumber = emergencyContactPhone;
                }

                if (isChild && emergencyContactPhone && emergencyContactRelationshipName) {
                    contactMethodText = `${emergencyContactRelationshipName}'s Text`;
                } else {
                    contactMethodText = 'Prefers Text';
                }

                if (phoneProp) {
                    preferredContactInfoText = textNumber;
                }

                break;
            case 'mail':
            case 'none':
            default:
                if (!isChild && renderPhone()) {
                    preferredContactInfoText = renderPhone();
                } else if (!isChild && renderEmail()) {
                    preferredContactInfoText = renderEmail();
                }
        }

        if (
            !isChild &&
            (isDoNotEmail || isDoNotMail || isDoNotPhone || isDoNotText)
        ) {
            if (contactMethodText) {
                contactMethodText += ', DNC via';
            } else {
                contactMethodText = 'DNC via ';
            }

            if (isDoNotEmail) {
                contactMethodText += 'Email, ';
            }

            if (isDoNotMail) {
                contactMethodText += 'Mail, ';
            }

            if (isDoNotPhone) {
                contactMethodText += 'Phone, ';
            }

            if (isDoNotText) {
                contactMethodText += 'Text';
            }

            contactMethodText = trimEnd(contactMethodText, ', ');
        }
    }

    const preferredContactMethodClasses = ClassNames(classes.preferredContactMethod, {
        [classes.compact]: isCompact,
    });

    if (contactMethodText || preferredMethod !== 'none') {
        return (
            <div
                className={classes.contactText}
            >
                {contactMethodText && (
                    <Typography
                        className={preferredContactMethodClasses}
                        component="h5"
                        variant="h5"
                    >
                        {`(${contactMethodText})`}
                    </Typography>
                )}

                {preferredMethod !== 'none' && preferredContactInfoText && (
                    <Typography
                        className={classes.preferredContactInfo}
                        variant="body2"
                    >
                        {preferredContactInfoText}
                    </Typography>
                )}
            </div>
        );
    }

    return null;
}

PersonPanelSummaryContactText.propTypes = propTypes;
PersonPanelSummaryContactText.defaultProps = defaultProps;

export default PersonPanelSummaryContactText;
