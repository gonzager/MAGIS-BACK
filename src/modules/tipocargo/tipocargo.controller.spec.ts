import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { TipoCargo } from './entities';
import { TipocargoController } from './tipocargo.controller';
import { TipocargoService } from './tipocargo.service';

describe('TipocargoController', () => {
  let controller: TipocargoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipocargoController],
      providers: [
        TipocargoService,
        {
          provide: getRepositoryToken(TipoCargo),
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<TipocargoController>(TipocargoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
