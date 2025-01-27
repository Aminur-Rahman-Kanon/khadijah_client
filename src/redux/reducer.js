const INITIAL_STATE = {
    mobileWidth: 767,
    sidedrawer: false
}

export const reducer = (state = INITIAL_STATE, action) => {
    console.log(action);
    
    switch (action.type){
        case 'toggleSidedrawer':
            return {
                ...state,
                sidedrawer: !state.sidedrawer
            }
        
        default:
            return state;
    }
}