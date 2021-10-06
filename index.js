import { ContaCorrente } from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'

const magnoCorrente = new ContaCorrente('Magno', '55555555555', '568-2', 100)
const magnoPo = new ContaPoupanca('Magno', '55555555555', '568-2', 100)

console.log(magnoCorrente)
console.log(magnoPo)
