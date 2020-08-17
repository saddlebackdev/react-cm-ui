import React, {
    PureComponent,
} from 'react';
import {
    Card,
    Header,
    TitleBar,
    SectionalTabs,
} from 'react-cm-ui';
import Main from '../../global/main';
import { getExampleTabs } from './tabsConstants';

const items = getExampleTabs();

class TabsExample extends PureComponent {
    render() {
        return (
            <Main page="headers">
                <TitleBar title="Sectional Navigation" />
                <Card>
                    <Header size="large">Props</Header>
                </Card>
                <div className="basic__wrapper">
                    <div className="basic__tabs">
                        <SectionalTabs
                            showMore
                            transform={false}
                            // showInkBar={true}
                            items={items}
                            selectedTabKey={0}
                            unmountOnExit
                        />
                    </div>
                </div>
            </Main>
        );
    }
}

export default TabsExample;
