const { Router } = require('express'); // require unicamente el modulo Router de express, mas liviano
const sampleD = require('../db/sampledb.json');
const _ = require('underscore'); //underscore.js otorga la habilidad de poder recorrer un arreglo crear nuevo eliminar porcesar datos etc...
const router = Router(); //definir una instancia router a la

//rutas
router.get('/api/diver', function(req, res) {
    //res.render('<h1>hola a todos desde html</h1>');
    res.send('<h1>esto es appREPL</h1>');
});

router.get('/api/appload', function(req,res){
    console.log('ejecutando la orden get');
    //res.send('hola servidor');
    console.log(sampleD);
    res.json(sampleD);
});

router.post('/api/appload', function(req, res) {
    console.log('orden post maded ');
    const {titulo, year, rating} = req.body; //definiendo variables y guardando los valores recibidos en cada variable
    if(titulo && year && rating) {     //validacion de datos, se puede simplificar con express validator modules
        const id = sampleD.length + 1;
        const newData = {id, ...req.body}; //...pasar todos los datos del objeto a un nuevo objeto definido
        console.log(newData);
        sampleD.push(newData);
        res.json(sampleD);
    } else {
        //res.send('wrong request');
        res.status(500).json({"err": "there was an error."});
    }
});

router.put('/api/appload/:id', function(req,res) { //metodo para actualizar
    const {id} = req.params;
    const {titulo, year, rating} = req.body; // se envian los datos del objeto actualizado
    if(titulo && year && rating) {
        _.each(sampleD, function(puntero, i) {
            if(puntero.id == id) {
                puntero.titulo = titulo;
                puntero.year = year;
                puntero.rating = rating;
            }
        });
        res.json(sampleD);
    } else {
        res.status(500).json({"error": 'err: no se encuentra ese objeto'});
    }
});


router.delete('/api/appload/:id', function(req,res) { //observacion err: error al borrar objetos intermedios del arreglo, chekear
    console.log(req.params);
    const {id} = req.params;
    _.each(sampleD, function(puntero,i) {
        if(puntero.id == id) {
            sampleD.splice(i, 1);
            console.log(puntero);
            console.log(i);
        }
    });
    res.send(sampleD);
});

module.exports = router;