const connectToMongo = require( './DB' );
const express = require( 'express' );
var cors = require('cors')

connectToMongo();
const app = express();
const port = 6000;

app.use(cors())
app.use( express.json() );

app.use('/users', require('./routes/userRoutes'));
app.listen( port, () => console.log( `Server running on port ${port}` ) );