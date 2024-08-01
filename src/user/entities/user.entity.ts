import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ unique: true })
  email: string;

  @Column({ name: 'mobile_number', unique: true })
  mobileNumber: string;

  @Column()
  age: number;

  @Column({ name: 'is_registered', default: false })
  isRegistered: boolean;

  @Column('jsonb')
  config: Record<string, any>;

  @Column('jsonb', { array: true, name: 'user_details' })
  userDetails: Record<string, any>;

  @Column()
  @Generated('uuid')
  roleId: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @VersionColumn()
  version: number;
}
