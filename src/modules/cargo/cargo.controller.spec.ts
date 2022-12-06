import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CargoController } from './cargo.controller';
import { CargoService } from './cargo.service';
import { Cargo } from './entities';

describe('CargoController', () => {
  let controller: CargoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CargoController],
      providers: [
        CargoService,
        {
          provide: getRepositoryToken(Cargo),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<CargoController>(CargoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
