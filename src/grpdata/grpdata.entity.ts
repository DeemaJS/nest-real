import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('grpdata')
export class CensorEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: string;

  @Column()
  Date: Date;

}
