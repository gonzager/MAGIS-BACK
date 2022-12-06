import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DepartamentojudicialController } from './departamentojudicial.controller';
import { DepartamentojudicialService } from './departamentojudicial.service';
import { DepartamentoJudicial } from './entities';

describe('DepartamentojudicialController', () => {
  let controller: DepartamentojudicialController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DepartamentojudicialController],
      providers: [
        DepartamentojudicialService,
        {
          provide: getRepositoryToken(DepartamentoJudicial),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<DepartamentojudicialController>(
      DepartamentojudicialController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
