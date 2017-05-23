'use strict';

import React from 'react';

// Docs UI Components
import Highlighter from 'components/UI/Highlighter.react';
import Main from 'components/UI/Main.react';
import TableProps from 'components/UI/TableProps.react';

// CM App UI Components
import Card from 'components/UI/Views/Card.react';
import Grid from 'components/UI/Collections/Grid.react';
import Header from 'components/UI/Elements/Header.react';
import HeaderSubheader from 'components/UI/Elements/HeaderSubheader.react';
import TitleBar from 'components/UI/Views/TitleBar.react';

const gridSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class GridSample extends React.Component {

    render() {
        return (
            <Grid>
                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>
            </Grid>
        );
    }

}`;

const gridColumnsSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class GridColumnsSample extends React.Component {

    render() {
        return (
            <Grid columns={6}>
                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>
            </Grid>
        );
    }

}`;

const rowsSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class RowsSample extends React.Component {

    render() {
        return (
            <Grid columns={8}>
                <Grid.Row>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

}`;

const rowColumnsSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class RowColumnsSample extends React.Component {

    render() {
        return (
            <Grid columns={3}>
                <Grid.Row columns={5}>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

}`;

const columnsSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class ColumnsSample extends React.Component {

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={4}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={1}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={3}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={2}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

}`;

const relaxedSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class RelaxedSample extends React.Component {

    render() {
        return (
            <Grid columns={6} relaxed={true}>
                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>
            </Grid>
        );
    }

}`;

const stressedSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class StressedSample extends React.Component {

    render() {
        return (
            <Grid columns={6} stressed={true}>
                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>

                <Grid.Column>
                    <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                </Grid.Column>
            </Grid>
        );
    }

}`;

const floatedSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class FloatedSample extends React.Component {

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column floated="left">
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column floated="right">
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column floated="right">
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

}`;

const horizontalAlignSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class HorizontalAlignSample extends React.Component {

    render() {
        return (
            <Grid horizontalAlign="right">
                <Grid.Row>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row horizontalAlign="center">
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row horizontalAlign="left">
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

}`;

const verticalAlignSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class VerticalAlignSample extends React.Component {

    render() {
        return (
            <Grid verticalAlign="middle">
                <Grid.Row style={{ height: '200px' }}>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row verticalAlign="bottom" style={{ height: '200px' }}>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

}`;

const textAlignSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class TextAlignSample extends React.Component {

    render() {
        return (
            <Grid columns={3} textAlign="left">
                <Grid.Row>
                    <Grid.Column>
                        <div style={{ backgroundColor: '#dbe0e3', padding: '11px' }}>
                            Dogs
                        </div>
                    </Grid.Column>

                    <Grid.Column>
                        <div style={{ backgroundColor: '#dbe0e3', padding: '11px' }}>
                            Cats
                        </div>
                    </Grid.Column>

                    <Grid.Column textAlign="right">
                        <div style={{ backgroundColor: '#dbe0e3', padding: '11px' }}>
                            Skunks
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={1} textAlign="center">
                    <Grid.Column>
                        <div style={{ backgroundColor: '#dbe0e3', padding: '11px' }}>
                            Nice Marmot.
                        </div>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

}`;

const responsiveWidthSample = `import React from 'react';

import Grid from 'UI/Collections/Grid.react';

export default class ResponsiveWidthSample extends React.Component {

    render() {
        return (
            <Grid>
                <Grid.Row stackable={true}>
                    <Grid.Column width={12} mobileLarge={6} tablet={6} laptop={2}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={12} mobileLarge={6} tablet={6} laptop={2}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={12} mobileLarge={6} tablet={12} laptop={2}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={12} mobileLarge={6} tablet={6} laptop={3}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={12} mobileLarge={6} tablet={6} laptop={3}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row stackable={true}>
                    <Grid.Column width={6} tablet={6} laptop={3}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={6} tablet={6} laptop={3}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={6} tablet={6} laptop={3}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column width={6} tablet={6} laptop={3}>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

}`;

export default class CollectionsGrid extends React.Component {
    render() {
        const props = [
            {
                name: 'className',
                type: 'string',
                default: '',
                description: 'Additional classes.',
                allowedTypes: ''
            }, {
                name: 'columns',
                type: 'enum',
                default: '',
                description: 'Represents column count per row in Grid.',
                allowedTypes: '1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12'
            }, {
                name: 'horizontalAlign',
                type: 'enum',
                default: '',
                description: 'Headers may be formatted with an icon to floated to the left.',
                allowedTypes: 'center, left, right'
            }, {
                name: 'relaxed',
                type: 'bool',
                default: '',
                description: 'A grid can increase its gutters to allow for more negative space.',
                allowedTypes: ''
            }, {
                name: 'stressed',
                type: 'bool',
                default: '',
                description: 'A grid can remove its gutters.',
                allowedTypes: ''
            }, {
                name: 'style',
                type: 'object',
                default: '',
                description: 'Supply any inline styles to the text area\'s container. Mainly used for padding and margins.',
                allowedTypes: ''
            }, {
                name: 'textAlign',
                type: 'enum',
                default: '',
                description: 'Specify its text alignment.',
                allowedTypes: 'center, left, right'
            }, {
                name: 'verticalAlign',
                type: 'enum',
                default: '',
                description: 'Specify its vertical alignment.',
                allowedTypes: 'bottom, middle, top'
            }
        ];

        return (
            <Main className="grid">
                <TitleBar title="Grid" />

                <Card>
                    <Header size="large">Props</Header>

                    <TableProps props={props} />
                </Card>

                {/* Grid */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Grid
                    <HeaderSubheader>
                        A basic grid.
                    </HeaderSubheader>
                </Header>

                <Grid>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {gridSample}
                </Highlighter>

                {/* Grid Columns */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Grid Columns
                    <HeaderSubheader>
                        A grid can reset the default width of columns.
                    </HeaderSubheader>
                </Header>

                <Grid columns={6}>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {gridColumnsSample}
                </Highlighter>

                {/* Rows */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Rows
                    <HeaderSubheader>
                        A grid can have multiple defined rows.
                    </HeaderSubheader>
                </Header>

                <Grid columns={8}>
                    <Grid.Row>
                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {rowsSample}
                </Highlighter>

                {/* Row Columns */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Row Columns
                    <HeaderSubheader>
                        A grid row can reset the default width of columns.
                    </HeaderSubheader>
                </Header>

                <Grid columns={3}>
                    <Grid.Row columns={5}>
                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {rowColumnsSample}
                </Highlighter>

                {/* Columns */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Columns
                    <HeaderSubheader>
                        A grid column can specify it's own width.
                    </HeaderSubheader>
                </Header>

                <Grid>
                    <Grid.Row>
                        <Grid.Column width={2}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={1}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={2}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {columnsSample}
                </Highlighter>

                {/* Relaxed */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Relaxed
                    <HeaderSubheader>
                        A grid can increase its gutters to allow for more negative space.
                    </HeaderSubheader>
                </Header>

                <Grid columns={6} relaxed={true}>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {relaxedSample}
                </Highlighter>

                {/* Stressed */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Stressed
                    <HeaderSubheader>
                        A grid can remove its gutters.
                    </HeaderSubheader>
                </Header>

                <Grid columns={6} stressed={true}>
                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>

                    <Grid.Column>
                        <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                    </Grid.Column>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {stressedSample}
                </Highlighter>

                {/* Floated */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Floated
                    <HeaderSubheader>
                        A column can sit against the left or right side of a row.
                    </HeaderSubheader>
                </Header>

                <Grid>
                    <Grid.Row>
                        <Grid.Column floated="left">
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column floated="right">
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column floated="right">
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {floatedSample}
                </Highlighter>

                {/* Horizontal Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Horizontal Align
                    <HeaderSubheader>
                        A grid or row can specify the horizontal alignment of the columns.
                    </HeaderSubheader>
                </Header>

                <Grid horizontalAlign="right">
                    <Grid.Row>
                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row horizontalAlign="center">
                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row horizontalAlign="left">
                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {horizontalAlignSample}
                </Highlighter>

                {/* Vertical Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Vertical Align
                    <HeaderSubheader>
                        A grid or row can specify the vertical alignment of the columns.
                    </HeaderSubheader>
                </Header>

                <Grid verticalAlign="middle">
                    <Grid.Row style={{ height: '200px' }}>
                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row verticalAlign="bottom" style={{ height: '200px' }}>
                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {verticalAlignSample}
                </Highlighter>

                {/* Text Align */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Text Align
                    <HeaderSubheader>
                        A grid, row, or column can specify its text alignement.
                    </HeaderSubheader>
                </Header>

                <Grid columns={3} textAlign="left">
                    <Grid.Row>
                        <Grid.Column>
                            <div style={{ backgroundColor: '#dbe0e3', padding: '11px' }}>
                                Dogs
                            </div>
                        </Grid.Column>

                        <Grid.Column>
                            <div style={{ backgroundColor: '#dbe0e3', padding: '11px' }}>
                                Cats
                            </div>
                        </Grid.Column>

                        <Grid.Column textAlign="right">
                            <div style={{ backgroundColor: '#dbe0e3', padding: '11px' }}>
                                Skunks
                            </div>
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row columns={1} textAlign="center">
                        <Grid.Column>
                            <div style={{ backgroundColor: '#dbe0e3', padding: '11px' }}>
                                Nice Marmot.
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {textAlignSample}
                </Highlighter>

                {/* Responsive Width */}
                <Header size="large" style={{ marginTop: '55px' }} sub={true}>
                    Responsive Width
                    <HeaderSubheader>
                        A column can specify a width for a specific device.
                    </HeaderSubheader>
                </Header>

                <Grid>
                    <Grid.Row stackable={true}>
                        <Grid.Column width={12} mobileLarge={6} tablet={6} laptop={2}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={12} mobileLarge={6} tablet={6} laptop={2}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={12} mobileLarge={6} tablet={12} laptop={2}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={12} mobileLarge={6} tablet={6} laptop={3}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={12} mobileLarge={6} tablet={6} laptop={3}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>

                    <Grid.Row stackable={true}>
                        <Grid.Column width={6} tablet={6} laptop={3}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={6} tablet={6} laptop={3}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={6} tablet={6} laptop={3}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>

                        <Grid.Column width={6} tablet={6} laptop={3}>
                            <img style={{ display: 'block', width: '100%' }} src="http://placehold.it/300x300/dbe0e3/1c2530" />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <Highlighter customStyle={{ marginBottom: '44px', marginTop: '44px' }}>
                    {responsiveWidthSample}
                </Highlighter>
            </Main>
        );
    }

}
