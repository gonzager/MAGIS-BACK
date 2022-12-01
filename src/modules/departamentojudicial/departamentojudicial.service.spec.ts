import { Test, TestingModule } from '@nestjs/testing';
import { DepartamentojudicialService } from './departamentojudicial.service';

describe('DepartamentojudicialService', () => {
  let service: DepartamentojudicialService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DepartamentojudicialService],
    }).compile();

    service = module.get<DepartamentojudicialService>(
      DepartamentojudicialService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
