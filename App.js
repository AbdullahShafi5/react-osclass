import 'expo';
import React from 'react';
import { AppRegistry } from 'react-native';
import 'react-thunk';

import Root           from './app/native/containers/Root';
import configureStore from './app/store/ConfigureStore.prod.js';

const store = configureStore();

export default class App extends React.Component {
    render() {
        return (
            <Root store={store} />
        );
    }
}

AppRegistry.registerComponent('main', () => App);