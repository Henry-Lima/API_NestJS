import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { funcionario, funcionarioDocument } from './livro.schema';

@Injectable()
export class funcionarioService {
  constructor(
    @InjectModel(funcionario.name)
    private funcionarioModel: Model<funcionarioDocument>,
  ) {}

  async findAll(): Promise<funcionario[]> {
    return this.funcionarioModel.find().exec();
  }

  async create(funcionario: funcionario): Promise<funcionario> {
    const novofuncionario = new this.funcionarioModel(funcionario);
    return novofuncionario.save();
  }

  async remove(id: string): Promise<void> {
    const resultado = await this.funcionarioModel.deleteOne({ _id: id }).exec();
    if (resultado.deletedCount === 0) {
      throw new NotFoundException(`Funcionario com ID ${id} não encontrado`);
    }
  }

  async update(id: string, funcionario: funcionario): Promise<funcionario> {
    const funcionarioAtualizado = await this.funcionarioModel
      .findByIdAndUpdate(id, funcionario, { new: true })
      .exec();
    
    if (!funcionarioAtualizado) {
      throw new NotFoundException(`Funcionario com ID ${id} não encontrado`);
    }
    return funcionarioAtualizado;
  }
}