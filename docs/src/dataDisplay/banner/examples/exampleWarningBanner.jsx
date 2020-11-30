import {
    Banner,
    Button,
    Typography,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleWarningBanner() {
    const [isOpen, setBanner] = useState(false);

    function onBannerToggle() {
        setBanner(!isOpen);
    }

    return (
        <div>
            <Typography
                variant="h5"
            >
                Heads up!
            </Typography>
            <Button
                onClick={onBannerToggle}
                style={{
                    marginTop: '11px',
                }}
            >
                Warning Banner
            </Button>
            <Banner
                id="banner--block_id"
                isOpen={isOpen}
                level="warning"
                levelIcon="urgent"
                message="Notification description is also optional"
                onClose={onBannerToggle}
                title="Warning"
                type="notification"
            />
        </div>

    );
}

export default ExampleWarningBanner;
