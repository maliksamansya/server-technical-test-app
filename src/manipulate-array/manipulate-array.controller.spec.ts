import { Test, TestingModule } from '@nestjs/testing';
import { ManipulateArrayController } from './manipulate-array.controller';

describe('ManipulateArrayController', () => {
  let controller: ManipulateArrayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ManipulateArrayController],
    }).compile();

    controller = module.get<ManipulateArrayController>(
      ManipulateArrayController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
