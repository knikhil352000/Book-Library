import { useQuery } from '@apollo/client'
import React from 'react'
import { getBookQuery } from '../queries/queries'
const BookDetails = (props) => {
    // console.log(props.bookid);
    const { loading, error, data } = useQuery(getBookQuery,{
        variables: {id : props.bookid},
    })
    if (loading) return <p>Loading Books...</p>;
    if (error) return <p>Error :(</p>;
    // console.log(data);
    const displayBooksDetails = () => {
        const { book } = data;
        if(book){
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>{book.genre}</p>
                    <p>{book.author.name}</p>
                    <ul className="other-books">
                        {
                            book.author.books.map((item) => {
                                return <li key={item.id}>{item.name}</li>
                            })
                        }
                    </ul>
                </div>
            )
        }else{
            return (
                <div>
                    No books selected...
                </div>
            )
        }
    }
    return (
        <div id="book-details">
            {displayBooksDetails()}
        </div>
    )
}

export default BookDetails
