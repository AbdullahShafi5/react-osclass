import {
    PROPERTY_ATTRIBUTES_REQUEST_STARTED,
    PROPERTY_ATTRIBUTES_REQUEST_COMPLETED,
    PROPERTY_ATTRIBUTES_REQUEST_FAILED,
} from '../../constants/Constants';

import { field, getField } from './../../constants/FieldNames'


export default function reducer(state={
    processing: false,
    options: []
}, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {

        case PROPERTY_ATTRIBUTES_REQUEST_STARTED:
            newState.processing = true;
            break;

        case PROPERTY_ATTRIBUTES_REQUEST_COMPLETED:
            newState.processing = false;
            newState.options = Object.keys(action.payload).map(name => {
                let field = getField(name);
                return {
                    name: name,
                    label: field ? field.label : 'Missing Label',
                    value: action.payload[name]
                };
            });
            break;

        case PROPERTY_ATTRIBUTES_REQUEST_FAILED:
            newState.processing = false;
            break;
    }

    return newState;
}