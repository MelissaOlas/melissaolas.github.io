import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  email!: string;

  @Column()
  password: string;

  @Column({ default: true })
  isAdmin: boolean; // Indique si c'est l'utilisatrice administratrice unique
}