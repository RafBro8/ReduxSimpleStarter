import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;

        //this if statement is needed because when the app first starts
        //in index js it tries to Render components before the call to get data
        //from API is done and before data is received from API
        //YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>
        //above is the line that calls for data in index.js
    }
    const videoId = video.id.videoId;
    //const url = 'https://www.youtube.com/embed/' + videoId;
    const url =`https://www.youtube.com/embed/${videoId}`;
    //using ES6 Interpolation (use backticks)




    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;