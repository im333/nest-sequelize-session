import { IsString, IsDate, IsNumber } from 'class-validator';

export class userDto {
  @IsString()
  id: number;

  @IsString()
  wxId: string;

  @IsString()
  wxImg: string;

  @IsString()
  nickname: string;

  @IsString()
  allPosts: number;

  @IsString()
  allReplies: number;

  @IsString()
  money: number;

  // @IsDate()
  registrationTime: Date;

  @IsString()
  gender: string;

  @IsString()
  province: string;

  @IsString()
  city: string;
}
