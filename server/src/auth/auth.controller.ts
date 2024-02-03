import { Controller, Get, Post, Req, Res , UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
@Controller('auth')
export class AuthController {
  constructor(private readonly jwtService: JwtService) { }

  @Post('login')
  @UseGuards(LocalAuthGuard)
  async login(@Req() req) {
    const { id, email } = req.user;
    const token = this.jwtService.sign({ id, email });
    return {token};
  }

  @Get('getUserInfo')
  @UseGuards(JwtAuthGuard)
  getUserInfo(@Req() req, ) {
    return req.user;
  }
}
