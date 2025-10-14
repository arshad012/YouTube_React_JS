import { clickedVideoDetails_key, youtubeSearchedData_key, watchHistory_localStorage_key } from "../../Utils";

export const searchedDataInitialState = () => {
    const data = JSON.parse(sessionStorage.getItem(youtubeSearchedData_key)) ?? [];

    return {
        videos: data?.items ?? [],
        pageInfo: data?.pageInfo ?? {},
        nextPageToken: data?.nextPageToken ?? "",
        clickedVideoDetails: JSON.parse(sessionStorage.getItem(clickedVideoDetails_key)) ?? "",
        watchHistory: JSON.parse(sessionStorage.getItem(watchHistory_localStorage_key)) ?? []
    }
}