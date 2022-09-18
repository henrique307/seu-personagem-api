import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import JogadoresModel from './jogadores.model';
import PersonagemModel from './personagem.model';

@Controller('jogadores')
export default class JogadoresController {
    jogadores:Array<JogadoresModel> = [
      new JogadoresModel('Henrique'),
      new JogadoresModel('Mikaelly'),
      new JogadoresModel('Leo')
    ];

  @Get()
  get_Jogadores():JogadoresModel[] {
    return this.jogadores;
  }

  @Get(':id')
  get_Jogador_id(@Param() params):JogadoresModel {
    return this.jogadores[params.id];
  }

  @Post()
  post_jogaodr(@Body() jogador:any){
    this.jogadores.push(new JogadoresModel(jogador.nome))
    return this.jogadores
  }

  @Put(':id')
  put_jogador(@Body() jogador: any, @Param() params:any){
    for (let key in jogador) {
      this.jogadores[params.id][key] = jogador[key]
    }

    return this.jogadores
  }

  @Delete(':id')
  delete_jogador(@Param() params) {
    this.jogadores.splice(params.id, 1)
    return this.jogadores
  }

}
