import { fetch } from '../Requester';
import {
    SEARCH_REQUEST_STARTED,
    SEARCH_REQUEST,
    SEARCH_REQUEST_COMPLETED,
    SEARCH_REQUEST_FAILED,

    PROPERTY_TYPES_REQUEST_STARTED,
    PROPERTY_TYPES_REQUEST_COMPLETED,
    PROPERTY_TYPES_REQUEST_FAILED
} from '../constants/Constants';

/**
 * Search action
 *
 * @param params {
 *      iPage,
 *      sRegion,
 *      sCity,
 *      sCategory,
 *      sCountry,
 *      sRegion,
 *      sCity,
 *      sCityArea,
 *      sUser,
 *      sPattern,
 *      sOrder,
 *      iOrderType,
 *      bPic,
 *      sPriceMin,
 *      sPriceMax
 * }
 */
export function search(params) {
    return dispatch => {

        dispatch({ type: SEARCH_REQUEST_STARTED });

        let query = Object.assign({page: 'search'}, params);

        fetch(query)
            .then((data) => {
                dispatch({ type: SEARCH_REQUEST_COMPLETED, payload: data });
            })
            .catch((err) => {
                console.log('REQUEST ERROR');
                console.log(err);
                dispatch({ type: SEARCH_REQUEST_FAILED, error: err });
            }
        );
    }
}




