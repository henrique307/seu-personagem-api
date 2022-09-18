import Personagem from "./personagem.model";

export default class JogadoresModel {

    public id:string = this.geraID();
    private  personagens:Array<Personagem> = [];

    constructor(
        private nome:string
    ){}

    private geraID():string {
        return [...Array(12)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    }

    getNome() {
        return this.nome
    }


    adicionaPersonagem(nome: string) {
        this.personagens.push(new Personagem(nome))
    }

    mudaNome(nome: string){
        this.nome = nome
    }

}