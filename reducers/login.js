import { TRY_AUTHENTICATE, AUTHENTICATE_ERROR, AUTHENTICATE_OK } from "../actions/login"

const initState = { loading:false, message: '', isLoggedIn: false };

const loginReducer = (state = initState, action) => {
    switch (action.type) {
        case TRY_AUTHENTICATE:
            state = {...state, loading: true, isLoggedIn: false};
            break;
        case AUTHENTICATE_ERROR:
            state = {...state, message: action.message, loading: false, isLoggedIn: false};
            break;
        case AUTHENTICATE_OK:
            state = {...state, isLoggedIn: true};
            break;
    }
    return state;
};

export default loginReducer;