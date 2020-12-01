const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// allow origin requests
app.use(cors());

mongoose.connect('mongodb://localhost:27017/usersDB',{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log('Connected to the Database');
})
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('Server is running on port 4000');
})