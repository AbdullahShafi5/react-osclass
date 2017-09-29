import {
    RESULTS_LAYOUT_STYLE_CARD,
    RESULTS_LAYOUT_STYLE_LIST,
    TRIGGER_RESULTS_LAYOUT_STYLE_CARD,
    TRIGGER_RESULTS_LAYOUT_STYLE_LIST
} from '../constants/LayoutConstants';

export function toggleListStyle(style = RESULTS_LAYOUT_STYLE_CARD) {

    return dispatch => {
        switch(style) {
            case RESULTS_LAYOUT_STYLE_LIST:
                dispatch({type: TRIGGER_RESULTS_LAYOUT_STYLE_LIST, payload: RESULTS_LAYOUT_STYLE_LIST});
                break;
            default:
                dispatch({type: TRIGGER_RESULTS_LAYOUT_STYLE_CARD, payload: RESULTS_LAYOUT_STYLE_CARD});
                break;
        }
    }
}