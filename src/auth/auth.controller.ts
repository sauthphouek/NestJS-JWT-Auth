import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthPayloadDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() authPayload: AuthPayloadDto) {
    return await this.authService.login(authPayload);
  }
}
