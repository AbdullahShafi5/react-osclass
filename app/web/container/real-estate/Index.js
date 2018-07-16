import React, {Component} from 'react'
import {connect, createAction} from 'react-redux'

// ACTIONS
import { loadRegions, loadCities } from 'action/LocationActions'
import { loadPropertyTypes, loadPropertyAttributes } from 'action/realstate/RealStateProperties'
import { toggleMoreRealStateFilters } from 'action/realstate/RealStateMoreFiltersActions'

// COMPONENTS
import IndexContainer from 'template/container/real-estate/Index' 

// CONSTANTS
import field from 'constant/FieldNames';

@connect(
    store => {
        return {
            latest_listings:    store.latest_listings,
            region:             store.region,
            city:               store.city,
            real_state:         store.real_state
        }
    },
    action => {
        return {
            loadRegions:       createAction(loadRegions) ,
            loadCities:         loadCities,
            loadPropertyTypes:  loadPropertyTypes,
            loadPropertyAttributes: loadPropertyAttributes
        }
    }
)

export default class Index extends Component {

    componentDidMount() {
        const { latest_listings, region, city, real_state, getValue } = this.props;

        if (!latest_listings.processing && !latest_listings.items.length) {
            this.props.dispatch(loadLatestListings());
        }

        if (!region.processing && !region.results.length) {
            this.props.dispatch(loadRegions());
        }

        let regionId = getValue(field.REGION.name);

        if (!city.processing && regionId && regionId !== city.regionId) {
            this.props.dispatch(loadCities(regionId));
        }

        if (!real_state.property_type.processing && !Object.keys(real_state.property_type.options).length) {
            this.props.dispatch(loadPropertyTypes());
        }

        if (!real_state.property_attribute.processing && !Object.keys(real_state.property_attribute.options).length) {
            this.props.dispatch(loadPropertyAttributes());
        }
    }

    render() {
        return (
            <IndexContainer />
        );
    }
}
