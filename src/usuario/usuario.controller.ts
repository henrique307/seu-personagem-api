import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioModel } from './usuario.model';
import { usuarioService } from './usuario.service';

@Controller('usuarios')
export class usuarioController {
  constructor(private usuarioService: usuarioService) {}

  @Get()
  async get_usuarios(): Promise<UsuarioModel[] | NotFoundException> {
    return this.usuarioService.pegaTodos();
  }

  @Get(':nomeDeUsuario')
  async get_usuario_nome(@Param() params): Promise<UsuarioModel | NotFoundException> {
    return this.usuarioService.pegaUm_nome(params.nomeDeUsuario);
  }

  @Post()
  async post_usuario(@Body() usuario: Usuario): Promise<UsuarioModel | BadRequestException> {
    return this.usuarioService.criaUsuario(usuario);
  }

  @Put()
  async put_usuario(@Body() usuario: UsuarioModel): Promise<number[] | NotFoundException> {
    return this.usuarioService.mudaUsuario(usuario);
  }

  @Delete(':nome')
  async delete_usuario_nome(@Param() params): Promise<string | NotFoundException> {
    return this.usuarioService.deletaConta_nome(params.nome);
  }
}
