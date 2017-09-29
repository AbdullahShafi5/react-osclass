import { TOGGLE_MORE_FILTERS } from './../../constants/realstate/LayoutContants'


export default function reducer(state={
    more_filters: false
}, action) {

    let newState = Object.assign({}, state);

    switch( action.type ) {
        case TOGGLE_MORE_FILTERS:
            newState.more_filters = !state.more_filters;
            break;
    }

    return newState;
}