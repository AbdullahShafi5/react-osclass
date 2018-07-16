import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { Form, Field, reduxForm, formValueSelector } from 'redux-form'

import DropDown from "./Dropdown"


const FORM = 'filter-box';

class SortByForm extends Component {

    render() {

        const sort = [
            {
                label: 'Price: Low to High',
                value: 'price:asc'
            },
            {
                label: 'Price: High to Low',
                value: 'price:desc'
            }
        ];

        return (
            <Form onSubmit={this.props.handleSubmit}>
                <Field
                    name='sort-by'
                    component={DropDown}
                    source={sort}
                    disabled={false}
                    allowBlank={false}/>
            </Form>
        );
    }
}

export default  connect(
    state => ({
        city: state.city,
        region: state.region
    })
)(
    reduxForm({
        form: FORM
    })(SortByForm)
)
