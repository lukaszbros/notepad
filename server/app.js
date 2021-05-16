const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');

const notes = [
  {
    id: "1",
    text: "Aatatsuagjhaskjdhajkhfkdhkf",
    date: "1",
  }
];

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
  
`;

const resolvers = {
  Query: { 
    notes: () => notes,
    note(obj, { id }) {
      const note = notes.find(note => note.id === id)
      return note;
    }
  },
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