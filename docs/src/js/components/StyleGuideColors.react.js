'use strict';

import React from 'react';
import { Grid, Header, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Swatch from 'components/UI/Swatch.react';

export default class StyleGuideColors extends React.Component {

    render() {
        return (
            <main className="main">
                <TitleBar title="Colors" />

                {/* Primary Colors */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Primary Colors
                </Header>

                <Grid stackable={true}>
                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch border={true} color="#fff" name="white" />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch border={true} color="#f6f7f8" name="grey 1" />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#edf1f5" name="grey 2" />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch border={true} color="#dbe0e3" name="grey 3" />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#97a4ab" name="grey 4" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#38424d" name="grey 5" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#1c2530" name="grey 6" textInverse={true} />
                    </GridColumn>
                </Grid>

                {/* Secondary Colors */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Secondary Colors
                </Header>

                <Grid stackable={true}>
                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#134174" name="blue" textInverse={true} />
                        <Swatch color="#00254d" name="dark blue" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#00aeef" name="cyan" textInverse={true} />
                        <Swatch color="#1c93c4" name="dark cyan" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#6dcff6" name="sky" textInverse={true} />
                        <Swatch color="#4095b6" name="dark sky" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#56c4c4" name="teal" textInverse={true} />
                        <Swatch color="#329594" name="dark teal" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#54cd86" name="green" textInverse={true} />
                        <Swatch color="#398f5d" name="green cyan" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#f99e49" name="orange" textInverse={true} />
                        <Swatch color="#c96d20" name="dark orange" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#f27a4d" name="red orange" textInverse={true} />
                        <Swatch color="#d94710" name="dark red orange" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#ee4334" name="red" textInverse={true} />
                        <Swatch color="#c2241a" name="dark red" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#eb4ea1" name="pink" textInverse={true} />
                        <Swatch color="#c23680" name="dark pink" textInverse={true} />
                    </GridColumn>

                    <GridColumn width={12} tablet={4} laptop={3}>
                        <Swatch color="#c68ef6" name="purple" textInverse={true} />
                        <Swatch color="#9958d2" name="dark purple" textInverse={true} />
                    </GridColumn>
                </Grid>
            </main>
        );
    }

}
