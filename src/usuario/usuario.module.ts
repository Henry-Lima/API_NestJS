import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { funcionario } from './usuario.entity';
import { funcionarioService } from './usuario.service';
import { funcionarioController } from './usuario.controller';
@Module({
imports: [TypeOrmModule.forFeature([funcionario])], // <-- aqui está a mágica!
providers: [funcionarioService],
controllers: [funcionarioController],
})  
export class funcionarioModule {}