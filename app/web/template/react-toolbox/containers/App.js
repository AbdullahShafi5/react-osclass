import React, {Component} from 'react';
import {connect} from 'react-redux';

// COMPONENTS
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/Layout';
import UpperHeader     from '../components/UpperHeader';
import Header     from '../components/Header';
import HomeSearchArea from '../components/search/HomeSearchArea';
import FilterBox from '../components/search/FilterBox';
import ResultsSection from '../components/ResultsSection';

// ACTIONS
import { loadAdmin } from './../../../../actions/UserActions';


import './../styles/Style.scss';

@connect( (store) => {
    return {
        user: store.user
    };
} )
export default class App extends Component {

    componentWillMount() {
        if (!this.props.user.processing && !Object.keys(this.props.user.data).length) {
            this.props.dispatch(loadAdmin());
        }
    }

    render() {
        return (
            <Panel className='panel'>
                <Header />
                <div className='container'>
                    <HomeSearchArea/>
                    <FilterBox />
                    <ResultsSection />
                </div>
            </Panel>
        );
    }
}
