import React, {Component} from 'react';
import {connect} from 'react-redux';

// COMPONENTS
import Header     from '../components/Header';
import SearchResults from '../components/search/SearchResults';

// ACTIONS
import {search} from '../../actions/SearchActions';


class App extends Component {

    componentDidMount() {
        this.props.dispatch(search({sPattern: 'test'}));
    }

    render() {
        return (
            <div className="react-native-web">
                <Header />
                <SearchResults/>
            </div>
        );
    }
}

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
