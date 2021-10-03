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
  }
}
