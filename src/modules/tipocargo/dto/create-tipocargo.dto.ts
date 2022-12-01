import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTipocargoDto {
  @IsNotEmpty({ message: 'la propiedad descripción debe existir' })
  @IsString({ message: 'La propiedad descripcin dede ser string' })
  @ApiProperty({
    description: 'Descripción del Tipo de Cargo Judicial',
    maxLength: 255,
    type: () => String,
  })
  descripcion: string;
}
