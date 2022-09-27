import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { usuarioController } from './usuario/usuario.controller';
import { UsuarioModel } from './usuario/usuario.model';
import { usuarioService } from './usuario/usuario.service';


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
    }),SequelizeModule.forFeature([UsuarioModel])
  ],
  controllers: [AppController, usuarioController],
  providers: [AppService, usuarioService],
})
export class AppModule {}
