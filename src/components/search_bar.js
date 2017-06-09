import React, { Component } from 'react'; // needed for JSX notation
//const Component = React.Component;

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {term : ''};
    }

    render() {
        //return <input onChange={this.onInputChange} />;
        return (
            <div>
                <input onChange={(event) => this.setState({term : event.target.value})} />
                <br/>Value of the input : {this.state.term}
            </div>
        );
    }

    onInputChange(event) {
        console.log(event.target.value);
    }
}

export default SearchBar;
