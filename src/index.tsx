import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const GRAPHQL_API_URL = '';

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache()
});

const appElement = document.getElementById('app');
ReactDOM.render((
  <ApolloProvider client={client}>
    <App></App>
  </ApolloProvider>
)
, appElement);