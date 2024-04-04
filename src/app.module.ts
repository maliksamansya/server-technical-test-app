import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutController } from './checkout/checkout.controller';
import { ManipulateApiController } from './manipulate-api/manipulate-api.controller';
import { ManipulateApiService } from './manipulate-api/manipulate-api.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, CheckoutController, ManipulateApiController],
  providers: [AppService, ManipulateApiService],
})
export class AppModule {}
