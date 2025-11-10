class heroiAventura{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    atacar(){
        if(this.tipo === "Mago"){
          return "usando magia";
        }else if(this.tipo === "guerreiro"){
          return "usando espada";
        }else if(this.tipo === "monge"){
          return "usando artes marciais"
        }else if(this.tipo === "ninja"){
          return "usando shuriken"
        }
  }
}

const nomeHeroi = gets();
const idadeHeroi = parseInt(gets());
const tipoHeroi = gets();

let heroiPersonalizado = new heroiAventura(nomeHeroi, idadeHeroi, tipoHeroi);

console.log(`o ${heroiPersonalizado.tipo} atacou ${heroiPersonalizado.atacar()}`);
