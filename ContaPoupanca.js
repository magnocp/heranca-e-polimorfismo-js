import { Cliente } from './Cliente.js'

export class ContaPoupanca extends Cliente {
  constructor(nome, cpf, saldoInicial, agencia) {
    super(nome, cpf)
    this._saldo = saldoInicial
    this._agencia = agencia
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor
      return valor
    }
  }

  sacar(valor) {
    if (this._saldo >= valor) {
      this._saldo -= valor
      return valor
    }
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor)
    conta.depositar(valorSacado)
  }
}
