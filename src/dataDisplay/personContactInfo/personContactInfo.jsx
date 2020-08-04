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
import TelephoneLink from '../telephoneLink';
import EmailLink from '../emailLink';
import makeStyles from '../../styles/makeStyles';
import { PERSON_CONTACT_INFO_CLASSES } from '../../global/constants';

const preferredMethodEnums = [
    'email',
    'mail',
    'none',
    'phone',
    'text-message',
    '',
    null,
];

const propTypes = {
    /**
     * Override or extend the styles applied to PersonContactInfo.
     */
    classes: PropTypes.shape({
        root: PropTypes.string,
    }),
    email: PropTypes.string,
    emergencyContactEmail: PropTypes.string,
    emergencyContactPhone: PropTypes.string,
    emergencyContactPreferredMethod: PropTypes.oneOf(preferredMethodEnums),
    emergencyContactRelationshipName: PropTypes.string,
    /**
     * The `id` of the PersonContactInfo.
     */
    id: PropTypes.string,
    isDoNotContact: PropTypes.bool,
    isDoNotEmail: PropTypes.bool,
    isDoNotMail: PropTypes.bool,
    isDoNotPhone: PropTypes.bool,
    isDoNotText: PropTypes.bool,
    phone: PropTypes.string,
    preferredMethod: PropTypes.oneOf(preferredMethodEnums),
    recordType: PropTypes.oneOf([
        'adult',
        'child',
        'student',
    ]),
};

const defaultProps = {
    classes: null,
    emergencyContactEmail: null,
    emergencyContactPhone: null,
    emergencyContactPreferredMethod: null,
    emergencyContactRelationshipName: null,
    email: null,
    id: null,
    isDoNotContact: false,
    isDoNotEmail: false,
    isDoNotMail: false,
    isDoNotPhone: false,
    isDoNotText: false,
    phone: null,
    preferredMethod: null,
    recordType: 'adult',
};

const useStyles = makeStyles((theme) => {
    const {
        palette,
    } = theme;

    return {
        preferredContactMethod: {
            color: palette.text.secondary,
        },
        preferredContactInfo: {
            fontWeight: theme.typography.fontWeightBold,
            '& .ui.a': {
                color: palette.text.link,
            },
        },
        root: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            maxWidth: '250px !important',
        },
    };
});

function PersonContactInfo(props) {
    const {
        emergencyContactEmail,
        emergencyContactPhone,
        emergencyContactPreferredMethod,
        emergencyContactRelationshipName,
        id,
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
                } else if (!isChild) {
                    contactMethodText = 'Prefers Email';
                }

                if (renderEmail()) {
                    preferredContactInfoText = renderEmail();
                }

                break;
            case 'phone':
                if (isChild && emergencyContactPhone && emergencyContactRelationshipName) {
                    contactMethodText = `${emergencyContactRelationshipName}'s Phone`;
                } else if (!isChild) {
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
                } else if (!isChild) {
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
                contactMethodText += ', DNC via ';
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

    if (!contactMethodText) {
        return null;
    }

    return (
        <div
            className={ClassNames(
                PERSON_CONTACT_INFO_CLASSES,
                classes.root,
            )}
            id={id}
        >
            <Typography
                className={classes.preferredContactMethod}
                component="h5"
                variant="h5"
            >
                {`(${contactMethodText})`}
            </Typography>

            {preferredContactInfoText && (
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

PersonContactInfo.propTypes = propTypes;
PersonContactInfo.defaultProps = defaultProps;

export default PersonContactInfo;
