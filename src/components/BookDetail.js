import React from 'react'
import { gql, useQuery } from '@apollo/client';
import {getBookQuery} from '../queries/queries'
function BookDetail({bookid}) {
    console.log("iddd",bookid)
    const { loading,error,data } = useQuery(getBookQuery,{ variables: { id: bookid }});
    // useEffect(() => {
    //     getBookQuery
    //     return()=>{
            
    //     }
        
    // }, [])
    console.log("data1111",data)
  
      
        return loading?<h1>Loding........</h1>:<div>
       
            {data?<div>
                <h2>{data.book.name}</h2>
                <p>{data.book.genre}</p>
                {/* <p>{data.author.genre}</p> */}
            </div>:""}
        </div>
    
}

export default BookDetail
