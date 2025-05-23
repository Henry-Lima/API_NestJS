import { Test, TestingModule } from '@nestjs/testing';
import { funcionarioController } from './livro.controller';

describe('LivroController', () => {
  let controller: funcionarioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [funcionarioController],
    }).compile();

    controller = module.get<funcionarioController>(funcionarioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
