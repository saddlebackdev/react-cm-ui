import {
    Banner,
    Button,
    Typography,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleConfirmingBanner() {
    const [isOpen, setBanner] = useState(false);

    function onBannerToggle() {
        setBanner(!isOpen);
    }

    return (
        <div>
            <Typography
                variant="h5"
            >
                Done and done
            </Typography>
            <Button
                onClick={onBannerToggle}
                style={{
                    marginTop: '11px',
                }}
            >
                Confirming Banner
            </Button>
            <Banner
                id="banner--block_id"
                isOpen={isOpen}
                level="success"
                levelIcon="check"
                message="Notification description is also optional"
                onClose={onBannerToggle}
                title="Notification Title"
            />
        </div>

    );
}

export default ExampleConfirmingBanner;
