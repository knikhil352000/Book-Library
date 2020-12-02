import React from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);
    
    if (loading) return <p>Loading Books...</p>;
    if (error) return <p>Error :(</p>;
    // console.log(data);
    return data.books.map(book => {
        return (
            <div key={book.id}>
                <ul id="book-list">
                    <li >{book.name}</li>
                </ul>
            </div>
        );
    })
    
}; 
export default BookList;
