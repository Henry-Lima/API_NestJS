import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { funcionario } from './usuario/usuario.entity';
import { funcionarioModule } from './usuario/usuario.module';
@Module({
imports: [
TypeOrmModule.forRoot({
type: 'mysql',
host: 'localhost',
port: 3306,
username: 'root',
password: '', // ou '123', dependendo do seu XAMPP
database: 'bd_funcionario',
entities: [funcionario],
synchronize: true, // em produção, mude para false
}),
funcionarioModule,
],
})
export class AppModule {} 