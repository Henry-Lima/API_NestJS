import { Controller, Get } from '@nestjs/common';
import { funcionarioService } from './usuario.service';
@Controller('funcionario')
export class funcionarioController {
constructor(private readonly funcionarioService: funcionarioService) {}
@Get()
findAll() {
return this.funcionarioService.findAll();
}
}