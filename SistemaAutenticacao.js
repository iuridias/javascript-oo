/*
  Ser autenticavel significa ter o método autenticar.
*/

export class SistemaAutenticacao {
  static login(autenticavel, senha) {
    if(SistemaAutenticacao.verificarAutenticavel(autenticavel)) {
      return autenticavel.autenticar(senha);   
    }
    return false;
  }

  static verificarAutenticavel(autenticavel) {
    return 'autenticar' in autenticavel &&
      autenticavel.autenticar instanceof Function;
  }
}