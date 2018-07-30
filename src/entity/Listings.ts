import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

enum Packaging {
  STK = 'STK',
  PCK = 'PCK',
  G = 'G',
  L = 'L',
  ROL = 'ROL',
  BOT = 'BOT',
}

@Entity('Listings', { schema: 'public' })
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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({
      nullable: true
    })
    updatedAt: Date | null;
}