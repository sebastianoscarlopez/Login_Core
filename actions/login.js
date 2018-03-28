import { URLs } from "../config/settings";

export const TRY_AUTHENTICATE = 'TRY_AUTHENTICATE'
export const AUTHENTICATE_ERROR = 'AUTHENTICATE_ERROR'
export const AUTHENTICATE_OK = 'AUTHENTICATE_OK'

function tryAutenticate(user, password)
{
    return (dispatch) => {
        dispatch({type:TRY_AUTHENTICATE});
        const url = URLs.LOGIN`${user}${password}`;
        fetch(url)
        .then(response => {
            return response.json()
        })
        .then(responseJson => {
            dispatch({type: responseJson.Status.Codigo===1
                ? AUTHENTICATE_OK
                : AUTHENTICATE_ERROR
                , message: responseJson.Status.Texto});
        })
        .catch(error => {
            dispatch({type:AUTHENTICATE_ERROR, message: `Error inesperado ${error}`});
        })
    };
}

export default { tryAutenticate };
