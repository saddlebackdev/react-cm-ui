import React, { useState } from 'react';
import {
    Banner,
    Button,
} from 'react-cm-ui';

function ExampleDefaultBanner() {
    const [isBannerNotification1Open, setBannerNotification1] = useState(false);
    const [isBannerNotification2Open, setBannerNotification2] = useState(false);
    const [isBannerNotification3Open, setBannerNotification3] = useState(false);

    function onBannerNotification1Click() {
        setBannerNotification1(!isBannerNotification1Open);
    }

    function onBannerNotification2Click() {
        setBannerNotification2(!isBannerNotification2Open);
    }

    function onBannerNotification3Click() {
        setBannerNotification3(!isBannerNotification3Open);
    }

    return (
        <div>
            <Button onClick={onBannerNotification1Click}>Banner Notification 1</Button>

            <Button onClick={onBannerNotification2Click}>Banner Notification 2</Button>

            <Button onClick={onBannerNotification3Click}>Banner Notification 3</Button>

            <Banner
                id={1}
                isOpen={isBannerNotification1Open}
                message="A short notification description"
                onClose={onBannerNotification1Click}
                title="Banner Notification 1"
                type="notification"
            />

            <Banner
                id={2}
                isOpen={isBannerNotification2Open}
                message="A short notification description"
                onClose={onBannerNotification2Click}
                title="Banner Notification 2"
                type="notification"
            />

            <Banner
                id={3}
                isOpen={isBannerNotification3Open}
                message="A short notification description"
                onClose={onBannerNotification3Click}
                title="Banner Notification 3"
                type="notification"
            />
        </div>
    );
}

export default ExampleDefaultBanner;
