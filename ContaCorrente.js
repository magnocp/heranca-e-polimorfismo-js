import { Conta } from './Conta.js'

export class ContaCorrente extends Conta {
  static numeroDeConta = 0

  constructor(nome, cpf, agencia, saldo) {
    super(nome, cpf, agencia)
    this._saldo = saldo
    ContaCorrente.numeroDeConta += 1
  }
}
