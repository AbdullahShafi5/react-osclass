import { fetch } from '../Requester';

import {
    LATEST_LISTINGS_REQUEST_STARTED,
    LATEST_LISTINGS_REQUEST_COMPLETED,
    LATEST_LISTINGS_REQUEST_FAILED
} from '../constants/Constants';

import ItemEntity from '../entities/ItemEntity'

export function loadLatestListings() {

    return dispatch => {

        dispatch({ type: LATEST_LISTINGS_REQUEST_STARTED });

        let query = {
            page: 'ajax',
            action: 'runhook',
            hook: 'latest_listings'
        };

        fetch(query)

            .then((data) => {

                data = data.map(item => {
                    return new ItemEntity(item).data;
                });

                dispatch({ type: LATEST_LISTINGS_REQUEST_COMPLETED, payload: data });
            })

            .catch((err) => {
                    console.log('REQUEST ERROR');
                    console.log(err);
                    dispatch({ type: LATEST_LISTINGS_REQUEST_FAILED, error: err });
                }
            );
    }
}