import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { OrganismoJurisdiccional } from './entities';
import { OrganismojurisdiccionalController } from './organismojurisdiccional.controller';
import { OrganismojurisdiccionalService } from './organismojurisdiccional.service';

describe('OrganismojurisdiccionalController', () => {
  let controller: OrganismojurisdiccionalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganismojurisdiccionalController],
      providers: [
        OrganismojurisdiccionalService,
        {
          provide: getRepositoryToken(OrganismoJurisdiccional),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<OrganismojurisdiccionalController>(
      OrganismojurisdiccionalController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
