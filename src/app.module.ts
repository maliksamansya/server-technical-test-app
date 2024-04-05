import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CheckoutController } from './checkout/checkout.controller';
import { ManipulateApiController } from './manipulate-api/manipulate-api.controller';
import { ManipulateApiService } from './manipulate-api/manipulate-api.service';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { ManipulateArrayController } from './manipulate-array/manipulate-array.controller';
import { ManipulateArrayService } from './manipulate-array/manipulate-array.service';

@Module({
  imports: [HttpModule, AuthModule],
  controllers: [
    AppController,
    CheckoutController,
    ManipulateApiController,
    AuthController,
    ManipulateArrayController,
  ],
  providers: [AppService, ManipulateApiService, ManipulateArrayService],
})
export class AppModule {}
