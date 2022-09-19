import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import JogadoresController from './jogadores.controller';
import Jogador from './jogadores.model';
import JogadoresService from './jogadores.service';


@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.USER_NAME,
      password: process.env.USER_PASSWORD,
      database: 'seu_personagem',
      autoLoadModels:true,
      synchronize: true
    }),SequelizeModule.forFeature([Jogador])
  ],
  controllers: [AppController, JogadoresController],
  providers: [AppService, JogadoresService],
})
export class AppModule {}
