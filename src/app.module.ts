import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import JogadoresController from './jogadores.controller';

@Module({
  imports: [],
  controllers: [AppController, JogadoresController],
  providers: [AppService],
})
export class AppModule {}
