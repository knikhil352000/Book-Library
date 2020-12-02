import React, {useState} from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";
import BookDetails from "./BookDetails";

const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);
    const [selected, setSelected] = useState('');
    if (loading) return <p>Loading Books...</p>;
    if (error) return <p>Error :(</p>;
    // console.log(data);
        return (
            <div>
                <ul id="book-list">
                  {data.books.map(book => {
                    return <li key={book.id} onClick={e => setSelected(book.id)}>{book.name}</li>;
                  })}
                    
                </ul>
                <BookDetails bookid={selected}/>
            </div>
        );
    
}; 
export default BookList;
