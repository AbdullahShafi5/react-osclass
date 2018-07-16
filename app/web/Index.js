import React          from 'react';
import { render }     from 'react-dom';
import configureStore from '../store/ConfigureStore';

import Root from 'container/Root';

const store = configureStore();
const rootElement = document.getElementById('root');

render( <Root store={store} />, rootElement );
