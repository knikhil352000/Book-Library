import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { addBookMutation, getAuthorsQuery, getBooksQuery } from "../queries/queries";
const AddBook = () => {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [addBook] = useMutation(addBookMutation);
    const [bookName, setBookName] = useState('')
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');
    const submitForm = (e) =>{
        e.preventDefault();
        // console.log(bookName, genre, authorId);
        addBook({
            variables:{
                name: bookName,
                genre: genre,
                authorId: authorId
            },
            refetchQueries:[{query: getBooksQuery}]
        })
    }
    if (loading) return <option>Loading</option>;
    if (error) return <option>Error :(</option>;
    // console.log(data);
    
        return (
            <form onSubmit={submitForm} id="add-book" >
                <div className="field">
                    <label htmlFor="">Book Name:</label>
                    <input type="text" onChange={e => setBookName(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="">Genre:</label>
                    <input type="text" onChange={e => setGenre(e.target.value)}/>
                </div>
                <div className="field">
                    <label htmlFor="">Author:</label>
                    <select name="" id="" onChange={e => setAuthorId(e.target.value)}>
                        <option>Select Author</option>
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

