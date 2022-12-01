import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentojudicialController } from './departamentojudicial.controller';
import { DepartamentojudicialService } from './departamentojudicial.service';

describe('DepartamentojudicialController', () => {
  let controller: DepartamentojudicialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartamentojudicialController],
      providers: [DepartamentojudicialService],
    }).compile();

    controller = module.get<DepartamentojudicialController>(DepartamentojudicialController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined(true);
  });
});
