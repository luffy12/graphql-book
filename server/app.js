const express=require('express');
const {graphqlHTTP}=require('express-graphql');
const mongoose=require('mongoose');
const cors=require('cors');
const schema=require('./schema/schema')
const app=express();
app.use(cors())
const uri="mongodb://localhost:27017/graphql"
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology:true })
const connection=mongoose.connection;
connection.once('open',()=>{
    console.log("mongoose connection success")
})
app.use('/graphql',graphqlHTTP({
schema:schema,
graphiql:true
}))
app.listen(4000, ()=>{
    console.log("listening to port 4000")
})