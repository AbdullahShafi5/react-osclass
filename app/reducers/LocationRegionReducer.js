import {
    REGION_REQUEST_STARTED,
    REGION_REQUEST_COMPLETED,
    REGION_REQUEST_FAILED
} from '../constants/Constants';

import field from '../constants/FieldNames';


export default function reducer(state={
    processing: false,
    results: [],
    dropdown: []
}, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {

        case REGION_REQUEST_STARTED:
            newState.processing = true;
            break;

        case REGION_REQUEST_COMPLETED:
            newState.processing = false;
            newState.results = action.payload;
            newState.dropdown = [{
                label: field.REGION.label,
                value: null
            }].concat(
                action.payload.map((region) => {
                    return {
                        value: region.pk_i_id,
                        label: region.s_name
                    }
                })
            );
            break;

        case REGION_REQUEST_FAILED:
            newState.processing = false;
            break;
    }

    return newState;
}
