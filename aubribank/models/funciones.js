//
// Funciones Principales
//
//



function createBlock(transfer) {
    let fee = 0.01;
    let lastBlock = 0 ;//mongo
    let jsonBlock = {
        "numBlock": lastBlock + 1,
        "marcaTemporal": 1, //mongo
        "de": transfer.de,
        "a": transfer.a,
        "monto": 0,
        "fee": fee,
        "date": " " //mongo
    }

    return jsonBlock;
}

// function verificarEstructura de json metodo post para tranfer
// function verificarEstructura de json metodo post para newUser


module.exports = {
    createBlock
};