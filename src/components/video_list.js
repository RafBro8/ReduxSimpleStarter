import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // const videos = props.videos;

    const videoItems = props.videos.map((video) => {
        return(
            <VideoListItem
                onVideoSelect={props.onVideoSelect}
                key ={video.etag}
                video={video}/>
        //etag is unique id for videos (id for data you are retrieving from API)
        //etag is found in browser - network -  All - search?part=snippet&key
        );
    });
    return(
        <ul className="col-md-4 list-group">
           {props.videos.length}
            {videoItems}
        </ul>
    );
};

export default VideoList;

//In function component props is argument passed
//In class component props is available everywhere via this.props