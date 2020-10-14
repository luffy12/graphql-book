import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ApolloClient, InMemoryCache,ApolloProvider  } from '@apollo/client';
import BookList from './components/BookList'
import AddBook from './components/AddBook';
function App() {
  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
  });
  return (
    <ApolloProvider client={client}>
      <div className="App">
      app
      <BookList/>
      <AddBook/>
    </div>
    </ApolloProvider>
    
  );
}

export default App;
