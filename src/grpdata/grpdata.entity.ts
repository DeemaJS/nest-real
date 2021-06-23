import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { DeviceEntity } from '../device/obgdata.entity'

@Entity('grpdata')
export class CensorEntity {

  @PrimaryGeneratedColumn()
  id: number;

  // @ManyToOne(() => DeviceEntity, number => number.Number)
  // number: DeviceEntity;
 
  @Column()
  number: number

  @Column()
  Date: Date;

  @Column()
  Time: Date;

  @Column("decimal", { precision: 8, scale: 2 })
  AK: number;

}
