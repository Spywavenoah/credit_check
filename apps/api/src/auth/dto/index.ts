import { IsEmail, IsNotEmpty, Length, MinLength } from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

export class ForgotPasswordDto {
  @IsEmail()
  email: string;
}

export class ResetPasswordDto {
  @IsNotEmpty()
  token: string;

  @IsNotEmpty()
  @MinLength(12)
  password: string;
}

export class VerifyTwoFactorDto {
  @IsNotEmpty()
  @Length(6, 6)
  code: string;
}
