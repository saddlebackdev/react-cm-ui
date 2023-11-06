import {
    Grid,
    Icon,
    Radio,
    Typography,
} from '@saddlebackchurch/react-cm-ui'; // eslint-disable-line import/no-unresolved
import {
    camelCase,
    flatten,
    kebabCase,
    map,
    sortBy,
} from 'lodash';
import ClassNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import withStyles from '@saddlebackchurch/react-cm-ui/styles/withStyles'; // eslint-disable-line import/no-unresolved
import withWidth from '@saddlebackchurch/react-cm-ui/utils/withWidth'; // eslint-disable-line import/no-unresolved
import ComponentVersionIdentifier from '../../global/componentVersionIdentifier';
import Heading from '../../global/heading';
import Main from '../../global/main';
import MarkdownContainer from '../../global/markdownContainer';
/* eslint-disable import/no-named-default, import/extensions, import/no-unresolved */
import { default as rootDoc } from '!!@advclb/react-docgen-loader!@saddlebackchurch/react-cm-ui/dataDisplay/icon/icon';
/* eslint-enable import/no-named-default, import/extensions, import/no-unresolved */

const propTypes = {
    classes: PropTypes.shape({
        alphabeticalIconGrid: PropTypes.string,
        dropdownButton: PropTypes.string,
        iconGridColumn: PropTypes.string,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string,
    }).isRequired,
    width: PropTypes.string.isRequired,
};

const categorizedIconSet = [
    {
        category: 'Actions',
        types: [
            'action',
            'add',
            'back10',
            'delete',
            'download-1',
            'download-2',
            'duplicate',
            'edit-1',
            'edit-2',
            'edit-text',
            'forward10',
            'input',
            'pause',
            'refresh',
            'save',
            'scan',
            'scan-id',
            'start-or-run',
            'target',
            'transfer',
            'undo',
            'upload-1',
            'upload-2',
            'view',
        ],
    }, {
        category: 'App Features',
        types: [
            'connection-cards',
            'insights',
            'journey',
            'journey-candle',
            'journey-crib',
            'journey-crown',
            'journey-manger',
            'journey-star',
            'ministry',
            'person-record',
            'serving-opportunity',
            'task',
            'workflow',
        ],
    }, {
        category: 'Communication',
        types: [
            'alert',
            'attachment',
            'comment',
            'contact-info',
            'email',
            'mention',
            'newsletter',
            'note',
            'phone',
            'phone-cell',
            'phone-home',
            'phone-work',
            'receive',
            'recurring-alert',
            'reply',
            'send',
            'share',
            'sms',
            'snail-mail',
        ],
    }, {
        category: 'Data Components',
        types: [
            'button',
            'checkbox',
            'date-select',
            'multi-select',
            'numerical-select',
            'single-select',
            'slot',
            'slot-add',
            'slot-recurring',
            'text-field',
            'time-select',
            'toggle',
        ],
    }, {
        category: 'Data States',
        types: [
            'archive',
            'blank-or-null',
            'favorite',
            'filled-or-exists',
            'live',
            'locked',
            'not-selected',
            'off',
            'on',
            'selected',
            'unknown',
        ],
    }, {
        category: 'Data Types - Custom',
        types: [
            'category',
            'help',
            'info',
            'keywords',
            'link',
            'password',
            'playlist',
            'status',
        ],
    }, {
        category: 'Data Types - Date & Time',
        types: [
            'date',
            'date-range',
            'future',
            'history',
            'recurring',
            'time',
            'time-period',
            'wait',
        ],
    }, {
        category: 'Data Types - File',
        types: [
            'audio',
            'document',
            'image',
            'spreadsheet',
            'video',
        ],
    }, {
        category: 'Data Types - Person',
        types: [
            'birthday',
            'certified',
            'class',
            'class-101',
            'class-201',
            'class-301',
            'class-401',
            'class-taken',
            'discipleship',
            'doj-cleared',
            'fbi-cleared',
            'fingerprinted',
            'gender',
            'giving',
            'giving-saddleback',
            'leadership',
            'membership',
            'milestone',
            'occupation',
            'shape-abilities',
            'shape-experiences',
            'shape-heart',
            'shape-personality',
            'shape-spiritual-gifts',
        ],
    }, {
        category: 'Data Types - Text',
        types: [
            'alphabetical',
            'alpha-numeric',
            'numerical',
            'text',
        ],
    }, {
        category: 'Data Values',
        types: [
            'equal-to',
            'false',
            'equal-to-greater-than',
            'equal-to-lesser-than',
            'minus',
            'not-equal-to',
            'plus-circle',
            'true',
        ],
    }, {
        category: 'Interface',
        types: [
            'chevron-down',
            'chevron-left',
            'chevron-right',
            'chevron-up',
            'close',
            'stepper',
            'drag-and-drop-1',
            'expand',
            'external-link',
            'filters',
            'grid',
            'list',
            'menu',
            'navigate',
            'pin',
            'search',
            'select',
            'shrink',
            'sign-out',
            'sort',
            'unpin',
        ],
    }, {
        category: 'Miscellaneous',
        types: [
            'activity',
            'attendance',
            'baptism',
            'configuration-1',
            'configuration-2',
            'flag',
            'media',
            'one-time-serving-op',
            'placeholder',
            'pulpit',
            'recurring-serving-op',
            'restricted',
            'security',
            'settings',
            'steps',
            'subjects-and-objects',
            'success',
            'template',
            'ticket',
            'training',
            'urgent',
            'want-help',
        ],
    }, {
        category: 'People',
        types: [
            'baby',
            'child',
            'people',
            'person',
            'roster',
            'staff',
            'team',
            'user',
            'volunteer',
        ],
    }, {
        category: 'Places',
        types: [
            'building',
            'camp-summer',
            'camp-winter',
            'campus',
            'location',
            'venue',
        ],
    }, {
        category: 'Follow Ups',
        types: [
            'blocked',
            'open',
            'reassigned',
            'replied-successful',
            'replied-unsuccessful',
        ],
    },
    {
        category: 'Temporary Icons',
        types: [
            'file-alt',
            'file',
            'award',
            'marital-status',
        ],
    },
];

