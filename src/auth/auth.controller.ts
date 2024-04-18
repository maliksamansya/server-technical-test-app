// auth/auth.controller.ts
// import { Controller, Post, Request, UseGuards } from '@nestjs/common';
// import { Controller, Post, Request } from '@nestjs/common';
// import { AuthService } from './auth.service';
// // import { LocalAuthGuard } from './guards/local-auth.guard';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   // @UseGuards(LocalAuthGuard)
//   @Post('login')
//   async login(@Request() req) {
//     console.log(req);
//     const { id, username } = req.body;
//     // return this.authService.createToken(req.user.id, req.user.username);
//     return this.authService.createToken(id, username);
//   }
// }

import { Controller, Get, Res } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
  constructor(private jwtService: JwtService) {}

  @Get('login')
  async login(@Res({ passthrough: true }) res) {
    const payload = { username: 'john', id: 1 };
    res.cookie('user_token', this.jwtService.sign(payload), {
      expires: new Date(Date.now() + 3600000),
    });
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  @Get('logout')
  async logout(@Res({ passthrough: true }) res) {
    res.cookie('user_token', '', { expires: new Date(Date.now()) });
    return {};
  }
}
