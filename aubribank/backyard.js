const express = require('express');
const morgan = require('morgan'); //morgan es middleware
const path = require('path');

const webRouter = require('./routes/rutasWeb');
const replRouter = require('./routes/rutasREPL');
//const AtlasRouter = require('./routes/rutasAtlasDB');

//inicializar app
const app = express();

//setings ejem: app.set()
app.set('port', process.env.PORT || 9090); // app.set(name, value) define una variable y su valor, en este ejemplo define puerto por defecto por nube ó definido manual
app.set('json spaces', 2); //desplegar formato pretty para objetos json

//middleware ejem: app.use()
app.use(morgan('dev')); // dev para desarrollo unicamente, morgan muestra en consola las peticiones que van llegando
app.use(express.urlencoded({extended: false})); // entender los datos de imputs por formularios 
app.use(express.json()); // metodo para el servidor para resibir formatos json


//routes ,  app.get() ó app.use() si la ruta esta en otro script y necesita require()
app.use('/', webRouter);
app.use('/api' , replRouter);
//app.use('/atlas', AtlasRouter);

//static files
app.use(express.static(path.join(__dirname, 'public'))); //indica donde se encuentra la carpeta public para los archivos estaticos

//server start
app.listen(app.get('port'), function() {
    console.log(`servidor escuchando desde el puerto http://localhost:${app.get('port')}`);
});