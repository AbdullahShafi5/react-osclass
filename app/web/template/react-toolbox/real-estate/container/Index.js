import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom' 
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox/lib/Layout'

// COMPONENTS
import HomeSearchArea from './../component/HomeSearchArea'
import FilterBox from './../component/FilterBox'
import Listings from './../component/Listings'

// STYLES
import './../../styles/Style.scss'


export default class Index extends Component {

    render() {
        return (
            <div className='container'>
                <HomeSearchArea/>
                <FilterBox />
                <Listings />
            </div>
        );
    }
}
