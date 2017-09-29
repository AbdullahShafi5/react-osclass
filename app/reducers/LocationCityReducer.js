import {
    CITY_REQUEST_STARTED,
    CITY_REQUEST_COMPLETED,
    CITY_REQUEST_FAILED
} from '../constants/Constants';

import field from '../constants/FieldNames';


export default function reducer(state={
    processing: false,
    regionId: null,
    results: [],
    dropdown: []
}, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {

        case CITY_REQUEST_STARTED:
            newState.processing = true;
            break;

        case CITY_REQUEST_COMPLETED:
            newState.processing = false;
            newState.regionId = action.regionId;
            newState.results = action.payload;
            newState.dropdown =  [{
                value: null,
                label: field.CITY.label
            }].concat(
                action.payload.map((city) => {
                    return {
                        value: city.pk_i_id,
                        label: city.s_name
                    }
                })
            );
            break;

        case CITY_REQUEST_FAILED:
            newState.processing = false;
            break;
    }

    return newState;
}
