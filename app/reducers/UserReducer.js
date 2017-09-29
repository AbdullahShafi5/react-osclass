import {
    ADMIN_REQUEST_STARTED,
    ADMIN_REQUEST_COMPLETED,
    ADMIN_REQUEST_FAILED
} from '../constants/Constants';


export default function reducer(state={
    processing: false,
    data: {}
}, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {

        case ADMIN_REQUEST_STARTED:
            newState.processing = true;
            break;

        case ADMIN_REQUEST_COMPLETED:
            newState.processing = false;
            newState.data = action.payload;
            break;

        case ADMIN_REQUEST_FAILED:
            newState.processing = false;
            break;
    }

    return newState;
}
