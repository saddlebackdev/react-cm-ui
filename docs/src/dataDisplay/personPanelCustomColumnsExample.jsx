import {
    find,
    map,
} from 'lodash';
import {
    Checkbox,
    PersonPanel,
    PersonPanelDetails,
    PersonPanelSummary,
    Typography,
} from 'react-cm-ui';
import makeStyles from 'react-cm-ui/styles/makeStyles';
import React, { useEffect, useState } from 'react';
import { PAYLOAD_PERSON } from './personPanelConstants';

const useStyles = makeStyles((theme) => {
    const checkboxColumnWidth = 33;
    const matchColumnWidth = 50;

    return {
        checkboxColumn: {
            alignItems: 'center',
            display: 'flex',
            width: checkboxColumnWidth,
        },
        matchColumn: {
            alignItems: 'center',
            display: 'flex',
            paddingLeft: '11px',
            width: matchColumnWidth,
        },
        personPanelDetails: {
            margin: '0 50px 0 33px',
        },
        personPanelSummary: {
            flexBasis: `calc(100% - ${checkboxColumnWidth + matchColumnWidth}px)`,
        },
        successText: {
            color: theme.palette.success.main,
        },
    };
});

function PersonPanelCustomColumnsExample() {
    const [detailsData, setDetailsData] = useState({});
    const [summaryData, setSummaryData] = useState({});
    const classes = useStyles();

    useEffect(() => {
        const payloadPersonDude = PAYLOAD_PERSON[0];
        const addresses = map(payloadPersonDude.addresses, (address) => ({
            address1: address.address1,
            address2: address.address2,
            city: address.city,
            country: address.country,
            countryAlpha2: address.countryAlpha2,
            isPrimary: address.isPrimary,
            postalCode: address.postalCode,
            region: address.region,
            regionCode: address.regionCode,
        }));
        const emails = map(payloadPersonDude.emails, (email) => ({
            isPrimary: email.isPrimary,
            value: email.email,
        }));
        const phones = map(payloadPersonDude.phones, (phone) => {
            let type;

            switch (phone.phoneTypeId) {
                case 1:
                    type = 'home';

                    break;
                case 2:
                    type = 'work';

                    break;
                case 3:
                    type = 'cell';

                    break;
                default:
            }

            return {
                type,
                isPrimary: phone.isPrimary,
                value: phone.displayPhoneNumber,
            };
        });
        const primaryEmergencyContact = find(payloadPersonDude.emergencyContacts, 'isPrimary');
        let recordType;

        if (payloadPersonDude.isChild) {
            recordType = 'child';
        } else if (payloadPersonDude.isStudent) {
            recordType = 'student';
        } else {
            recordType = 'adult';
        }

        setDetailsData({
            addresses,
            allergies: payloadPersonDude.allergies,
            birthdate: payloadPersonDude.birthDate,
            campus: payloadPersonDude.churchEntityName,
            commonlyAttendedService: payloadPersonDude.commonlyAttendedService,
            emails,
            emergencyContactAddresses: primaryEmergencyContact.addresses,
            emergencyContactEmails: primaryEmergencyContact.emails,
            emergencyContactName: `${primaryEmergencyContact.firstName} ${primaryEmergencyContact.lastName}`,
            emergencyContactPhones: primaryEmergencyContact.phones,
            emergencyContactPreferMethod: primaryEmergencyContact.preferredMethod,
            emergencyContactRelation: primaryEmergencyContact.relationshipName,
            gender: payloadPersonDude.gender,
            gradeLevel: payloadPersonDude.gradeLevel,
            isDoNotContact: payloadPersonDude.contactPreferences.doNotContact,
            phones,
            preferredService: payloadPersonDude.preferredService,
            recordType,
        });

        setSummaryData({
            avatar: payloadPersonDude.profilePictureUrl,
            birthdate: payloadPersonDude.birthDate,
            campus: payloadPersonDude.churchEntityName,
            emails,
            firstName: payloadPersonDude.firstName,
            gender: payloadPersonDude.gender,
            gradeLevel: payloadPersonDude.gradeLevel,
            isDoNotContact: payloadPersonDude.contactPreferences.doNotContact,
            isDoNotEmail: payloadPersonDude.contactPreferences.doNotEmail,
            isDoNotMail: payloadPersonDude.contactPreferences.doNotMail,
            isDoNotPhone: payloadPersonDude.contactPreferences.doNotPhone,
            isDoNotText: payloadPersonDude.contactPreferences.doNotText,
            lastName: payloadPersonDude.lastName,
            maritalStatus: payloadPersonDude.maritalStatus,
            nickName: payloadPersonDude.nickName,
            personId: payloadPersonDude.id,
            phones,
            preferredMethod: payloadPersonDude.contactPreferences.preferredMethod,
            prefix: payloadPersonDude.prefix,
            recordType,
            suffix: payloadPersonDude.suffix,
        });
    }, []);

    const onSelectYesClick = () => {
        // eslint-disable-next-line no-console
        console.log('Selected!');
    };

    const onViewRecordYesClick = () => {
        // eslint-disable-next-line no-console
        console.log('Routing!');
    };

    return (
        <PersonPanel>
            <div
                className={classes.checkboxColumn}
            >
                <Checkbox />
            </div>

            <PersonPanelSummary
                classes={{
                    root: classes.personPanelSummary,
                }}
                data={summaryData}
            />

            <div
                className={classes.matchColumn}
            >
                <Typography
                    className={classes.successText}
                >
                    High
                </Typography>
            </div>

            <PersonPanelDetails
                className={classes.personPanelDetails}
                data={detailsData}
                selectButtonProps={{
                    id: 'the_dude_select_id',
                    prompt: true,
                    onYesClick: onSelectYesClick,
                }}
                viewRecordButtonProps={{
                    id: 'the_dude_view_record_id',
                    prompt: true,
                    onYesClick: onViewRecordYesClick,
                }}
            />
        </PersonPanel>
    );
}

export default PersonPanelCustomColumnsExample;
