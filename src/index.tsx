import { ApolloClient, ApolloProvider, gql, InMemoryCache } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const typeDefs = gql`
  type Note { 
    id: String, 
    text: String, 
    date: String 
  }
  extend type Query {
    notes: [Note]
  }
`;

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
  typeDefs});

const appElement = document.getElementById('app');
ReactDOM.render((
  <ApolloProvider client={client}>
    <App></App>
  </ApolloProvider>
)
, appElement);