const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');
const { v4 } = require('uuid');

const notes = [];

const typeDefs = `
  type Note { 
    id: String, 
    text: String, 
    date: String 
  }
  type Query { 
    notes: [Note],
    note(id: String): Note
  }
  type Mutation {
    addNote(text: String): Note,
    deleteNote(id: String): Note
  }
`;

const resolvers = {
  Query: { 
    notes: () => notes,
    note(obj, { id }) {
      const note = notes.find(note => note.id === id);
      return note;
    }
  },
  Mutation: {
    addNote(obj, { text }) {
      const note  = {id: v4(), text, date: new Date().toLocaleDateString()}
      notes.unshift(note);
      return note;
    },
    deleteNote(obj, { id }) {
      const note = notes.find(note => note.id === id);
      const index = notes.findIndex(note => note.id === id);
      notes.splice(index, 1);
      return note;
    }
  }
};

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const app = express();

app.use('*', cors({ origin: 'http://localhost:5000' }));

app.use('/graphql', express.json(), graphqlExpress({ schema }));

app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});