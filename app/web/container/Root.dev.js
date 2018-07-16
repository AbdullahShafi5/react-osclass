import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

// PAGES
import Index from 'container/real-estate/Index';
import Search from 'container/real-estate/Search';

// COMPONENTS
import DevTools from './DevTools';
import Header     from 'container/common/Header';

// ACTIONS
import { loadAdmin } from 'action/UserActions';

const history = createHistory()

@connect( (store) => {
    return {
        user: store.user
    };
} )

export default class Root extends Component {

    componentWillMount() {
        if (!this.props.user.processing && !Object.keys(this.props.user.data).length) {
            this.props.dispatch(loadAdmin());
        }
    }

    render() {
        return (
            <div className='master'>
                <Header store={this.props.store}/>
                <Provider store={this.props.store}>
                    <BrowserRouter>
                        <Panel className='panel'>
                            <Route exact path="/" component={Index}/>
                            <Route path="/search" component={Search}/>
                        </Panel>
                    </BrowserRouter>
                </Provider>
            </div>
        );
    }
}

Root.propTypes = {
    store: PropTypes.object.isRequired
};
