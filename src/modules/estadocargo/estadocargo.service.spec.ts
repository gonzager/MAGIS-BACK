import { Test, TestingModule } from '@nestjs/testing';
import { EstadocargoService } from './estadocargo.service';

describe('EstadocargoService', () => {
  let service: EstadocargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EstadocargoService],
    }).compile();

    service = module.get<EstadocargoService>(EstadocargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
