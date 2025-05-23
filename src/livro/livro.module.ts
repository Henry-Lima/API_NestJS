import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { funcionarioService } from './livro.service';
import { funcionarioController } from './livro.controller';
import { funcionario, funcionarioSchema } from './livro.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: funcionario.name, schema: funcionarioSchema }])
  ],
  providers: [funcionarioService],
  controllers: [funcionarioController],
})
export class funcionarioModule {}