import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TipoCargo } from './entities';
import { TipocargoService } from './tipocargo.service';

describe('TipocargoService', () => {
  let service: TipocargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TipocargoService,
        {
          provide: getRepositoryToken(TipoCargo),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<TipocargoService>(TipocargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
