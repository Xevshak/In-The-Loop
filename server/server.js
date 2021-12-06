const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./config/connection'); //checked
const { typeDefs, resolvers } = require('./schema'); //checked
const { authMiddleware } = require('./utils/auth'); //checked


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
// if (process.env.NODE_ENV === 'production') {
//   app.sendFile(express.static(path.join(__dirname, '../client/build/index.html')));
// //}else {
//   //res.sendFile(path.join(__dirname, '../client/public/index.html'));
// }

app.get('*', (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  }else {
    res.sendFile(path.join(__dirname, '../client/public/index.html'));
  }
  // res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});