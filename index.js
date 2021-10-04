import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const magnoCorrente = new ContaCorrente('Magno', '55555555555', '568-2', 100)
const magnoPoupanca = new ContaPoupanca('João', '5555555', 500, '5198-6')

console.log(magnoCorrente)
console.log(magnoPoupanca)
