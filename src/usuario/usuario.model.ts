import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import sequelize, { Sequelize } from "sequelize";
import { Column, Table, Model, DataType, IsEmail, Unique } from "sequelize-typescript";


@Table
export class UsuarioModel extends Model{

    @Column({
        type:DataType.STRING(60),
        allowNull:false,
        unique:true,
    })
    nomeDeUsuario:string;
    
    @Column({
        type:DataType.STRING,
        allowNull:false,
    })
    senha:string;

    @Column({
        type:DataType.STRING(100),
        allowNull:false,
        unique:true,
    })
    email:string;

    @Column({
        type:DataType.STRING,
        allowNull:false,
        unique: true
    })
    codigo:string;

    @Column({
        type:DataType.TEXT,
    })
    personagens:string;

}