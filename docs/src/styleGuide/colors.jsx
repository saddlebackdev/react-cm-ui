
import React from 'react';
import { Grid, Typography } from 'react-cm-ui';
import Swatch from '../global/swatch';

function StyleGuideColors() {
    return (
        <main className="main">
            {/* Primary Colors */}
            <Typography size="large" style={{ marginTop: '55px' }}>
                Primary Colors
            </Typography>

            <Grid
                spacing={2}
            >
                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch border color="#fff" name="white" />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch border color="#f6f7f8" name="grey 1" />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#edf1f5" name="grey 2" />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch border color="#dbe0e3" name="grey 3" />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#97a4ab" name="grey 4" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#38424d" name="grey 5" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#1c2530" name="grey 6" textInverse />
                </Grid.Column>
            </Grid>

            {/* Secondary Colors */}
            <Typography size="large" style={{ marginTop: '55px' }}>
                Secondary Colors
            </Typography>

            <Grid
                spacing={2}
            >
                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#134174" name="blue" textInverse />
                    <Swatch color="#00254d" name="dark blue" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#00aeef" name="cyan" textInverse />
                    <Swatch color="#1c93c4" name="dark cyan" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#6dcff6" name="sky" textInverse />
                    <Swatch color="#4095b6" name="dark sky" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#56c4c4" name="teal" textInverse />
                    <Swatch color="#329594" name="dark teal" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#54cd86" name="green" textInverse />
                    <Swatch color="#398f5d" name="green cyan" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#f99e49" name="orange" textInverse />
                    <Swatch color="#c96d20" name="dark orange" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#f27a4d" name="red orange" textInverse />
                    <Swatch color="#d94710" name="dark red orange" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#ee4334" name="red" textInverse />
                    <Swatch color="#c2241a" name="dark red" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#eb4ea1" name="pink" textInverse />
                    <Swatch color="#c23680" name="dark pink" textInverse />
                </Grid.Column>

                <Grid.Column
                    sm={12}
                    md={4}
                    lg={3}
                >
                    <Swatch color="#c68ef6" name="purple" textInverse />
                    <Swatch color="#9958d2" name="dark purple" textInverse />
                </Grid.Column>
            </Grid>
        </main>
    );
}

export default StyleGuideColors;
