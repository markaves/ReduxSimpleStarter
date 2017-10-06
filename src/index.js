import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import TYSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
const API_KEY = 'AIzaSyCP6fKq548S5nXozBWRRgmtywxWxditD1U';


// Create a new component.  This component should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
        this.setState({ videos: videos });

    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        </div>
      );
  }
}
//Take this compoment's generated html and put it in the page (in the dom)
ReactDOM.render(<App />,document.querySelector('.container'));
