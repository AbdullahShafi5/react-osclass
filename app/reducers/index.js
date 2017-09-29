import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import search from './SearchReducer';
import city from './LocationCityReducer';
import region from './LocationRegionReducer';
import country from './LocationCountryReducer';
import real_state from './realstate/RealStateReducer';
import user from './UserReducer';
import latest_listings from './LatestListingsReducer';
import results_control_bar from './ResultsControlBarReducer'


export default combineReducers({
    'search'                : search,
    'city'                  : city,
    'region'                : region,
    'country'               : country,
    'real_state'            : real_state,
    'form'                  : formReducer,
    'user'                  : user,
    'latest_listings'       : latest_listings,
    'results_control_bar'   : results_control_bar
});
