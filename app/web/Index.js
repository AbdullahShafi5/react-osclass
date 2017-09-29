import React          from 'react';
import { render }     from 'react-dom';
import Root           from './template/react-toolbox/containers/Root';
import configureStore from '../store/ConfigureStore';


const store = configureStore();
const rootElement = document.getElementById('root');

render( <Root store={store} />, rootElement );
