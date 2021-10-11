import { Cliente } from './Cliente.js'
import { ContaCorrente } from './Conta/ContaCorrente.js'
import { ContaPoupanca } from './Conta/ContaPoupanca.js'
import { Diretor } from './Funcionario/Diretor.js'
import { Gerente } from './Funcionario/Gerente.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor('Magno1', 10000, 123456789)
const gerente = new Gerente('magno2', 5000, 1568748996)
const cliente = new Cliente('magno3', 7896452315, '456')
const clienteCC = new ContaCorrente(cliente, '5897-5')
const clienteCP = new ContaPoupanca(200, cliente, '5784-9')

diretor.cadastrarSenha('555555555555')
const estaLogadoDire = SistemaAutenticacao.login(diretor, '555555555555')
console.log(estaLogadoDire)

gerente.cadastrarSenha('565236')
const estaLogadoGere = SistemaAutenticacao.login(gerente, '565236')
console.log(estaLogadoGere)

const clienteEstaLogado = SistemaAutenticacao.login(cliente, '456')
console.log(clienteEstaLogado)

clienteCC.depositar(100)

console.log(diretor)
console.log(gerente)
console.log(clienteCC)
console.log(clienteCP)
