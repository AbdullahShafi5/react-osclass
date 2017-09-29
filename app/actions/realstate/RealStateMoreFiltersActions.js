import { TOGGLE_MORE_FILTERS } from './../../constants/realstate/LayoutContants'


export function toggleMoreRealStateFilters() {

    return dispatch => {
        dispatch({ type: TOGGLE_MORE_FILTERS });
    }
}
