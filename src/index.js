import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD9z3LYAkcxt9r-jH0MbvbTtP9Qq0wSvoE';


//Create a new component. This component should produce some HTML
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
    };

        //YTSearch({key: API_KEY, term: 'dogs'}, (videos) => { ---moved down to videoSearch(term) below
            // '(videos) =>' is equivalent to 'function(videos)'
            // console.log(videos);
            //this.setState({ videos: data });
            //this.setState({ videos: videos});
            //above 2 lines refactored to below 1 line
           // this.setState({  ---moved down to videoSearch(term) below
                //videos: videos, ---moved down to videoSearch(term) below
                //selectedVideo: videos[0]  ---moved down to videoSearch(term) below
            //});
        //});

        this.videoSearch('dogs');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    //when state changes, components re-Render!!!!

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);
        //adding lodash debounce to throttle or slowdown search box and results
        //its same way as Google search box works
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                {/*<VideoDetail video={this.state.videos[0]} />*/}
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
                    //onVideo select is callback used for Parent - Child communication
                    videos={this.state.videos} />
            </div>
        );
    }
}
//videos passed as a prop to child components(VideoList) above



//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));


//App is a class, <App /> is an instance of class