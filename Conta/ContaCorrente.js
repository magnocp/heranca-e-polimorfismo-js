import { Conta } from './Conta.js'

export class ContaCorrente extends Conta {
  static numeroDeConta = 0

  constructor(nome, cpf, agencia, saldo) {
    super(nome, cpf, agencia)
    this._saldo = saldo
    ContaCorrente.numeroDeConta += 1
  }

  sacar(valor) {
    let taxa = 1.1
    return this._sacar(valor, taxa)
  }
}
