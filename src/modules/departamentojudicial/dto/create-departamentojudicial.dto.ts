import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateDepartamentojudicialDto {
  @IsNotEmpty({ message: 'la propiedad descripción debe existir' })
  @IsString({ message: 'La propiedad descripción dede ser string' })
  @MaxLength(255)
  @ApiProperty({
    description: 'Descripción del Departamento Judicial',
    maxLength: 255,
    type: () => String,
  })
  descripcion: string;
}
