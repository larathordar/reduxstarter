import React from 'react';
import ReactDOM from 'react-Dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDPjGYtn2osNL4mwOfn7pFKrA8nbQKRC0M';

//Create a new component. This component should produce some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

//Take this component´s generated HTML nand put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
