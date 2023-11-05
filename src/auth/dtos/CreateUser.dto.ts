import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(16)
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  @ApiProperty()
  firstName: string;

  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  @ApiProperty()
  lastName: string;

  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(32)
  @ApiProperty()
  password: string;
}
