import React, {Component} from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {

    render() {
        return (
            <div className="book-detail">
                Book Detail !
            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}


export default connect(mapStateToProps)(BookDetail);
