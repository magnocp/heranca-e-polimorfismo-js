import { Cliente } from './Cliente.js'

export class Conta extends Cliente {
  get saldo() {
    return this._saldo
  }

  constructor(nome, cpf, saldoInicial, agencia) {
    super(nome, cpf)
    this._saldo = saldoInicial
    this._agencia = agencia
  }

  depositar(valor) {
    this._saldo += valor
  }

  sacar(valor) {
    let taxa = 1
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
      return valorSacado
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado)
  }
}
