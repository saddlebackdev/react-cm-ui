import {
    Banner,
    Button,
    Typography,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleAlertBanner() {
    const [isOpen, setBanner] = useState(false);

    function onBannerToggle() {
        setBanner(!isOpen);
    }

    return (
        <div>
            <Typography
                variant="h5"
            >
                Something Went Wrong
            </Typography>
            <Button
                onClick={onBannerToggle}
                style={{
                    marginTop: '11px',
                }}
            >
                Alert Banner
            </Button>
            <Banner
                id="banner--block_id"
                isOpen={isOpen}
                level="error"
                levelIcon="urgent"
                message="Notification description is also optional"
                onClose={onBannerToggle}
                title="Alert"
                type="notification"
            />
        </div>

    );
}

export default ExampleAlertBanner;
