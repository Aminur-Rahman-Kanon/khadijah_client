import { actions } from "./actions";

const INITIAL_STATE = {
    mobileWidth: 767,
    sidedrawer: false,
    nestedList: false,
    serviceElement: 'service',
    userInput: {
        service: '',
        date: '',
        price: '',
        duration: '',
        beginTime: '',
        endTime: '',
        details: {
            name: '',
            email: '',
            phoneNumber: '',
            notes: ''
        }
    }
}

export const reducer = (state = INITIAL_STATE, action) => {

    switch (action.type){
        case actions.TOGGLE_SIDEDRAWER:
            return {
                ...state,
                sidedrawer: !state.sidedrawer,
                nestedList: false
            }
        
        case actions.SWITCH_TO_ELEMENTS:
            return {
                ...state,
                serviceElement: action.payload
            }

        case actions.selectService:
            console.log(action);
            
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    service: action.payload
                }
            }
        
        case actions.selectDate:
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    date: action.payload
                }
            }

        case actions.selectBeginTime:
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    beginTime: action.payload
                }
            }

        case actions.selectEndTime:
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    endTime: action.payload
                }
            }

        case actions.selectDuration:
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    duration: action.payload.duration,
                    price: action.payload.price
                }
            }

        case actions.setDetails:
            return {
                ...state,
                userInput: {
                    ...state.userInput,
                    details: {
                        ...action.payload
                    }
                }
            }

        case actions.clearAlldata:
            return {
                ...state,
                userInput: {
                    details: {
                        name: '',
                        email: '',
                        phoneNumber: '',
                        notes: ''
                    }
                }
            }
        case actions.toggleNestedList:
            return window.innerWidth <= state.mobileWidth ? ({ ...state, nestedList: !state.nestedList }) : ({ ...state, nestedList: false })
        default:
            return state;
    }
}