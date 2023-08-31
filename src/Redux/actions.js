// actions.js
import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './reducer';

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchDataRequest());
        fetch('https://titans-arena-server.vercel.app/blogs')
            .then(response => response.json())
            .then(data => {
                dispatch(fetchDataSuccess(data));
            })
            .catch(error => {
                dispatch(fetchDataFailure(error.message));
            });
    };
};
