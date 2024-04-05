import { Test, TestingModule } from '@nestjs/testing';
import { ManipulateArrayService } from './manipulate-array.service';

describe('ManipulateArrayService', () => {
  let service: ManipulateArrayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ManipulateArrayService],
    }).compile();

    service = module.get<ManipulateArrayService>(ManipulateArrayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
