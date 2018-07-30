import { Column, Entity, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Cart } from './Cart';

enum Packaging {
  STK = 'STK',
  PCK = 'PCK',
  G = 'G',
  L = 'L',
  ROL = 'ROL',
  BOT = 'BOT',
}

@Entity('Item', { schema: 'public' })
export class Item {

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

    @ManyToMany(type => Cart, cart => cart.id)
    carts: Cart[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({
      nullable: true
    })
    updatedAt: Date | null;
}