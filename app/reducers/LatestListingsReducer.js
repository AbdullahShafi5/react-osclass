import {
    LATEST_LISTINGS_REQUEST_STARTED,
    LATEST_LISTINGS_REQUEST_COMPLETED,
    LATEST_LISTINGS_REQUEST_FAILED
} from '../constants/Constants';


export default function reducer(state={
    processing: false,
    items: []
}, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {

        case LATEST_LISTINGS_REQUEST_STARTED:
            newState.processing = true;
            break;

        case LATEST_LISTINGS_REQUEST_COMPLETED:
            newState.processing = false;
            newState.items = action.payload;
            break;

        case LATEST_LISTINGS_REQUEST_FAILED:
            newState.processing = false;
            break;
    }

    return newState;
}
