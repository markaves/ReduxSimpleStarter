import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC3sc5GjkZgN_0luE6Xb82L8X-QSdPCH-k';


// Create a new component.  This component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos });

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
//Take this compoment's generated html and put it in the page (in the dom)
ReactDOM.render(<App />,document.querySelector('.container'));
