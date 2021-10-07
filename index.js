import { ContaCorrente } from './Conta/ContaCorrente.js'
import { ContaPoupanca } from './Conta/ContaPoupanca.js'
import { ContaSalario } from './Conta/ContaSalario.js'

const magnoCorrente = new ContaCorrente('Magno', '55555555555', '568-2', 100)
const magnoPo = new ContaPoupanca('Magno', '55555555555', '568-2', 50)
const magnoSa = new ContaSalario('Magno', '8788655656', '7896', 70)

console.log(magnoSa)
console.log(magnoCorrente)
console.log(magnoPo)
