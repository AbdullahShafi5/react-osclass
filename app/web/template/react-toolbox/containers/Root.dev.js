import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import ReactOsClass from './App';
import DevTools from './DevTools';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/Layout';


export default class Root extends Component {
    render() {
        return (
            <Provider store={this.props.store}>
                <Layout>
                    <ReactOsClass />
                    <DevTools />
                </Layout>
            </Provider>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired,
};
