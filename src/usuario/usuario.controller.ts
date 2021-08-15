import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';

@Controller('users')
export class UsuarioController {
  // private usuarios = [];
  // private usuarioService = new UsuarioService();
  constructor(private usuarioService: UsuarioService) {}

  @Get(':nomeDeUsuario')
  public buscaPorNomeDeUsuario(@Param('nomeDeUsuario') nomeDeUsuario: string) {
    const usuarioEncontrado =
      this.usuarioService.buscaPorNomeDeUsuario(nomeDeUsuario);

    return usuarioEncontrado;
  }

  @Post()
  public cria(@Body() usuario: Usuario): Usuario {
    // this.usuarios.push(usuario);
    // throw new Error('Error no cadastro de usuário');
    const usuarioCriado = this.usuarioService.cria(usuario);

    return usuarioCriado;
  }
}
