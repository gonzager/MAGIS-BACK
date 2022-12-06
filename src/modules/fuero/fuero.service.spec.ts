import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Fuero } from './entities';
import { FueroService } from './fuero.service';

describe('FueroService', () => {
  let service: FueroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FueroService,
        {
          provide: getRepositoryToken(Fuero),
          useValue: {
            find: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<FueroService>(FueroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
