import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
        key={book.title}
        onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned shows up as props for BookList
  return {
    books: state.books // book_reducers array
  }
}

//whatever is returned shows up as props for BookList
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed
  //  to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container. (connect to redux)
// it needs to know about new dispatch method, selectBook. Makes it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
