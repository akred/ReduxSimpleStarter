import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux';

// Container is just a component that have direct access to the state provided by Redux
class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}</li>
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

/**
 * Anything returned from this function will end up ad props on the BookList container
 */
function mapDispatchToProps(dispatch) {
    // Whenever selectBook is called, the result should be passed to all our reducers
    return bindActionCreators({selectBook : selectBook}, dispatch);
}

// Promote BookList from a component to a container - it need to knows about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
