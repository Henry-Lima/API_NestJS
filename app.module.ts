import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { funcionario } from 'src/usuario/usuario.entity';
import { funcionarioModule } from 'src/usuario/usuario.module';
import { RateLimitMiddleware } from './rate-limit.middleware';
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
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(RateLimitMiddleware)
        .forRoutes('funcionario');
    }
} 