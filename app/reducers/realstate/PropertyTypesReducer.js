import {
    PROPERTY_TYPES_REQUEST_STARTED,
    PROPERTY_TYPES_REQUEST_COMPLETED,
    PROPERTY_TYPES_REQUEST_FAILED,
} from '../../constants/Constants';

import field from '../../constants/FieldNames';

export default function reducer(state={
    processing: false,
    options: []
}, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {

        case PROPERTY_TYPES_REQUEST_STARTED:
            newState.processing = true;
            break;

        case PROPERTY_TYPES_REQUEST_COMPLETED:
            newState.processing = false;
            newState.options = Object.keys(action.payload).map(id => {
                return {
                    name: field.LISTING_TYPE.name.concat('_' + id),
                    label: action.payload[id],
                    value: id
                };
            });
            break;

        case PROPERTY_TYPES_REQUEST_FAILED:
            newState.processing = false;
            newState.options = state.options;
            break;
    }

    return newState;
}