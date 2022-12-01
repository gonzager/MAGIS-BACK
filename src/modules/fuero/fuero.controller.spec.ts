import { Test, TestingModule } from '@nestjs/testing';
import { FueroController } from './fuero.controller';
import { FueroService } from './fuero.service';

describe('FueroController', () => {
  let controller: FueroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FueroController],
      providers: [FueroService],
    }).compile();

    controller = module.get<FueroController>(FueroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
