import { gql, useQuery } from "@apollo/client";


const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

const addBookMutation = gql`
  mutation AddBook($name: String!, $genre: String!, $authorId:ID!){
      addBook(name: $name, genre: $genre, authorId: $authorId){
          name 
          genre
      }
  }
`;
export {getBooksQuery, getAuthorsQuery,addBookMutation};