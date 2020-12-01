import React, {Component} from "react";
import {ApolloClient, ApolloProvider} from "@apollo/client";
import BookList from "./component/BookList";

//apollo client setup
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Nikhil Singh</h1>
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}
export default App;
