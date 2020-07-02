import {
    Button,
    Card,
    Drawer,
    Header,
    Icon,
    Input,
    TitleBar,
} from 'react-cm-ui';
import React from 'react';
import DrawerSubNavigation from './drawerSubNavigation.js';
import Highlighter from '../global/highlighter';
import Main from '../global/main';
import TableProps from '../global/tableProps';

const drawerDetailsSample = `import { Button, Drawer, InfoBar } from 'react-cm-ui';
import React from 'react';

export default class DrawerDetailsSample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
        };

        this.onDrawerToggle = this.onDrawerToggle.bind(this);
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    render() {
        const { isDrawerOpen } = this.state;

        return (
            <div>
                <Button onClick={this.onDrawerToggle}>Open Drawer</Button>

                <Drawer
                    isOpen={isDrawerOpen}
                    onClose={this.onDrawerToggle}
                >
                    <Drawer.TitleBar
                        closeButton={<Icon compact onClick={this.onDrawerToggle} type="times" />}
                        title="Don't Pay Attention to the TitleBar, But to the Navigation"
                    />

                    <Drawer.Navigation
                        columns={[
                            {
                                label: 'Button 1',
                            }, {
                                label: 'Button 2',
                            }, {
                                label: 'Button 3',
                            }, {
                                label: 'Button 4',
                                onClick: this.onClickTest,
                            },
                        ]}
                    />

                    <Drawer.ActionBar
                        columns={[
                            {
                                list: [
                                    {
                                        jsx: (
                                            <Icon
                                                onClick={this.onFilterClick}
                                                title="Filter"
                                                type="arrow-sort"
                                            />
                                        ),
                                    }, {
                                        jsx: (
                                            <Icon
                                                onClick={this.onViewGridClick}
                                                title="Grid View"
                                                type="grid"
                                            />
                                        ),
                                    }, {
                                        jsx: (
                                            <Icon
                                                onClick={this.onViewTableClick}
                                                title="List View"
                                                type="list"
                                            />
                                        ),
                                    },
                                ],
                            }, {
                                jsx: (
                                    <Input
                                        fluid
                                        icon={searchValue && (
                                            <Icon
                                                compact
                                                onClick={this.onClearSearchClick}
                                                title="Clear Search"
                                                type="times"
                                            />
                                        )}
                                        onChange={this.onSearchChange}
                                        onKeyDown={this.onSearchKeyDown}
                                        placeholder="Search"
                                        value={searchValue}
                                    />
                                ),
                                flexGrow: 1,
                            }, {
                                jsx: (
                                    <Button
                                        color="success"
                                        onClick={this.onNewTemplateClick}
                                        style={{ margin: 0 }}
                                    >
                                        <Icon type="plus" />
                                        <span>New Template</span>
                                    </Button>
                                ),
                            },
                        ]}
                    />

                    <Drawer.DetailsWindow
                        color={11}
                        columnProps={{
                            horizontalSpacing: 11,
                        }}
                        columns={[
                            {
                                accessor: 'activeTemplates',
                                header: 'Active Templates',
                            }, {
                                accessor: 'inactiveTemplates',
                                header: 'Inactive Templates',
                            }, {
                                list: [
                                    {
                                        accessor: 'activeTemplates',
                                        header: 'Active Templates',
                                    }, {
                                        accessor: 'inactiveTemplates',
                                        header: 'Inactive Templates',
                                    },
                                ],
                                divide: true,
                            },
                        ]}
                        data={{
                        }}
                    />

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ornare
                    sapien. Praesent ac dui maximus, cursus eros eu, malesuada tortor. Praesent
                    vulputate molestie leo, eu sollicitudin nisl efficitur sed. Etiam vitae tortor
                    neque. Nullam blandit vestibulum mauris, in tristique velit pretium eu. Nullam
                    ut malesuada ligula. Sed sit amet eros ligula. Cras purus elit, dictum sit amet
                    orci ut, dapibus pulvinar ligula. Vivamus ac sollicitudin orci. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Integer sed dictum mauris. Donec non tortor nisi. Sed nec quam nec leo elementum
                    commodo vel nec nisi.
                    </p>

                    <p>
                    Praesent vehicula neque sit amet quam porttitor pulvinar. Etiam a sem
                    volutpat, ultricies sapien non, varius magna. Vestibulum pulvinar ex vestibulum
                    elit suscipit, ac convallis arcu dapibus. Aliquam erat volutpat. Suspendisse
                    malesuada ipsum non nibh accumsan convallis. Suspendisse posuere ultricies enim,
                    in congue enim vestibulum sed. Praesent pretium, velit at convallis vestibulum,
                    dolor turpis volutpat augue, vitae bibendum diam turpis et metus. Nullam ac
                    dolor vitae nisl tempor eleifend et ut dolor. Nulla sem purus, tincidunt eu
                    aliquam eget, dapibus id risus. Donec mollis tortor purus, posuere rhoncus sem
                    tempus in. Phasellus sit amet felis eget neque condimentum ullamcorper in eu
                    purus. Suspendisse potenti. Nunc aliquam erat consequat justo gravida lobortis.
                    </p>

                    <p>
                    Nunc et molestie metus, quis tempor urna. Nullam elementum risus nec nisl
                    tristique, quis gravida nunc consequat. Morbi venenatis justo egestas tellus
                    cursus dapibus. Vivamus ac dolor lacinia sapien suscipit dapibus sit amet at
                    nisi. In hac habitasse platea dictumst. Sed quis lorem vel ante porttitor
                    mattis. Aenean condimentum gravida nisi, ac lobortis ligula venenatis sed. Donec
                    maximus placerat volutpat. Cras purus massa, rutrum nec ex ut, volutpat dictum
                    tortor. Ut eget rutrum massa.
                    </p>

                    <p>
                    Fusce suscipit libero mi, scelerisque tincidunt neque tempor quis. Nunc quis
                    felis ut urna placerat tempor nec vitae odio. Praesent ornare est in sem maximus
                    hendrerit. Integer ut mi eu nunc cursus vulputate. Duis pharetra blandit
                    bibendum. Mauris at nulla felis. Maecenas semper dictum ex, in tristique leo
                    tristique quis. Sed nec purus nulla. Sed dignissim sem non lacus ultrices, porta
                    auctor mauris aliquam. Sed et eros vel ligula egestas luctus at id eros.
                    </p>

                    <p> Nullam aliquet, lacus id ullamcorper faucibus, nibh turpis posuere turpis,
                    eget accumsan massa elit vitae arcu. Quisque purus odio, ullamcorper quis
                    lacinia eu, placerat vitae est. Curabitur fermentum et quam at vestibulum.
                    Maecenas at tristique neque. Nullam arcu neque, pulvinar quis nisi in, aliquam
                    faucibus augue. Aliquam vulputate fermentum dictum. Vestibulum vitae ex aliquet,
                    suscipit lacus porta, varius eros. Quisque rhoncus velit eros, a condimentum
                    justo malesuada ut. Aliquam tincidunt ullamcorper nunc, et elementum dui euismod
                    non. Pellentesque vestibulum neque dolor, at vestibulum augue hendrerit aliquet.
                    </p>

                    <p>
                    Nam blandit diam eu sapien pretium, ut viverra nisl auctor. Nullam
                    condimentum sodales mi sed scelerisque. Sed eleifend leo sed ipsum fermentum, at
                    sollicitudin nisi congue. Duis et eleifend ligula. Proin maximus, justo non
                    dapibus porta, velit sem consectetur ipsum, at lobortis mauris nulla lacinia
                    nibh. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per
                    conubia nostra, per inceptos himenaeos. Nunc aliquet imperdiet lectus, hendrerit
                    pharetra libero bibendum nec.
                    </p>

                    <p>
                    Duis viverra nec nisl ac vestibulum. In semper libero sapien, ultrices
                    varius dolor dictum eget. Nam vitae odio quis nulla gravida placerat. Aliquam
                    vel blandit leo. Praesent vel dapibus est, eu cursus turpis. Vestibulum ligula
                    dui, auctor vitae leo sit amet, commodo cursus justo. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus. Class aptent taciti sociosqu ad litora
                    torquent per conubia nostra, per inceptos himenaeos. Fusce ac nibh leo. Ut
                    libero urna, rhoncus iaculis purus a, venenatis iaculis massa.
                    </p>

                    <p>
                    Integer nec turpis at felis gravida efficitur id sed nulla. Nullam semper in
                    elit id finibus. Mauris sollicitudin sed mauris quis iaculis. Etiam aliquet
                    lorem vel libero luctus, vitae auctor leo fringilla. Praesent quis rhoncus
                    ligula. In quis neque et nisl placerat convallis a id nisl. Fusce ac odio eu
                    orci ultrices elementum. Aenean dignissim urna vel sem euismod auctor. Sed
                    molestie lectus sed tortor convallis, et suscipit nibh vehicula. Quisque et
                    lectus id nunc faucibus luctus a nec lacus. Nullam a dolor finibus, facilisis
                    ante vel, tristique tellus. Nunc ac porta neque. Proin sed euismod nunc.
                    </p>

                    <p>
                    Aliquam erat volutpat. Phasellus et enim non augue sagittis pretium vitae
                    sit amet neque. Integer imperdiet diam nibh, ac ornare felis molestie id. Ut ac
                    dolor urna. Nunc varius aliquam dui eu tristique. In hac habitasse platea
                    dictumst. Duis sit amet venenatis diam, sed scelerisque tortor. Aliquam erat
                    volutpat. Mauris vel malesuada diam. Nunc viverra in risus quis lacinia. Donec
                    finibus, velit non vulputate blandit, mauris ipsum auctor justo, ut faucibus
                    arcu erat sed est.
                    </p>

                    <p>
                    Nulla consequat auctor facilisis. Suspendisse quis diam elit. Sed non sapien
                    non ipsum scelerisque sollicitudin. Donec tellus urna, bibendum ut pulvinar non,
                    semper vel justo. Aliquam eget dui ac metus facilisis mattis. Nullam ac turpis
                    vel diam fringilla consectetur. Integer posuere, mi eget faucibus aliquet,
                    sapien lacus viverra ligula, quis posuere tellus enim dictum neque. Duis nec
                    magna efficitur, tristique nunc nec, porta massa. Sed fringilla vitae sem ut
                    egestas. Donec accumsan sit amet metus in auctor. Phasellus diam orci, eleifend
                    aliquam est sed, bibendum mollis est. Curabitur posuere urna imperdiet urna
                    interdum laoreet. Donec viverra viverra quam eget sodales. Morbi faucibus vel
                    leo vel sodales. Aliquam et faucibus nisl, luctus iaculis dolor. In sed dictum
                    lectus.
                    </p>

                    <p>
                    Curabitur mollis ante quis nulla pretium tristique. In vel varius nunc, sed
                    ullamcorper erat. Nam viverra ut lorem varius placerat. Nam eget porta orci, in
                    feugiat elit. Phasellus non diam congue, molestie metus at, ultrices lectus.
                    Nunc porttitor consectetur pretium. Nam vitae turpis posuere, dictum libero
                    interdum, tincidunt nibh. Proin porta venenatis felis, sed pharetra dui
                    vulputate sed. Nam bibendum odio eget vulputate convallis.
                    </p>

                    <p>
                    Ut fringilla orci nec magna vehicula iaculis. Donec imperdiet ultrices
                    varius. Ut bibendum pretium neque, eget placerat augue malesuada vitae. Nunc
                    varius nisl sit amet elit auctor, vel ullamcorper dui sodales. Morbi gravida
                    feugiat ligula, eget feugiat tellus posuere nec. Nunc placerat tempus sagittis.
                    Sed convallis aliquet purus, at varius ante dignissim a. Sed egestas auctor
                    metus. Pellentesque facilisis justo ac augue mattis, eu ornare lorem accumsan.
                    Nullam sem erat, molestie ac dapibus eu, tincidunt ac lacus. Interdum et
                    malesuada fames ac ante ipsum primis in faucibus. Cras et nisi ante. Phasellus
                    nec dui et tortor pellentesque aliquam.
                    </p>

                    <Button onClick={this.onDrawerToggle}>Close Drawer</Button>
                </Drawer>
            </div>
        );
    }
}`;

