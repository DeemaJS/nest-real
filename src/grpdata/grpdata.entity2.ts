import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('grpdata')
export class TagEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

}
