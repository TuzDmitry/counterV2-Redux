export const ADJUST_VALUE_MAX = 'Counter-V2-Redux/widgets/ADJUST_VALUE_MAX'
export const ADJUST_VALUE_MIN = 'Counter-V2-Redux/widgets/ADJUST_VALUE_MIN'
export const APPLY_BUTTON_SET = 'Counter-V2-Redux/widgets/APPLY_BUTTON_SET'
export const INC_COUNTER = 'Counter-V2-Redux/widgets/INC_COUNTER'
export const RESET_TO_ZERO = 'Counter-V2-Redux/widgets/RESET_TO_ZERO'
export const SET_STATE_FROM_LOCAL_STORAGE = 'Counter-V2-Redux/widgets/SET_STATE_FROM_LOCAL_STORAGE'


let intialState = {
    minValue: 0,
    maxValue: 5,
    memoryValue: 0,
    isDisabledSet: true,
}
let stateFromLSAsString = localStorage.getItem("our-state")
////если таковая есть, то превращаем строку в объект и призваиваем стейту знаение из стораджа.
if (stateFromLSAsString) {
    intialState = JSON.parse(stateFromLSAsString);
}


export const reducer = (state = intialState, action) => {
    let newState;
    switch (action.type) {

        case ADJUST_VALUE_MAX:
            newState = {...state, maxValue: action.value, isDisabledSet: false}

            if ((action.value < 0) || (action.value <= state.minValue)) {
                newState = {...newState, isDisabledSet: true}
            }
            return newState;


        case ADJUST_VALUE_MIN:
            debugger
            newState = {...state, minValue: action.value, isDisabledSet: false}

            if ((action.value < 0) || (action.value >= state.maxValue)) {
                newState = {...newState, isDisabledSet: true}
            }
            return newState;


        case APPLY_BUTTON_SET:
            return {...state, memoryValue: state.minValue, isDisabledSet: true}




        case INC_COUNTER:
            let newNumber = parseInt(state.memoryValue) + 1;
            if (newNumber <= state.maxValue) {
                return {...state, memoryValue: newNumber}
            } else {
                return {...state}
            }

        case RESET_TO_ZERO:
            return {...state, memoryValue: state.minValue}

        case SET_STATE_FROM_LOCAL_STORAGE:
            return {...state, ...action.stateFromLS}

        default:
            return state;

    }
}


////Actions Creators////
export const adjustValueMaxAC = (value) => {
    return {
        type: ADJUST_VALUE_MAX,
        value
    }
}

export const adjustValueMinAC = (value) => {
    return {
        type: ADJUST_VALUE_MIN,
        value
    }
}

export const setSettingsAC = () => {

    return {
        type: APPLY_BUTTON_SET
    }
}

export const incCounterAC = () => {
    return {
        type: INC_COUNTER
    }
}

export const resetToZeroAC = () => {
    return {
        type: RESET_TO_ZERO
    }
}

export const setStateFromLocalStorageAC=()=>{

    let dd=localStorage.getItem('our-state')
    let stateFromLS=JSON.parse(dd)
    return (
        {type: SET_STATE_FROM_LOCAL_STORAGE,
            stateFromLS:stateFromLS}
    )
}
// export const saveStateToLS_AC=()=>{
//     localStorage.setItem("our-state-" + this.props.id, JSON.stringify(this.state));
//
//     let dd=localStorage.getItem('localStorage')
//     let stateFromLS=JSON.parse(dd)
//     return (
//         {type: SET_STATE_FROM_LOCAL_STORAGE,
//             stateFromLS:stateFromLS}
//     )
// }

