import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrganismoJurisdiccional } from './entities';
import { OrganismojurisdiccionalService } from './organismojurisdiccional.service';

describe('OrganismojurisdiccionalService', () => {
  let service: OrganismojurisdiccionalService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OrganismojurisdiccionalService,
        {
          provide: getRepositoryToken(OrganismoJurisdiccional),
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<OrganismojurisdiccionalService>(
      OrganismojurisdiccionalService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
