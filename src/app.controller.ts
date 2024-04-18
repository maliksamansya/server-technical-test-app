import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // endpoint ada authentikasi dengan LocalAuthGuard
  @UseGuards(LocalAuthGuard)
  @Get('/private')
  get(@Req() req): string {
    console.log(req.cookies);
    return this.appService.getHello();
  }

  @Get('/public')
  publicEndpoint(@Req() req): string {
    console.log(req.cookies);
    return this.appService.getHello();
  }
}
