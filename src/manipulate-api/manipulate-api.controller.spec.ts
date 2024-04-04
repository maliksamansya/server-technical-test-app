import { Test, TestingModule } from '@nestjs/testing';
import { ManipulateApiController } from './manipulate-api.controller';

describe('ManipulateApiController', () => {
  let controller: ManipulateApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManipulateApiController],
    }).compile();

    controller = module.get<ManipulateApiController>(ManipulateApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
