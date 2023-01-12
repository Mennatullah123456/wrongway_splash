export const fetchData = () => {
    return (dispatch) => {
        // Code to fetch data from the server
        // When the data is fetched, dispatch an action to update the state
        dispatch({
            type: 'FETCH_DATA',
            payload: fetchedData
        });
    }
};
