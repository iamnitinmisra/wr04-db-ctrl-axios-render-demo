require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controllers/controller')


const {SERVER_PORT, CONNECTION_STRING} = process.env;

const app = express();

app.use(express.json());



//ENDPOINTS
app.get('/api/products', ctrl.getAllProducts)


massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('Database is now connected')
    app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}`))
}).catch(error => console.log(error, 'Database not working...'))