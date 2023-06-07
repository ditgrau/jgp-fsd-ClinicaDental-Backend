const express = require('express');
const app = express();
const PORT = 3000;
const db = require('./db');


app.get('/', (req, res) => {
    res.send('Hello World')
})



db.then (()=>{
    app.listen(PORT, ()=>{
        console.log ('servidor levantado en el puerto ' + PORT);
    })
})
.catch ((error)=> {
    console.error ('Error inicializando el servidor', error.message);
})