import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity('funcionario')// nome da tabela no banco de dados
export class funcionario {
@PrimaryGeneratedColumn()
id: number;
@Column()
nome: string;
@Column()
cargo: string;
@Column()
salario: number;
}