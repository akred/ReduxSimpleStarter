import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

// Youtube work account
const API_KEY = 'AIzaSyD4tH_7Jd9KPn3nPpSF1hdYBJ52LojpXv0';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
    console.log(data);
});

// Create a new component. This component should produce some HTML
const App = function() {
    return (
        <div>
            <SearchBar />
        </div>
    );
}
// Take this component's generated HTML and put it on the page (in the DOM)
React.render(<App/>, document.querySelector('.container'));
