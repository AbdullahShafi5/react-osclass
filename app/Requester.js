import request from 'superagent';
import { BASE_URL, RESPONSE_FORMAT } from './constants/Constants';

/**
 * @param params to be passed to the get request
 * @returns {Promise}
 */
export function fetch(params) {
    return new Promise((resolve, reject) => {
        params.sFeed = RESPONSE_FORMAT;

        request.get(BASE_URL)
            .accept('application/json')
            .query(params)
            .end((err, res) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res.body);
                    }
                }
            );
        }
    );
}