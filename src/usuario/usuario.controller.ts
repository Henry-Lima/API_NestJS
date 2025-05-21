import { Controller, Get, Post, Body, Delete, Param, Put, ParseIntPipe, Patch } from '@nestjs/common';
import { funcionarioService } from './usuario.service';
import { funcionario } from '../usuario/usuario.entity';

@Controller('funcionario')
export class funcionarioController {
  constructor(private readonly funcionarioService: funcionarioService) {}

  @Get()
  findAll() {
    return this.funcionarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioService.findOne(id);
  }

  @Post()
  create(@Body() funcionario: funcionario) {
    return this.funcionarioService.create(funcionario);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.funcionarioService.remove(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() funcionario: funcionario) {
    return this.funcionarioService.update(id, funcionario);
  }
}
