import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    console.log(video);
    //({video}) is identical to doing const video = props.video
    //({onVideoSelect is identical to doing
    // const onVideoSelect = props.onVideoSelect

    const imageUrl = video.snippet.thumbnails.default.url;

    //video.snippet.thumbnails.default.url is found by doing console.log(video)
    //then going to console in browser - snippet-thumbnails-default-url
    //then pass the imageUrl to <img tag
    //also pass video.snippet.title to className below



    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;