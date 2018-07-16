import React, { Component } from 'react'
import { connect  } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Form, Field, reduxForm, formValueSelector } from 'redux-form'
import Button from 'react-toolbox/lib/button'

// COMPONENTS
import DropDown from "./../../component/form/Dropdown"
import Checkbox from "./..../component/form/Checkbox"
import field from './../../../../../constants/FieldNames';

const FORM = 'filter-box';

@connect(
    store => {
        return {
            region:             store.region,
            city:               store.city,
            real_state:         store.real_state
        }
    },
    action => {
        return {
            getValue: action((dispatch, getState) => {
                return (field) => {
                    const selector = formValueSelector(FORM);
                    return selector(getState(), field);
                }
            })
        }
    }
)
class FilterBox extends Component {

    componentWillUpdate(nextProps) {

        
    }

    toggleMoreFilters() {
        this.props.dispatch(toggleMoreRealStateFilters())
    }

    render() {

        return (
            <div className={FORM}>
                <Form onSubmit={this.props.handleSubmit}>
                    <Grid>
                        <Row>
                            <Col xs><h2 className='heading'>Search Properties</h2></Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6} md>
                                <Field
                                    name={field.REGION.name}
                                    label={field.REGION.label}
                                    component={DropDown}
                                    source={this.props.region.dropdown}
                                    disabled={!this.props.region.dropdown.length}/>
                            </Col>
                            <Col xs={12} sm={6} md>
                                <Field
                                    name={field.LISTING_TYPE.name}
                                    label={field.LISTING_TYPE.label}
                                    component={DropDown}
                                    source={this.props.real_state.listing_type.dropdown} />
                            </Col>
                            <Col xs={12} sm={6} md>
                                <Field
                                    name={field.ROOMS.name}
                                    label={field.ROOMS.label}
                                    component={DropDown}
                                    source={this.props.real_state.property_rooms.dropdown} />
                            </Col>
                            <Col xs={12} sm={6} md>
                                <Field
                                    name={field.BATHROOMS.name}
                                    label={field.BATHROOMS.label}
                                    component={DropDown}
                                    source={this.props.real_state.property_bathrooms.dropdown} />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} sm={6} md>
                                <Field
                                    name={field.CITY.name}
                                    label={field.CITY.label}
                                    component={DropDown}
                                    source={this.props.city.dropdown}
                                    disabled={!this.props.city.dropdown.length}/>

                            </Col>
                            <Col xs={12} sm={6} md>
                                <Field
                                    name={field.PRICE_MIN.name}
                                    label={field.PRICE_MIN.label}
                                    component={DropDown}
                                    source={this.props.real_state.property_price_min.dropdown} />
                            </Col>
                            <Col xs={12} sm={6} md>
                                <Field
                                    name={field.PRICE_MAX.name}
                                    label={field.PRICE_MAX.label}
                                    component={DropDown}
                                    source={this.props.real_state.property_price_max.dropdown} />
                            </Col>
                            <Col xs={12} sm={6} md>
                                <Button label='Search' icon='search' className='filter-action full-with' raised primary />
                                <a className='more-filters-action dumb-link' onClick={this.toggleMoreFilters.bind(this)}>
                                    {this.props.real_state.layout.more_filters ? 'Less Options' : 'More Options' }
                                </a>
                            </Col>
                        </Row>
                        <div className={'more-filters'.concat(this.props.real_state.layout.more_filters ? ' active' : '')}>
                            <Row>
                                <Col xs><h3 className='heading heading-property-types'>Property Types</h3></Col>
                            </Row>
                            <Row className='property-container'>
                                {
                                    this.props.real_state.property_type.options.map(prop => {
                                        return (
                                            <Col xs={12} sm={6} md={3} key={prop.name}>
                                                <Field
                                                    name={prop.name}
                                                    label={prop.label}
                                                    component={Checkbox} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                            <Row>
                                <Col xs><h3 className='heading heading-details'>Details</h3></Col>
                            </Row>
                            <Row className='property-container'>
                                {
                                    this.props.real_state.property_attribute.options.map(attr => {
                                        return (
                                            <Col xs={12} sm={6} md={3} key={attr.name}>
                                                <Field
                                                    name={attr.name}
                                                    label={attr.label}
                                                    component={Checkbox} />
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </Grid>
                </Form>
            </div>
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
    })(FilterBox)
)
