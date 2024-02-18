import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { SignInDto } from './dto/sign-in.dto/sign-in.dto';
import { SignUpDto } from './dto/sign-up.dto/sign-up.dto';
import { Response } from 'express';
import { AuthType } from './enums/auth-type.enum';
import { Auth } from './decorators/auth.decorator';
import { RefreshTokenDto } from './dto/refresh-token.dto/refresh-token.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('authentication')
@Auth(AuthType.None)
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('sign_up')
  @HttpCode(HttpStatus.OK)
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign_in')
  async signIn(@Body() signInDto: SignInDto) {
    return this.authService.signIn(signInDto);
    // response.cookie('accessToken', accessToken, {
    //   secure: true,
    //   httpOnly: true,
    //   sameSite: true,
    // });
  }
  @HttpCode(HttpStatus.OK) // changed since the default is 201
@Post('refresh-tokens')
refreshTokens(@Body() refreshTokenDto: RefreshTokenDto) {
  return this.authService.refreshTokens(refreshTokenDto);
}
}
