import { Controller, Get, Query } from '@nestjs/common';
import { ManipulateApiService } from './manipulate-api.service';

@Controller('manipulate-api')
export class ManipulateApiController {
  constructor(private readonly fetchService: ManipulateApiService) {}

  @Get()
  fetchData(
    @Query('name') name: string,
    @Query('results') results: number = 10,
    @Query('page') page: number = 1,
  ) {
    // return this.fetchService.fetchData(results, page);
    if (name) {
      return this.fetchService.searchByName(name, results, page);
    } else {
      return this.fetchService.fetchData(results, page);
    }
  }
}
