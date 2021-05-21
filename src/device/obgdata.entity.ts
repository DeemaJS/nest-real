import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';

@Entity('obgdata')
export class DeviceEntity {

  @PrimaryColumn()
  Number: number;

  @Column()
  NumTab: string;

  @Column()
  Addres: string;

  @Column()
  Name: string;

  @Column("decimal", { precision: 8, scale: 2 })
  Long: number;

  @Column("decimal", { precision: 8, scale: 2 })
  Lat: number;

  @Column()
  FlagDev: string;

  @Column()
  FlagBit: string;
}
