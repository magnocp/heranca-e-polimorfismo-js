import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta {
  constructor(nome, cpf, agencia, saldoInicial) {
    super(nome, cpf, agencia, saldoInicial)
  }

  sacar(valor) {
    let taxa = 1.02
    return this._sacar(valor, taxa)
  }
}
