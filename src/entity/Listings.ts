import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

enum Packaging {
  STK = 'STK',
  PCK = 'PCK',
  G = 'G',
  L = 'L',
  ROL = 'ROL',
  BOT = 'BOT',
}

@Entity('Listings', { schema: 'food' })
export class Listings {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      type: 'varchar',
      nullable: false,
      length: 250,
    })
    name: string;

    @Column({
      type: 'enum',
      enum: Packaging,
    })
    packaging: string | null;

    @Column({
      type: 'decimal',
      precision: 8,
      scale: 4,
      nullable: false,
    })
    inventory: number;

    @Column({
      nullable: false,
      type: 'datetime',
      default: 'CURRENT_TIMESTAMP',
    })
    createdAt: Date;

    @Column({
      type: 'datetime',
      onUpdate: 'CURRENT_TIMESTAMP',
      nullable: true,
    })
    updatedAt: Date | null;
}