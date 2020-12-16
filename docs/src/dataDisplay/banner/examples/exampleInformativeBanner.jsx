import {
    Banner,
    Button,
    Typography,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleInformativeBanner() {
    const [isOpen, setBanner] = useState(false);

    function onBannerToggle() {
        setBanner(!isOpen);
    }

    return (
        <div>
            <Typography
                variant="h5"
            >
                Just so you know
            </Typography>
            <Button
                onClick={onBannerToggle}
                style={{
                    marginTop: '11px',
                }}
            >
                Informative Banner
            </Button>
            <Banner
                id="banner--block_id"
                isOpen={isOpen}
                levelIcon="info"
                message="Notification description is also optional"
                onClose={onBannerToggle}
                title="By the way"
            />
        </div>

    );
}

export default ExampleInformativeBanner;
