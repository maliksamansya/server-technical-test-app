import { Test, TestingModule } from '@nestjs/testing';
import { ManipulateApiService } from './manipulate-api.service';

describe('ManipulateApiService', () => {
  let service: ManipulateApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManipulateApiService],
    }).compile();

    service = module.get<ManipulateApiService>(ManipulateApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
