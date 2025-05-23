import { Test, TestingModule } from '@nestjs/testing';
import { funcionarioService } from './livro.service';

describe('funcionarioService', () => {
  let service: funcionarioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [funcionarioService],
    }).compile();

    service = module.get<funcionarioService>(funcionarioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
