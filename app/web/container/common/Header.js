import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

//COMPONENTS
import HeaderComponent from 'template/common/Header' 

//ACTIONS
import {getRegions} from 'action/LocationActions';


export default class Header extends Component {

    componentDidMount() {
        //this.props.dispatch(getRegions());
    }

    render() {
        return <HeaderComponent />
    }
}