import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const gerente = new Gerente('Iuri', 5000, 123456789);
gerente.cadastrarSenha("123456");
const diretor = new Diretor('Nath', 8000, 321654987);
diretor.cadastrarSenha("123456");

const cliente = new Cliente('Lais', 3322655, 'tetris');


const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, 'tetris')


console.log(gerenteEstaLogado, diretorEstaLogado, clienteEstaLogado);