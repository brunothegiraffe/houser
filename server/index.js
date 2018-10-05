const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require ( 'dotenv' ).config();

const ctrl = require('./controller');

const app = express();
app.use( bodyParser.json() );
app.use( express.static('public') );

massive( process.env.CONNECTION_STRING)
.then( ( dbInstance ) => {
    app.set( 'db', dbInstance );
    console.log('connected to the db');
})
.catch( err => {
    console.log(err);
})

app.get('/api/houses', ctrl.getHouses)
app.post('/api/addhouse', ctrl.addHouse)
app.delete('/api/delete', ctrl.deleteHouse)

const port = process.env.PORT;
app.listen( port, () => console.log(`Hard to port: ${port}`) );
