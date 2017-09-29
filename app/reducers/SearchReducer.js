import {
    SEARCH_REQUEST_STARTED,
    SEARCH_REQUEST_COMPLETED,
    SEARCH_REQUEST_FAILED,
    FORM_FIELD_CHANGED
} from '../constants/Constants';


export default function reducer(state={
    processing: false,
    results: [],
    values: {}
}, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {

        case SEARCH_REQUEST_STARTED:
            newState.processing = true;
            break;

        case SEARCH_REQUEST_COMPLETED:
            newState.processing = false;
            newState.results = action.payload;
            break;

        case SEARCH_REQUEST_FAILED:
            newState.processing = false;
            break;

        case FORM_FIELD_CHANGED:
            if (action.meta.form === 'filter-box') {
                newState.values[action.meta.field] = action.payload;
            }
    }

    return !newState ? state : newState;
}