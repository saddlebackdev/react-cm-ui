import {
    DataCards,
    Header,
    Typography
} from 'react-cm-ui';
import React from 'react';
import ComponentApi from '../../global/componentApi';
import Heading from '../../global/heading';
import Highlighter from '../../global/highlighter';
import MarkdownContainer from '../../global/markdownContainer';
import Main from '../../global/main';
/* eslint-disable import/no-named-default, import/extensions */
import { default as dataCardsDoc } from '!!@advclb/react-docgen-loader!react-cm-ui/dataDisplay/dataCards/dataCards';
/* eslint-enable import/no-named-default, import/extensions */

const persons = [{
    "name": "John",
    "age": 22,
    "gender": "male",
},
{
    "name": "John",
    "age": 33,
    "gender": "male",
},
{
    "name": "John",
    "age": 44,
    "gender": "male",
}
];

const moduleType = `page`;

const dataCardsSample = `import React from 'react';

import Loader from '../app/Elements/Loader.react';

export default class TypeSample extends React.Component {    

    constructor(props) {
        super(props);        
    }
    
    const persons = [{
        "name": "John",
        "age": 22,
        "gender": "male",
    },
    {
        "name": "John",
        "age": 33,
        "gender": "male",
    },
    {
        "name": "John",
        "age": 44,
        "gender": "male",
    }
    ];

    const moduleType = 'page';

    render() {
        return (
            <div>
                <DataCards
                    cardProps={() => {
                        return {
                            onClick: console.log('Click!')
                        };
                    }}
                    columns={[
                        {
                            accessor: (data) => {
                                return "myString or Object here";
                            },
                            fontSize: 'medium',
                            fontWeight: 'semiBold',
                            header: true,
                            width: '100%',
                        }
                    ]}
                    data={persons}
                    moduleType={moduleType}
                />
            </div>
        );
    }
}`;

function DocsDataCards() {
    const descriptionCopy = dataCardsDoc.description;

    return (
        <Main page="data_cards">
            <Main.Content>
                <MarkdownContainer>
                    <Typography
                        className="description"
                        variant="body1"
                    >
                        {descriptionCopy}
                    </Typography>

                </MarkdownContainer>

                <ComponentApi
                    docs={[
                        dataCardsDoc,
                    ]}
                />

                {/* Data Card */}
                <Header size="large" style={{ marginTop: '55px' }} sub>
                    Data Card
                    <Header.Subheader>
                        Data Card component.
                    </Header.Subheader>
                </Header>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {dataCardsSample}
                </Highlighter>

                <DataCards
                    cardProps={() => {
                        return {
                            onClick: console.log('Click!')
                        };
                    }}
                    columns={[
                        {
                            accessor: (data) => {
                                return `Name: ${data.name} Age: ${data.age} Gender: ${data.gender}`;
                            },
                            fontSize: 'medium',
                            fontWeight: 'semiBold',
                            header: true,
                            width: '100%',
                        }
                    ]}
                    data={persons}
                    moduleType={moduleType}
                />
            </Main.Content>
        </Main>
    );
}

export default DocsDataCards;
