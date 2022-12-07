import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Fuero } from './entities';
import { FueroController } from './fuero.controller';
import { FueroService } from './fuero.service';

describe('FueroController', () => {
  let controller: FueroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FueroController],
      providers: [
        FueroService,
        {
          provide: getRepositoryToken(Fuero),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<FueroController>(FueroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
