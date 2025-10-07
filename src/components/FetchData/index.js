const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchData = async (searchQuery) => {
    try {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchQuery}&key=${API_KEY}`);
        const data = await response.json();
        return {
            success: true,
            data
        }
    } catch (error) {
        console.log('error occured while fetching videos:', error);
        return {
            success: false,
            error: error.message
        }
    }
};

/*

Important notes

To use above fetch function in any React component, just don't use this anywhere instead use function given below in React component because this function needs a useDispatch hook
to update data and we can not use any hook outside of React component, so use below funciton in component and utilize ( fetchData ) function.

const searchData = async (searchQuery) => {
    if (!searchQuery) return;

    const result = await fetchData(searchQuery);
    if (result.success) {
        dispatch(updateSearchedData(result.data));
        isFirstRun.current = false;
        navigate("/");
    } else {
        alert('Something went wrong, please try again');
    }
}

*/