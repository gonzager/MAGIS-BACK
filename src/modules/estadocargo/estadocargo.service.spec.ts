import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { EstadoCargo } from './entities';
import { EstadocargoService } from './estadocargo.service';

describe('EstadocargoService', () => {
  let service: EstadocargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EstadocargoService,
        {
          provide: getRepositoryToken(EstadoCargo),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<EstadocargoService>(EstadocargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
