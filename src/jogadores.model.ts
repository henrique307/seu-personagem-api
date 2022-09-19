import { Column, Table, Model, DataType } from "sequelize-typescript";
import Personagem from "./personagem.model";

@Table
export default class Jogador extends Model<Jogador> {

    @Column({
        type:DataType.STRING(60),
        allowNull:false
    })
    public readonly nome:string;

    @Column({
        type:DataType.STRING,
    })
    public readonly codigo:string = this.geraCodigo();

    @Column({
        type:DataType.TEXT,
    })
    private personagens:string = '';

    private geraCodigo():string {
        return [...Array(12)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
    }

    // adicionaPersonagem(nome: string) {
    //     this.personagens.push(new Personagem(nome))
    // }

    // mudaNome(nome: string){
    //     this.nome = nome
    // }

    // getNome() {
    //     return this.nome
    // }

}