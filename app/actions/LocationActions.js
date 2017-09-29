import { fetch } from '../Requester';
import {
    REGION_REQUEST_STARTED,
    REGION_REQUEST_COMPLETED,
    REGION_REQUEST_FAILED,

    CITY_REQUEST_STARTED,
    CITY_REQUEST_COMPLETED,
    CITY_REQUEST_FAILED,

    DEFAULT_COUNTRY_ID
} from '../constants/Constants';


export function loadRegions() {

    return dispatch => {

        dispatch({ type: REGION_REQUEST_STARTED });

        let query = Object.assign({page: 'ajax', action: 'regions'}, {countryId: DEFAULT_COUNTRY_ID});

        fetch(query)

            .then((data) => {
                dispatch({ type: REGION_REQUEST_COMPLETED, payload: data });
            })

            .catch((err) => {
                    console.log('REQUEST ERROR');
                    console.log(err);
                    dispatch({ type: REGION_REQUEST_FAILED, error: err });
                }
            );
    }
}


/**
 *Return cities given a regionId
 */
export function loadCities(regionId) {

    return dispatch => {

        dispatch({ type: CITY_REQUEST_STARTED });

        let query = Object.assign({page: 'ajax', action: 'cities'}, {regionId: regionId});

        fetch(query)

            .then((data) => {
                dispatch({ type: CITY_REQUEST_COMPLETED, payload: data, regionId: regionId });
            })

            .catch((err) => {
                    console.log('REQUEST ERROR');
                    console.log(err);
                    dispatch({ type: CITY_REQUEST_FAILED, error: err });
                }
            );
    }
}


/**
 * Autocomplete country names
 */
export function autocompleteCountry() {

}

/**
 * Autocomplete region names
 */
export function autocompleteRegion() {

}

/**
 * Autocomplete city names
 */
export function autocompleteCity() {

}