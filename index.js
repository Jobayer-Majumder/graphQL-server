const express = require('express');
const  {graphqlHTTP}  = require('express-graphql');
const schema = require('./schema/schema')




const app = express();
app.use(express.json())

 
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}));

app.get('/' , (req, res) => {
    res.send('server is running')
})


app.listen(5000, () => console.log('graphql server is running'))