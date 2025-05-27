import { Controller, Get, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { funcionarioService } from './livro.service';
import { funcionario } from './livro.schema';

@Controller('funcionario')
export class funcionarioController {
  constructor(private readonly funcionarioService: funcionarioService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.funcionarioService.findOne(id);
  }
      
  @Post()
  create(@Body() funcionario: funcionario) {
    return this.funcionarioService.create(funcionario);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.funcionarioService.remove(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() funcionario: funcionario) {
    return this.funcionarioService.update(id, funcionario);
  }
}
