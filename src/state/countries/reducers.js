import { COUNTRIES_LIST } from './actions';

export const INITIAL_STATE = {
    list: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COUNTRIES_LIST:
            return {
                ...state,
                list: action.payload,
            }
        default:
            return state;
    }
};