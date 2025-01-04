const { Router } = require('express'); // require unicamente el modulo Router de express, mas liviano
const MongoData = require('../models/mongoAtlas');
//const DatosJS = require('./DatosJS.json');
const _ = require('underscore'); //underscore.js otorga la habilidad de poder recorrer un arreglo crear nuevo eliminar porcesar datos etc...

const router = Router(); //definir una instancia router a la

//rutas
router.get('/api/exampleJS', async function(req,res) {
    console.log('ejecutando la orden get');
    const data = await MongoData; //corregir err
    const meta = await data.json(); // convertir los datos obtenidos a json
    console.log(meta); // imprime los datos en consola
    res.json({"mensaje": "se mandaron los datos "});
    //console.log(DatosJS);
    //res.json(DatosJS);
});


module.exports = router;