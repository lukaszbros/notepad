const express = require('express');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const cors = require('cors');

// Some fake data
const notes = [
  {
    id: "1",
    text: "Aatatsuagjhaskjdhajkhfkdhkf",
    date: "1",
  }
];

// The GraphQL schema in string form
const typeDefs = `
  type Query { notes: [Note] }
  type Note { id: String, text: String, date: String }
`;

// The resolvers
const resolvers = {
  Query: { notes: () => notes },
};

// Put together a schema
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