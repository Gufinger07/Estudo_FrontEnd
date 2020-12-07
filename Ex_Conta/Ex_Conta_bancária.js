class Cliente{
    nome;
    
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha
    }
} 
class Conta {
    constructor(saldoinicial, cliente, agencia){
        this._saldo = saldoinicial
        this._cliente = cliente
        this._agencia = agencia
        if (this.constructor == Conta) {
            throw new Error("Você não deveria fazer isso")
        }
    }
    
    sacar(valor){
       
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }
    
    depositar(valor){
        if(valor <= 0)
        {
            return;
        } 
        this._saldo += valor;           
    }

    tranferir(valor, conta){
        
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
        
    }
}


class ContaCorrente extends Conta{
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
    }
    sacar(valor){
        var taxa = 1.1
        return this._sacar(valor, taxa)
        }
    }

class ContaPoupanca extends Conta{
    constructor(cliente, agencia) {
        super(0, cliente, agencia)
    }
    sacar(valor){
        var taxa = 1.05
        return this._sacar(valor, taxa)
        }
}


class Funcionarios {
    constructor(nome, salario, cpf) {
        this._nome = nome
        this._salario = salario
        this._cpf = cpf
        this._bonificacao = 1
        this._senha
    }
    cadastrarSenha(senha){
        this._senha = senha
    }
    autenticar(senha) {
        return senha == this._senha
    }
}
class Diretor extends Funcionarios {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this.bonificacao = 2
    }
}

class Gerente extends Funcionarios {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        this.bonificacao = 1.1
    }
}
class SistemaAutenticacao{
    static login(autenticavel, senha) {
        if(SistemaAutenticacao.ehAutenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false
    }
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}
const diretor = new Diretor("Rodrigo", 1000, 123456789)
diretor.cadastrarSenha("123456")
const gerente = new Gerente("Ricardo", 5000, 123456854)
gerente.cadastrarSenha("12345")
const logargerente = SistemaAutenticacao.login(gerente,"12345")
const logardiretor = SistemaAutenticacao.login(diretor, "123456")
console.log(logargerente)
console.log(logardiretor)
/*const cliente1 = new Cliente("Ricardo", 11122233309);



const contaCorrenteRicardo = new ContaCorrente(cliente1, 1001);
contaCorrenteRicardo.depositar(500);
contaCorrenteRicardo.sacar(100);

const contaPoupanca = new ContaPoupanca(cliente1, 50)
contaPoupanca.depositar(30)
contaPoupanca.sacar(10)
console.log(contaPoupanca)
console.log(contaCorrenteRicardo)
*/
