'use strict';

import PropTypes from 'prop-types';
import React from 'react';
import { Header, TitleBar } from 'react-cm-ui';

// Docs UI Components
import Main from 'components/UI/Main.react';

export default class ElementsList extends React.Component {
    render() {

        return (
            <Main page="headers">
                <TitleBar title="List" />

                {/* Loader */}
                <Header size="large" style={{ marginTop: '55px' }}>
                    Documentation and examples coming soon.
                </Header>
            </Main>
        );
    }

}
