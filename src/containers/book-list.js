import React, { Component } from 'react';
import { connect } from 'react-redux';

// Container is just a component that have direct access to the state provided by Redux
class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        });
    }

    render() {
        //console.log(this.props.abc); // -> will get the key attribute "abc" set on the mapStateToProps function
        // This function is the "glue" used to connect react and redux, to get the key "abc" from the state and set it on the props
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is return will show up as props inside of BookList
    return {
        books: state.books
    };
}

export default connect(mapStateToProps)(BookList);
