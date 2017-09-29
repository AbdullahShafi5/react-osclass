import { combineReducers } from 'redux';

import listing_type from './../realstate/ListingTypeReducer';
import property_types from './../realstate/PropertyTypesReducer';
import property_attributes from './../realstate/PropertyAttributesReducer';
import property_rooms from './../realstate/PropertyRooms';
import property_bathrooms from './../realstate/PropertyBathrooms';
import {reducerMax, reducerMin} from './../realstate/PropertyPriceReducer';
import layout from './../realstate/LayoutReducer';


export default combineReducers({
    'listing_type'              : listing_type,
    'property_type'             : property_types,
    'property_attribute'        : property_attributes,
    'property_rooms'            : property_rooms,
    'property_bathrooms'        : property_bathrooms,
    'property_price_min'        : reducerMin,
    'property_price_max'        : reducerMax,
    'layout'                    : layout
});