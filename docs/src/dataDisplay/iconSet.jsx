import {
    DropdownButton,
    Grid,
    Header,
    Icon,
    TitleBar,
} from 'react-cm-ui';
import _ from 'lodash';
import React from 'react';
import IconSubNavigation from './iconSubNavigation';
import Main from '../global/main';

class ElementsIconSet extends React.PureComponent {
    constructor() {
        super();

        this.icons = [
            {
                category: 'Actions',
                types: [
                    'action',
                    'add',
                    'delete',
                    'download-1',
                    'download-2',
                    'duplicate',
                    'edit-1',
                    'edit-2',
                    'edit-text',
                    'input',
                    'refresh',
                    'save',
                    'scan',
                    'start-or-run',
                    'target',
                    'transfer',
                    'undo',
                    'upload-1',
                    'upload-2',
                ],
            }, {
                category: 'App Features',
                types: [
                    'connection-cards',
                    'ministry',
                    'person-record',
                    'serving-opportunity',
                    'task',
                    'workflow',
                ],
            }, {
                category: 'Communication',
                types: [
                    'at',
                    'bell',
                    'bell-recurring',
                    'comment',
                    'comment-lines',
                    'envelope',
                    'file-alt',
                    'inbox-in',
                    'newspaper',
                    'paperclip',
                    'paper-plane',
                    'phone',
                    'phone-cell',
                    'phone-home',
                    'phone-work',
                    'reply',
                    'snail-mail',
                ],
            }, {
                category: 'Data Elements',
                types: [
                    'element-calendar',
                    'element-checkbox',
                    'element-button',
                    'element-input',
                    'element-input-number',
                    'element-select',
                    'element-select-multi',
                    'element-time',
                    'element-toggle',
                ],
            }, {
                category: 'Data States',
                types: [
                    'archive',
                    'broadcast',
                    'check-square',
                    'lock',
                    'power-square',
                    'power-off-square',
                    'question',
                    'square-filled-partial',
                    'square-outline',
                    'star',
                    'times-square',
                ],
            }, {
                category: 'Data Types Custom',
                types: [
                    'info',
                    'link',
                    'list-category',
                    'question-circle',
                    'quotation',
                    'status',
                ],
            }, {
                category: 'Data Types Date & Time',
                types: [
                    'calendar',
                    'calendar-range',
                    'clock-period',
                    'hourglass',
                    'recurring',
                    'time',
                    'time-future',
                    'time-history',
                ],
            }, {
                category: 'Data Types File',
                types: [
                    'file',
                    'image',
                    'video-reel',
                    'volume',
                ],
            }, {
                category: 'Data Types Person',
                types: [
                    'award',
                    'birthday-cake',
                    'book-open',
                    'briefcase',
                    'briefcase-membership',
                    'gender',
                    'gift',
                    'heart',
                    'marital-status',
                    'notebook',
                    'preferred-service',
                    'shoe-prints',
                    'user',
                ],
            }, {
                category: 'Data Types Text',
                types: [
                    'sort-alpha',
                    'sort-alpha-numeric',
                    'sort-numeric',
                    'text',
                ],
            }, {
                category: 'Data Values',
                types: [
                    'check-circle',
                    'equal-circle',
                    'greater-than-equal-circle',
                    'less-than-equal-circle',
                    'minus-circle',
                    'not-equal-circle',
                    'plus-circle',
                    'times-circle',
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
                    'address-book',
                    'briefcase-user',
                    'child',
                    'hand-stop',
                    'user',
                    'user-circle',
                    'users',
                    'users-circle',
                ],
            }, {
                category: 'Places',
                types: [
                    'building',
                    'church',
                    'map-marker',
                    'venue',
                ],
            }, {
                category: 'Workflow',
                types: [
                    'blocked',
                    'circle',
                    'reassign',
                ],
            },
        ];
        this.sortByOptions = [
            {
                id: 'category',
                label: 'Category',
            }, {
                id: 'alphabetical_asc',
                label: 'Alphabetical (asc)',
            },
        ];

        this.state = {
            sortSelectedOption: this.sortByOptions[0],
        };

        this.onSortAscendingClick = this.onSortAscendingClick.bind(this);
    }

    onSortAscendingClick(event, id, label) {
        this.setState({
            sortSelectedOption: {
                id,
                label,
            },
        });
    }

    render() {
        const { sortSelectedOption } = this.state;
        const iconCompact = true;
        const iconSize = 'xlarge';
        let renderCategories;

        if (sortSelectedOption.id === 'alphabetical_asc') {
            renderCategories = _.chain(this.icons)
                .map((iconSet) => iconSet.types)
                .flatten()
                .sortBy()
                .map((iconType, index) => (
                    <Grid.Column key={index} laptop={3} mobileLarge={4} width={6}>
                        <Icon compact={iconCompact} size={iconSize} type={iconType} />

                        <p className="icon-type-name">{iconType}</p>
                    </Grid.Column>
                ))
                .value();
        } else {
            renderCategories = _.map(this.icons, (iconSet, parentIndex) => (
                <React.Fragment key={parentIndex}>
                    <Grid.Row>
                        <Grid.Column textAlign="left" width={12}>
                            <Header size="large" style={{ margin: '0 0 22px' }}>
                                {iconSet.category}
                            </Header>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        {_.map(iconSet.types, (type, childIndex) => (
                            <Grid.Column key={childIndex} laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type={type} />
                                <p className="icon-type-name">{type}</p>
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                </React.Fragment>
            ));
        }

        return (
            <Main page="headers">
                <TitleBar title="Icon" />

                <IconSubNavigation />

                <Main.Content>
                    <Grid columns={1} style={{ marginBottom: '22px' }}>
                        <Grid.Column style={{ textAlign: 'right' }}>
                            <DropdownButton
                                style={{ margin: 0 }}
                                label={`Sort by: ${sortSelectedOption.label}`}
                            >
                                {_.map(this.sortByOptions, (option) => (
                                    <DropdownButton.Option
                                        key={option.id}
                                        id={option.id}
                                        label={option.label}
                                        onClick={this.onSortAscendingClick}
                                    />
                                ))}
                            </DropdownButton>
                        </Grid.Column>
                    </Grid>

                    <Grid textAlign="center">
                        {renderCategories}

                        <Grid.Row>
                            <Grid.Column textAlign="left" width={12}>
                                <Header size="large" style={{ margin: '0 0 22px' }}>
                                    Older Icons
                                </Header>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="circle-filled" />
                                <p className="icon-type-name">circle-filled</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="text-lines" />
                                <p className="icon-type-name">text-lines</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="caret-up" />
                                <p className="icon-type-name">caret-up</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="caret-right" />
                                <p className="icon-type-name">caret-right</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="caret-down" />
                                <p className="icon-type-name">caret-down</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="caret-left" />
                                <p className="icon-type-name">caret-left</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="arrows-alt" />
                                <p className="icon-type-name">arrows-alt</p>
                            </Grid.Column>

                            <Grid.Column laptop={3} mobileLarge={4} width={6}>
                                <Icon compact={iconCompact} size={iconSize} type="spinner" />
                                <p className="icon-type-name">spinner</p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Main.Content>
            </Main>
        );
    }
}

export default ElementsIconSet;
