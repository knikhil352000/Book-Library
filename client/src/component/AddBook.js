import React from "react";
import { gql, useQuery } from "@apollo/client";

const getAuthorsQuery = gql`
  {
    authors {
      name
      id
    }
  }
`;
const AddBook = () => {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    
    if (loading) return <option>Loading</option>;
    if (error) return <option>Error :(</option>;
    // console.log(data);
    
        return (
            <form action="" id="add-book">
                <div className="field">
                    <label htmlFor="">Book Name:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label htmlFor="">Genre:</label>
                    <input type="text"/>
                </div>
                <div className="field">
                    <label htmlFor="">Author:</label>
                    <select name="" id="">
                        {data.authors.map((author) => {
                           return <option key={author.id} value={author.id}>{author.name}</option>
                        })}
                        
                    </select>
                </div>
                <button>+</button>
            </form>
        );
    
}; 
export default AddBook;

