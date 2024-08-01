import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsPositive,
  IsString,
  IsUUID,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class UserDetailsDto {
  @IsNumber()
  @IsPositive()
  bmi?: number;

  @IsString()
  name?: string;
}
export class ConfigDto {
  @IsNumber()
  @IsPositive()
  bmi?: number;

  @IsString()
  name?: string;
}

export class CreateUserDto {
  @IsNotEmpty()
  @IsUUID()
  id: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(15)
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(50)
  lastName: string;

  @IsNotEmpty()
  @IsBoolean()
  isActive: boolean;

  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsMobilePhone('en-IN')
  mobileNumber: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(12)
  age: number;

  @IsNotEmpty()
  @IsBoolean()
  isRegistered: boolean;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => ConfigDto)
  @IsObject()
  config: ConfigDto | null;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserDetailsDto)
  userDetails: UserDetailsDto[] | null;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  roleId: string;
}
