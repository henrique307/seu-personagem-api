import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Jogador from './jogadores.model';

@Injectable()
export default class JogadoresService {
  constructor(
    @InjectModel(Jogador)
    private JogadorModel: typeof Jogador,
  ) {}

  async pegaTodos(): Promise<Jogador[]> {
    return this.JogadorModel.findAll();
  }

  async pegaUm(id: number): Promise<Jogador> {
    return this.JogadorModel.findByPk(id);
  }

  async criaJogador(jogador: Jogador) {
    this.JogadorModel.create(jogador);
  }

  async mudaJogador(jogador: Jogador): Promise<number[]> {
    return this.JogadorModel.update(jogador, {
      where: {
        id: jogador.id,
      },
    });
  }

  async deletaConta(id: number) {
    const jogador = await this.pegaUm(id);
    jogador.destroy();
  }
}
