class Jogador {
    constructor(nome, time, idade){
        this.nome = nome
        this.time = time
        this.idade = idade
    }
}
class Estatisticas {
    constructor(Jogador, gols, assistencias){
        this.Jogador = Jogador
        this.gols = gols
        this.assistencias = assistencias
    }
    fazer_gol(qnt_gols){
        this.gols += qnt_gols
    }

    dar_assistencia(qnt_assistencia){
        this.assistencias += qnt_assistencia
    }
}
const jogador1 = new Jogador("Neymar", "Psg", 28)
const neymar = new Estatisticas(jogador1, 0, 0)
neymar.fazer_gol(2)
neymar.dar_assistencia(1)
 
console.log(neymar)










/*const jogador2 = new Jogador("Pepê", "Grêmio", 22)
jogador2.fazer_gol(3)
jogador2.dar_assistencia(2)
console.log(jogador1)
console*/



