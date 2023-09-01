// import { fetchDataRequest, fetchDataSuccess, fetchDataFailure } from './reducer';

// export const fetchBlogData = (blogData) => async (dispatch) => {
//     const completedURL = `https://titans-arena-server.vercel.app/searchblogs?search=${blogData}`;

//     try {
//         // Dispatch request action
//         dispatch(fetchDataRequest());

//         const response = await fetch(completedURL);
//         const fetchedData = await response.json();

//         // Dispatch success action with fetched data
//         dispatch(fetchDataSuccess(fetchedData));
//     } catch (error) {
//         // Dispatch failure action with error message
//         dispatch(fetchDataFailure(error.message));
//     }
// };
