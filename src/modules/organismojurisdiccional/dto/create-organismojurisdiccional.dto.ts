import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateOrganismojurisdiccionalDto {
  @IsNotEmpty({ message: 'la propiedad descripcion debe existir' })
  @IsString({ message: 'La propiedad descripcion dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Descripción del Fuero Judicial',
    maxLength: 255,
    type: () => String,
  })
  descripcion: string;
}
