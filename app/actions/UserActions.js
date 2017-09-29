import { fetch } from '../Requester';
import {
    ADMIN_REQUEST_STARTED,
    ADMIN_REQUEST_COMPLETED,
    ADMIN_REQUEST_FAILED
} from '../constants/Constants';


export function loadAdmin() {

    return dispatch => {

        dispatch({ type: ADMIN_REQUEST_STARTED });

        let query = {page: 'ajax', action: 'runhook', 'hook': 'default_user'};

        fetch(query)

            .then((data) => {
                dispatch({ type: ADMIN_REQUEST_COMPLETED, payload: data });
            })

            .catch((err) => {
                    console.log('REQUEST ERROR');
                    console.log(err);
                    dispatch({ type: ADMIN_REQUEST_FAILED, error: err });
                }
            );
    }
}