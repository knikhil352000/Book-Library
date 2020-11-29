const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schema/schema');
app.use('/graphql', graphqlHTTP({
    schema: schema
}));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})