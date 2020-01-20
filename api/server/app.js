const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('../schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 8080;

mongoose.connect(
  'mongodb+srv://eqbit:eqbit@cluster0-xgfww.mongodb.net/GraphQL?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

const dbConnection = mongoose.connection;
dbConnection.on('error', err => console.log('Error:' + err));
dbConnection.once('open', () => console.log('Connected to database'));

app.listen(PORT, err => {
  err ? console.log(err) : console.log(`Server listen port ${PORT}`);
});