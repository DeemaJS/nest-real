import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('obgdata')
export class DeviceEntity {

  @PrimaryGeneratedColumn()
  Number: number;

  @Column()
  NumTab: string;

  @Column()
  Addres: Date;

  @Column()
  Name: string;

  @Column("decimal", { precision: 8, scale: 2 })
  Long: number;

  @Column("decimal", { precision: 8, scale: 2 })
  Lat: number;

}
