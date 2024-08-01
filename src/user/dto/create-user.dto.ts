import { Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsMobilePhone,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
  Max,
  MaxLength,
  Min,
  MinLength,
  ValidateNested,
} from 'class-validator';

class UserDetailsDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  bmi?: number;

  @IsOptional()
  @IsString()
  name?: string;
}
class ConfigDto {
  @IsOptional()
  @IsNumber()
  @IsPositive()
  bmi?: number;

  @IsOptional()
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
  email: boolean;

  @IsNotEmpty()
  @IsString()
  @IsMobilePhone('en-IN')
  @Min(13)
  @Max(13)
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
  @IsOptional()
  @ValidateNested()
  @Type(() => ConfigDto)
  @IsObject()
  config: ConfigDto | null;

  @IsNotEmpty()
  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => UserDetailsDto)
  userDetails: UserDetailsDto[] | null;

  @IsNotEmpty()
  @IsString()
  @IsUUID()
  roleId: string;
}
