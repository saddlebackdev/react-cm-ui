import { Button, Card, Header, TitleBar } from 'react-cm-ui';
import Highlighter from '../app/highlighter.js';
import Main from '../app/main.js';
import PageSubNavigation from './pageSubNavigation.js';
import React from 'react';
import TableProps from '../app/tableProps.js';

const drawerSample = `import { Page } from 'react-cm-ui';
import React from 'react';

class DrawerSample extends React.PureComponent {
    render() {
        return (
            <Page>
                // code here.
            </Page>
        );
    }
}

export default DrawerSample;`;

const classNameSample = `import { Page } from 'react-cm-ui';
import React from 'react';

class ClassNameSample extends React.PureComponent {
    render() {
        return (
            <Page className="foo_block_name">
                // code here.
            </Page>
        );
    }
}

export default ClassNameSample;`;

const idSample = `import { Page } from 'react-cm-ui';
import React from 'react';

class IDSample extends React.PureComponent {
    render() {
        return (
            <Page id="foo_block_name">
                // code here.
            </Page>
        );
    }
}

export default IDSample;`;

const isDataFetchingSample = `import { connect } from 'redux';
import { Page } from 'react-cm-ui';
import React from 'react';

class IsDataFetchingSample extends React.PureComponent {
    render() {
        const { isFetching } = this.state;

        return (
            <Page isDataFetching={isFetching}>
                // children here won't show until isFetching is false.
            </Page>
        );
    }
}

const mapStateToProps = state => {
    const {
        foo: { isFetching },
    } = state;

    return {
        isFetching,
    };
};

export default connect(mapStateToProps)(IsDataFetchingSample);`;

const styleSample = `import { Page } from 'react-cm-ui';
import React from 'react';

class StyleSample extends React.PureComponent {
    render() {
        const { isFetching } = this.state;

        return (
            <Page
                style={{
                    margin: '22px', // hopefully you never need to do this! But here it is. :)
                }}
            >
                // code here.
            </Page>
        );
    }
}

export default StyleSample;`;

class ModulesPage extends React.Component {
    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Assign additional class names to the container.',
                allowedTypes: '',
            }, {
                name: 'id',
                type: 'string',
                default: '',
                description: 'Assign an ID to the container.',
                allowedTypes: '',
            }, {
                name: 'isDataFetching',
                type: 'bool',
                default: 'false',
                description: 'Show an Activity Indicator before showing its children.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '{}',
                description: 'Assign inline styles the container.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <TitleBar title="Page" />

                <PageSubNavigation />

                <div>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card><br /><br />

                    <Button href={`${window.location.pathname}/demo`} target="_blank">Demo Page</Button>

                    {/* Page */}
                    <Header anchor="page" size="large" style={{ marginTop: '55px' }} sub>
                        Page
                        <Header.Subheader>
                            <span>
                                <p style={{ marginTop: 0 }}>
                                    This is a template component, meaning it facilitates in styling a basic page,
                                    excluding the side navigation and TitleBar, by using its sub components.
                                </p>

                                <p>
                                    It can also wrap other atoms, molecules, and organisms that are non Page sub
                                    components to build up a page. But by using these types of components, Page may not
                                    neccearily know how to apply logic and styling to them.
                                </p>
                            </span>
                        </Header.Subheader>
                    </Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {drawerSample}
                    </Highlighter>

                    {/* className */}
                    <Header anchor="className" size="large" style={{ marginTop: '55px' }} sub>
                        className
                        <Header.Subheader>
                            <p style={{ marginTop: 0 }}>
                                Use the <code>className</code> prop to pass a block class name to Page. This needs to
                                be unique and always implemented.
                            </p>
                        </Header.Subheader>
                    </Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {classNameSample}
                    </Highlighter>

                    {/* id */}
                    <Header anchor="className" size="large" style={{ marginTop: '55px' }} sub>
                        id
                        <Header.Subheader>
                            <p style={{ marginTop: 0 }}>
                                Use the <code>id</code> prop to pass a block id name to Page. Because our QA automation
                                looks for these, this needs to be unique and always implemented.
                            </p>
                        </Header.Subheader>
                    </Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {idSample}
                    </Highlighter>

                    {/* isDataFetching */}
                    <Header anchor="isDataFetching" size="large" style={{ marginTop: '55px' }} sub>
                        isDataFetching
                        <Header.Subheader>
                            <p style={{ marginTop: 0 }}>
                                While loading or synchronizing data is being performed don't show Page's children. Use <code>isFetching</code> from
                                Redux state to pass a boolean into Page's <code>isDataFetching</code> prop.
                            </p>

                            <p>
                                Children won't animate in. This is to be handled, for right now, case-by-case. The
                                Activity Indicator will fade in upon mount and out upon <code>isDataFetching</code> being
                                toggled to <code>false</code>.
                            </p>
                        </Header.Subheader>
                    </Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {isDataFetchingSample}
                    </Highlighter>

                    {/* style */}
                    <Header anchor="style" size="large" style={{ marginTop: '55px' }} sub>
                        style
                        <Header.Subheader>
                            <p style={{ marginTop: 0 }}>
                                Use the <code>style</code> prop to pass some inline styles to the container. Only to be used
                                when needed based on its relavant location within the app.
                            </p>
                        </Header.Subheader>
                    </Header>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {styleSample}
                    </Highlighter>
                </div>
            </Main>
        );
    }
}

export default ModulesPage;
