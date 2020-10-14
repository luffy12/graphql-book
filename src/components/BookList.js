import React,{useState} from 'react'
import { gql, useQuery } from '@apollo/client';
import {getBooksQuery} from '../queries/queries';
import BookDetail from '../components/BookDetail'
function BookList() {
    const { loading,error,data } = useQuery(getBooksQuery);
    const [selected,setSelected]=useState('');

    // console.log("dataa",data);
    const handleClick=(id)=>{
        console.log("id in book list",id)
        setSelected(id)
    }
                    
         return loading?<h1>Loding........</h1>:<div>
         <ul id="book-list">
         { data.books.map((book)=>{
             return(<li key={book.id}  onClick={()=>handleClick(book.id)}>
 {book.name}
             </li>)
             
            

         })}
             </ul>
             <BookDetail bookid={selected}/>
        </div>
    
}

export default BookList
