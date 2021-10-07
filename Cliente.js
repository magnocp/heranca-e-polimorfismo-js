export class Cliente {
  get cpf() {
    return this._cpf
  }

  get nome() {
    return this._nome
  }

  set nome(nomeNovo) {
    if (nomeNovo !== '') {
      this._nome = nomeNovo
    }
  }

  constructor(nome, cpf) {
    this.nome = nome
    this._cpf = cpf
    if (this.constructor == Cliente) {
      throw new Error('Você não deveria instanciar um objeto do tipo Cliente')
    }
  }
}
