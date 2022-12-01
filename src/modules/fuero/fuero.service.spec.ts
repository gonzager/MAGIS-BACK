import { Test, TestingModule } from '@nestjs/testing';
import { FueroService } from './fuero.service';

describe('FueroService', () => {
  let service: FueroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FueroService],
    }).compile();

    service = module.get<FueroService>(FueroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
