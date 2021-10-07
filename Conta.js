import { Cliente } from './Cliente.js'

export class Conta extends Cliente {
  get saldo() {
    return this._saldo
  }

  constructor(nome, cpf, agencia, saldoInicial) {
    super(nome, cpf)
    this._agencia = agencia
    this._saldo = saldoInicial
    if (this.constructor == Conta) {
      throw new Error('Você não deveria instanciar um objeto do tipo Conta')
    }
  }

  depositar(valor) {
    this._saldo += valor
  }

  sacar(valor) {
    throw new Error('O método Sacar da conta é abstrato')
  }

  _sacar(valor, taxa) {
    const valorSacado = taxa * valor
    if (this._saldo >= valorSacado) {
      this._saldo -= valorSacado
      return valorSacado
    }

    return 0
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado)
  }
}
