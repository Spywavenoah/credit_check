import { IsNotEmpty, Length } from 'class-validator';

export class SetupTwoFactorDto {
  @IsNotEmpty()
  userId: string;

  @IsNotEmpty()
  @Length(6, 6)
  code: string;
}