class ModulesDrawerDetailsWindow extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isDrawerOpen: false,
            searchValue: '',
        };

        this.onClickTest = this.onClickTest.bind(this);
        this.onDrawerToggle = this.onDrawerToggle.bind(this);
    }

    onClickTest() {
        console.log('You just clicked the fourth column!'); // eslint-disable-line no-console
    }

    onDrawerToggle() {
        const { isDrawerOpen } = this.state;

        this.setState({ isDrawerOpen: !isDrawerOpen });
    }

    render() {
        const { isDrawerOpen, searchValue } = this.state;
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: '',
            }, {
                name: 'bleed',
                type: 'bool',
                default: '',
                description: 'Horizontally extend Drawer.DetailsWindow all the way to the edges of the parent Drawer..',
                allowedTypes: '',
            }, {
                name: 'color',
                type: 'number',
                default: '',
                description: 'Info bar color number can be chosen from 1 to 11',
                allowedTypes: '1,2,3,4,5,6,7,8,9,10,11',
            }, {
                name: 'columns',
                type: 'array',
                default: '',
                description: 'A consistent way to display Info bar details UI in a Drawer.DetailsWindow.',
                allowedTypes: '',
            }, {
                name: 'columnProps',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Drawer.DetailsWindow\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            }, {
                name: 'data',
                type: 'array',
                default: '',
                description: 'Required for Drawer.DetailsWindow to feed columns.',
                allowedTypes: '',
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the Drawer.DetailsWindow\'s container. Mainly used for padding and margins.',
                allowedTypes: '',
            },
        ];

        return (
            <Main page="headers">
                <TitleBar title="Drawer" />

                <DrawerSubNavigation />

                <Main.Content>
                    <Card>
                        <Header size="large">Props</Header>

                        <TableProps props={props} />
                    </Card>

                    {/* Details Window */}
                    <Header anchor="drawer" size="large" style={{ marginTop: '55px' }} sub>
                        Details Window
                        <Header.Subheader>
                            For those times the UI requires an Details Window.
                        </Header.Subheader>
                    </Header>

                    <Button onClick={this.onDrawerToggle}>Open Drawer</Button>

                    <Drawer
                        isOpen={isDrawerOpen}
                        onClose={this.onDrawerToggle}
                    >
                        <Drawer.TitleBar
                            closeButton={<Icon compact onClick={this.onDrawerToggle} type="times" />}
                            title="Don't Pay Attention to the TitleBar, But to the Navigation"
                        />

                        <Drawer.ActionBar
                            columns={[
                                {
                                    list: [
                                        {
                                            jsx: (
                                                <Icon
                                                    onClick={this.onFilterClick}
                                                    title="Filter"
                                                    type="arrow-sort"
                                                />
                                            ),
                                        }, {
                                            jsx: (
                                                <Icon
                                                    onClick={this.onViewGridClick}
                                                    title="Grid View"
                                                    type="grid"
                                                />
                                            ),
                                        }, {
                                            jsx: (
                                                <Icon
                                                    onClick={this.onViewTableClick}
                                                    title="List View"
                                                    type="list"
                                                />
                                            ),
                                        },
                                    ],
                                }, {
                                    jsx: (
                                        <Input
                                            fluid
                                            icon={searchValue && (
                                                <Icon
                                                    compact
                                                    onClick={this.onClearSearchClick}
                                                    title="Clear Search"
                                                    type="times"
                                                />
                                            )}
                                            onChange={this.onSearchChange}
                                            onKeyDown={this.onSearchKeyDown}
                                            placeholder="Search"
                                            value={searchValue}
                                        />
                                    ),
                                    flexGrow: 1,
                                }, {
                                    jsx: (
                                        <Button
                                            color="success"
                                            onClick={this.onNewTemplateClick}
                                            style={{ margin: 0 }}
                                        >
                                            <Icon type="plus" />
                                            <span>New Template</span>
                                        </Button>
                                    ),
                                },
                            ]}
                        />

                        <Drawer.DetailsWindow
                            color={11}
                            columnProps={{
                                horizontalSpacing: 11,
                            }}
                            columns={[
                                {
                                    accessor: 'activeTemplates',
                                    header: 'Active Templates',
                                }, {
                                    accessor: 'inactiveTemplates',
                                    header: 'Inactive Templates',
                                }, {
                                    list: [
                                        {
                                            accessor: 'activeTemplates',
                                            header: 'Active Templates',
                                        }, {
                                            accessor: 'inactiveTemplates',
                                            header: 'Inactive Templates',
                                        },
                                    ],
                                    divide: true,
                                },
                            ]}
                            data={{
                            }}
                        />

                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu ornare
                            sapien. Praesent ac dui maximus, cursus eros eu, malesuada tortor. Praesent
                            vulputate molestie leo, eu sollicitudin nisl efficitur sed. Etiam vitae
                            tortor neque. Nullam blandit vestibulum mauris, in tristique velit pretium
                            eu. Nullam ut malesuada ligula. Sed sit amet eros ligula. Cras purus elit,
                            dictum sit amet orci ut, dapibus pulvinar ligula. Vivamus ac sollicitudin
                            orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra,
                            per inceptos himenaeos. Integer sed dictum mauris. Donec non tortor nisi.
                            Sed nec quam nec leo elementum commodo vel nec nisi.
                        </p>

                        <p>
                            Praesent vehicula neque sit amet quam porttitor pulvinar. Etiam a sem
                            volutpat, ultricies sapien non, varius magna. Vestibulum pulvinar ex
                            vestibulum elit suscipit, ac convallis arcu dapibus. Aliquam erat volutpat.
                            Suspendisse malesuada ipsum non nibh accumsan convallis. Suspendisse posuere
                            ultricies enim, in congue enim vestibulum sed. Praesent pretium, velit at
                            convallis vestibulum, dolor turpis volutpat augue, vitae bibendum diam
                            turpis et metus. Nullam ac dolor vitae nisl tempor eleifend et ut dolor.
                            Nulla sem purus, tincidunt eu aliquam eget, dapibus id  risus. Donec mollis
                            tortor purus, posuere rhoncus sem tempus in. Phasellus sit amet felis eget
                            neque condimentum ullamcorper in eu purus. Suspendisse potenti. Nunc aliquam
                            erat consequat justo gravida lobortis.
                        </p>

                        <p>
                            Nunc et molestie metus, quis tempor urna. Nullam elementum risus nec nisl
                            tristique, quis gravida nunc consequat. Morbi venenatis justo egestas
                            tellus cursus dapibus. Vivamus ac dolor lacinia sapien suscipit dapibus sit
                            amet at nisi. In hac habitasse platea dictumst. Sed quis lorem vel ante
                            porttitor mattis. Aenean condimentum gravida nisi, ac lobortis ligula
                            venenatis sed. Donec maximus placerat volutpat. Cras purus massa, rutrum
                            nec ex ut, volutpat dictum tortor. Ut eget rutrum massa.
                        </p>

                        <p>
                            Fusce suscipit libero mi, scelerisque tincidunt neque tempor quis. Nunc
                            quis felis ut urna placerat tempor nec vitae odio. Praesent ornare est in
                            sem maximus  hendrerit. Integer ut mi eu nunc cursus vulputate. Duis
                            pharetra blandit bibendum. Mauris at nulla felis. Maecenas semper dictum ex,
                            in tristique leo tristique quis. Sed nec purus nulla. Sed dignissim sem non
                            lacus ultrices, porta auctor mauris aliquam. Sed et eros vel ligula egestas
                            luctus at id eros.
                        </p>

                        <p>
                            Nullam aliquet, lacus id ullamcorper faucibus, nibh turpis posuere turpis,
                            eget accumsan massa elit vitae arcu. Quisque purus odio, ullamcorper quis
                            lacinia eu, placerat vitae est. Curabitur fermentum et quam at vestibulum.
                            Maecenas at tristique neque. Nullam arcu neque, pulvinar quis nisi in,
                            aliquam faucibus augue. Aliquam vulputate fermentum dictum. Vestibulum
                            vitae ex aliquet, suscipit lacus porta, varius eros. Quisque rhoncus velit
                            eros, a condimentum justo malesuada ut. Aliquam tincidunt ullamcorper nunc,
                            et elementum dui euismod non. Pellentesque vestibulum neque dolor, at
                            vestibulum augue hendrerit aliquet.
                        </p>

                        <p>
                            Nam blandit diam eu sapien pretium, ut viverra nisl auctor. Nullam
                            condimentum sodales mi sed scelerisque. Sed eleifend leo sed ipsum
                            fermentum, at sollicitudin nisi congue. Duis et eleifend ligula. Proin
                            maximus, justo non dapibus porta, velit sem consectetur ipsum, at lobortis
                            mauris nulla lacinia nibh. Suspendisse potenti. Class aptent taciti sociosqu
                            ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc aliquet
                            imperdiet lectus, hendrerit pharetra libero bibendum nec.
                        </p>

                        <p>
                            Duis viverra nec nisl ac vestibulum. In semper libero sapien, ultrices
                            varius dolor dictum eget. Nam vitae odio quis nulla gravida placerat.
                            Aliquam vel blandit leo. Praesent vel dapibus est, eu cursus turpis.
                            Vestibulum ligula dui, auctor vitae leo sit amet, commodo cursus justo.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Class aptent
                            taciti sociosqu ad litora torquent per conubia nostra, per inceptos
                            himenaeos. Fusce ac nibh leo. Ut libero urna, rhoncus iaculis purus a,
                            venenatis iaculis massa.
                        </p>

                        <p>
                            Integer nec turpis at felis gravida efficitur id sed nulla. Nullam
                            semper in elit id finibus. Mauris sollicitudin sed mauris quis iaculis.
                            Etiam aliquet lorem vel libero luctus, vitae auctor leo fringilla. Praesent
                            quis rhoncus ligula. In quis neque et nisl placerat convallis a id nisl.
                            Fusce ac odio eu orci ultrices elementum. Aenean dignissim urna vel sem
                            euismod auctor. Sed molestie lectus sed tortor convallis, et suscipit nibh
                            vehicula. Quisque et lectus id nunc faucibus luctus a nec lacus. Nullam a
                            dolor finibus, facilisis ante vel, tristique tellus. Nunc ac porta neque.
                            Proin sed euismod nunc.
                        </p>

                        <p>
                            Aliquam erat volutpat. Phasellus et enim non augue sagittis pretium
                            vitae sit amet neque. Integer imperdiet diam nibh, ac ornare felis molestie
                            id. Ut ac dolor urna. Nunc varius aliquam dui eu tristique. In hac habitasse
                            platea dictumst. Duis sit amet venenatis diam, sed scelerisque tortor.
                            Aliquam erat volutpat. Mauris vel malesuada diam. Nunc viverra in risus quis
                            lacinia. Donec finibus, velit non vulputate blandit, mauris ipsum auctor
                            justo, ut faucibus arcu erat sed est.
                        </p>

                        <p>
                            Nulla consequat auctor facilisis. Suspendisse quis diam elit. Sed non
                            sapien non ipsum scelerisque sollicitudin. Donec tellus urna, bibendum ut
                            pulvinar non, semper vel justo. Aliquam eget dui ac metus facilisis mattis.
                            Nullam ac turpis vel diam fringilla consectetur. Integer posuere, mi eget
                            faucibus aliquet, sapien lacus viverra ligula, quis posuere tellus enim
                            dictum neque. Duis nec magna efficitur, tristique nunc nec, porta massa. Sed
                            fringilla vitae sem ut egestas. Donec accumsan sit amet metus in auctor.
                            Phasellus diam orci, eleifend aliquam est sed, bibendum mollis est.
                            Curabitur posuere urna imperdiet urna interdum laoreet. Donec viverra
                            viverra quam eget sodales. Morbi faucibus vel leo vel sodales. Aliquam et
                            faucibus nisl, luctus iaculis dolor. In sed dictum lectus.
                        </p>

                        <p>
                            Curabitur mollis ante quis nulla pretium tristique. In vel varius nunc,
                            sed ullamcorper erat. Nam viverra ut lorem varius placerat. Nam eget porta
                            orci, in feugiat elit. Phasellus non diam congue, molestie metus at,
                            ultrices lectus. Nunc porttitor consectetur pretium. Nam vitae turpis
                            posuere, dictum libero interdum, tincidunt nibh. Proin porta venenatis
                            felis, sed pharetra dui vulputate sed. Nam bibendum odio eget vulputate
                            convallis.
                        </p>

                        <p>
                            Ut fringilla orci nec magna vehicula iaculis. Donec imperdiet ultrices
                            varius. Ut bibendum pretium neque, eget placerat augue malesuada vitae. Nunc
                            varius nisl sit amet elit auctor, vel ullamcorper dui sodales. Morbi gravida
                            feugiat ligula, eget feugiat tellus posuere nec. Nunc placerat tempus
                            sagittis. Sed convallis aliquet purus, at varius ante dignissim a. Sed
                            egestas auctor metus. Pellentesque facilisis justo ac augue mattis, eu
                            ornare lorem accumsan. Nullam sem erat, molestie ac dapibus eu, tincidunt ac
                            lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et
                            nisi ante. Phasellus nec dui et tortor pellentesque aliquam.
                        </p>

                        <Button onClick={this.onDrawerToggle}>Close Drawer</Button>
                    </Drawer>

                    <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                        {drawerDetailsSample}
                    </Highlighter>
                </Main.Content>
            </Main>
        );
    }
}

export default ModulesDrawerDetailsWindow;
