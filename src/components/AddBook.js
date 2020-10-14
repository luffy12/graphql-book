import React, { useEffect, useState } from 'react';
import { gql, useQuery, useMutation  } from '@apollo/client';
import { getAuthorsQuery,addBookMutation, getBooksQuery } from '../queries/queries'

function AddBook() {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [addBookMut, { dataMutation }] = useMutation(addBookMutation);
    const [name, setName] = useState('');
    const [genre,setGenre]=useState('');
    const [authorid,setAuthor]=useState('');
    // console.log("datataa", data);
    const submitHandler = (e) => {
        e.preventDefault();
        addBookMut({
            variables: {
              name: name,
              genre: genre,
              authorid:authorid,
            },
            refetchQueries:[{query:getBooksQuery}]
          });
    //    console.log("in submit")
      };
    return (
        <form id="add-book" onSubmit={submitHandler}>
            <div className="field">
                <label>Book name:</label>
                <input type="text" value={name}
                    id="name"
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="field">
                <label>Genre:</label>
                <input type="text" value={genre}
                    id="genre"
                    onChange={(e) => setGenre(e.target.value)}/>
            </div>
            <div className="field">
                <label>Author:</label>
                <select onChange={(e) => setAuthor(e.target.value)}>
                    <option>Select author</option>
                    {data ? data.authors.map(author => {
                        return (<option key={author.id} value={author.id}>{author.name}</option>);
                    }) : ""}
                </select>
            </div>
            <button>+</button>

        </form>
    )
}

export default AddBook
