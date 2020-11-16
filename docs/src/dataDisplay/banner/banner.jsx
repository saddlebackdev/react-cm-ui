import {
    Banner,
    Button,
    Card,
    Typography,
} from 'react-cm-ui';
import React from 'react';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import Main from '../../global/main';
import TableProps from '../../global/tableProps';

const bannerSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class BannerSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isBannerNotification1Open: false,
            isBannerNotification2Open: false,
            isBannerNotification3Open: false,
        };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onBannerNotification1Click.bind(this)}>Banner Notification 1</Button>

                <Button onClick={this._onBannerNotification2Click.bind(this)}>Banner Notification 2</Button>

                <Button onClick={this._onBannerNotification3Click.bind(this)}>Banner Notification 3</Button>

                <Banner
                    id={1}
                    isOpen={this.state.isBannerNotification1Open}
                    message="A short notification description"
                    onClose={this._onBannerNotification1Click.bind(this)}
                    title="Banner Notification 1"
                    type="notification"
                />

                <Banner
                    id={2}
                    isOpen={this.state.isBannerNotification2Open}
                    message="A short notification description"
                    onClose={this._onBannerNotification2Click.bind(this)}
                    title="Banner Notification 2"
                    type="notification"
                />

                <Banner
                    id={3}
                    isOpen={this.state.isBannerNotification3Open}
                    message="A short notification description"
                    onClose={this._onBannerNotification3Click.bind(this)}
                    title="Banner Notification 3"
                    type="notification"
                />
            </div>
        );
    }

    _onBannerNotification1Click() {
        this.setState({ isBannerNotification1Open: !this.state.isBannerNotification1Open });
    }

    _onBannerNotification2Click() {
        this.setState({ isBannerNotification2Open: !this.state.isBannerNotification2Open });
    }

    _onBannerNotification3Click() {
        this.setState({ isBannerNotification3Open: !this.state.isBannerNotification3Open });
    }

}`;

const onAfterCloseSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class OnAfterCloseSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = { acData: [] };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onAcBannerClick.bind(this, 0)}>AC Banner 1</Button>
                <Button onClick={this._onAcBannerClick.bind(this, 1)}>AC Banner 2</Button>
                <Button onClick={this._onAcBannerClick.bind(this, 2)}>AC Banner 3</Button>
                <Button onClick={this._onAcBannerClick.bind(this, 3)}>AC Banner 4</Button>

                {this._renderBanners()}
            </div>
        );
    }

    _onAfterClose(id) {
        let acData = this.state.acData;

        _.remove(this.state.acData, d => d.id === id);

        this.setState({ acData: acData });
    }

    _onAcBannerClick(id) {
        let acData = this.state.acData;
        let newAcData = _.find(acData, d => d.id === id);

        if (_.isObject(newAcData)) {
            newAcData.isOpen = !newAcData.isOpen;
        } else {
            newAcData = {
                id: id,
                isOpen: true,
                message: 'A short notification description',
                title: {'RFS Banner ' + id + 1},
                type: 'notification'
            };
            acData.push(newAcData);
        }

        this.setState({ acData: acData });
    }

    _renderBanners() {
        return _.map(this.state.acData, d => {
            return (
                <Banner
                    id={d.id}
                    isOpen={d.isOpen}
                    key={'banner-key-' + d.id}
                    message={d.message}
                    onAfterClose={this._onAfterClose.bind(this)}
                    onClose={this._onAcBannerClick.bind(this, d.id)}
                    title={d.title}
                    type={d.type}
                />
            );
        })
    }

}`;

const typeSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isBannerTypeNotificationOpen: false,
            isBannerTypeAlertOpen: false,
        };
    }

    render() {
        return (
            <div>
                <Button onClick={this._onBannerTypeNotificationClick.bind(this)}>Notification Banner</Button>

                <Button onClick={this._onBannerTypeAlertClick.bind(this)}>Alert Banner</Button>

                <Banner
                    id="type-1"
                    level="success"
                    isOpen={this.state.isBannerTypeNotificationOpen}
                    message="A short notification description"
                    onClose={this._onBannerTypeNotificationClick.bind(this)}
                    title="Notification Banner"
                    type="notification"
                />

                <Banner
                    id="type-2"
                    level="error"
                    isOpen={this.state.isBannerTypeAlertOpen}
                    message="A short alert description"
                    onClose={this._onBannerTypeAlertClick.bind(this)}
                    title="Alert Banner"
                    type="alert"
                />
            </div>
        );
    }

    _onBannerTypeNotificationClick() {
        this.setState({ isBannerTypeNotificationOpen: !this.state.isBannerTypeNotificationOpen });
    }

    _onBannerTypeAlertClick() {
        this.setState({ isBannerTypeAlertOpen: !this.state.isBannerTypeAlertOpen });
    }

}`;

export default class ViewsBanner extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isBannerNotification1Open: false,
            isBannerNotification2Open: false,
            isBannerNotification3Open: false,
            isBannerTypeNotificationOpen: false,
            isBannerTypeAlertOpen: false,
            acData: [],
        };
    }

    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'id',
                type: 'number || string',
                default: '',
                description: 'Required: Provide an id.',
                allowedTypes: '',
            }, {
                name: 'isOpen',
                type: 'bool',
                default: '',
                description: 'Required: A boolean that is supplied the Banner for the animation.',
                allowedTypes: '',
            }, {
                name: 'level',
                type: 'enum',
                default: '',
                description: 'A Banner\'s level.',
                allowedTypes: 'error, secondary, success, warning',
            }, {
                name: 'levelIcon',
                type: 'string',
                default: '',
                description: 'A Banner\'s type of level icon.',
                allowedTypes: '',
            }, {
                name: 'message',
                type: 'string',
                default: '',
                description: 'A Drawer\'s message.',
                allowedTypes: '',
            }, {
                name: 'onAfterClose',
                type: 'func',
                default: '',
                description: 'Called after the Banner\'s close animation.',
                allowedTypes: '',
            }, {
                name: 'onClose',
                type: 'func',
                default: '',
                description: 'Required: Handler for closing the Banner.',
                allowedTypes: '',
            }, {
                name: 'onOpen',
                type: 'func',
                default: '',
                description: 'Called before the Banner\'s animation.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Banner\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'title',
                type: 'string',
                default: '',
                description: 'A Banner\'s title.',
                allowedTypes: '',
            }, {
                name: 'topPosition',
                type: 'number',
                default: '',
                description: 'Changes the Banner\'s top position relative to the top of the viewport.',
                allowedTypes: '',
            }, {
                name: 'type',
                type: 'enum',
                default: '',
                description: 'Supply any inline styles to the Banner\'s container. Mainly used for padding and margins.',
                allowedTypes: 'alert, notification',
            },
        ];

        return (
            <Main page="headers">
                <Main.Content>
                    <Card>
                        <Typography size="large">Props</Typography>

                        <TableProps props={props} />
                    </Card>

                    {/* Banner */}
                    <Heading variant="h2">
                        Banner
                    </Heading>

                    <Typography variant="body1">
                        A standard Banner.
                    </Typography>

                    <Button onClick={this._onBannerNotification1Click.bind(this)}>Banner Notification 1</Button>

                    <Button onClick={this._onBannerNotification2Click.bind(this)}>Banner Notification 2</Button>

                    <Button onClick={this._onBannerNotification3Click.bind(this)}>Banner Notification 3</Button>

                    <Banner
                        id={1}
                        isOpen={this.state.isBannerNotification1Open}
                        message="A short notification description"
                        onClose={this._onBannerNotification1Click.bind(this)}
                        title="Banner Notification 1"
                        type="notification"
                    />

                    <Banner
                        id={2}
                        isOpen={this.state.isBannerNotification2Open}
                        message="A short notification description"
                        onClose={this._onBannerNotification2Click.bind(this)}
                        title="Banner Notification 2"
                        type="notification"
                    />

                    <Banner
                        id={3}
                        isOpen={this.state.isBannerNotification3Open}
                        message="A short notification description"
                        onClose={this._onBannerNotification3Click.bind(this)}
                        title="Banner Notification 3"
                        type="notification"
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {bannerSample}
                    </Highlighter>

                    {/* On After Close */}
                    <Heading variant="h2">
                        On After Close
                    </Heading>

                    <Typography variant="body1">
                        After a Banner's close animation handler.
                    </Typography>

                    <Button onClick={this._onAcBannerClick.bind(this, 0)}>AC Banner 1</Button>
                    <Button onClick={this._onAcBannerClick.bind(this, 1)}>AC Banner 2</Button>
                    <Button onClick={this._onAcBannerClick.bind(this, 2)}>AC Banner 3</Button>
                    <Button onClick={this._onAcBannerClick.bind(this, 3)}>AC Banner 4</Button>

                    {this._renderBanners()}

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {onAfterCloseSample}
                    </Highlighter>

                    {/* Type */}
                    <Heading variant="h2">
                        Type
                    </Heading>

                    <Typography variant="body1">
                        Banner's have two different types of UX. A notification notifies an end-user something has happened during their workflow. An alert gives the end-user context that they'll need to interact with the workflow to proceed.
                    </Typography>

                    <Button onClick={this._onBannerTypeNotificationClick.bind(this)}>Notification Banner</Button>

                    <Button onClick={this._onBannerTypeAlertClick.bind(this)}>Alert Banner</Button>

                    <Banner
                        id="type-1"
                        level="success"
                        isOpen={this.state.isBannerTypeNotificationOpen}
                        message="A short notification description"
                        onClose={this._onBannerTypeNotificationClick.bind(this)}
                        title="Notification Banner"
                        type="notification"
                    />

                    <Banner
                        id="type-2"
                        level="error"
                        isOpen={this.state.isBannerTypeAlertOpen}
                        message="A short alert description"
                        onClose={this._onBannerTypeAlertClick.bind(this)}
                        title="Alert Banner"
                        type="alert"
                    />

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {typeSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }

    _onAfterClose(id) {
        const { acData } = this.state;

        _.remove(this.state.acData, (d) => d.id === id);

        this.setState({ acData });
    }

    _onAcBannerClick(id) {
        const { acData } = this.state;
        let newAcData = _.find(acData, (d) => d.id === id);

        if (_.isObject(newAcData)) {
            newAcData.isOpen = !newAcData.isOpen;
        } else {
            newAcData = {
                id,
                isOpen: true,
                message: 'A short notification description',
                title: `AC Banner ${id + 1}`,
                type: 'notification',
            };
            acData.push(newAcData);
        }

        this.setState({ acData });
    }

    _onBannerNotification1Click() {
        this.setState({ isBannerNotification1Open: !this.state.isBannerNotification1Open });
    }

    _onBannerNotification2Click() {
        this.setState({ isBannerNotification2Open: !this.state.isBannerNotification2Open });
    }

    _onBannerNotification3Click() {
        this.setState({ isBannerNotification3Open: !this.state.isBannerNotification3Open });
    }

    _onBannerTypeNotificationClick() {
        this.setState({ isBannerTypeNotificationOpen: !this.state.isBannerTypeNotificationOpen });
    }

    _onBannerTypeAlertClick() {
        this.setState({ isBannerTypeAlertOpen: !this.state.isBannerTypeAlertOpen });
    }

    _renderBanners() {
        return _.map(this.state.acData, (d) => (
            <Banner
                id={d.id}
                isOpen={d.isOpen}
                key={`banner-key-${d.id}`}
                message={d.message}
                onAfterClose={this._onAfterClose.bind(this)}
                onClose={this._onAcBannerClick.bind(this, d.id)}
                title={d.title}
                type={d.type}
            />
        ));
    }
}
