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
import { ConfigDto, UserDetailsDto } from '../dto/create-user.dto';

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
  config: ConfigDto;

  @Column('jsonb', { name: 'user_details' })
  userDetails: UserDetailsDto[];

  @Column({ name: 'role_id' })
  @Generated('uuid')
  roleId: string;

  @Column({ name: 'created_by' })
  @Generated('uuid')
  createdBy: string;

  @Column({ name: 'updated_by' })
  @Generated('uuid')
  updatedBy: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;

  @VersionColumn()
  version: number;
}
