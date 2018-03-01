import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select book to get started</div>;
    }
    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  //whatever is returned shows up as props
  return {
    book: state.activeBook //activeBook object
  }
}

export default connect(mapStateToProps)(BookDetail);
