import { actions } from "./actions";

const INITIAL_STATE = {
    mobileWidth: 767,
    sidedrawer: false,
    serviceElement: 'service'
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type){
        case actions.TOGGLE_SIDEDRAWER:
            return {
                ...state,
                sidedrawer: !state.sidedrawer
            }
        
        case actions.SWITCH_TO_ELEMENTS:
            return {
                ...state,
                serviceElement: action.payload
            }
        
        default:
            return state;
    }
}