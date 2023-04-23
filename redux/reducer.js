
// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const MULTIPLE10 = "MULTIPLE10";
const DIVIDE10 = "DIVIDE10";

// Action creators
export const increment = () => ({
    type: INCREMENT,
})

export const decrement = () => ({
    type: DECREMENT,
})

export const multiple10 = () => ({
    type: MULTIPLE10
})


export const divide10 = () => ({
    type: DIVIDE10
})

export const reset = () => ({
    type: RESET
})

// Initial state
const initialState = {
    counter: 0
}

// Root reducer
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case MULTIPLE10:
            return {
                ...state,
                counter: state.counter * 10
            }
        case DIVIDE10:
            return {
                ...state,
                counter: (state.counter - state.counter % 10) / 10
            }
        case RESET:
            return {
                ...state,
                counter: 0
            }
        default:
            return state
    }
}

export default rootReducer