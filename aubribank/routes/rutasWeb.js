const { Router } = require('express'); // require unicamente el modulo Router de express, mas liviano
const dbManage = require('../models/dbManage');
const funciones = require('../models/funciones');
const router = Router(); //definir una instancia router a la
const path = require('path');
//const bodyParser = require('body-parser'); // sirve para analizar los body de las solicitudes entrantes mediante post a travez de un middleware

//router.use(express.static('public'));
//router.set('public', path.join(__dirname, '../public'));

//rutas
router.get('/prueba', function(req, res) {
        res.sendFile(path.join(__dirname,'../views/prueba.html'));
    
});

router.get('/', function(req,res){
    console.log('ejecutando la ruta /');
    res.sendFile(path.join(__dirname, '../views/home.html')); // __dirname es direccion actual, se puede usar path.resolve o path.join
});

router.get('/login', function(req,res){
    console.log('ejecutando la ruta /login');
    res.sendFile(path.join(__dirname, '../views/login.html')); // path.join es para unir direcciones de string
});


router.post('/', function(req,res){
    console.log('se recibio un json:');
    dbManage.addUser(req.body); // req es el objeto enviado y su atributo body contiene la información enviada mediante post
    res.send('<h3> recibido </h3>');
    
});

router.post('/transfer', function(req,res){
    console.log('se recibio un json:');
    let tBlock = funciones.createBlock(req.body);

    dbManage.addNewBlock(tBlock);
    res.send('<h3> recibido </h3>');
    
});


module.exports = router;