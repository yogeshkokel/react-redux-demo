import { BUY_CANDY, ADD_CANDY } from './candyTypes';

export const buyCandy = () => {
    return {
        type: BUY_CANDY
    }
}

export const addCandy = () => {
    return {
        type: ADD_CANDY
    }
}