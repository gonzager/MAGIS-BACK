import { Test, TestingModule } from '@nestjs/testing';
import { EstadocargoController } from './estadocargo.controller';
import { EstadocargoService } from './estadocargo.service';

describe('EstadocargoController', () => {
  let controller: EstadocargoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EstadocargoController],
      providers: [EstadocargoService],
    }).compile();

    controller = module.get<EstadocargoController>(EstadocargoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
