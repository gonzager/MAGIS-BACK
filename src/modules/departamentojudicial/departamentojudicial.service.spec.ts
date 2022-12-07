import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { DepartamentojudicialService } from './departamentojudicial.service';
import { DepartamentoJudicial } from './entities';

describe('DepartamentojudicialService', () => {
  let service: DepartamentojudicialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DepartamentojudicialService,
        {
          provide: getRepositoryToken(DepartamentoJudicial),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<DepartamentojudicialService>(
      DepartamentojudicialService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