const sortByOptions = [
    {
        id: 'category',
        label: 'By Category',
    }, {
        id: 'alphabetical_asc',
        label: 'Alphabetical',
    },
];

const styles = ({ spacing }) => ({
    alphabeticalIconGrid: {
        marginTop: spacing(2),
    },
    iconGridColumn: {
        textAlign: 'center',
    },
    dropdownButton: {
        '&.ui.button.button_dropdown': {
            overflow: 'visible !important',
            width: '256px',
            '& .button-inner-container': {
                justifyContent: 'flex-start',
            },
            '& .dropdown_menu-opened': {
                width: '256px',
            },
        },
    },
});

class DocsIcon extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            sortSelectedOption: sortByOptions[0],
        };

        this.onSortAscendingClick = this.onSortAscendingClick.bind(this);
    }

    onSortAscendingClick(id) {
        this.setState({
            sortSelectedOption: sortByOptions.find((opt) => opt.id === id),
        });
    }

    render() {
        const {
            classes,
            location: {
                pathname,
            },
            width,
        } = this.props;

        const {
            description,
            displayName,
        } = rootDoc;

        const { sortSelectedOption } = this.state;
        const iconCompact = true;
        const iconSize = 'xlarge';
        const isAlphabeticalSort = sortSelectedOption.id === 'alphabetical_asc';

        let iconSetMarkup;

        if (isAlphabeticalSort) {
            const sortedFlatMapOfIconTypes = sortBy(
                flatten(
                    map(
                        categorizedIconSet,
                        (iconSet) => iconSet.types,
                    ),
                ),
            );

            iconSetMarkup = map(sortedFlatMapOfIconTypes, (iconType, index) => (
                <React.Fragment
                    key={index}
                >
                    {width === 'lg' && index % 5 === 0 ? (
                        <Grid.Column
                            lg={12}
                        />
                    ) : null}

                    <Grid.Column
                        classes={{
                            root: classes.iconGridColumn,
                        }}
                        lg
                        md={4}
                        sm={6}
                    >
                        <Icon compact={iconCompact} size={iconSize} type={iconType} />

                        <p className="icon-type-name">{iconType}</p>
                    </Grid.Column>
                </React.Fragment>
            ));
        } else {
            iconSetMarkup = map(categorizedIconSet, (iconSet, parentIndex) => (
                <React.Fragment key={parentIndex}>
                    <Grid.Column
                        sm={12}
                    >
                        <Heading
                            anchorLink={kebabCase(iconSet.category)}
                            variant="h2"
                        >
                            {iconSet.category}
                        </Heading>
                    </Grid.Column>

                    {map(iconSet.types, (type, childIndex) => (
                        <React.Fragment
                            key={childIndex}
                        >
                            {width === 'lg' && childIndex % 5 === 0 ? (
                                <Grid.Column
                                    lg={12}
                                />
                            ) : null}

                            <Grid.Column
                                classes={{
                                    root: classes.iconGridColumn,
                                }}
                                key={childIndex}
                                lg
                                md={4}
                                sm={6}
                            >
                                <Icon compact={iconCompact} size={iconSize} type={type} />

                                <p className="icon-type-name">{type}</p>
                            </Grid.Column>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            ));
        }

        const iconGridClassNames = ClassNames({
            [classes.alphabeticalIconGrid]: isAlphabeticalSort,
        });

        return (
            <Main page={camelCase(displayName)}>
                <Main.Content>
                    <MarkdownContainer>
                        <Typography
                            className="description"
                            variant="body1"
                        >
                            {description}
                        </Typography>

                        <Grid
                            spacing={2}
                        >
                            <Grid.Column
                                sm="auto"
                            >
                                <Radio
                                    checked={sortSelectedOption.id}
                                    onChange={this.onSortAscendingClick}
                                    pill
                                >
                                    {sortByOptions.map((option) => ((
                                        <Radio.Item
                                            id={option.id}
                                            key={option.id}
                                            label={option.label}
                                            tabIndex={0}
                                        />
                                    )))}
                                </Radio>
                            </Grid.Column>
                        </Grid>

                        <Grid
                            alignItems="flex-start"
                            className={iconGridClassNames}
                            justify="center"
                            spacing={2}
                        >
                            {iconSetMarkup}

                            <Grid.Column
                                sm={12}
                            >
                                <Heading
                                    anchorLink="older-icons"
                                    variant="h2"
                                >
                                    Older Icons
                                </Heading>
                            </Grid.Column>

                            <Grid.Column
                                classes={{
                                    root: classes.iconGridColumn,
                                }}
                                lg
                                md={4}
                                sm={6}
                            >
                                <Icon compact={iconCompact} size={iconSize} type="circle-filled" />
                                <p className="icon-type-name">circle-filled</p>
                            </Grid.Column>

                            <Grid.Column
                                classes={{
                                    root: classes.iconGridColumn,
                                }}
                                lg
                                md={4}
                                sm={6}
                            >
                                <Icon compact={iconCompact} size={iconSize} type="text-lines" />
                                <p className="icon-type-name">text-lines</p>
                            </Grid.Column>

                            <Grid.Column
                                classes={{
                                    root: classes.iconGridColumn,
                                }}
                                lg
                                md={4}
                                sm={6}
                            >
                                <Icon compact={iconCompact} size={iconSize} type="caret-up" />
                                <p className="icon-type-name">caret-up</p>
                            </Grid.Column>

                            <Grid.Column
                                classes={{
                                    root: classes.iconGridColumn,
                                }}
                                lg
                                md={4}
                                sm={6}
                            >
                                <Icon compact={iconCompact} size={iconSize} type="caret-right" />
                                <p className="icon-type-name">caret-right</p>
                            </Grid.Column>

                            {width === 'lg' ? (
                                <Grid.Column
                                    lg={12}
                                />
                            ) : null}

                            <Grid.Column
                                classes={{
                                    root: classes.iconGridColumn,
                                }}
                                lg
                                md={4}
                                sm={6}
                            >
                                <Icon compact={iconCompact} size={iconSize} type="caret-down" />
                                <p className="icon-type-name">caret-down</p>
                            </Grid.Column>

                            <Grid.Column
                                classes={{
                                    root: classes.iconGridColumn,
                                }}
                                lg
                                md={4}
                                sm={6}
                            >
                                <Icon compact={iconCompact} size={iconSize} type="caret-left" />
                                <p className="icon-type-name">caret-left</p>
                            </Grid.Column>

                            <Grid.Column
                                classes={{
                                    root: classes.iconGridColumn,
                                }}
                                lg
                                md={4}
                                sm={6}
                            >
                                <Icon compact={iconCompact} size={iconSize} type="arrows-alt" />
                                <p className="icon-type-name">arrows-alt</p>
                            </Grid.Column>

                            <Grid.Column
                                classes={{
                                    root: classes.iconGridColumn,
                                }}
                                lg
                                md={4}
                                sm={6}
                            >
                                <Icon compact={iconCompact} size={iconSize} type="spinner" />
                                <p className="icon-type-name">spinner</p>
                            </Grid.Column>
                        </Grid>
                    </MarkdownContainer>

                    <ComponentVersionIdentifier
                        pathname={pathname}
                    />
                </Main.Content>
            </Main>
        );
    }
}

DocsIcon.propTypes = propTypes;

export default withStyles(
    styles,
    {
        withTheme: true,
    },
)(withWidth()(DocsIcon));
