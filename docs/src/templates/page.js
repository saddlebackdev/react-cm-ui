'use strict';

import {
    Dropdown,
    Header,
    Icon,
    Page,
    TitleBar,
} from 'react-cm-ui';
import Main from '../app/main.js';
import React from 'react';

class TemplatesPage extends React.Component {
    constructor() {
        super();

        this.state = {
            isFiltersOpen: false,
        };

        this._onFiltersToggle = this._onFiltersToggle.bind(this);
    }

    render() {
        const { isFiltersOpen } = this.state;

        return (
            <Main page="headers" style={{ padding: 0 }}>
                <TitleBar title="Page" style={{ margin: 0 }} />

                <Page>
                    <Page.ActionBar>
                        <Icon
                            onClick={this._onFiltersToggle}
                            type="filter"
                        />
                    </Page.ActionBar>

                    <Page.FiltersDrawer
                        isOpen={isFiltersOpen}
                        onClose={this._onFiltersToggle}
                    >
                        FilterDrawer
                    </Page.FiltersDrawer>

                    <Page.FiltersRail
                        isOpen={isFiltersOpen}
                        onClose={this._onFiltersToggle}
                    >
                        <Header weight="bold">Sort By</Header>

                        <Dropdown
                            clearable={false}
                            options={[
                                {
                                    label: 'Name (Ascending)',
                                    value: 'Name (Ascending)',
                                }, {
                                    label: 'Name (Descending)',
                                    value: 'Name (Descending)',
                                }, {
                                    label: 'Create Date (Ascending)',
                                    value: 'Create Date (Ascending)',
                                }, {
                                    label: 'Create Date (Descending)',
                                    value: 'Create Date (Descending)',
                                },
                            ]}
                            searchable={false}
                            selection
                            selectionUnderline
                            value={{
                                label: 'Name (Ascending)',
                                value: 'Name (Ascending)',
                            }}
                        />

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor mi, tempus non nisi eget, consectetur mollis purus. Ut lacinia risus vel est semper gravida. Proin volutpat eros diam, non pharetra elit vulputate eget. Mauris dapibus orci eget vulputate fringilla. Aenean dignissim massa orci, vitae fringilla quam facilisis at. Quisque fermentum tortor ut vehicula gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in elit ac urna finibus vulputate quis quis quam. Aenean eget metus nec purus aliquam vehicula nec ac lectus. Praesent pretium nisl vitae ipsum pharetra eleifend. Curabitur in ex eget mauris ultrices tincidunt nec eget ligula. Mauris id libero sed est varius pretium at vel elit. Etiam ipsum felis, congue ac finibus tincidunt, iaculis a sapien. Duis faucibus consectetur nibh ac fermentum.</p>

                        <p>Nam nec tellus risus. Maecenas malesuada tortor dolor, nec vulputate tortor faucibus et. Sed id ligula ac orci volutpat suscipit eu sed ligula. Curabitur vulputate sit amet orci quis ornare. Maecenas laoreet porttitor ex vitae placerat. Nunc arcu ante, tempor eu interdum eget, efficitur in quam. Donec facilisis arcu non finibus accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque interdum, ligula non auctor luctus, sapien leo suscipit ante, ut finibus sapien mi id lorem. Ut varius tempor odio id tempus. Morbi sit amet quam at lectus commodo tincidunt nec et orci. Morbi finibus, mauris vitae tincidunt scelerisque, mauris magna mattis ligula, vel euismod sapien augue at risus. Aenean viverra varius eros faucibus sodales. Suspendisse laoreet quam sagittis tempor lobortis.</p>

                        <p>Proin sed dignissim arcu. Donec suscipit orci nisl, ac ultrices ex suscipit sed. Vivamus a maximus orci. Nunc sit amet porta felis. Mauris at erat risus. Nulla vitae consectetur justo. Nullam venenatis est vel pulvinar hendrerit. Maecenas cursus vel dolor eu ornare. Phasellus non diam erat. Aliquam vulputate, mauris vitae mollis fringilla, augue elit semper elit, eu laoreet enim metus ac sem. Praesent bibendum orci a elit feugiat venenatis. Fusce dui lacus, facilisis at dui in, sollicitudin auctor nunc.</p>

                        <p>Etiam auctor dui nec risus placerat tempus. In at rhoncus felis. Cras quis elementum diam. Nam vitae turpis id odio elementum imperdiet. Nunc sed lorem leo. Nullam aliquam erat at dui dapibus scelerisque. Aenean pretium felis dolor, id venenatis lorem tincidunt at. Fusce malesuada placerat nibh, in accumsan velit molestie ac. Aenean vitae egestas nisi, vel venenatis nisl. Ut placerat commodo nunc nec fermentum. Nullam urna quam, mollis eget lacinia at, imperdiet et augue. Phasellus ac euismod orci, a tincidunt turpis. Etiam sodales dictum nunc vel commodo.</p>

                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt tristique faucibus. Quisque tellus lorem, interdum interdum commodo at, sagittis vel leo. Quisque nibh tortor, tempus sed mollis in, porttitor ac turpis. Integer id nibh vel nisl feugiat euismod. Integer maximus dui sed elit semper, id semper augue vehicula. Curabitur tellus libero, tempor id est id, faucibus maximus ipsum. Aenean commodo nulla vel erat congue efficitur. Nunc nisl nisi, laoreet efficitur ipsum et, vulputate tempor justo. Donec consequat varius sem a lacinia. Quisque et felis turpis. Praesent posuere viverra lobortis. Nunc sodales, metus faucibus semper venenatis, nisi eros elementum velit, id pretium magna enim sit amet quam. Quisque sagittis purus in mauris rutrum maximus. Etiam id fringilla nisl. </p>

                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt tristique faucibus. Quisque tellus lorem, interdum interdum commodo at, sagittis vel leo. Quisque nibh tortor, tempus sed mollis in, porttitor ac turpis. Integer id nibh vel nisl feugiat euismod. Integer maximus dui sed elit semper, id semper augue vehicula. Curabitur tellus libero, tempor id est id, faucibus maximus ipsum. Aenean commodo nulla vel erat congue efficitur. Nunc nisl nisi, laoreet efficitur ipsum et, vulputate tempor justo. Donec consequat varius sem a lacinia. Quisque et felis turpis. Praesent posuere viverra lobortis. Nunc sodales, metus faucibus semper venenatis, nisi eros elementum velit, id pretium magna enim sit amet quam. Quisque sagittis purus in mauris rutrum maximus. Etiam id fringilla nisl. </p>
                    </Page.FiltersRail>

                    <Page.Content isFiltersRailOpen={isFiltersOpen}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tortor mi, tempus non nisi eget, consectetur mollis purus. Ut lacinia risus vel est semper gravida. Proin volutpat eros diam, non pharetra elit vulputate eget. Mauris dapibus orci eget vulputate fringilla. Aenean dignissim massa orci, vitae fringilla quam facilisis at. Quisque fermentum tortor ut vehicula gravida. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut in elit ac urna finibus vulputate quis quis quam. Aenean eget metus nec purus aliquam vehicula nec ac lectus. Praesent pretium nisl vitae ipsum pharetra eleifend. Curabitur in ex eget mauris ultrices tincidunt nec eget ligula. Mauris id libero sed est varius pretium at vel elit. Etiam ipsum felis, congue ac finibus tincidunt, iaculis a sapien. Duis faucibus consectetur nibh ac fermentum.</p>

                        <p>Nam nec tellus risus. Maecenas malesuada tortor dolor, nec vulputate tortor faucibus et. Sed id ligula ac orci volutpat suscipit eu sed ligula. Curabitur vulputate sit amet orci quis ornare. Maecenas laoreet porttitor ex vitae placerat. Nunc arcu ante, tempor eu interdum eget, efficitur in quam. Donec facilisis arcu non finibus accumsan. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque interdum, ligula non auctor luctus, sapien leo suscipit ante, ut finibus sapien mi id lorem. Ut varius tempor odio id tempus. Morbi sit amet quam at lectus commodo tincidunt nec et orci. Morbi finibus, mauris vitae tincidunt scelerisque, mauris magna mattis ligula, vel euismod sapien augue at risus. Aenean viverra varius eros faucibus sodales. Suspendisse laoreet quam sagittis tempor lobortis.</p>

                        <p>Proin sed dignissim arcu. Donec suscipit orci nisl, ac ultrices ex suscipit sed. Vivamus a maximus orci. Nunc sit amet porta felis. Mauris at erat risus. Nulla vitae consectetur justo. Nullam venenatis est vel pulvinar hendrerit. Maecenas cursus vel dolor eu ornare. Phasellus non diam erat. Aliquam vulputate, mauris vitae mollis fringilla, augue elit semper elit, eu laoreet enim metus ac sem. Praesent bibendum orci a elit feugiat venenatis. Fusce dui lacus, facilisis at dui in, sollicitudin auctor nunc.</p>

                        <p>Etiam auctor dui nec risus placerat tempus. In at rhoncus felis. Cras quis elementum diam. Nam vitae turpis id odio elementum imperdiet. Nunc sed lorem leo. Nullam aliquam erat at dui dapibus scelerisque. Aenean pretium felis dolor, id venenatis lorem tincidunt at. Fusce malesuada placerat nibh, in accumsan velit molestie ac. Aenean vitae egestas nisi, vel venenatis nisl. Ut placerat commodo nunc nec fermentum. Nullam urna quam, mollis eget lacinia at, imperdiet et augue. Phasellus ac euismod orci, a tincidunt turpis. Etiam sodales dictum nunc vel commodo.</p>

                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt tristique faucibus. Quisque tellus lorem, interdum interdum commodo at, sagittis vel leo. Quisque nibh tortor, tempus sed mollis in, porttitor ac turpis. Integer id nibh vel nisl feugiat euismod. Integer maximus dui sed elit semper, id semper augue vehicula. Curabitur tellus libero, tempor id est id, faucibus maximus ipsum. Aenean commodo nulla vel erat congue efficitur. Nunc nisl nisi, laoreet efficitur ipsum et, vulputate tempor justo. Donec consequat varius sem a lacinia. Quisque et felis turpis. Praesent posuere viverra lobortis. Nunc sodales, metus faucibus semper venenatis, nisi eros elementum velit, id pretium magna enim sit amet quam. Quisque sagittis purus in mauris rutrum maximus. Etiam id fringilla nisl. </p>

                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt tristique faucibus. Quisque tellus lorem, interdum interdum commodo at, sagittis vel leo. Quisque nibh tortor, tempus sed mollis in, porttitor ac turpis. Integer id nibh vel nisl feugiat euismod. Integer maximus dui sed elit semper, id semper augue vehicula. Curabitur tellus libero, tempor id est id, faucibus maximus ipsum. Aenean commodo nulla vel erat congue efficitur. Nunc nisl nisi, laoreet efficitur ipsum et, vulputate tempor justo. Donec consequat varius sem a lacinia. Quisque et felis turpis. Praesent posuere viverra lobortis. Nunc sodales, metus faucibus semper venenatis, nisi eros elementum velit, id pretium magna enim sit amet quam. Quisque sagittis purus in mauris rutrum maximus. Etiam id fringilla nisl. </p>

                        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc tincidunt tristique faucibus. Quisque tellus lorem, interdum interdum commodo at, sagittis vel leo. Quisque nibh tortor, tempus sed mollis in, porttitor ac turpis. Integer id nibh vel nisl feugiat euismod. Integer maximus dui sed elit semper, id semper augue vehicula. Curabitur tellus libero, tempor id est id, faucibus maximus ipsum. Aenean commodo nulla vel erat congue efficitur. Nunc nisl nisi, laoreet efficitur ipsum et, vulputate tempor justo. Donec consequat varius sem a lacinia. Quisque et felis turpis. Praesent posuere viverra lobortis. Nunc sodales, metus faucibus semper venenatis, nisi eros elementum velit, id pretium magna enim sit amet quam. Quisque sagittis purus in mauris rutrum maximus. Etiam id fringilla nisl. </p>
                    </Page.Content>
                </Page>
            </Main>
        );
    }

    _onFiltersToggle() {
        const { isFiltersOpen } = this.state;

        this.setState({
            isFiltersOpen: !isFiltersOpen,
        });
    }
}

export default TemplatesPage;
