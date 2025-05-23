import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { funcionarioModule } from './livro/livro.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/funcionario'),
    funcionarioModule,
  ],
})
export class AppModule {}