export const DATA_AVAILABLE = 'DATA_AVAILABLE';

//Import the sample data
import Data from '../instructions.json';

function getData() {
    return (dispatch) => {
        const data  = Data.instructions;
        dispatch({type: DATA_AVAILABLE, data:data});
    };
}

export default { getData };