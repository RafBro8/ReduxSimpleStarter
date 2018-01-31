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

        this.state = { videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            // '(videos) =>' is equivalent to 'function(videos)'
            // console.log(videos);
            //this.setState({ videos: data });
            //this.setState({ videos: videos});
            //above 2 lines refactored to below 1 line
            this.setState({ videos });
            //Refactor above line instead of 'data' use 'videos'

        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}
//videos passed as a prop to child components(VideoList) above



//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));


//App is a class, <App /> is an instance of class