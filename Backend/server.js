const express = require('express');
const app = express(); 
const http = require('http');
const server = http.createServer(app);
const morgan = require('morgan'); 
const cors = require('cors'); 


//IMPORTAR RUTAS
const rutasUser = require('./rutas/rutasUser'); 

//RUTAS DEL SERVIDOR:
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());
app.disable('x-powered-by');


app.get('/', (_req, res) => {
    res.send('Ruta raiz backend');
    })

    app.get('/Users/juand/OneDrive/Documentos/Programming/Native/my-app/views/home/home', (_req, res) => {
        res.send('Esta es la ruta que usaremos para el login');
    })

    app.use((err, _req, res, _next) => {
        console.log(err);
        res.status(err.status || 500).send(err.stack);
    });

const port = process.env.PORT || 5000;

app.set('port', port);

rutasUser(app);

/*PARAMETROS DEL SERVIDOR:
server.listen(port, '192.168.101.8' || 'localhost', function(){
    console.log('Aplicacion de Nodejs ' + process.pid + ' iniciada..');
});*/

/*ANTES
const express = require('express');
const app = express(); 
const http = require('http');
const server = http.createServer(app);
const morgan = require('morgan'); // Cambiado el nombre de la constante
const cors = require('cors'); // Cambiado el nombre de la constante


//IMPORTAR RUTAS
const rutasUser = require('./rutas/rutasUser'); 
rutasUser(app);

const port = process.env.PORT || 3000;
app.set('port', port);


//PARAMETROS DEL SERVIDOR:
server.listen(port, '192.168.101.8' || 'localhost', function(){
    console.log('Aplicacion de Nodejs ' + process.pid + ' iniciada..');
});



//RUTAS DEL SERVIDOR:
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powered-by');

app.get('/', (_req, res) => {
    res.send('Ruta raiz backend');
});

app.get('/test', (_req, res) => {
    res.send('Esta es la ruta del Test');
})

app.use((err, _req, res, _next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});

*/