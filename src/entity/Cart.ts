import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Item } from './Item';

@Entity('Cart', { schema: 'public' })
export class Cart {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
      type: 'varchar',
      nullable: false,
      length: 250,
    })
    name: string;

    @Column({
      type: 'int',
      nullable: false,
      default: 0
    })
    numOfItems: number;

    @ManyToMany(type => Item, item => item.id)
    @JoinTable()
    items: Item[]

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn({
      nullable: true
    })
    updatedAt: Date | null;
}