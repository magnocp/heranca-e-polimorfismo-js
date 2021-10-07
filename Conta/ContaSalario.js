import { Conta } from './Conta.js'

export class ContaSalario extends Conta {
  constructor(nome, cpf, agencia, saldoInicial) {
    super(nome, cpf, agencia, saldoInicial)
  }

  sacar(valor) {
    const taxa = 1.01
    return this._sacar(valor, taxa)
  }
}
