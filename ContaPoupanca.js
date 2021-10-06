import { Conta } from './Conta.js'

export class ContaPoupanca extends Conta {
  constructor(nome, cpf, saldoInicial, agencia) {
    super(nome, cpf, saldoInicial, agencia)
  }
}
