import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Field, reduxForm } from 'redux-form';

import Input from './../../component/form/Input';
import Button from 'react-toolbox/lib/button';
import DropDown from 'react-toolbox/lib/dropdown'


class HomeSearchBox extends Component {

    handleSearch() {
        console.log('Search triggered');
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <Row className='search-container'>
                <Col xs={12} sm={4} md={2} className='dropdown-container'>

                </Col>
                <Col xs={12} sm={6} md={8} className='input-container'>
                    <Field
                        name="search-field"
                        hint='Search by City, Address or Listing ID'
                        component={Input} type="text" />
                </Col>
                <Col xs={12} sm={2} md={2} className='action-container'>
                    <Button
                        label='Search'
                        onClick={this.handleSearch.bind(this)}
                        flat raised primary />
                </Col>
            </Row>
        );
    }
}

export default reduxForm({
    // a unique name for the form
    form: 'contact'
})(HomeSearchBox);