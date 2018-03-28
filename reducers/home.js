import { DATA_AVAILABLE } from "../actions/home"

const dataState = { loading:true, data: [] };
 
const homeReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = {...state, loading:false, data: action.data };
            break;
    }
    return state;
};

export default homeReducer;