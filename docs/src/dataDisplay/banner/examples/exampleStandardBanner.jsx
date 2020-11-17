import {
    Banner,
    Button,
    Grid,
    Typography,
} from 'react-cm-ui';
import React, { useState } from 'react';

function ExampleStandardBanner() {
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

    const messageJSX = (
        <span>
            <p>Notification description is also optional</p>
            <Button
                color="active"
                inverse
                outline
            >
                Optional Button
            </Button>
        </span>
    );

    return (
        <Grid
            spacing={3}
        >
            <Grid.Column
                sm="3"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Auto dismisses on a timer
                        </Typography>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={onBannerNotification1Click}>Banner 1</Button>
                        <Banner
                            id="banner--block_id_1"
                            isOpen={isBannerNotification1Open}
                            message="Notification description is also optional"
                            onClose={onBannerNotification1Click}
                            title="Notification Title"
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column
                sm="3"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Dismissed by the user
                        </Typography>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={onBannerNotification2Click}>Banner 2</Button>
                        <Banner
                            id="banner--block_id_2"
                            isOpen={isBannerNotification2Open}
                            message="Notification description is also optional"
                            onClose={onBannerNotification2Click}
                            title="Notification Title"
                            type="notification"
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>
            <Grid.Column
                sm="3"
            >
                <Grid
                    direction="column"
                    spacing={2}
                >
                    <Grid.Column>
                        <Typography>
                            Option call to action
                        </Typography>
                    </Grid.Column>
                    <Grid.Column>
                        <Button onClick={onBannerNotification3Click}>Banner 3</Button>
                        <Banner
                            id="banner--block_id_3"
                            isOpen={isBannerNotification3Open}
                            message={messageJSX}
                            onClose={onBannerNotification3Click}
                            title="Notification Title"
                            type="notification"
                        />
                    </Grid.Column>
                </Grid>
            </Grid.Column>
        </Grid>
    );
}

export default ExampleStandardBanner;
