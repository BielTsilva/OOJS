class contaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo; 
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return "Saldo insuficiente"
        }
        this._saldo = this._saldo - valor
        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor;
        return this._saldo
    }

}

class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaUnivesitaria extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';

    }    

    sacar(valor){
        if(valor > 500){
            return "Limite máximo para saque em conta universitária é 500 reais"
        }
        this._saldo = this._saldo - valor;
    }
}

class contaPoupanca extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
        
    }    
}

class contaBeneficio extends contaBancaria {
    constructor(agencia, numero){
        super(agencia, numero);
        this._saldo = 500;
        this.tipo = 'beneficio';
    }

    sacar(valor){
        if(valor > 300){
            return "Limite máximo para saque benefício é 300 reais"
        }
        this._saldo = this._saldo - valor
    }
}