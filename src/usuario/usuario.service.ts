import { Injectable, NotFoundException } from '@nestjs/common';
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

  findOne(id: number) {
    return this.funcionarioRepository.findOneBy({id: id});
  }

  create(funcionario: funcionario): Promise<funcionario> {
    return this.funcionarioRepository.save(funcionario);
  }

  async remove(id: number): Promise<void> {
    await this.funcionarioRepository.delete(id);
  }

  async update(id: number, funcionario: funcionario): Promise<funcionario> {
    await this.funcionarioRepository.update(id, funcionario);
    const updatedFuncionario = await this.funcionarioRepository.findOne({ where: { id } });

    if (!updatedFuncionario) {
      throw new NotFoundException(`Funcionário com ID ${id} não encontrado`);
    }

    return updatedFuncionario;
  }
}
