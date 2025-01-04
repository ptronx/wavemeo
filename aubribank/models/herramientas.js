const SHA256 = require('crypto-js/sha256');
//const EC = require('elliptic').ec; instalar
//const ec = new EC('secp256k1'); instalar
const mongoAtlas = require("./mongoAtlas.js");

/*function transfer(from, to, amount) {
    if(uemi.acount.dollars >= amount) {
        uemi.acount.dollars -= amount;
        ures.acount.dollars += amount; 
    }
}*/

/*class Transaction{
    constructor(fromAddress, toAddress, amount){
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }

    CalculateHash(){
        return SHA256(this.fromAddress + this.toAddress + this.amount).toString();
    }

}*/

const added = function sumar(a){
    return x = a + 100;
};

console.log(added(8));
mongoAtlas.data({name: 'Freddy'});

module.exports ={
    added
};