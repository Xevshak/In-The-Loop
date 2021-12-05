const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schema');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connections');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
   resolvers,
  context: authMiddleware,
});

server.applyMiddleware({ app });

// res.sendFile(express.urlencoded({ extended: false }));
// res.sendFile(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
// If it doesnt work in build mode talk to Damien 
// maybe use res.sendfile instead of app.use per damiens recommendation
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build/index.html')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});