import React, {Component} from "react";
import AddBook from "./component/AddBook";
import BookList from "./component/BookList";

class App extends Component {
  render() {
    return (
      <div id="main">
        <h1>Book's List</h1>
        <BookList />
        <AddBook />
      </div>
    );
  }
}
export default App;
