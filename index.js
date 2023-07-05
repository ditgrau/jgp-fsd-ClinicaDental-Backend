require('dotenv').config() //para las variables de entorno
const express = require('express');
const app = express();
const cors = require("cors");
const PORT = 3000;
const db = require('./db');
const router = require ('./router');

/////////////////////////////////////////////////////////////////

app.use(express.json());
app.use(cors());
app.use (router);

/////////////////////////////////////////////////////////////////

app.get('/', (req, res) => {
    res.send('Hello World')
}) //la funcion 'health' pero la del README de express

/////////////////////////////////////////////////////////////////

db.then (()=>{ //promesa dependiendo de la conexion con la bd
    app.listen(PORT, ()=>{
        console.log ('servidor levantado en el puerto ' + PORT);
    })
})
.catch ((error)=> {
    console.error ('Error inicializando el servidor', error.message);
})

/////////////////////////////////////////////////////////////////