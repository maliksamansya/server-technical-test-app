import { Controller, Post, Body } from '@nestjs/common';
import { ManipulateArrayService } from './manipulate-array.service';

@Controller()
export class ManipulateArrayController {
  constructor(
    private readonly manipulateArrayService: ManipulateArrayService,
  ) {}

  @Post('manipulate-array')
  manipulateArray(
    @Body() body: { colors: string[]; clothes: string[]; promotions: string[] },
  ): string[] {
    let { colors, clothes, promotions } = body;
    if (!colors) {
      colors = ['merah', 'kuning', 'hijau', 'pink', 'ungu', 'maroon'];
      clothes = ['baju', 'celana', 'topi', 'jaket', 'sepatu'];
      promotions = ['Diskon', 'Sale', 'Diskon', 'Sale', 'Sale'];
    }
    return this.manipulateArrayService.manipulateArray(
      colors,
      clothes,
      promotions,
    );
  }
}
