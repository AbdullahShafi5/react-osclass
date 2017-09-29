import { fetch } from '../../Requester';
import {
    PROPERTY_TYPES_REQUEST_STARTED,
    PROPERTY_TYPES_REQUEST_COMPLETED,
    PROPERTY_TYPES_REQUEST_FAILED,

    PROPERTY_ATTRIBUTES_REQUEST_STARTED,
    PROPERTY_ATTRIBUTES_REQUEST_COMPLETED,
    PROPERTY_ATTRIBUTES_REQUEST_FAILED,
} from '../../constants/Constants';


export function loadPropertyTypes() {

    return dispatch => {

        dispatch({ type: PROPERTY_TYPES_REQUEST_STARTED });

        let query = {
            page:       'ajax',
            action:     'runhook',
            hook:       'realstate_property_types'
        };

        fetch(query)
            .then((data) => {
                dispatch({ type: PROPERTY_TYPES_REQUEST_COMPLETED, payload: data });
            })
            .catch((err) => {
                    console.log('REQUEST ERROR');
                    console.log(err);
                    dispatch({ type: PROPERTY_TYPES_REQUEST_FAILED, error: err });
                }
            );
    }
}

export function loadPropertyAttributes() {

    return dispatch => {

        dispatch({ type: PROPERTY_ATTRIBUTES_REQUEST_STARTED });

        let query = {
            page:       'ajax',
            action:     'runhook',
            hook:       'realstate_listing_attributes'
        };

        fetch(query)
            .then((data) => {
                dispatch({ type: PROPERTY_ATTRIBUTES_REQUEST_COMPLETED, payload: data });
            })
            .catch((err) => {
                    console.log('REQUEST ERROR');
                    console.log(err);
                    dispatch({ type: PROPERTY_ATTRIBUTES_REQUEST_FAILED, error: err });
                }
            );
    }
}
