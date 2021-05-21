import './home.scss';

import {
    Button,
    Card,
    Grid,
    Header,
} from 'react-cm-ui';
import PropTypes from 'prop-types';
import React from 'react';
import Highlighter from '../global/highlighter';
import Main from '../global/main';

const propTypes = {
    router: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }).isRequired,
};

const INSTALLATION_EXAMPLE = '$ npm install react-cm-ui';
const USAGE_EXAMPLE = `import { Button, Card } from 'react-cm-ui';
import React from 'react';

function Example() {
    return (
        <Card>
            <Button>
                Hello World
            </Button>
        </Card>
    );
}

export default Example;`;

class Home extends React.PureComponent {
    constructor(props) {
        super(props);

        this.onGetStartedClick = this.onGetStartedClick.bind(this);
    }

    onGetStartedClick() {
        const { router } = this.props;

        router.push('/getting-started/installation');
    }

    render() {
        const bemBlockClassName = 'home';

        return (
            <Main className={bemBlockClassName}>
                <div className={`${bemBlockClassName}--hero`}>
                    <div className={`${bemBlockClassName}--logo`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 107 108" version="1.1">
                            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                <g transform="translate(-427.000000, -175.000000)" fill="#FFFFFF">
                                    <g transform="translate(331.000000, 131.000000)">
                                        <path d="M157.5 54C159.6 53.9 157.2 59.3 156 59.4 154.3 59.7 150.1 62.4 148.9 65.4 148.1 67.4 149.4 70 149.8 71.2 156.4 67.5 164.7 64.7 170.4 64.2 170.4 64.2 170.3 64 170.2 63.8 163.9 56 158.4 51.2 148.2 44 134.9 53.3 129.6 58.6 120.3 71.9 121.6 73.7 122.8 75.4 123.9 77 144.8 68.6 147.5 54.1 157.5 54ZM142.4 88.8C149.9 85.9 150.1 81.3 148.5 75.6 139.3 81.3 134.2 91.9 142.4 88.8ZM132.3 86.8C134.6 82.2 139 78.5 141.4 76.7 142.7 75.6 145.7 73.5 147.6 72.4 147 70.5 146.6 68.9 146.3 67.1 141.6 71.3 135.4 76.2 127.1 81 128.6 82.9 130.8 85.4 132.3 86.8ZM179.8 66.3C176 65 163.3 65.9 151.1 73.7 155.9 81.3 156.4 85.5 153.3 88.9 150.6 91.7 145.4 93 140.2 93.3 136.7 93.6 132.6 92.1 131.7 89.3 132 90.8 133 92.4 134.8 93.5 136.4 94.5 138.4 94.9 141.2 94.7 143.3 96.3 145.6 98 148.2 99.8 161.5 90.5 166.8 85.2 176.1 71.9 175 70.3 173.7 68.5 172.6 67.1 174.6 66.4 177.1 66.3 179.8 66.3ZM98.9 121.4L98.9 123.6C98.9 124.2 98.9 125 100.2 125 101.5 125 101.7 124.4 101.7 123.1L101.7 122.6C101.7 121.5 101.3 121.1 100.7 120.6L98 118.8C97.1 118.2 96.1 117.4 96.1 115.1L96.1 114.8C96.1 112.1 97.7 111 100.3 111 102.3 111 104.3 111.9 104.3 114.4L104.3 115.9 101.5 115.9 101.5 114.5C101.5 113.8 101.3 113.2 100.2 113.2 99.4 113.2 98.9 113.5 98.9 114.9 98.9 115.6 98.9 116.1 99.8 116.8L102.6 118.7C103.8 119.4 104.5 120.5 104.5 121.9L104.5 123.4C104.5 125.5 103.8 127.3 100.3 127.3 98.3 127.3 96 126.6 96 123.7L96 121.4 98.9 121.4ZM111.3 115.3L110.3 122 112.2 122 111.3 115.3ZM112.9 126.9L112.6 124.4 109.9 124.4 109.5 126.9 106.6 126.9 109.6 111.3 112.9 111.3 115.8 126.9 112.9 126.9ZM121.2 124.7L122.3 124.7C123.6 124.7 124 124.2 124 123L124 115.2C124 114 123.6 113.6 122.5 113.6L121.2 113.6 121.2 124.7ZM123.4 111.3C125.5 111.3 126.8 112.7 126.8 115.1L126.8 122.9C126.8 126.1 125.3 126.9 122.9 126.9L118.3 126.9 118.3 111.3 123.4 111.3ZM132.6 124.7L133.8 124.7C135.1 124.7 135.5 124.2 135.5 123L135.5 115.2C135.5 114 135.1 113.6 133.9 113.6L132.6 113.6 132.6 124.7ZM134.8 111.3C137 111.3 138.3 112.7 138.3 115.1L138.3 122.9C138.3 126.1 136.8 126.9 134.4 126.9L129.8 126.9 129.8 111.3 134.8 111.3ZM140.9 126.9L140.9 111.3 143.8 111.3 143.8 124.6 148 124.6 148 126.9 140.9 126.9ZM150.3 126.9L150.3 111.3 157.8 111.3 157.8 113.7 153.2 113.7 153.2 117.4 157.6 117.4 157.6 119.7 153.2 119.7 153.2 124.5 158 124.5 158 126.9 150.3 126.9ZM163.8 124.7L165 124.7C166 124.7 166.6 124.6 166.6 123.1L166.6 121.3C166.6 120.1 166.3 119.7 165.1 119.7L163.8 119.7 163.8 124.7ZM163.8 117.5L164.9 117.5C165.9 117.5 166.4 117.4 166.4 116.1L166.4 114.9C166.4 113.8 165.9 113.6 164.9 113.6L163.8 113.6 163.8 117.5ZM166 111.3C168.2 111.3 169.2 112.2 169.2 114.5L169.2 115.9C169.2 117.5 168.8 118.3 167.4 118.5 169.2 118.9 169.4 119.7 169.4 121.4L169.4 123.6C169.4 126.1 168.5 126.9 165.9 126.9L160.9 126.9 160.9 111.3 166 111.3ZM176 115.3L175 122 177 122 176 115.3ZM177.7 126.9L177.3 124.4 174.7 124.4 174.2 126.9 171.4 126.9 174.4 111.3 177.7 111.3 180.6 126.9 177.7 126.9ZM190.7 121.1L190.7 123.7C190.7 125.7 189.6 127.3 186.5 127.3 185.3 127.3 182.2 127.1 182.2 124L182.2 114.8C182.2 112.3 183.5 111 186.6 111 189 111 190.7 112 190.7 114.1L190.7 117 187.9 117 187.9 115C187.9 113.8 187.7 113.2 186.4 113.2 185.3 113.2 185.1 113.9 185.1 114.9L185.1 123.3C185.1 124.3 185.3 125 186.5 125 187.8 125 187.9 124.3 187.9 123.1L187.9 121.1 190.7 121.1ZM199.1 126.9L196.1 119.3 196.1 126.9 193.2 126.9 193.2 111.3 196.1 111.3 196.1 117.4 199.2 111.3 202.1 111.3 198.6 118.1 202.2 126.9 199.1 126.9ZM124.9 145.8L124.9 148.4C124.9 150.5 123.8 152 120.6 152 119.5 152 116.4 151.8 116.4 148.7L116.4 139.5C116.4 137.1 117.6 135.7 120.7 135.7 123.2 135.7 124.9 136.7 124.9 138.8L124.9 141.7 122 141.7 122 139.8C122 138.6 121.8 137.9 120.6 137.9 119.5 137.9 119.3 138.6 119.3 139.6L119.3 148C119.3 149 119.5 149.8 120.7 149.8 121.9 149.8 122 149 122 147.8L122 145.8 124.9 145.8ZM133.1 151.7L133.1 144.5 130.4 144.5 130.4 151.7 127.6 151.7 127.6 136.1 130.4 136.1 130.4 142.2 133.1 142.2 133.1 136.1 135.9 136.1 135.9 151.7 133.1 151.7ZM141.7 136.1L141.7 147.7C141.7 148.7 141.8 149.5 143.1 149.5 144.4 149.5 144.4 148.6 144.4 147.6L144.4 136.1 147.3 136.1 147.3 148.2C147.3 152 144 152 143 152 140.3 152 138.9 150.7 138.9 148.1L138.9 136.1 141.7 136.1ZM152.8 142.6L154.3 142.6C155.3 142.6 155.6 142.2 155.6 141.1L155.6 139.6C155.6 138.5 155.2 138.3 154.4 138.3L152.8 138.3 152.8 142.6ZM155.7 136.1C157.6 136.1 158.5 136.9 158.5 138.9L158.5 141C158.5 142.6 158.1 143.4 156.5 143.7 158.3 144.1 158.6 145.6 158.6 146.4L158.6 149.6C158.6 150 158.6 151.3 159.2 151.7L156.1 151.7C155.9 151.2 155.7 151 155.7 150.2L155.7 146.5C155.7 145.3 155.5 144.8 154.2 144.8L152.8 144.8 152.8 151.7 150 151.7 150 136.1 155.7 136.1ZM169.7 145.8L169.7 148.4C169.7 150.5 168.6 152 165.4 152 164.3 152 161.2 151.8 161.2 148.7L161.2 139.5C161.2 137.1 162.4 135.7 165.5 135.7 168 135.7 169.7 136.7 169.7 138.8L169.7 141.7 166.9 141.7 166.9 139.8C166.9 138.6 166.7 137.9 165.4 137.9 164.3 137.9 164.1 138.6 164.1 139.6L164.1 148C164.1 149 164.3 149.8 165.5 149.8 166.7 149.8 166.9 149 166.9 147.8L166.9 145.8 169.7 145.8ZM177.9 151.7L177.9 144.5 175.3 144.5 175.3 151.7 172.5 151.7 172.5 136.1 175.3 136.1 175.3 142.2 177.9 142.2 177.9 136.1 180.8 136.1 180.8 151.7 177.9 151.7Z" />
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>

                    <div>
                        <Header
                            as="h1"
                            className={`${bemBlockClassName}--title`}
                            style={{
                                fontSize: '32px',
                                margin: 0,
                            }}
                            weight="semibold"
                        >
                            React - CM - UI
                        </Header>

                        <p
                            className={`${bemBlockClassName}--sub_title`}
                        >
                            A React UI library for the Healthy Church (HC) App.
                        </p>

                        <Button
                            className={`${bemBlockClassName}--get_started`}
                            onClick={this.onGetStartedClick}
                            outline
                            style={{
                                margin: '0 0 13px',
                            }}
                        >
                            Get Started
                        </Button>
                    </div>
                </div>

                <div>
                    <Grid
                        alignContent="stretch"
                        spacing={2}
                    >
                        <Grid.Column
                            sm={12}
                        >
                            <Header
                                color="static"
                                size="large"
                                style={{ textAlign: 'center' }}
                                weight="semibold"
                            >
                                Quick Start
                            </Header>
                        </Grid.Column>

                        <Grid.Column
                            md={6}
                            sm={12}
                        >
                            <Card style={{ height: '100%' }}>
                                <Header size="medium">Installation</Header>

                                <Highlighter
                                    className={`${bemBlockClassName}--highlighter`}
                                    showLineNumbers={false}
                                    style={{
                                        margin: '22px 0 0',
                                    }}
                                    theme="dark"
                                    type="inline"
                                >
                                    {INSTALLATION_EXAMPLE}
                                </Highlighter>

                                <Button
                                    className={`${bemBlockClassName}--get_started`}
                                    color="light"
                                    onClick={this.onGetStartedClick}
                                    style={{
                                        margin: '22px 0',
                                    }}
                                >
                                    Read Installation Doc
                                </Button>
                            </Card>
                        </Grid.Column>

                        <Grid.Column
                            md={6}
                            sm={12}
                        >
                            <Card style={{ height: '100%' }}>
                                <Header size="medium">Usage</Header>

                                <Highlighter
                                    className={`${bemBlockClassName}--highlighter`}
                                    showLineNumbers={false}
                                    style={{
                                        margin: '22px 0',
                                    }}
                                    theme="dark"
                                    type="inline"
                                >
                                    {USAGE_EXAMPLE}
                                </Highlighter>

                                <Button
                                    className={`${bemBlockClassName}--get_started`}
                                    color="light"
                                    onClick={this.onGetStartedClick}
                                    style={{
                                        margin: '0 0 13px',
                                    }}
                                >
                                    Read Usage Doc
                                </Button>
                            </Card>
                        </Grid.Column>
                    </Grid>
                </div>
            </Main>
        );
    }
}

Home.propTypes = propTypes;

export default Home;
