import {
    PersonCoreMilestones,
    Card,
    DatePickerInput,
    Grid,
    Input,
    Radio,
    Select,
    Typography,
} from 'react-cm-ui';
import {
    map,
} from 'lodash';
import moment from 'moment-timezone';
import React from 'react';
import {
    DATA_ADULT_MALE,
} from './constants';

const booleanTypes = [
    true,
    false,
];

function ExampleAdultMaleWhite() {
    const [backgroundTransparent, setBackgroundTransparent] =
        React.useState(booleanTypes[1]);
    const [className, setClassName] = React.useState(undefined);
    const [data, setData] = React.useState({ ...DATA_ADULT_MALE });
    const [disablePopover, setDisablePopover] = React.useState(booleanTypes[1]);
    const [iconColor, setIconColor] = React.useState(undefined);
    const [iconSize, setIconSize] = React.useState(undefined);
    const [id, setId] = React.useState(undefined);
    const [inverse, setInverse] = React.useState(false);
    const [isMobile, setIsMobile] = React.useState(false);
    const [parentConsumer, setParentConsumer] = React.useState(undefined);
    const [removeAcceptedChristColumn, setRemoveAcceptedChristColumn] = React.useState(false);
    const [removeBaptismColumn, setRemoveBaptismColumn] = React.useState(false);
    const [removeClassColumn, setRemoveClassColumn] = React.useState(false);
    const [removeCongregationDateColumn, setRemoveCongregationDateColumn] = React.useState(false);
    const [removeFirstContactDateColumn, setRemoveFirstContactDateColumn] = React.useState(false);
    const [removeInMinistryColumn, setRemoveInMinistryColumn] = React.useState(false);
    const [removeInTripsColumn, setRemoveInTripsColumn] = React.useState(false);
    const [removeSmallGroupColumn, setRemoveSmallGroupColumn] = React.useState(false);

    const onBackgroundTransparentChange = (value) => {
        setBackgroundTransparent(value === 'true');
    };

    const onClassNameChange = (value) => {
        setClassName(!value ? undefined : value);
    };

    const onDataChange = (type, value) => {
        console.log('value', value);
        let newData = {
            ...data,
        };

        switch (type) {
            case 'acceptedChristDate':
                newData = {
                    ...data,
                    acceptedChristDate: value.date,
                };

                break;
            case 'activeInMissionsDate':
                newData = {
                    ...data,
                    activeInMissionsDate: value.date,
                };

                break;
            case 'attendedClass101Date':
                newData = {
                    ...data,
                    attendedClass101Date: value.date,
                };

                break;
            case 'attendedClass201Date':
                newData = {
                    ...data,
                    attendedClass201Date: value.date,
                };

                break;
            case 'attendedClass301Date':
                newData = {
                    ...data,
                    attendedClass301Date: value.date,
                };

                break;
            case 'attendedClass401Date':
                newData = {
                    ...data,
                    attendedClass401Date: value.date,
                };

                break;
            case 'baptismDate':
                newData = {
                    ...data,
                    baptismDate: value.date,
                };

                break;
            case 'congregationDate':
                newData = {
                    ...data,
                    congregationDate: value.date,
                };

                break;
            case 'firstContactDate':
                newData = {
                    ...data,
                    firstContactDate: value.date,
                };

                break;
            case 'firstMinistryJoinDate':
                newData = {
                    ...data,
                    firstMinistryJoinDate: value.date,
                };

                break;
            case 'firstSmallGroupJoinDate':
                newData = {
                    ...data,
                    firstSmallGroupJoinDate: value.date,
                };

                break;
            case 'gender':
                newData = {
                    ...data,
                    gender: value?.value ?? null,
                };

                break;
            case 'hasAcceptedChrist':
                newData = {
                    ...data,
                    hasAcceptedChrist: value,
                };

                break;
            case 'hasSignedMaturityCovenant':
                newData = {
                    ...data,
                    hasSignedMaturityCovenant: value,
                };

                break;
            case 'hasSignedMembershipAgreement':
                newData = {
                    ...data,
                    hasSignedMembershipAgreement: value,
                };

                break;
            case 'hasSignedMinistryCovenant':
                newData = {
                    ...data,
                    hasSignedMinistryCovenant: value,
                };

                break;
            case 'hasSignedMissionCovenant':
                newData = {
                    ...data,
                    hasSignedMissionCovenant: value,
                };

                break;
            case 'hasTakenClass101':
                newData = {
                    ...data,
                    hasTakenClass101: value,
                };

                break;
            case 'hasTakenClass201':
                newData = {
                    ...data,
                    hasTakenClass201: value,
                };

                break;
            case 'hasTakenClass301':
                newData = {
                    ...data,
                    hasTakenClass301: value,
                };

                break;
            case 'hasTakenClass401':
                newData = {
                    ...data,
                    hasTakenClass401: value,
                };

                break;
            case 'isActiveInMissions':
                newData = {
                    ...data,
                    isActiveInMissions: value,
                };

                break;
            case 'isBaptised':
                newData = {
                    ...data,
                    isBaptised: value,
                };

                break;
            case 'isInMinistry':
                newData = {
                    ...data,
                    isInMinistry: value,
                };

                break;
            case 'isInSmallGroup':
                newData = {
                    ...data,
                    isInSmallGroup: value,
                };

                break;
            case 'recordType':
                newData = {
                    ...data,
                    recordType: value?.value ?? null,
                };

                break;
            case 'signedMaturityCovenantDate':
                newData = {
                    ...data,
                    signedMaturityCovenantDate: value.date,
                };

                break;
            case 'signedMembershipAgreementDate':
                newData = {
                    ...data,
                    signedMembershipAgreementDate: value.date,
                };

                break;
            case 'signedMinistryCovenantDate':
                newData = {
                    ...data,
                    signedMinistryCovenantDate: value.date,
                };

                break;
            case 'signedMissionCovenantDate':
                newData = {
                    ...data,
                    signedMissionCovenantDate: value.date,
                };

                break;
            default:
        }

        setData(newData);
    };

    const onDisablePopoverChange = (value) => {
        setDisablePopover(value === 'true');
    };

    const onIconColorChange = (value) => {
        setIconColor(!value ? undefined : value);
    };

    const onIconSizeChange = (value) => {
        setIconSize(!value ? undefined : value);
    };

    const onIdChange = (value) => {
        setId(!value ? undefined : value);
    };

    const onInverseChange = (value) => {
        setInverse(value === 'true');
    };

    const onIsMobileChange = (value) => {
        setIsMobile(value === 'true');
    };

    const onParentConsumerChange = (value) => {
        setParentConsumer(!value ? undefined : value);
    };

    const onRemoveAcceptedChristColumnChange = (value) => {
        setRemoveAcceptedChristColumn(value === 'true');
    };

    const onRemoveBaptismColumnChange = (value) => {
        setRemoveBaptismColumn(value === 'true');
    };

    const onRemoveClassColumnChange = (value) => {
        setRemoveClassColumn(value === 'true');
    };

    const onRemoveCongregationDateColumnChange = (value) => {
        setRemoveCongregationDateColumn(value === 'true');
    };

    const onRemoveFirstContactDateColumnChange = (value) => {
        setRemoveFirstContactDateColumn(value === 'true');
    };

    const onRemoveInMinistryColumnChange = (value) => {
        setRemoveInMinistryColumn(value === 'true');
    };

    const onRemoveInTripsColumnChange = (value) => {
        setRemoveInTripsColumn(value === 'true');
    };

    const onRemoveSmallGroupColumnChange = (value) => {
        setRemoveSmallGroupColumn(value === 'true');
    };

    return (
        <React.Fragment>
            <div
                style={{ margin: '22px 0 33px' }}
            >
                <PersonCoreMilestones
                    backgroundTransparent={backgroundTransparent}
                    className={className}
                    data={data}
                    disablePopover={disablePopover}
                    iconColor={iconColor}
                    iconSize={iconSize}
                    id={id}
                    inverse={inverse}
                    isMobile={isMobile}
                    parentConsumer={parentConsumer}
                    removeAcceptedChristColumn={removeAcceptedChristColumn}
                    removeBaptismColumn={removeBaptismColumn}
                    removeClassColumn={removeClassColumn}
                    removeCongregationDateColumn={removeCongregationDateColumn}
                    removeFirstContactDateColumn={removeFirstContactDateColumn}
                    removeInMinistryColumn={removeInMinistryColumn}
                    removeInTripsColumn={removeInTripsColumn}
                    removeSmallGroupColumn={removeSmallGroupColumn}
                />
            </div>

            <Grid spacing={2}>
                <Grid.Column
                    sm={12}
                >
                    <Card>
                        <Grid spacing={2}>
                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    backgroundTransparent
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={backgroundTransparent === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="backgroundTransparentRadioGroup"
                                                onChange={onBackgroundTransparentChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    className
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <Input
                                            onChange={onClassNameChange}
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.acceptedChristDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.acceptedChristDate ? moment(data.acceptedChristDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'acceptedChristDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.activeInMissionsDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.activeInMissionsDate ? moment(data.activeInMissionsDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'activeInMissionsDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.attendedClass101Date
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.attendedClass101Date ? moment(data.attendedClass101Date) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'attendedClass101Date',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.attendedClass201Date
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.attendedClass201Date ? moment(data.attendedClass201Date) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'attendedClass201Date',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.attendedClass301Date
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.attendedClass301Date ? moment(data.attendedClass301Date) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'attendedClass301Date',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.attendedClass401Date
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.attendedClass401Date ? moment(data.attendedClass401Date) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'attendedClass401Date',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.baptismDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.baptismDate ? moment(data.baptismDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'baptismDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.congregationDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.congregationDate ? moment(data.congregationDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'congregationDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.firstContactDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.firstContactDate ? moment(data.firstContactDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'firstContactDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.firstMinistryJoinDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.firstMinistryJoinDate ? moment(data.firstMinistryJoinDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'firstMinistryJoinDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.firstSmallGroupJoinDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.firstSmallGroupJoinDate ? moment(data.firstSmallGroupJoinDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'firstSmallGroupJoinDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.gender
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <Select
                                            clearable
                                            options={[
                                                {
                                                    label: 'Female',
                                                    value: 'm',
                                                },
                                                {
                                                    label: 'Male',
                                                    value: 'f',
                                                },
                                            ]}
                                            onChange={
                                                (value) => onDataChange(
                                                    'gender',
                                                    value,
                                                )
                                            }
                                            value={data.gender}
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.hasAcceptedChrist
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.hasAcceptedChrist === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="hasAcceptedChristRadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'hasAcceptedChrist',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.hasSignedMaturityCovenant
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.hasSignedMaturityCovenant === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="hasSignedMaturityCovenantRadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'hasSignedMaturityCovenant',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.hasSignedMembershipAgreement
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.hasSignedMembershipAgreement === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="hasSignedMembershipAgreementRadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'hasSignedMembershipAgreement',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.hasSignedMinistryCovenant
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.hasSignedMinistryCovenant === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="hasSignedMinistryCovenantRadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'hasSignedMinistryCovenant',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.hasSignedMissionCovenant
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.hasSignedMissionCovenant === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="hasSignedMissionCovenantRadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'hasSignedMissionCovenant',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.hasTakenClass101
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.hasTakenClass201 === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="hasTakenClass101RadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'hasTakenClass101',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.hasTakenClass201
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.hasTakenClass201 === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="hasTakenClass201RadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'hasTakenClass201',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.hasTakenClass301
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.hasTakenClass301 === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="hasTakenClass301RadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'hasTakenClass301',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.hasTakenClass401
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.hasTakenClass401 === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="hasTakenClass401RadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'hasTakenClass401',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.isActiveInMissions
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.isActiveInMissions === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="isActiveInMissionsRadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'isActiveInMissions',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.isBaptised
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.isBaptised === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="isBaptisedRadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'isBaptised',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.isInMinistry
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.isInMinistry === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="isInMinistryRadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'isInMinistry',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.isInSmallGroup
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={data.isInSmallGroup === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="isInSmallGroupRadioGroup"
                                                onChange={
                                                    () => onDataChange(
                                                        'isInSmallGroup',
                                                    )
                                                }
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.recordType
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <Select
                                            clearable
                                            options={[
                                                {
                                                    label: 'Adult',
                                                    value: 'adult',
                                                },
                                                {
                                                    label: 'Child',
                                                    value: 'child',
                                                },
                                                {
                                                    label: 'Student',
                                                    value: 'student',
                                                },
                                            ]}
                                            onChange={
                                                (value) => onDataChange(
                                                    'recordType',
                                                    value,
                                                )
                                            }
                                            value={data.recordType}
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.signedMaturityCovenantDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.signedMaturityCovenantDate ? moment(data.signedMaturityCovenantDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'signedMaturityCovenantDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.signedMembershipAgreementDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.signedMembershipAgreementDate ? moment(data.signedMembershipAgreementDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'signedMembershipAgreementDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.signedMinistryCovenantDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.signedMinistryCovenantDate ? moment(data.signedMinistryCovenantDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'signedMinistryCovenantDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    data.signedMissionCovenantDate
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <DatePickerInput
                                            date={data.signedMinistryCovenantDate ? moment(data.signedMinistryCovenantDate) : null}
                                            onChange={
                                                (value) => onDataChange(
                                                    'signedMinistryCovenantDate',
                                                    value,
                                                )
                                            }
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    disablePopover
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={disablePopover === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="disablePopoverRadioGroup"
                                                onChange={onDisablePopoverChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    iconColor
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <Input
                                            onChange={onIconColorChange}
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    iconSize
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <Input
                                            onChange={onIconSizeChange}
                                            type="number"
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    id
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <Input
                                            onChange={onIdChange}
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    inverse
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={inverse === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="inverseRadioGroup"
                                                onChange={onInverseChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    isMobile
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={isMobile === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="isMobileRadioGroup"
                                                onChange={onIsMobileChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    parentConsumer
                                </Typography>

                                <Grid>
                                    <Grid.Column>
                                        <Input
                                            onChange={onParentConsumerChange}
                                        />
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    removeAcceptedChristColumn
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={removeAcceptedChristColumn === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="removeAcceptedChristColumnRadioGroup"
                                                onChange={onRemoveAcceptedChristColumnChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    removeBaptismColumn
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={removeBaptismColumn === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="removeBaptismColumnRadioGroup"
                                                onChange={onRemoveBaptismColumnChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    removeClassColumn
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={removeClassColumn === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="removeClassColumnRadioGroup"
                                                onChange={onRemoveClassColumnChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    removeCongregationDateColumn
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={removeCongregationDateColumn === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="removeCongregationDateColumnRadioGroup"
                                                onChange={onRemoveCongregationDateColumnChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    removeFirstContactDateColumn
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={removeFirstContactDateColumn === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="removeFirstContactDateColumnRadioGroup"
                                                onChange={onRemoveFirstContactDateColumnChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    removeInMinistryColumn
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={removeInMinistryColumn === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="removeInMinistryColumnRadioGroup"
                                                onChange={onRemoveInMinistryColumnChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    removeInTripsColumn
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={removeInTripsColumn === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="removeInTripsColumnRadioGroup"
                                                onChange={onRemoveInTripsColumnChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>

                            <Grid.Column
                                sm={12}
                            >
                                <Typography
                                    gutterBottom
                                    variant="h5"
                                >
                                    removeSmallGroupColumn
                                </Typography>

                                <Grid>
                                    {map(booleanTypes, (type) => (
                                        <Grid.Column
                                            key={type.toString()}
                                            sm="auto"
                                        >
                                            <Radio
                                                checked={removeSmallGroupColumn === type}
                                                id={type.toString()}
                                                label={type.toString()}
                                                name="removeSmallGroupColumnRadioGroup"
                                                onChange={onRemoveSmallGroupColumnChange}
                                            />
                                        </Grid.Column>
                                    ))}
                                </Grid>
                            </Grid.Column>
                        </Grid>
                    </Card>
                </Grid.Column>
            </Grid>
        </React.Fragment>
    );
}

export default ExampleAdultMaleWhite;
