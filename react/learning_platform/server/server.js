const express = require("express"); //this means import express
const app = express();  //the app object conventionally denotes the express application. create it by calling the top-level express function
const port = 8000;  //this is the port we are listening to.

app.use( express.json()); //this needs to be above the other code blocks. this code allows us to use json
app.use( express.urlencoded({ extended: true })); //!this needs to be above the other code blocks. this code allows us to use url endcoded data

//this is just some placeholder data that we will be using for demo purposes
//this is not connected to a data base yet, this is just an array of objects that is hardcoded
//normally this would be data that is ccoming from a database. we will learn how to connect to a database later

const albums = [
    {id:1, albumName:'arrullo de estrellas', artist: 'zoe'},
    {id:2, albumName:'sone', artist: 'panda'},
    {id:3, albumName:'jdn', artist: 'el obama'},
    {id:4, albumName:'arrullo ', artist: 'banda'},
    {id:5, albumName:'animo', artist: 'si se puede'}
]


///api - this is  the route that we are listening to localhost:8000/api
// the second argument is a callbck function that will run when the route is hit
//request is an object that contains all the information about the request that was made to the server
//response is an object that contains all the methods for sending a respnse to the client 
//response.json() will send a json response to the client
//response.json() can take in an object as an argument and it will send that object as a json response to the client 
// req is shorthand for request
// res is shorthand for response
app.get("/api", (request, response) => {
    response.json(albums);
});

app.get('/api/:id', (request, response)=>{
    console.log(request.params.id);
    response.json({message: 'you did it!'})
})

// app.patch("/api/:id", (request, response) => {
//     // we can get this `id` variable from req.params
//     const id = request.params.id;
//     // assuming this id is the index of the users array we can replace the user like so
//     albums[id] = request.body;
//     // we always need to respond with something
//     response.json( { status: "ok" } );
// });

app.post('/api/newAlbum', (request, response)=>{
    console.log(request.body);
    albums.push(request.body)
    response.json({message: "you added a new album"})
})

//!this needs to be above the other code blocks.
//*this is the code that will start the server.
console.log("hello my dear homies")
app.listen( port, ()=> console.log(`Listening on port: ${port}`))





