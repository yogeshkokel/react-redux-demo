import { BUY_CANDY, ADD_CANDY } from './candyTypes';

const initialState = {
    numOfCandy: 20
}

const candyReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CANDY:
            return { ...state, numOfCandy: state.numOfCandy - 1 }
        case ADD_CANDY:
            return { ...state, numOfCandy: state.numOfCandy + 1 }
        default:
            return state
    }
}

export default candyReducer