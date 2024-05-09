// import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthPayloadDto {
  // @IsString()
  // @IsNotEmpty()
  name: string;

  // @IsNotEmpty()
  password: string;
}
