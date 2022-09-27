import { IsEmail, IsNotEmpty, IsString, Length, MaxLength, MinLength } from "class-validator";
import { UsuarioModel } from "./usuario.model";

export class Usuario {

    @MinLength(5, {message: "Nome de usuario é muito curto"})
    @MaxLength(30, {message: "Nome de usuario é muito longo"})
    @IsNotEmpty({message: "Nome de usuário não foi definido"})
    @IsString({message: "Nome de usuario tem que ser uma string"})
    nomeDeUsuario;

    @Length(10, 30, {message:"Senha deve ter entra 10 e 30 caracteres "})
    @IsString({message: "Senha tem que ser uma string"})
    @IsNotEmpty({message: "Campo senha não pode ser vazio"})
    senha;

    @IsString({message: "Email tem que ser uma string"})
    @IsEmail({allow_ip_domain:true,}, {message: "Email não é valido"})
    email;

    codigo:string = this.geraCodigo();

    personagens:string = "";

    private geraCodigo():string {
        return [...Array(12)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
    }

    constructor(
        nomeDeUsuario,
        senha,
        email
    ) {
        this.nomeDeUsuario = nomeDeUsuario
        this.senha = senha
        this.email = email
    }
}