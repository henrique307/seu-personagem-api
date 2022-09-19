import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import Jogador from './jogadores.model';
import JogadoresService from './jogadores.service';
import PersonagemModel from './personagem.model';

@Controller('jogadores')
export default class JogadoresController {
  constructor(private JogadoresService: JogadoresService) {}

  @Get()
  async get_Jogadores(): Promise<Jogador[]> {
    return this.JogadoresService.pegaTodos();
  }

  @Get(':id')
  async get_Jogador_id(@Param() params): Promise<Jogador> {
    return this.JogadoresService.pegaUm(params.id);
  }

  @Post()
  async post_jogador(@Body() jogador: Jogador): Promise<Jogador[]> {
    this.JogadoresService.criaJogador(jogador);
    return await this.get_Jogadores();
  }

  @Put()
  async put_jogador(@Body() jogador: Jogador): Promise<Jogador[]> {
    this.JogadoresService.mudaJogador(jogador);
    return await this.get_Jogadores();
  }

  @Delete(':id')
  async delete_jogador(@Param() params): Promise<Jogador[]> {
    this.JogadoresService.deletaConta(params.id);
    return this.get_Jogadores();
  }
}
