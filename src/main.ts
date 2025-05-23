import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { RateLimitMiddleware } from './rate-limit.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Instancia o middleware manualmente
  const rateLimitMiddleware = new RateLimitMiddleware();

  // Aplica o middleware diretamente
  app.use(rateLimitMiddleware.use.bind(rateLimitMiddleware));

  // Inicia a aplicação na porta configurada ou 3000
  await app.listen(process.env.PORT ?? 3000);
}

bootstrap();
