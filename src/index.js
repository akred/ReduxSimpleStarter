import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// Youtube work account
const API_KEY = 'AIzaSyD4tH_7Jd9KPn3nPpSF1hdYBJ52LojpXv0';

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
