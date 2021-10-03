export class ContaCorrente {
  agencia
  _saldo
  constructor(agencia, saldo) {
    this.agencia = agencia
    this._saldo = saldo
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
}
