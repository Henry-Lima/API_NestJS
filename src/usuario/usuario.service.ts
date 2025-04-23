import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { funcionario } from './usuario.entity';
@Injectable()
export class funcionarioService {
constructor(
@InjectRepository(funcionario)
private funcionarioRepository: Repository<funcionario>,
) {}
findAll(): Promise<funcionario[]> {
return this.funcionarioRepository.find();
}
}