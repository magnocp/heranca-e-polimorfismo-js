import { Diretor } from './Funcionario/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

const diretor = new Diretor('Magno', 10000, 123456789)

diretor.cadastrarSenha('555555555555')
const estaLogado = SistemaAutenticacao.login(diretor, '555555555555')
console.log(estaLogado)
