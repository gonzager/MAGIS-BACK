import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { PageOptionsDto } from '../../common/dto';
import { CargoService } from './cargo.service';
import { Cargo } from './entities';

describe('CargoService', () => {
  let service: CargoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CargoService,
        {
          provide: getRepositoryToken(Cargo),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<CargoService>(CargoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
