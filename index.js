const express = require( 'express' );
const bodyParser = require( 'body-parser' ); 
const { projects } = require( './projectFile' ); 


const app = express();
const port = process.env.PORT || 8080;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,PATCH,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});

app.use( bodyParser.json() ); 

app.get( '/wake', ( req, res ) => {
    res.send( { message: "Heroku is awake" } );
} );

app.post( '/projects', ( req, res ) => {
    const projectIndex = req.body.index;
    const response = projects[ projectIndex ]; 
    res.send( response );
} ); 


app.listen(port, function(req, res){
  console.log('Server is running at port: ',port);
});


