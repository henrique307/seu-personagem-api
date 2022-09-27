import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AnyARecord } from 'dns';
import { Usuario } from './usuario.entity';
import { UsuarioModel } from './usuario.model';

@Injectable()
export class usuarioService {
  constructor(
    @InjectModel(UsuarioModel)
    private usuarioModel: typeof UsuarioModel,
  ) {}

  async pegaTodos(): Promise<UsuarioModel[] | NotFoundException> {
    const usuarios = await this.usuarioModel.findAll();

    if(!usuarios) throw new NotFoundException()

    return usuarios
  }

  // async pegaUm_id(id: number): Promise<UsuarioModel | NotFoundException> {
  //   const usuario = await this.usuarioModel.findByPk(id);
  //   if(usuario instanceof NotFoundException) throw new NotFoundException()
  //   return usuario
  // }

  async pegaUm_nome(nome: string): Promise<UsuarioModel | NotFoundException> {
    const usuario = await this.usuarioModel.findOne({where: { nomeDeUsuario: nome }});
    if(usuario instanceof NotFoundException) throw new NotFoundException()
    return usuario
  }

  async criaUsuario(usuario: Usuario): Promise<UsuarioModel | BadRequestException> {
      const novoUsuario:any = new Usuario(
        usuario.nomeDeUsuario,
        usuario.senha,
        usuario.email
      )

      const usuarioCriado = await this.usuarioModel.create(novoUsuario)
      
      return usuarioCriado
  }

  async mudaUsuario(usuario: UsuarioModel): Promise<number[] | NotFoundException> {
    const IdDasContasAlteradas = await this.usuarioModel.update(usuario,{where: {id: usuario.id}});

    console.log(IdDasContasAlteradas)

    return IdDasContasAlteradas
  }

  async deletaConta_nome(nome: string):Promise<string | NotFoundException>{
    const usuarioAniquilado = await this.pegaUm_nome(nome);

    if(usuarioAniquilado instanceof NotFoundException) throw new NotFoundException()

    usuarioAniquilado.destroy();

    return "USUARIO TOTALMENTE ANIQUILADO MUAHAHAHAAHAH"
  }
}
