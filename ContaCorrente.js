import { Cliente } from './Cliente.js'

export class ContaCorrente extends Cliente {
  static numeroDeConta = 0

  get saldo() {
    return this._saldo
  }

  constructor(nome, cpf, agencia, saldo) {
    super(nome, cpf)
    this._agencia = agencia
    this._saldo = saldo
    ContaCorrente.numeroDeConta += 1
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
