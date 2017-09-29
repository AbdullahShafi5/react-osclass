import {
    RESULTS_LAYOUT_STYLE_CARD,
    RESULTS_LAYOUT_STYLE_LIST,
    TRIGGER_RESULTS_LAYOUT_STYLE_CARD,
    TRIGGER_RESULTS_LAYOUT_STYLE_LIST
} from '../constants/LayoutConstants';


export default function reducer(state={
    results_list_style: RESULTS_LAYOUT_STYLE_CARD
}, action) {

    let newState = Object.assign({}, state);

    switch(action.type) {

        case TRIGGER_RESULTS_LAYOUT_STYLE_CARD:
            newState.results_list_style = RESULTS_LAYOUT_STYLE_CARD;
            break;

        case TRIGGER_RESULTS_LAYOUT_STYLE_LIST:
            newState.results_list_style = RESULTS_LAYOUT_STYLE_LIST;
            break;
    }

    return newState;
}