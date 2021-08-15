import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { IsNomeDeUsuarioUnico } from './is-nome-de-usuario.validator';

export class Usuario {
  id: number;

  @IsNomeDeUsuarioUnico({
    message: 'NomeDeUsuario precisa ser unico.',
  })
  @IsNotEmpty({
    message: 'nomeDeUsuario é obrigatório.',
  })
  @IsString({
    message: 'nomeDeUsuario precisa ser uma string.',
  })
  nomeDeUsuario: string;

  @IsEmail(
    {},
    {
      message: 'email precisa ser um endereço de email válido.',
    },
  )
  email: string;

  @IsNotEmpty({
    message: 'senha é obrigatório.',
  })
  senha: string;

  @IsNotEmpty({
    message: 'nomeCompleto é obrigátorio',
  })
  nomeCompleto: string;
  dataDeEntrega: Date;
}
