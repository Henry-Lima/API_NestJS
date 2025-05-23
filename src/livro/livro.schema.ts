import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type funcionarioDocument = funcionario & Document;

@Schema()
export class funcionario {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  cargo: string;

  @Prop({ required: true })
  salario: number;
}

export const funcionarioSchema = SchemaFactory.createForClass(funcionario); 