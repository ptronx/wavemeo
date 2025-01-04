const { SHA256 } = require("crypto-js");

let portfolio = class {
    constructor() {
        ID : '';
        acount : [
            { acountDollars : 0 },
            { acountBolivianos : 0 }
        ];
    }

    CalculateHash(){
        return SHA256(this.name + this.lastName + this.CI + this.birthday + this.email + this.fechaCreacion).toString();
    }
}

class user {
    constructor (name, lastName, CI, bDay, bMonth, bYear, email) {
        this.name = name;
        this.lastName = lastName;
        this.CI = CI;
        this.birthday = {
            day : bDay,
            month : bMonth,
            year : bYear
        };
        this.acount = portfolio.ID;
        this.email = email;
        this.fechaCreacion = Date();
        this.tipoCuenta = 'personal';
        this.direccion = '';
        this.fotografia = '';
        this.calificacionCrediticia = '';
        this.Nit = '';
        this.nombreUsuario = '';
        this.contraseña = '';
        this.hash = this.CalculateHash();
    }

    CalculateHash(){
        return SHA256(this.name + this.lastName + this.CI + this.birthday + this.email + this.fechaCreacion).toString();
    }

}

class userList {
    constructor () {
        this.chain = [];
    }

    addUser(nuevoUsuario) {
        this.chain.push(nuevoUsuario);
    }
}

let masterChain = new userList;

let persona = new user("freddy", "mansilla", 581);

masterChain.addUser(persona);

console.log(masterChain.chain);

