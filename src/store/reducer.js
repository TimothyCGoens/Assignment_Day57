const initialState = {
    counter: 357
}

const reducer = (state = initialState,action) => {

    if(action.type == 'ADD_ONE') {
        return {
            ...state,
            counter: state.counter + 1
        }
    } else if(action.type == 'SUB_ONE') {
        return {
            ...state,
            counter: state.counter - 1
        }
    } else if(action.type == 'ADD_TEN') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    } else if(action.type == 'SUB_TEN') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }




    return state
}

export default reducer